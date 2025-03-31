const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Buyer
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Event details
  ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true }, // Ticket type purchased
  quantity: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  transactionId: { type: String, unique: true }, // Stripe payment ID
  purchasedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
