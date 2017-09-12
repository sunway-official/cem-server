export default {
  Conference: {
    organizerDetail: async (
      { organizer_id },
      data,
      { models: { OrganizerDetail } },
    ) => {
      const organizerDetail = await OrganizerDetail.query().findById(
        organizer_id,
      );
      return organizerDetail;
    },
    address: async ({ address_id }, data, { models: { Address } }) => {
      const address = await Address.query().findById(address_id);
      return address;
    },
    conferenceTopics: async ({ id }, data, { models: { ConferenceTopic } }) => {
      const conferenceTopic = await ConferenceTopic.query().where(
        'conference_id',
        id,
      );
      return conferenceTopic;
    },
    conferenceAttendees: async (
      { id },
      data,
      { models: { ConferenceAttendee } },
    ) => {
      const conferenceTopic = await ConferenceAttendee.query().where(
        'conference_id',
        id,
      );
      return conferenceTopic;
    },
  },
  Query: {
    getAllConferences: async (
      root,
      data,
      { models: { Conference }, ValidationError },
    ) => {
      try {
        const conference = await Conference.query();
        return conference;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
    getConferenceByID: async (
      root,
      { id },
      { models: { Conference }, ValidationError },
    ) => {
      try {
        const conference = await Conference.query().findById(id);
        if (!conference) {
          throw new ValidationError('conference-not-found');
        }
        return conference;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        if (e.message === 'conference-not-found') {
          throw new ValidationError('conference-not-found');
        }
        throw new ValidationError('bad-request');
      }
    },
    getConferenceByOrganizerDetailID: async (
      root,
      { organizer_id },
      { models: { Conference }, ValidationError },
    ) => {
      try {
        const conference = await Conference.query().wher(
          'organizer_id',
          organizer_id,
        );
        if (!conference) {
          throw new ValidationError('conference-not-found');
        }
        return conference;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        if (e.message === 'conference-not-found') {
          throw new ValidationError('conference-not-found');
        }
        throw new ValidationError('bad-request');
      }
    },
    getConferenceByAddressID: async (
      root,
      { address_id },
      { models: { Conference }, ValidationError },
    ) => {
      try {
        const conference = await Conference.query().where(
          'address_id',
          address_id,
        );
        if (!conference) {
          throw new ValidationError('conference-not-found');
        }
        return conference;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        if (e.message === 'conference-not-found') {
          throw new ValidationError('conference-not-found');
        }
        throw new ValidationError('bad-request');
      }
    },
  },
  Mutation: {
    insertConference: async (
      root,
      data,
      { models: { Conference }, ValidationError },
    ) => {
      try {
        const conference = await Conference.query().insert(data);
        return conference;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
    updateConference: async (
      root,
      data,
      { models: { Conference }, ValidationError },
    ) => {
      try {
        const updateConference = await Conference.query().updateAndFetchById(
          data.id,
          data,
        );
        return updateConference;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
    deleteConference: async (
      root,
      { id },
      {
        models: { Conference, ConferenceTopic, ConferenceAttendee },
        ValidationError,
      },
    ) => {
      try {
        // delete ConferenceTopic with conference_id_id
        await ConferenceTopic.query()
          .delete()
          .where('conference_id', id);
        // delete ConferenceAttendee with conference_id
        await ConferenceAttendee.query()
          .delete()
          .where('conference_id', id);
        const conference = await Conference.query().findById(id);
        await Conference.query().deleteById(id);
        return conference;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
  },
};
