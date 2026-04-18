const Application = require('../models/application.model');
const User = require('../models/user.model');
const Job = require('../models/job.models');

exports.applyToJob = async (req, res) => {
  try {
    const { jobId, coverLetter } = req.body;
    if (!jobId) return res.status(400).json({ message: 'jobId is required' });

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    let resumePath = req.file ? req.file.path : undefined;
    if (!resumePath) {
      const user = await User.findById(req.user._id);
      if (!user.resume) return res.status(400).json({ message: 'No resume provided. Upload resume or attach one in this request.' });
      resumePath = user.resume;
    }

    const app = await Application.create({
      user: req.user._id,
      job: job._id,
      resume: resumePath,
      coverLetter
    });

    res.status(201).json(app);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMyApplications = async (req, res) => {
  const apps = await Application.find({ user: req.user._id }).populate('job');
  res.json(apps);
};

exports.getApplication = async (req, res) => {
  const app = await Application.findById(req.params.id).populate('job user', 'title name email');
  if (!app) return res.status(404).json({ message: 'Application not found' });

  if (app.user._id.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  res.json(app);
};
