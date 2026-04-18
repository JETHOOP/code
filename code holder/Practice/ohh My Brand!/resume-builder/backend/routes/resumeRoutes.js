import express from 'express';
import Resume from '../models/Resume.js';

const router = express.Router();

// Public Get single resume for sharing
router.get('/public/:id', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to ensure x-anonymous-id is present
const requireAnonymousId = (req, res, next) => {
    const anonId = req.headers['x-anonymous-id'];
    if (!anonId) {
        return res.status(401).json({ message: 'Anonymous ID is missing' });
    }
    req.anonymousId = anonId;
    next();
};

router.use(requireAnonymousId);

// Get all resumes for user
router.get('/', async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.anonymousId }).sort({ updatedAt: -1 });
        res.json(resumes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single resume
router.get('/:id', async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.anonymousId });
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new resume
router.post('/', async (req, res) => {
    const resume = new Resume({ ...req.body, userId: req.anonymousId });
    try {
        const newResume = await resume.save();
        res.status(201).json(newResume);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update resume
router.put('/:id', async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            { _id: req.params.id, userId: req.anonymousId },
            req.body,
            { new: true }
        );
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete resume
router.delete('/:id', async (req, res) => {
    try {
        const resume = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.anonymousId });
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json({ message: 'Resume deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
