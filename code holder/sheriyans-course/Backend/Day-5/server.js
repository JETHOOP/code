const express = require('express')
const connectToDB = require('./src/db/db')
const app = express()

app.use(express.json())

connectToDB()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/notes',(req,res)=>{
    const {title,content} = req.body

    console.log(title)
    console.log(content)
})

app.listen(3000,()=>{
    console.log("your server is running on port no 3000")
})