import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($name: String!) {
    user(username: $name) {
      _id
      name
      email
      pets {
        _id
      }
    }
  }
`;

export const QUERY_PETS = gql`
  query getPets {
    pets {
      _id
    }
  }
`;

export const QUERY_SINGLE_PET = gql`
  query getSinglePet($petId: ID!) {
    pet(petId: $petId) {
      _id
     
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      pets {
        _id
      
      }
    }
  }
`;
