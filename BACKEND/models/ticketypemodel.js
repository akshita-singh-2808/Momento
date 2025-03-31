const mongoose = require('mongoose');

const TicketypeSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Associated event
  type: { type: String, enum: ['Regular', 'VIP', 'Early Bird'], required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }, // Number of tickets available
  sold: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticketype', TicketypeSchema);
