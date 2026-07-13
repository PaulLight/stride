/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type StoreConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type StoreConfigQuery = { __typename: 'Query', storeConfig: { __typename: 'StoreConfig', store_name: string | null } | null };


export const StoreConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StoreConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storeConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"store_name"}}]}}]}}]} as unknown as DocumentNode<StoreConfigQuery, StoreConfigQueryVariables>;