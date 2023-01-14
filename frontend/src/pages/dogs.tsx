/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_DOGS } from "../graphql/queries/dogs";
import Dog from "../components/dog";
import { useForm } from "react-hook-form";
import { ADD_DOG } from "../graphql/mutations/dog";

const Form = () => {
  const [createDog] = useMutation(ADD_DOG);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { register, handleSubmit, reset } = useForm();

  const addDog = (data: any) => {
    createDog({
      variables: {
        createDogInput: { name: data.name as string, ownerId: null },
      },
      refetchQueries: [{ query: GET_DOGS }],
    });

    reset();
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(addDog)} className="my-5 flex flex-col border">
      <label className="my-5 text-xl">Dog Name</label>
      <input
        className="mx-10 text-black"
        type="text"
        placeholder="Max"
        {...register("name", { required: true })}
      />
      <button className="m-5 rounded border border-white">Submit</button>
    </form>
  );
};

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

          <Form />

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
