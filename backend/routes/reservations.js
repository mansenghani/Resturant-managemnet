const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// GET all reservations (for Admin)
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find().sort({ createdAt: -1 });
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new reservation (from user website)
router.post('/', async (req, res) => {
    const { reservationId, name, email, phone, guests, date, time, requests } = req.body;

    const reservation = new Reservation({
        reservationId,
        name,
        email,
        phone,
        guests,
        date,
        time,
        requests
    });

    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PATCH update reservation status (from admin)
router.patch('/:id/status', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        if (req.body.status) {
            reservation.status = req.body.status;
        }

        const updatedReservation = await reservation.save();
        res.json(updatedReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a reservation
router.delete('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.json({ message: 'Deleted Reservation' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
