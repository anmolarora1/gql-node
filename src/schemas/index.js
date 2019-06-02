import { buildSchema } from 'graphql';
export default buildSchema(`
scalar DateTime,

interface Node {
  id: ID!
}

type Query {
  link(id: Int!): Link
  links: [Link],
  users: [User]
}
type Mutation {
  addLink(description: String!, url: String!, postedBy: ID!): Link
}

type LinkEdge {
  # The item at the end of the edge.
  node: Link
}

type LinkConnection {

  # A list of edges.
  edges: [LinkEdge]

  # Count of filtered result set without consNering pagination arguments
  count: Int!
}

type Link {
  createdAt: DateTime!
  description: String!
  id: Int!
  updatedAt: DateTime!
  url: String!
  postedBy: User
}

type User {
  createdAt: DateTime!
  id: String!
  links: LinkConnection
  name: String!
  updatedAt: DateTime!
}

`);
