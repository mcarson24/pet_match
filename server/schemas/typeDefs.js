const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Pet {
    _id: ID
    name: String
    type: String
    breed: String
    location: String
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    pets: [Pet]
  }

  type Query {
    user(_id: String!): User
    users: [User]
    pets(_id: String): [Pet]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    addPet(name: String!, 
           type: String!
           breed: String!
           location: String!
           description: String!
           image: String!
           link: String!
    ): Pet
    addPetToUser(user: ID!, pet: ID!): User
  }
`

module.exports = typeDefs
