const { readFileSync, writeFileSync } = require('fs'); 

const first = readFileSync('./content/first.txt', 'Utf8');
const second = readFileSync('./content/second.txt', 'Utf8');

// console.log(first, second);

const result = writeFileSync('./content/result-sync.txt', `Here is the result: ${first} ${second}`);

console.log(result); 