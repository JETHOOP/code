const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect('mongodb://localhost:27017/Cohort')
    .then(()=>{
        console.log("connected to db")
    })
}

module.exports = connectToDb