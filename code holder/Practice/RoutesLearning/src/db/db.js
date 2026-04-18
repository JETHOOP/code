const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect('mongodb://localhost:27017/practice')
    .then(() => console.log('Connected to db'))
    .catch((err)=>console.log('Eror connecting to db', err));
}

module.exports = connectToDb