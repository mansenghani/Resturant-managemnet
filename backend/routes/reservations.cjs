const express = require('express');
const router = express.Router();
const fs = require('fs/promises');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data.json');

async function getReservations() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function saveReservations(reservations) {
    await fs.writeFile(DATA_FILE, JSON.stringify(reservations, null, 2), 'utf8');
}

// GET all reservations (for Admin)
router.get('/', async (req, res) => {
    try {
        const data = await getReservations();
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new reservation (from user website)
router.post('/', async (req, res) => {
    try {
        const { reservationId, name, email, phone, guests, date, time, requests } = req.body;

        const newReservation = {
            _id: Math.random().toString(36).substr(2, 9),
            reservationId,
            name,
            email,
            phone,
            guests,
            date,
            time,
            requests,
            status: 'PENDING',
            createdAt: new Date().toISOString()
        };

        const data = await getReservations();
        data.push(newReservation);
        await saveReservations(data);

        res.status(201).json(newReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PATCH update reservation status (from admin)
router.patch('/:id/status', async (req, res) => {
    try {
        const data = await getReservations();
        const index = data.findIndex(r => r._id === req.params.id);

        if (index === -1) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        if (req.body.status) {
            data[index].status = req.body.status;
        }

        await saveReservations(data);
        res.json(data[index]);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
