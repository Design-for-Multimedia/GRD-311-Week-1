const fs = require('fs');
const path = require('path');

const htmlFilePath = path.join(__dirname, 'index.html'); // replace 'index.html' with the name of your HTML file

fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the HTML file:', err);
        process.exit(1);
    }

    const firstLine = data.split('\n')[0].trim();
    const expectedDoctype = '<!DOCTYPE html>';

    if (firstLine.toLowerCase() === expectedDoctype.toLowerCase()) {
        console.log('Test passed: Proper DOCTYPE declaration found.');
    } else {
        console.error('Test failed: Proper DOCTYPE declaration not found.');
        process.exit(1);
    }
});
