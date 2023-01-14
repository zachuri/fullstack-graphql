/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DOGS } from "../graphql/queries/dogs";
import Dog from "../components/dog";

const Dogs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {!loading && !error && (
        <div className="text-white">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Dog Names
          </h1>

          <div className="flex flex-col items-center justify-center">
            {data.dogs.map((dog: { id: number; name: string }) => (
              <Dog key={dog.id} dog={dog} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Dogs;
