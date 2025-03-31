const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin', 'moderator'], default: 'moderator' }, // Different levels of access
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admin', AdminSchema);
