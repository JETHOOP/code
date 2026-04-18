const express = require('express')
const connectToDb = require('../src/db/db')
const authRoutes = require('../routes/auth.routes')
const cookieParser = require('cookie-parser')

const app = express()
connectToDb()

app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRoutes)

module.exports = app