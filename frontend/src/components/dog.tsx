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
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() =>
            removeDog({
              variables: { removeDogId: dog.id },
              // refetchQueries: [{ query: GET_DOGS }],
              update(cache, { data: { removeDog } }) {
                const { dogs } = cache.readQuery({ query: GET_DOGS });
                cache.writeQuery({
                  query: GET_DOGS,
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                  data: { dogs: dogs.filter((dog: { id: number; }) => dog.id !== removeDog.id) },
                });
              },
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
