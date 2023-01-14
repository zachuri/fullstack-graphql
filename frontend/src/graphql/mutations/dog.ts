import { gql } from "@apollo/client";

const ADD_DOG = gql`
  mutation CreateDog($createDogInput: CreateDogInput!) {
    createDog(createDogInput: $createDogInput) {
      name
    }
  }
`;

const DELETE_DOG = gql`
  mutation RemoveDog($removeDogId: Int!) {
    removeDog(id: $removeDogId) {
      id
      name
    }
  }
`;

export { DELETE_DOG, ADD_DOG };
