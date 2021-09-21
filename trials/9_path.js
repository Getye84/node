const path = require('path');
const { text } = require('stream/consumers');

console.log(path);

const absolute = path.resolve(__dir, 'const', 'subfoler','text.tex');
console.log(absolute)