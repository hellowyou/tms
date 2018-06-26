import mongoose from 'mongoose';
import { uniqWith, isEqual } from 'lodash';

import Tenant from './tenant';

const { Schema } = mongoose;

const episodeSchema = Schema({
  startDate: {
    type: Date,
    required: [true, "Start date is required."]
  },
  endDate: {
    type: Date,
  },
  startReading: {
    type: Number,
    required: [true, "Start reading is required."]
  },
  endReading: {
    type: Number,
  },
  /**
   * @todo Make it unique to its parent document only.
   */
  _tenants: {
    type: [Schema.Types.ObjectId],
    unique: true,
    ref: "Tenant",
  }
}, {timestamps: true});

episodeSchema.methods = {
  /**
   * Adds a tenant for the episode.
   * Returns the episode on resolve, error on reject.
   *
   * @param   {String}    tenantId The id of the tenant.
   * @return  {Promise}
   */
  addTenant(tenantId) {

    return new Promise((resolve, reject) => {
      try {
        this._tenants.push(tenantId);
        resolve(this);
      } catch(e) {
        console.log('Episode::addTenant Error:', e.message);
        reject(e);
      }
    });
  }
}

episodeSchema.virtual('tenants').get(function() {
  return Tenant.find().where('_id').in(this._tenants).exec();
});

episodeSchema.pre('save', function(next) {
  // Remove duplicate tenant ids.
  this._tenants = uniqWith(this._tenants, isEqual);
  console.log('saving model', this);
  next();
});

const Episode = mongoose.model('Episode', episodeSchema);

export default Episode;
