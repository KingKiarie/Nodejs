const path = require('node: path')

console.log(path.sep)


const filePath =path.join('./Kevon','subfolder','manifest.js')
console.log(filePath)

console.log(path__dirname)

const absolutePath = path.resolve(__dirname,filePath)
console.log(absolutePath)