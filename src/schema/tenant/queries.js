import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import _ from 'lodash';

import { TenantType } from './types';
import Tenant from '../../models/tenant';

const query = {
  tenant: {
    type: TenantType,
    args: { id: { type: new GraphQLNonNull( GraphQLID ) } },
    async resolve(parent, { id }) {
      try {
        let tenant = await Tenant.findById( id );

        return tenant;
      } catch(e) {
        console.log({e});
        return new Error("Tenant not found");
      }
    }
  }
};

export default query;
