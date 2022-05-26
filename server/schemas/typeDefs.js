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
    petAdoptee: String
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    pets: [Pet]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(_id: String!): User
    users: [User]
    pets(name: String): [Pet]
    pet(petId: ID!): Pet
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(name: String!, 
           type: String!
           breed: String!
           location: String!
           description: String!
           image: String!
           link: String!
           petAdoptee: ID!
    ): Pet
  }
`

module.exports = typeDefs;
// addPetToUser(user: ID!, pet: ID!): User

