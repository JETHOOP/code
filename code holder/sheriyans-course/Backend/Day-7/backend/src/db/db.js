const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('connected to MongoDB')
        }).
        catch((error) => {
            console.log('error connecting to MongoDB'+error)
        })
}

module.exports = connectDB