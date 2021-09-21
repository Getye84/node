const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end('Welcome to home');
    }
    else if(req.url === "/about"){
        res.end(`About page  ${req.url}`)
    }else {
        res.end(`Home :: cannot find ${req.url}`)
    }
});

server.listen(5000);