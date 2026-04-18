const express = require("express")
const app = express()

// middleware
app.use(express.json())

let notes = []

app.get("/",(req,res)=>{
    res.send("server created")
})

app.post("/about",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message:"this is message",
        notes : notes
    })
})

app.listen(3000,()=>{
    console.log("server created on port number 3000")
})