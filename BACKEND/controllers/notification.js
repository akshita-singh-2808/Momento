const Notification = require("../models/notificationmodel");

// Send a notification
exports.sendNotification = async (req, res) => {
    try {
        const { userId, eventId, message } = req.body;
        const notification = new Notification({ userId, eventId, message });
        await notification.save();
        res.status(201).json({ success: true, message: "Notification sent", notification });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send notification", error });
    }
};

// Get notifications for a specific user
exports.getUserNotifications = async (req, res) => {
    try {
        const userId = req.params.userId;
        const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, notifications });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch notifications", error });
    }
};

// Mark notification as read
exports.markAsRead = async (req, res) => {
    try {
        const notificationId = req.params.id;
        await Notification.findByIdAndUpdate(notificationId, { read: true });
        res.status(200).json({ success: true, message: "Notification marked as read" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update notification", error });
    }
};
