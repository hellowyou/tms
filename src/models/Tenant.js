import mongoose from 'mongoose';

const tenantSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
}, {timestamps: true});

tenantSchema.methods = {
  underAnEpisode() {
    console.log(this);
    return this.episode !== null;
  }
};

export default mongoose.model('Tenant', tenantSchema);
