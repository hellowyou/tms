import mongoose from 'mongoose';

const tenantSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
}, {timestamps: true});

export default mongoose.model('Tenant', tenantSchema);
