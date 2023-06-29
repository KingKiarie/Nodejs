const os = require('os')

console.log(os);

//os properties
let osAbilities={
    userInfo:os.userInfo(),
    plartform: os.plartform(),
    release: os.release(),
    uptime: os.uptime(),
    totalMemory: os.totalMemory(),
   
}