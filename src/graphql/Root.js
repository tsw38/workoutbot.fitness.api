const {GraphQLSchema} = require('graphql');
const {object} = require('./types/globals');

const resolvers = require('./resolvers');

exports.default = new GraphQLSchema({
    query: object({
        name: "RootQueryType",
        fields: resolvers
    })
});