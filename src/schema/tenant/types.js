import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} from 'graphql';

const TenantType = new GraphQLObjectType({
  name: 'Tenant',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const TenantInputType = new GraphQLInputObjectType({
  name: 'TenantInput',
  description: 'Input tenant payload',
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
  }),
});

export {
  TenantType,
  TenantInputType
}
