require('dotenv').config()
const app = require('./src/app')
const { createServer } = require('http')
const initialserver = require('./src/socket/socket.server')



const httpServer = createServer(app)

initialserver(httpServer);


httpServer.listen(3000, () => {
    console.log("server is running on port no 3000")
})