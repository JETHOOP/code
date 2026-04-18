const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  resume: { type: String }, // snapshot path to resume at time of apply
  coverLetter: { type: String },
  status: { type: String, default: 'submitted', enum: ['submitted', 'reviewed', 'rejected', 'accepted'] },
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);
