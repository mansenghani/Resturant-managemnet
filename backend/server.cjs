const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5005;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const reservationsRouter = require('./routes/reservations.cjs');
app.use('/api/reservations', reservationsRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
