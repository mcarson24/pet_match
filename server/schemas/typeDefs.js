const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    password: String
    pets: [Pet]
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
    user(name: String!): User
    pets(_id: String): [Pet]
    me: User
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(petId: String!): Pet
   
   
  }
  `

module.exports = typeDefs;
