const path = require('node:path')

console.log(path.sep)


const filePath =path.join('./Kevin','subfolder','manifest.js')
console.log(filePath)



const absolutePath = path.resolve(__dirname,filePath)
console.log(absolutePath)