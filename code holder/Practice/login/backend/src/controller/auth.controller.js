const userModel = require('../models/login.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerController(req, res) {
    const { username, password } = req.body

    const isUserExists = await userModel.findOne({
        username: username
    })
    if (!isUserExists) {
        return res.status(401).json({
            message: 'user already exists'
        })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await userModel.create({
        username, password: hash
    })

    const token = jwt.sign({ id: user._id }, '9827a0aa49501518d3861d72e116490ffbf5c88d')

    res.cookie("token", token)

    return res.status(201).json({
        message: "user created successfully",
        user,
        token,
    });
}

async function loginController(req, res) {
    const { username, password } = req.body

    const isUserExists = await userModel.findOne({
        username: username
    })

    if (!isUserExists) {
        return res.status(401).json({
            message: "Invalid username or password"
        })
    }

    const comparePassword = bcrypt.compare(password, isUserExists.password)

    if (!comparePassword) {
        return res.status(401), json({
            message: "Invalid username or password"
        })
    }

    res.status(200).json({
        message: "login successfully"
    })
}

module.exports = { loginController,registerController }