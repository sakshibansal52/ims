const http = require('http')

http.createServer((req , res)=>{
    console.log(req.headers)
    console.log(req.url)
    res.end()   //either senf string or buffer
}).listen(8000)