const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Event creator
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }], // Ticket types associated with event
  totalTickets: { type: Number, required: true },
  availableTickets: { type: Number, required: true },
  image: { type: String }, // Event poster/image URL
  category: { type: String, enum: ['concert', 'conference', 'workshop', 'festival', 'sports'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);
