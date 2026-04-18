require('dotenv').config()
const express = require('express')
const connectToDb = require('../src/db/db')
const authRoutes = require('../src/routes/auth.routes')
const cookieParser = require('cookie-parser')

const app = express()
connectToDb()

app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRoutes)

module.exports = app