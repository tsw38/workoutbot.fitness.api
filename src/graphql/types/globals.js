const {
	GraphQLID,
    GraphQLInt,
	GraphQLList,
	GraphQLFloat,
	GraphQLString,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLInputObjectType
} = require('graphql');

const GraphQLBigInt = require('graphql-bigint');

module.exports = {
    id: {type: GraphQLID },
    integer: {type: GraphQLInt },
    biginteger: {type: GraphQLBigInt },
    float: {type: GraphQLFloat},
    string: {type: GraphQLString },
    boolean: {type: GraphQLBoolean},
    list: (type) => new GraphQLList(type),
    stringArray: new GraphQLList(GraphQLString),
    object: (obj) => new GraphQLObjectType(obj),
    input: (obj) => new GraphQLInputObjectType(obj),
    notNull: (obj) => new GraphQLNonNull(obj)
}