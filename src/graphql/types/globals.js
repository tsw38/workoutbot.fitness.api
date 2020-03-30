import {
	GraphQLID,
    GraphQLInt,
	GraphQLList,
	GraphQLFloat,
	GraphQLString,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLInputObjectType
} from 'graphql';

import GraphQLBigInt from 'graphql-bigint';

export const id          = { type: GraphQLID };
export const integer     = { type: GraphQLInt };
export const biginteger  = { type: GraphQLBigInt };
export const float       = { type: GraphQLFloat };
export const string      = { type: GraphQLString };
export const boolean     = { type: GraphQLBoolean };
export const stringArray = new GraphQLList(GraphQLString);
export const list        = type => new GraphQLList(type);
export const notNull     = obj => new GraphQLNonNull(obj);
export const object      = obj => new GraphQLObjectType(obj);
export const input       = obj => new GraphQLInputObjectType(obj);