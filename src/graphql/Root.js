import {GraphQLSchema} from 'graphql';
import {object} from './types/globals';

import resolvers from './resolvers';
import mutations from './mutations';

export default new GraphQLSchema({
    query: object({
        name: "RootQueryType",
        fields: resolvers
    }),
    mutation: object({
        name: "RootMutationType",
        fields: mutations
    })
});