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
            fs.copyFileSync(src, dest);
            console.log(`Copied ${file} to user/`);

            try {
                fs.unlinkSync(src);
                console.log(`Deleted ${file} from src/`);
            } catch (e) {
                console.error(`Failed to delete ${file}: ${e.message}`);
            }
        } catch (e) {
            console.error(`Failed to copy ${file}: ${e.message}`);
        }
    } else {
        console.log(`File not found in src/: ${file}`);
    }
});
