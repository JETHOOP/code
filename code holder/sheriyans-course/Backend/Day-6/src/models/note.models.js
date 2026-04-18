const mongoose = require('mongoose')

// create a Schema
const noteSchema = new mongoose.Schema({
    title:String,
    content:String
})


// create a model
const noteModel = mongoose.model("note",noteSchema)


module.exports = noteModel