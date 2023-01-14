import { type AppType } from "next/dist/shared/lib/utils";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "../styles/globals.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          dogs: {
            merge(existing, incoming) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return incoming;
            },
          },
        },
      },
    },
  }),
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
};

export default MyApp;
