const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect('mongodb://localhost:27017/login')
        .then(() => {
            console.log("connected to database")
        })
        .catch(err => { console.log(err) })
}

module.exports = connectToDb