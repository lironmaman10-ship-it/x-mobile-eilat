const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    idNumber: { type: String },
    items: [{ name: String, image: String, price: Number, vatPrice: Number, qty: Number }],
    totalAmount: { type: Number, required: true },
    pickupDate: { type: Date, required: true },
    pickupTime: { type: String, required: true },
    status: { type: String, default: 'חדשה' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);