import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { TenantPayloadType } from '../tenant/types';

const EpisodePayloadType = new GraphQLObjectType({
  name: 'EpisodePayload',
  description: "Episode's output shape.",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "Episode's ID."
    },
    startDate: {
      type: GraphQLString,
      description: "Episode's Start Date."
    },
    endDate: {
      type: GraphQLString,
      description: "Episode's End Date."
    },
    startReading: {
      type: GraphQLInt,
      description: "Episode's First Reading."
    },
    endReading: {
      type: GraphQLInt,
      description: "Episode's Last Reading."
    },
    tenants: {
      type: new GraphQLList( TenantPayloadType ),
      description: "Episode's Tenants."
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

const NewEpisodeInputType = new GraphQLInputObjectType({
  name: "NewEpisodeInput",
  description: "Input for creating a new episode.",
  fields: () => ({
    startDate: {
      type: GraphQLString,
      description: "Episode's start date."
    },
    startReading: {
      type: GraphQLInt,
      description: "Episode's start reading."
    },
    tenants: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLID))),
      description: "List of tenant IDs to joing for this episode. Must have atleast 1 tenant."
    },
  }),
});

export {
  EpisodePayloadType,
  NewEpisodeInputType
}
