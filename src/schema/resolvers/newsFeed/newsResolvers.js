export default {
  News: {
    user: async ({ user_id }, data, { models: { User }, ValidationError }) => {
      try {
        const user = await User.query().findById(user_id);
        return user;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'user');
      }
    },

    conference: async (
      { conference_id },
      data,
      { models: { Conference }, ValidationError },
    ) => {
      try {
        const conference = await Conference.query().findById(conference_id);
        return conference;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'conference');
      }
    },

    newsPhotos: async (
      { id },
      data,
      { models: { NewsPhoto }, ValidationError },
    ) => {
      try {
        const newsPhotos = await NewsPhoto.query().where('news_id', id);
        return newsPhotos;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'newsPhotos');
      }
    },
    newsLikes: async (
      { id },
      data,
      { models: { NewsLike }, ValidationError },
    ) => {
      try {
        const newsPhotos = await NewsLike.query().where('news_id', id);
        return newsPhotos;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'newsLikes');
      }
    },
    newsComments: async (
      { id },
      data,
      { models: { NewsComment }, ValidationError },
    ) => {
      try {
        const newsComments = await NewsComment.query().where('news_id', id);
        return newsComments;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'newsComments');
      }
    },
    commentsCount: async (
      { id },
      data,
      { models: { NewsComment }, ValidationError },
    ) => {
      try {
        const newsComments = await NewsComment.query().where('news_id', id);
        return newsComments.length || 0;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'newsComments');
      }
    },
    likesCount: async (
      { id },
      data,
      { models: { NewsLike }, ValidationError },
    ) => {
      try {
        const NewsLikes = await NewsLike.query().where('news_id', id);
        return NewsLikes.length || 0;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'NewsLikes');
      }
    },
    isLiked: async (
      { id },
      data,
      { models: { NewsLike }, ValidationError, user },
    ) => {
      try {
        const NewsLikes = await NewsLike.query()
          .where('news_id', id)
          .andWhere('user_id', user.id);
        return NewsLikes.length > 0;
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        throw new ValidationError('bad-request', 'isLiked');
      }
    },
  },
  Query: {
    getAllNews: async (
      root,
      { pageNumber, pageSize },
      { models: { News }, ValidationError, user },
    ) => {
      if (!user) {
        throw new ValidationError('unauthorized');
      }
      try {
        const news = await News.query()
          .where('conference_id', user.current_conference_id)
          .page(pageNumber || 0, pageSize || 10)
          .orderBy('created_at', 'DESC');
        return news.results;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
    getNewsByID: async (
      root,
      { id },
      { models: { News }, ValidationError, user },
    ) => {
      if (!user) {
        throw new ValidationError('unauthorized');
      }
      try {
        const news = await News.query()
          .where('conference_id', user.current_conference_id)
          .findById(id);
        if (!news) {
          throw new ValidationError('news-not-found');
        }
        return news;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
    getNewsByUserID: async (
      root,
      { user_id },
      { models: { News }, ValidationError, user },
    ) => {
      if (!user) {
        throw new ValidationError('unauthorized');
      }
      try {
        const news = await News.query()
          .where('conference_id', user.current_conference_id)
          .where('user_id', user_id)
          .orderBy('created_at', 'DESC');
        if (!news) {
          throw new ValidationError('news-not-found');
        }
        return news;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
  },
  Mutation: {
    insertNews: async (
      root,
      data,
      { models: { News }, ValidationError, user },
    ) => {
      if (!user) {
        throw new ValidationError('unauthorized');
      }
      try {
        const news = await News.query().insert({
          ...data,
          user_id: user.id,
          conference_id: user.current_conference_id,
        });
        return news;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
    updateNews: async (
      root,
      data,
      { models: { News }, ValidationError, user },
    ) => {
      if (!user) {
        throw new ValidationError('unauthorized');
      }
      try {
        const updateNews = await News.query()
          .where('user_id', user.id)
          .andWhere('conference_id', user.current_conference_id)
          .updateAndFetchById(data.id, data);
        return updateNews;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
    deleteNews: async (
      root,
      { id },
      { models: { News }, ValidationError, user },
    ) => {
      if (!user) {
        throw new ValidationError('unauthorized');
      }
      try {
        const news = await News.query()
          .where('user_id', user.id)
          .andWhere('conference_id', user.current_conference_id)
          .findById(id);

        if (!news) throw new ValidationError('news-not-found');

        // delete all NewsComment of news with id
        // delete all NewsLike of news with id
        // delete all NewsPhoto of news with id
        await news.deleteAllRelationship();

        await News.query().deleteById(id);
        return news;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        throw new ValidationError('bad-request');
      }
    },
  },
};
