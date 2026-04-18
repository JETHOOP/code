const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { register, login, uploadResume } = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `resume-${Date.now()}${ext}`);
  }
});
const upload = multer({ storage });

// auth
router.post('/register', register);
router.post('/login', login);

// upload resume for current user
router.post('/upload-resume', protect, upload.single('resume'), uploadResume);

module.exports = router;
