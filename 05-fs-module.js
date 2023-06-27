const fs = require('node:fs');

const names.txt = fs.readFileSync('/names.txt','utf-8')

console.log(names.txt)

fs.writeFileSync(
    './results.txt',
    `The names.txt has the content:${namestext}`)