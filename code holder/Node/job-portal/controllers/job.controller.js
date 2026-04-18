const Job = require('../models/job.models');

exports.listJobs = async (req, res) => {
  const jobs = await Job.find().sort({ postedAt: -1 });
  res.json(jobs);
};

exports.getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });
  res.json(job);
};

exports.createJob = async (req, res) => {
  const { title, company, location, description } = req.body;
  const job = await Job.create({ title, company, location, description });
  res.status(201).json(job);
};
