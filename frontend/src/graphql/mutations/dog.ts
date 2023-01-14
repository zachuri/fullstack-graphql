import { gql } from "@apollo/client";

const DELETE_DOG = gql`
  mutation RemoveDog($removeDogId: Int!) {
  removeDog(id: $removeDogId) {
    id
    name
  }
}
`;

export { DELETE_DOG };
