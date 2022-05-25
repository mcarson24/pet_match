import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet(name: String!, 
    type: String!
    breed: String!
    location: String!
    description: String!
    image: String!
    link: String!) {
    addPet(petId: $petId) {
      _id
    name
    type
    breed
    location
    description
    image
    link
    }
  }
`;


