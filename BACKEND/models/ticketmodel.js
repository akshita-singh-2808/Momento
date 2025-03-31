const mongoose=require('mongoose');
const ticketSchema = new mongoose.Schema({
    ticketId: { type: String, required: true, unique: true }, // Unique ticket ID (e.g., UUID or QR code)
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Reference to the event
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who owns the ticket
    ticketType: { type: mongoose.Schema.Types.ObjectId, ref: 'TicketType', required: true }, // Reference to the ticket type
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, // Reference to the order
    isUsed: { type: Boolean, default: false }, // Whether the ticket has been used
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  const Ticket = mongoose.model('Ticket', ticketSchema);