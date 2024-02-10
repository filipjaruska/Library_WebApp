'use client';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SessionProvider } from "next-auth/react";

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_API_URL + '/graphql',
    cache: new InMemoryCache()
});

export const Provider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ApolloProvider client={client}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ApolloProvider>
    )
}