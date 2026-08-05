const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    vatPrice: { type: Number, required: true },
    rating: { type: Number, default: 5 },
    storage: [{ gb: String, mod: Number }],
    colors: [{ name: String, hex: String, images: [String] }],
    variants: [{
        storageGb: { type: String, default: "Standard" },
        colorName: String,
        stock: { type: Number, default: 0 }
    }],
    specs: { type: Map, of: String },
    reviews: [{ 
        author: String, 
        text: String, 
        rating: { type: Number, default: 5 } 
    }]
});

module.exports = mongoose.model('Product', ProductSchema);