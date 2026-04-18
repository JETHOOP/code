import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, company, phone } = req.body
        const emailLower = email.toLowerCase();
        const existing = await User.findOne({ email: emailLower })
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "User already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name, email: emailLower, password: hashedPassword, role: "user", company, phone
        })
        res.status(201).json({
            success: true,
            message: "User Registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }
        next(err)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        console.log("BODY:", req.body)

        const { email, password } = req.body
        console.log("EMAIL ENTERED:", email)
        console.log("PASSWORD ENTERED:", password)
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User with this credentials does not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        res.json({
            success: true,
            token
        })

    } catch (err) {
        console.log("🔥 BACKEND ERROR:", err)
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const addUser = async (req, res, next) => {
    try {
        const { name, email, age } = req.body
        if (!name || !email || !age) {
            return res.status(400).send({
                success: false,
                message: "All fields required"
            })
        }
        const user = new User({ name, email, age })
        await user.save()
        res.send({
            success: true,
            data: user
        });
    }
    catch (error) {
        next(error)
    }
}

export const getUsers = async (req, res) => {
    const user = await User.find();
    res.send({
        message: true,
        data: user
    })
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)

    if (!user) {
        return res.status(404).send({
            success: false,
            message: "User not found"
        })
    }

    res.send({
        message: true,
        message: "user deleted successfully"
    })
}

