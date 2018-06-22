import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export const TenantType = new GraphQLObjectType({
  name: 'Tenant',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
});
