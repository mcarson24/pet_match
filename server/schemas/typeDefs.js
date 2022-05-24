const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    pets: [Pet]!
  }
  type Pet {
      _id: ID
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    pets(username: String): [Pet]
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
   
   
  }
  

  type Query {
    users: [User]
  }
`

module.exports = typeDefs
