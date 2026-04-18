// express required
const express = require("express")
const app =express()

app.use(express.json())

// empty array is created to store notes
let notes = []

// 
app.get("/",(req,res)=>{
    res.send("server created")
})

// 
app.post("/notes",(req,res)=>{
   console.log(req.body)
   notes.push(req.body)
   res.json({
    message:"notes created succesfylly",
   })
})

// deletes the desired note
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index

    delete notes[index]
    res.json({
        message:"deleted successfully",
    })
})

// update the desired note
app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const {title} = req.body
    notes[index].title = title
    res.json({
        message:"updated"
    })
})


app.get("/notes",(req,res)=>{
   res.json(notes)
})

// server started   
app.listen(3000,()=>{
    console.log("server is running on port number 3000" )
})