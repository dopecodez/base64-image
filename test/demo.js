const base64 = require('./dist/index');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

(async () => {
    let response = await readFile('tester.txt');
    response = response.toString();
    const path = await base64(response,
    '', 'dilbert');
})()

// (async () => {
//     const resuilt = await base64.toBase64('https://upload.wikimedia.org/wikipedia/en/f/f3/Dilbert-20050910.png');
//     let response = await readFile('tester.txt');
//     response = response.toString();
//     if (resuilt == response) {
//         console.log('This shit super dope')
//     }
// })()