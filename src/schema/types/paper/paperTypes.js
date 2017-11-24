export default `
type Paper {
  # The ID of Paper
  id: ID!

  # User ID
  user: User!

  # conference
  conference: Conference!

  # paper topic
  papersTopics: [PaperTopic!]!

  # paper author
  papersAuthors: [PaperAuthor!]!

  # title
  title: String!

  # abstract
  abstract: String!

  # file
  file: String!

  # keywords
  keywords: String!


  # Document created_at timestamp
  created_at: Date!

  # Document updated_at timestamp
  updated_at: Date!

}

extend type Query {
  # Get information about all Papers
  getAllPapers: [Paper!]!

  # Get Paper by ID
  getPaperByID( id: ID!): Paper!

  # Get Paper by conference ID
  getPapersByConferenceID( conference_id: ID): [Paper!]!

  # Get Paper by user ID
  getPapersByUserID: [Paper!]!
}

extend type Mutation {
  # Insert new Paper
  insertPaper( title: String!, abstract: String! , keywords: String, file: String): Paper!

  # Update Paper info by id
  updatePaper( id:ID!, title: String, abstract: String ): Paper!

  # Delete Paper by id
  deletePaper( id: ID! ): Paper!
}
`;