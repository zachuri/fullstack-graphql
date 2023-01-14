/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { TrashIcon } from "../components/icons";
import { GET_DOGS } from "../graphql/queries/dogs";
import { DELETE_DOG } from "../graphql/mutations/dog";

interface Props {
  dog: {
    id: number;
    name: string;
  };
}

const Dog: React.FC<Props> = ({ dog }) => {
  // query to remove
  const [removeDog] = useMutation(DELETE_DOG);

  return (
    <>
      <div className="flex flex-row text-xl" key={dog.id}>
        {dog.name}

        {/* Button to remove dog */}
        <button
          onClick={() =>
            removeDog({
              variables: { removeDogId: dog.id },
              refetchQueries: [{ query: GET_DOGS }],
            })
          }
        >
          <TrashIcon />
        </button>
      </div>
    </>
  );
};

export default Dog;
