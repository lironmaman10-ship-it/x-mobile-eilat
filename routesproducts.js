const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try { const products = await Product.find(); res.json(products); } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    try { const savedProduct = await newProduct.save(); res.status(201).json(savedProduct); } catch (err) { res.status(400).json({ message: err.message }); }
});

// עדכון מוצר (מחיר, מלאי וכו') - תיקון קריטי לשמירת מלאי לפי צבע
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        if (req.body.name) product.name = req.body.name;
        if (req.body.brand) product.brand = req.body.brand;
        if (req.body.category) product.category = req.body.category;
        if (req.body.basePrice !== undefined) product.basePrice = req.body.basePrice;
        if (req.body.vatPrice !== undefined) product.vatPrice = req.body.vatPrice;
        
        // עדכון מערך הצבעים והמלאי ללא בעיות _id
        if (req.body.colors) {
            product.colors = req.body.colors.map(c => ({
                name: c.name,
                hex: c.hex,
                images: c.images,
                stock: Number(c.stock || 0)
            }));
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', async (req, res) => {
    try { await Product.findByIdAndDelete(req.params.id); res.json({ message: 'Product deleted' }); } catch (err) { res.status(400).json({ message: err.message }); }
});

module.exports = router;