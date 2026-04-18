const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect('mongodb://localhost:27017/Cohort')
    .then(()=>{
        console.log("connected to DB")
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports = connectDB