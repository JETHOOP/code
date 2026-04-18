const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('connected to db')
        }).catch(err => {
            console.log("error" + err)
        })
}

module.exports = connectToDb