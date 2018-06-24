import {
  EpisodePayloadType,
  NewEpisodeInputType
} from './types';
import Episode from '../../models/episode';

const NewEpisode = {
  type: EpisodePayloadType,
  description: "Start a new episode for a tenant/s.",
  args: {
    input: {
      type: NewEpisodeInputType,
    }
  },
  async resolve(parent, { input }, context) {
    let { tenants, ...otherInput } = input;
    let episode = new Episode({...otherInput});
    let errors = [];
    let ret = null;

    await Promise.all(tenants.map((tenantId) =>
      episode.addTenant(tenantId).catch(e => errors.push(e))
    ));

    if(errors.length === 0) {
      console.log('Creating new episode.');
      await episode.save().catch(e => errors.push(e));

      if(errors.length === 0) {
        console.log('New Episode saved');
        ret = episode;
      } else {
        ret = errors[0];
      }
    } else {
      ret = errors[0];
    }
    console.log(`Errorname: ${ret.name} ErrorToString: ${ret.toString()}`);
    return ret;
  }
};

export default NewEpisode;
