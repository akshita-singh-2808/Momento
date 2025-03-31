const bcrypt=require("bcrypt");
const Event=require("../models/eventmodel");
exports.createEvent=async (req,res) => {
    try{
        const{name,description,date,location,ticketTypes}=req.body;
        const event=new Event({
            name,
            description,
            date,
            location,
            ticketTypes,
            organizer :req.user.id
        });
        await event.save();
        res.status(201).json(event);        
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    
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

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        res.json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) return res.status(404).json({ message: "Event not found" });

        if (event.organizer.toString() !== req.user.id)
            return res.status(403).json({ message: "Not authorized" });

        Object.assign(event, req.body);
        await event.save();
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) return res.status(404).json({ message: "Event not found" });

        if (event.organizer.toString() !== req.user.id)
            return res.status(403).json({ message: "Not authorized" });

        await event.remove();
        res.json({ message: "Event deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};