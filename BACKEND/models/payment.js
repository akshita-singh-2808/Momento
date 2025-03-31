const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who made payment
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, // Order linked to payment
  transactionId: { type: String, required: true, unique: true }, // Stripe transaction ID
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  status: { type: String, enum: ['Pending', 'Success', 'Failed'], default: 'Pending' }, // Payment status
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);
