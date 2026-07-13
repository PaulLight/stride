'use client'

import { ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";
import { HttpLink } from "@apollo/client";

export function makeClient() {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_API_BASE_URL,
        }),
    });
}
