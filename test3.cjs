const fs = require('fs');

const findMismatchedBrackets = (content) => {
    let dCurly = 0;
    let dParen = 0;
    let curlyStack = [];
    let parenStack = [];

    for (let i = 0; i < content.length; i++) {
        if (content[i] === '{') {
            dCurly++;
            curlyStack.push(i);
        } else if (content[i] === '}') {
            dCurly--;
            curlyStack.pop();
        } else if (content[i] === '(') {
            dParen++;
            parenStack.push(i);
        } else if (content[i] === ')') {
            dParen--;
            parenStack.pop();
        }
    }

    if (dCurly > 0) {
        console.log(`Extra { at index ${curlyStack[curlyStack.length - 1]}`);
        let line = content.substring(0, curlyStack[curlyStack.length - 1]).split('\n').length;
        console.log(`Line for {: ${line}`);
        console.log(`Context: ${content.substring(curlyStack[curlyStack.length - 1] - 20, curlyStack[curlyStack.length - 1] + 40)}`);
    } else if (dCurly < 0) {
        console.log(`Missing { `);
    }

    if (dParen > 0) {
        console.log(`Extra ( at index ${parenStack[parenStack.length - 1]}`);
        let line = content.substring(0, parenStack[parenStack.length - 1]).split('\n').length;
        console.log(`Line for (: ${line}`);
        console.log(`Context: ${content.substring(parenStack[parenStack.length - 1] - 20, parenStack[parenStack.length - 1] + 40)}`);
    }
}

const rg = fs.readFileSync('src/AdminPages/Reportgenrate.jsx', 'utf8');
console.log('--- Reportgenrate.jsx ---');
findMismatchedBrackets(rg);

const set = fs.readFileSync('src/AdminPages/Setting.jsx', 'utf8');
console.log('--- Setting.jsx ---');
findMismatchedBrackets(set);
