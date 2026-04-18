const http = require("http")

let server = http.createServer((req,res)=>{
    res.end("response from server")
})

server.listen(3000,()=>{
    console.log("server started at port 3000")
})