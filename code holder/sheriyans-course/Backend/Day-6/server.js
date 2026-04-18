const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.models')

const app = express()

app.use(express.json())

connectToDB()

app.get('/notes', async (req, res) => {

    const notes = await noteModel.find()

    res.json({
        message: "notes fetch successfully", notes
    })
})

app.post('/notes', async (req, res) => {
    const { title, content } = req.body

    console.log(title, content)

    await noteModel.create({
        title, content
    })

    res.json({
        message: "notes created successfully"
    })
})

app.delete('/notes/:id', async (req, res) => {

    const noteId = req.params.id

    await noteModel.findOneAndDelete({
        _id: noteId
    })
    res.json({
        message: 'deleted successfully'
    })

})

app.patch('/notes/:id',async (req,res)=>{
    const noteId = req.params.id
    const {content} = req.body

    await noteModel.findOneAndUpdate({
        _id : noteId
    },{
        content:content
    })
    res.json({
        message:"Updated successfully"
    })
})

app.listen(3000, () => {
    console.log("your server is running on port no 3000")
})