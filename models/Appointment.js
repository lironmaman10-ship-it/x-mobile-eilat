const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    appointmentNumber: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    device: { type: String, required: true },
    issue: { type: String, required: true },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    status: { type: String, default: 'נקלט במעבדה' }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);