import { gql } from '@apollo/client'

const GET_PROFILE = gql`
  query Query($id: String!) {
    user(_id: $id) {
      _id
      name
      email
      pets {
        name
        type
        breed
        location
        _id
        description
        image
        link
        petAdoptee
      }
    }
  }
`

const LOGIN_USER = gql`
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

const ADD_USER = gql`
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

const ADD_PET = gql`
  mutation AddPet($name: String!, $type: String!, $breed: String!, $location: String!, $description: String!, $image: String!, $link: String!, $petAdoptee: ID!) {
    addPet(name: $name, type: $type, breed: $breed, location: $location, description: $description, image: $image, link: $link, petAdoptee: $petAdoptee) {
      _id
      name
      image
      type
      breed
      location
      description
      link
      petAdoptee
    }
  }
`;

export { LOGIN_USER, ADD_USER, ADD_PET, GET_PROFILE }