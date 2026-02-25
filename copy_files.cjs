const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const userDir = path.join(srcDir, 'user');

if (fs.existsSync(userDir)) {
    const files = fs.readdirSync(userDir);
    for (const file of files) {
        if (file.endsWith('.jsx')) {
            const content = fs.readFileSync(path.join(userDir, file), 'utf8');
            fs.writeFileSync(path.join(srcDir, file), content);
            console.log(`Restored ${file}`);
        }
    }
}
