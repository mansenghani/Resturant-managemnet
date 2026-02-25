const fs = require('fs');
const path = require('path');

const files = [
    'About.jsx', 'AppFooter.jsx', 'Feedback.jsx', 'FoodMenu.jsx',
    'Header.jsx', 'Home.jsx', 'Index.jsx', 'Menu.jsx', 'TableBooking.jsx'
];

files.forEach(file => {
    const src = path.join(__dirname, 'src', file);
    const dest = path.join(__dirname, 'src', 'user', file);

    if (fs.existsSync(src)) {
        try {
            // First try to rename
            try {
                fs.renameSync(src, dest);
                console.log(`Moved ${file}`);
            } catch (e) {
                // If locked or cross-device, try copy and unlink
                console.log(`Rename failed for ${file}, trying copy: ${e.message}`);
                fs.copyFileSync(src, dest);
                fs.unlinkSync(src);
                console.log(`Copied & deleted ${file}`);
            }
        } catch (e) {
            console.error(`Failed to move ${file}: ${e.message}`);
        }
    } else {
        console.log(`File not found: ${src}`);
    }
});
