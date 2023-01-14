import { gql } from "@apollo/client";

const GET_DOGS = gql`
  query Dogs {
    dogs {
      id
      name
    }
  }
`;

export { GET_DOGS };
