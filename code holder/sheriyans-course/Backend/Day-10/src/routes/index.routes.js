const express = require('express')


const router = express.Router()

router.use((req,res,next)=>{
    console.log("this is middlewear")
    next()
})

router.get('/',(req,res)=>{
    res.json({
        message : "welcome to the cohort"
    })
})