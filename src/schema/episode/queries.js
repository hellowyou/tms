import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import { EpisodePayloadType } from './types';
import Episode from '../../models/episode';

const query = {
  episode: {
    type: EpisodePayloadType,
    args: { id: { type: new GraphQLNonNull( GraphQLID ) } },
    async resolve(parent, { id }) {
      try {
        let episode = await Episode.findById( id );

        return episode;
      } catch(e) {
        console.log({e});
        return new Error("Episode not found");
      }
    }
  },
  episodes: {
    type: new GraphQLList( EpisodePayloadType ),
    async resolve(parent, args) {
      try {
        let episodes = await Episode.find();
        return episodes;
      } catch(e) {
        console.log({e});
        return new Error("Unable to fetch episodes");
      }
    }
  }
};

export default query;
