export default `
type Activity {

  # ID of activity
  id: ID!

  # conferen have this activity
  conference: Conference!

  # all topics of activity
  activityTopics: [ActivityTopic!]!

  # all feedback of activity
  activityFeedback: [ActivityFeedback!]!

  # all schedules of activity
  schedules: [Schedule!]!

  # all question of activity
  questions: [Question!]!

  # title of this activity
  title: String!

  # description of this activity
  description: String!

  # status of this activity
  # status 'on' or 'off'
  status: Status!



}




extend type Query {
  # get all activities
  getAllActivities: [Activity!]!

  # get activity by id
  getActivityByID(id: ID!): Activity!

  # get all activities of one conference by conference_id
  getActivitiesByConferenceID: [Activity!]!
}

extend type Mutation {
  # insert activity with conference_id, activity_type_id, title and status
  insertActivity(title: String!, description: String!, status:Status): Activity!

  # update activity with id, activity_type_id, title and status
  updateActivity(id: ID!, title: String, description: String, status:Status, ): Activity!

  # delete activity with id
  deleteActivity(id: ID!): Activity!
}
`;
