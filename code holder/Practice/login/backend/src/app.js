const express = require('express')
const authRoute = require('./routes/login.route')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const connectToDb = require('./db/db')

connectToDb()
app.use(cors({
    origin:'htp://localhost:5173'
}))
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRoute)

module.exports = app