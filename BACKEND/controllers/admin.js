const User = require("../models/usermodel");
const Event = require("../models/eventmodel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};


exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
