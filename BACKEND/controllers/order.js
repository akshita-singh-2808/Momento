const Order = require("../models/ordermodel");

exports.createOrder = async (req, res) => {
    try {
        const { eventId, ticketType, quantity, totalAmount } = req.body;

        const order = new Order({
            user: req.user.id,
            event: eventId,
            ticketType,
            quantity,
            totalAmount,
            status: "pending"
        });

        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate("event");
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
