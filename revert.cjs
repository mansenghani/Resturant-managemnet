const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, 'src');
const source = path.join(__dirname, 'src', 'user');

const files = fs.readdirSync(source);

for (let file of files) {
    if (file.endsWith('.jsx')) {
        try {
            fs.copyFileSync(
                path.join(source, file),
                path.join(target, file)
            );
        } catch (e) {
            console.error('Error copying ' + file + ':', e);
        }
    }
}
try { fs.rmdirSync(source, { recursive: true }); } catch (e) { console.error('Error deleting user folder:', e); }
