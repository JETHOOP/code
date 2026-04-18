require('dotenv').config();
const express = require('express');
const cookie = require('cookie-parser');
const cors = require('cors')
const ConnectToDB = require("./db/db");
// Routes
const authRoutes = require('./routes/auth.route');
const postRoutes = require('./routes/post.route')

const app = express();

app.use(cors({
  origin: "http://localhost:5173/",
  credentials: true
}));

app.use(express.json());
app.use(cookie());
ConnectToDB();

app.use('/api/auth', authRoutes);
app.use('/api/post',postRoutes)


module.exports = app;