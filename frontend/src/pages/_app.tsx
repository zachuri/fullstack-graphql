import { type AppType } from "next/dist/shared/lib/utils";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "../styles/globals.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
};

export default MyApp;
