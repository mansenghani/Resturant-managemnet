const http = require('http');

const data = JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    phone: '123',
    guests: '2',
    date: '2024-01-01',
    time: '12:00',
    reservationId: 'test-123'
});

const req = http.request({
    hostname: 'localhost',
    port: 5005,
    path: '/api/reservations',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}, (res) => {
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => console.log('Status:', res.statusCode, 'Body:', body));
});

req.on('error', console.error);
req.write(data);
req.end();
