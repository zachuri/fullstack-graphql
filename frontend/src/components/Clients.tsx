import { gql, useQuery } from "@apollo/client";

const GET_DOGS = gql`
  query Dogs {
    dogs {
      id
      name
    }
  }
`;

export default function Clients() {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <>
        {!loading && !error && (
          <>
            {data.dogs.map((dog: { id: number; name: string }) => (
              <div key={dog.id}>{dog.name}</div>
            ))}
          </>
        )}
      </>
    </>
  );
}
