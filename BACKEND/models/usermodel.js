const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['attendee', 'organizer', 'admin'], default: 'attendee' }, // Roles for different access levels
    eventsCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }], // Events created by the user (if organizer)
    ticketsPurchased: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], // Orders placed by the user
    createdAt: { type: Date, default: Date.now },
    updatedAt:{type: Date,default:Date.now},
    
});
module.exports=mongoose.model('User',UserSchema);