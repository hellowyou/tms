import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} from 'graphql';

const TenantPayloadType = new GraphQLObjectType({
  name: 'TenantPayload',
  description: "Tenant's output shape.",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Tenant's ID."
    },
    firstName: {
      type: GraphQLString,
      description: "Tenant's First Name."
    },
    lastName: {
      type: GraphQLString,
      description: "Tenant's Last Name."
    },
    createdAt: {
      type: GraphQLString,
      description: "Created date."
    },
    updatedAt: {
      type: GraphQLString,
      description: "Updated date."
    },
  }),
});

const TenantInputType = new GraphQLInputObjectType({
  name: 'TenantInput',
  description: "Tenant's input shape.",
  fields: () => ({
    firstName: {
      type: GraphQLString,
      description: "Tenant's First Name."
    },
    lastName: {
      type: GraphQLString,
      description: "Tenant's Last Name."
    },
  }),
});

export {
  TenantPayloadType,
  TenantInputType
}
