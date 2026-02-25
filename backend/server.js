require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connect
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kuki_restaurant';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Database: kuki_restaurant'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
const reservationsRouter = require('./routes/reservations');
app.use('/api/reservations', reservationsRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
