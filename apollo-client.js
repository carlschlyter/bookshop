// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "http://countries.trevorblades.com",
    uri: "http://localhost/bookshop/graphql",
    cache: new InMemoryCache({
        possibleTypes: {
            wednesday: ["Page_Otherpage_Content_HeaderSection", "Page_Otherpage_Content_InfoSection", "Page_Homepage_Content_HeroSection"],
        },
      }),
});

export default client;