const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// קבלת כל התורים (למערכת הניהול)
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ date: 1 });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// יצירת תור חדש (מהאתר)
router.post('/', async (req, res) => {
    try {
        const appCount = await Appointment.countDocuments();
        const appointmentNumber = `LAB-${500 + appCount}`;
        const newAppointment = new Appointment({ ...req.body, appointmentNumber });
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// עדכון סטטוס תור (ממערכת הניהול)
router.put('/:id/status', async (req, res) => {
    try {
        const updatedApp = await Appointment.findByIdAndUpdate(
            req.params.id, 
            { status: req.body.status }, 
            { new: true }
        );
        res.json(updatedApp);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;