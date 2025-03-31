const TicketType = require("../models/ticketypemodel");

// Create a new ticket type
exports.createTicketType = async (req, res) => {
    try {
        const { eventId, name, price, quantity } = req.body;
        const ticketType = new TicketType({ eventId, name, price, quantity });
        await ticketType.save();
        res.status(201).json({ success: true, message: "Ticket type created", ticketType });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create ticket type", error });
    }
};

// Get ticket types for an event
exports.getTicketTypesByEvent = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const ticketTypes = await TicketType.find({ eventId });
        res.status(200).json({ success: true, ticketTypes });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch ticket types", error });
    }
};

// Update ticket type details
exports.updateTicketType = async (req, res) => {
    try {
        const ticketTypeId = req.params.id;
        const updatedTicketType = await TicketType.findByIdAndUpdate(ticketTypeId, req.body, { new: true });

        if (!updatedTicketType) {
            return res.status(404).json({ success: false, message: "Ticket type not found" });
        }

        res.status(200).json({ success: true, message: "Ticket type updated", updatedTicketType });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update ticket type", error });
    }
};

// Delete a ticket type
exports.deleteTicketType = async (req, res) => {
    try {
        const ticketTypeId = req.params.id;
        const deletedTicketType = await TicketType.findByIdAndDelete(ticketTypeId);

        if (!deletedTicketType) {
            return res.status(404).json({ success: false, message: "Ticket type not found" });
        }

        res.status(200).json({ success: true, message: "Ticket type deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete ticket type", error });
    }
};
