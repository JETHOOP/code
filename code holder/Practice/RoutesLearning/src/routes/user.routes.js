const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

router.post('/register', async (req, res) => {
    const { username, password } = req.body

    const token = jwt.sign({ id: user._id }, 'something')
    const user = await userModel.create({
        username, password
    })

    res.cookie("token", token)
    res.status(201).json({
        message: 'user registered successfully',
        user,
        token
    })
})


router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = await userModel.findOne({
        username: username
    })

    if (!user) {
        return res.status(401).json({
            message: 'user not found'
        })
    }

    const isPasswordValid = password === user.password
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "invalid password"
        })
    }

    res.json({
        message: "user logged in successfully"
    })

})

module.exports = router