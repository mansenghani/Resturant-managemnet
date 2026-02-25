const fs = require('fs');
const esbuild = require('esbuild');
const code = fs.readFileSync('src/AdminPages/Reportgenrate.jsx', 'utf8');

try {
    esbuild.transformSync(code, { loader: 'jsx' });
    console.log('OK');
} catch (e) {
    console.error(e.message);
    // Now try to find the line by slicing
    let lines = code.split('\n');
    for (let i = lines.length; i > 0; i--) {
        let chunk = lines.slice(0, i).join('\n') + '\n</div>);\n}\nexport default Reportgenrate;';
        try {
            esbuild.transformSync(chunk, { loader: 'jsx' });
            console.log('Valid up to line: ' + i);
            break;
        } catch (err) { }
    }
}
