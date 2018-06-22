import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { TenantType } from './types';
import Tenant from '../../models/tenant';

const mutation = {
  addTenant: {
    name: 'addTenant',
    type: TenantType,
    args: {
      firstName: { type: new GraphQLNonNull( GraphQLString ) },
      lastName: { type: new GraphQLNonNull( GraphQLString ) },
    },
    async resolve(parent, args, context) {
      try {
        let tenant = await Tenant.create(args);

        return tenant;
      } catch(e) {
        console.error(e);
        return new Error("Unable to create tenant");
      }
    }
  }
};

export default mutation;
