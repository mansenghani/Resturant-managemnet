const fs = require('fs');
const content = fs.readFileSync('src/AdminPages/Reportgenrate.jsx', 'utf8');

let depth = 0;
for (let i = 0; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') depth--;
}
console.log('Final `{` depth: ', depth);

depth = 0;
for (let i = 0; i < content.length; i++) {
    if (content[i] === '(') depth++;
    else if (content[i] === ')') depth--;
}
console.log('Final `(` depth: ', depth);
