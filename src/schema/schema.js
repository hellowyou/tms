import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import TenantSchema from './tenant';
import EpisodeSchema from './episode';

export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQuery',
		fields: {
			...TenantSchema.query,
      ...EpisodeSchema.query,
		},
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: {
			...TenantSchema.mutation,
      ...EpisodeSchema.mutation,
		},
	})
})
