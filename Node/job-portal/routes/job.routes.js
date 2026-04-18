const express = require('express');
const router = express.Router();
const { listJobs, getJob, createJob } = require('../controllers/job.controller');
const { protect } = require('../middleware/auth.middleware');

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', protect, createJob);

module.exports = router;
