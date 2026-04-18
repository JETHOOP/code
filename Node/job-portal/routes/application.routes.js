const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { applyToJob, getMyApplications, getApplication } = require('../controllers/application.controller');
const { protect } = require('../middleware/auth.middleware');

const uploadDir = process.env.UPLOAD_DIR;
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `resume-apply-${Date.now()}${ext}`);
  }
});
const upload = multer({ storage });

// apply to a job (optionally attach resume file)
router.post('/', protect, upload.single('resume'), applyToJob);

// get current user's applications
router.get('/me', protect, getMyApplications);

// get single application
router.get('/:id', protect, getApplication);

module.exports = router;
