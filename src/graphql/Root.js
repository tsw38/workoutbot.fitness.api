const {GraphQLSchema} = require('graphql');
const {object} = require('./types/globals');

const resolvers = require('./resolvers');
const mutations = require('./mutations');

exports.default = new GraphQLSchema({
    query: object({
        name: "RootQueryType",
        fields: resolvers
    }),
    mutation: object({
        name: "RootMutationType",
        fields: mutations
    })
});