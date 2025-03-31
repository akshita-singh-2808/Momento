const mongoose = require('mongoose');

const RefundSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Requester
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, // Order to be refunded
  reason: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  processedAt: { type: Date }
});

module.exports = mongoose.model('Refund', RefundSchema);
