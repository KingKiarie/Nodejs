const os = require('os')

console.log(os);

//
let osAbilities={
    userInfo:os.userInfo(),
    plartform: os.plartform(),
    release: os.release(),
    uptime: os.uptime(),
    totalMemory: os.totalMemory(),
    
}