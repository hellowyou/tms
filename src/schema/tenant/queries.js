import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import _ from 'lodash';

import { TenantType } from './types';

const tenantData = [
  {id: "1", firstName: 'John', lastName: 'Doe'},
  {id: "2", firstName: 'Emly', lastName: 'Dawson'},
  {id: "3", firstName: 'Jake', lastName: 'Lake'},
];

const query = {
  tenant: {
    type: TenantType,
    args: { id: { type: new GraphQLNonNull( GraphQLID ) } },
    resolve(parent, { id }) {

      return _.find(tenantData, { id });
    }
  }
};

export default query;
