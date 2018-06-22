import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  TenantType,
  TenantInputType
} from './types';
import Tenant from '../../models/tenant';

const mutation = {
  addTenant: {
    name: 'addTenant',
    description: 'Create a Tenant',
    type: TenantType,
    args: {
      input: {
        type: new GraphQLNonNull(TenantInputType),
      },
    },
    async resolve(parent, { input }, context) {
      try {
        let tenant = await Tenant.create(input);

        return tenant;
      } catch(e) {
        return e;
      }
    }
  },
  updateTenant: {
    type: TenantType,
    description: 'Update a Tenant',
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      input: {
        type: new GraphQLNonNull(TenantInputType),
      },
    },
    async resolve(parent, {id, input}, context) {
      try {
        return await Tenant.findByIdAndUpdate(id, input, {new: true});
      } catch(e) {
        return e;
      }
    },
  },
  deleteTenant: {
    type: TenantType,
    description: `
    Delete a Tenant.
    Returns null when no record is found.
    `,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    async resolve(parent, {id}, contenxt) {
      try {
        return await Tenant.findByIdAndDelete(id);
      } catch(e) {
        return e;
      }
    },
  }
};

export default mutation;
