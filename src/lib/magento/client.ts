import { ApolloClient, InMemoryCache, registerApolloClient } from "@apollo/client-integration-nextjs";
import { HttpLink } from "@apollo/client";

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.API_BASE_URL,
        }),
        defaultOptions: {
            query: {
                fetchPolicy:
                    process.env.NODE_ENV === "development" ? "no-cache" : "cache-first",
            },
        },
    });
});
