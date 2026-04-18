const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

async function registerController(req, res) {
    const username = req.body.username?.trim();
    const password = req.body.password?.trim();

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const existingUser = await userModel.findOne({
        username
    });

    if (existingUser) {
        return res.status(400).json({
            message: "Username already exits",
        });
    }

    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10),
    });

    const token = jwt.sign(
        { userId: user._id }, process.env.JWT_SECRET
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    return res.status(201).json({
        message: "User created successfully",
        user,
        token
    });
}

async function loginController(req, res) {
    const username = req.body.username?.trim();
    const password = req.body.password?.trim();

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await userModel.findOne({
        username,
    });

    if (!user) {
        return res.status(400).json({
            message: "user not found please register"
        });
    }

    const isPasswordvalid = await bcrypt.compare(password, user.password);

    if (!isPasswordvalid) {
        return res.status(400).json({
            message: " invalid password"
        });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    res.status(200).json({
        message: "user logged in successfully",
        user: {
            username: user.username,
            id: user._id,
            
        }
    });
}

async function name(params) {

}
module.exports = {
    registerController,
    loginController
}