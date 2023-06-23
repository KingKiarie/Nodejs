const http = require('node:http');


const server = http.createServer(req,res)=>{
    if(req.url === 4000){
        res.end('Hello World CodeGeek!')
    }else if(res.url === '/about'){
        res.end('this is the about page')
    }
        
}

server.listen(4000,()=>{
    console.log('We are live')
})

// nodemon is used in place of local host on the nodejs server// install using npm install nodemon