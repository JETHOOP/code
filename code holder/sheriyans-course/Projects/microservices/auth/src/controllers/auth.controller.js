const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { username, email, password, fullName: { firstName, lastName } } = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (isUserAlreadyExists) {
        return res.status(409).json({ message: "Username or email already exists" })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash,
        fullName: { firstName, lastName }
    });

    const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })

    res.cookie('token', token, {
        httpOnly: true,
        secure: true, //client side js can't access it
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    return res.status(201).json({
        message: 'User registered successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            fullName: user.fullName,
            role: user.role,
            addresses: user.addresses
        }
    });
}

async function loginUser(req, res) {
    try {
        const { username, email, password } = req.body
        const user = await userModel.findOne({ $or: [{ username }, { email }] } ).select('+password')

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        const token = jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }.process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: true, //client side js can't access it
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })
        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
                addresses: user.addresses
            }
        })
    } catch (err) {
        console.log('Error in loginUser', err);
        return res.status(500).json({ message: 'INternel Server error' })
    }
}
module.exports = {
    registerUser,
    loginUser
}