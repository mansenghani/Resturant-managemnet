const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');
const files = fs.readdirSync(dir);
let deletedCount = 0;

files.forEach(file => {
    if (file.endsWith('.php')) {
        const filePath = path.join(dir, file);
        try {
            fs.unlinkSync(filePath);
            console.log(`Successfully deleted ${file}`);
            deletedCount++;
        } catch (e) {
            console.error(`Failed to delete ${file}: ${e.message}`);
        }
    }
});

console.log(`Finished deleting ${deletedCount} .php files.`);
