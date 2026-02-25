const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');
const filesToRemove = [
    'About.jsx', 'AppFooter.jsx', 'Feedback.jsx', 'FoodMenu.jsx',
    'Header.jsx', 'Home.jsx', 'Index.jsx', 'Menu.jsx', 'TableBooking.jsx', 'Footer.jsx'
];

filesToRemove.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath);
            console.log(`Deleted ${file}`);
        } catch (e) {
            console.error(`Failed to delete ${file}: ${e.message}`);
        }
    }
});
