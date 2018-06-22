import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { TenantType } from './types';

const mutation = {
  addTenant: {
    name: 'addTenant',
    type: TenantType,
    args: {
      firstName: { type: new GraphQLNonNull( GraphQLString ) },
      lastName: { type: new GraphQLNonNull( GraphQLString ) },
    },
    resolve(parent, args, context) {
      return args;
    }
  }
};

export default mutation;
