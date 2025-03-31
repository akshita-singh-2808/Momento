// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/ordermodel");

exports.processPayment = async (req, res) => {
    try {
        const { orderId, token } = req.body;
        const order = await Order.findById(orderId);

        if (!order) return res.status(404).json({ message: "Order not found" });

        const charge = await stripe.charges.create({
            amount: order.totalAmount * 100, // Convert to cents
            currency: "usd",
            source: token,
            description: `Payment for Order ${order._id}`
        });

        order.status = "paid";
        await order.save();

        res.json({ message: "Payment successful", charge });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
