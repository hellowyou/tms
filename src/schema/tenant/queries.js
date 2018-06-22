import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
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
  },
  tenants: {
    type: new GraphQLList( TenantType ),
    async resolve(parent, args) {
      try {
        let tenants = await Tenant.find();
        return tenants;
      } catch(e) {
        console.log({e});
        return new Error("Unable to fetch tenants");
      }
    }
  }
};

export default query;
