import { Config as ApolloConfig } from 'apollo-server-express'

export type OmittedApolloConfig = Omit<ApolloConfig, 'typeDefs' | 'resolvers'>

export interface GetMiddlewareOptions {
  path?: string;
  [key: string]: any;
} 
