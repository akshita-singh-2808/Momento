const ticket=require("../models/ticketmodel");
const Event=require("../models/eventmodel");

exports.purchaseTicket=async(req , res)=>{
    try {
        const{eventId,ticketType,quantity}=req.body;
        const event=await Event.findById(eventId);
        if(!event) return res.status(404).json({message:"event not found"});

        const ticket=new Ticket({
            user:req.user.id,
            event:eventId,
            ticketType,
            quantity,
            status:"confirmed"

        });

        await ticket.save();
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
};
exports.getUserTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({ user: req.user.id }).populate("event");
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};