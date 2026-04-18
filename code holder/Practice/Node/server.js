const express = require('express')
const app = express()
const connectToDb = require('../Node/db/db')
const noteModel = require('../Node/models/note.model')

app.use(express.json())
connectToDb()


app.get('/notes', (req, res) => {
    res.json(notes)
})

app.post('/notes', async (req, res) => {
    console.log(req.body)

    await noteModel.create({
        title
    })
    res.json({
        message: 'note created successfully'
    })
})

app.delete('/notes/:index', async (req, res) => {
    const index = req.params.index
    await noteModel.findOneAndDelete({
        _id: index
    })
    res.json({
        message: 'Note deleted successfully'
    })
})

app.patch('/notes/:index', async (req, res) => {
    const index = req.params.index
    const { name } = req.body
    await noteModel.findOneAndUpdate({
        _id: index
    }, {
        title: title
    })

    res.json({
        message: "NOte update successfully"
    })
})

app.listen(3000, () => {
    console.log("server is running on port number 3000")
})