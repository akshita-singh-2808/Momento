const Refund = require("../models/refundmodel");
const Order = require("../models/ordermodel");

// Request a refund
exports.requestRefund = async (req, res) => {
    try {
        const { orderId, reason } = req.body;

        // Check if order exists
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        // Check if refund is already requested
        const existingRefund = await Refund.findOne({ orderId });
        if (existingRefund) {
            return res.status(400).json({ success: false, message: "Refund already requested" });
        }

        const refund = new Refund({ orderId, userId: order.userId, reason });
        await refund.save();

        res.status(201).json({ success: true, message: "Refund requested successfully", refund });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to request refund", error });
    }
};

// Approve refund request
exports.approveRefund = async (req, res) => {
    try {
        const refundId = req.params.id;
        const refund = await Refund.findByIdAndUpdate(refundId, { status: "approved" }, { new: true });
        if (!refund) {
            return res.status(404).json({ success: false, message: "Refund not found" });
        }

        res.status(200).json({ success: true, message: "Refund approved", refund });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to approve refund", error });
    }
};

// Reject refund request
exports.rejectRefund = async (req, res) => {
    try {
        const refundId = req.params.id;
        const refund = await Refund.findByIdAndUpdate(refundId, { status: "rejected" }, { new: true });
        if (!refund) {
            return res.status(404).json({ success: false, message: "Refund not found" });
        }

        res.status(200).json({ success: true, message: "Refund rejected", refund });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to reject refund", error });
    }
};

// Get all refund requests
exports.getAllRefundRequests = async (req, res) => {
    try {
        const refunds = await Refund.find().populate("orderId").sort({ createdAt: -1 });
        res.status(200).json({ success: true, refunds });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch refund requests", error });
    }
};
