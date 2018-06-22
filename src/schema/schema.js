import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import TenantSchema from './tenant';

export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQuery',
		fields: {
			...TenantSchema.query
		},
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: {
			...TenantSchema.mutation
		},
	})
})
