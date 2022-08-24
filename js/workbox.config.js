`const path = require('path');

module.exports = {
swDest: path.join(__dirname, 'dist', 'sw.js'),
swSrc: path.join(__dirname, 'sw.js'),
globDirectory: path.join(__dirname, 'dist'),
globPatterns: ['**/*.{html,js,json,jpeg, png}'],
};`