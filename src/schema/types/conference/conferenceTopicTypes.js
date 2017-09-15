export default `
type ConferenceTopic {
  # The ID of Conference Topic
  id: ID!

  # conference ID
  conference: Conference!

  # topic ID
  topic: Topic!
}

extend type Query {
  # Get information about all ConferenceTopic
  getAllConferenceTopics: [ConferenceTopic!]!

  # Get ConferenceTopic by ID
  getConferenceTopicByID(id: ID!): ConferenceTopic!

}

extend type Mutation {
  # Insert new ConferenceTopic
  insertConferenceTopic( conference_id: ID!, topic_id: ID!): ConferenceTopic!

  # Update ConferenceTopic info by id
  updateConferenceTopic(id:ID!, topic_id: ID): ConferenceTopic!

  # Delete ConferenceTopic by id
  deleteConferenceTopic(id: ID!): ConferenceTopic!
}
`;