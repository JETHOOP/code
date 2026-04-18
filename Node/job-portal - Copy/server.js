require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./db/db');

const authRoutes = require('./routes/auth.routes');
const applicationRoutes = require('./routes/application.routes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// static folder for resume files
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
app.use('/uploads', express.static(path.join(__dirname, UPLOAD_DIR)));

app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => res.send('Job Portal API is running'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
