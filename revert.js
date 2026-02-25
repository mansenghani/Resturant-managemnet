const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, 'src');
const source = path.join(__dirname, 'src', 'user');

const files = [
    'About.jsx',
    'Feedback.jsx',
    'FoodMenu.jsx',
    'Footer.jsx',
    'Header.jsx',
    'Home.jsx',
    'Index.jsx',
    'Menu.jsx',
    'TableBooking.jsx'
];

for (let file of files) {
    try {
        fs.renameSync(
            path.join(source, file),
            path.join(target, file)
        );
    } catch (e) {
        console.error(e);
    }
}
