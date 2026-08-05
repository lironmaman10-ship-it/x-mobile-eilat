const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');
const appointmentsRoute = require('./routes/appointments');

app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/appointments', appointmentsRoute);

// הגשת קובץ האתר
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// הגשת מערכת הניהול
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));