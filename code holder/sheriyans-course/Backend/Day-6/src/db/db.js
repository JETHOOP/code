const mongoose = require("mongoose")


function connectToDB(){

    mongoose.connect("mongodb+srv://Mohit:VMdtLGeuwjndJTxF@mohit.gmtkbwe.mongodb.net/cohort")
    .then(()=>{
    console.log("connecttes to db")}
    )

}

module.exports = connectToDB