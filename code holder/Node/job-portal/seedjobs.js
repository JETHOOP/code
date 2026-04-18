require('dotenv').config();
const connectDB = require('./config/db');
const Job = require('./models/Job');

const jobs = [
  { title: 'Frontend Developer', company: 'Acme Tech', location: 'Remote', description: '3+ years experience with React.' },
  { title: 'Backend Developer', company: 'ByteSoft', location: 'Mumbai, India', description: 'Node.js & Express required.' },
  { title: 'Full Stack Intern', company: 'Startup XYZ', location: 'Gandhinagar, India', description: 'Internship for 6 months.' }
];

const seed = async () => {
  try {
    await connectDB();
    await Job.deleteMany({});
    await Job.insertMany(jobs);
    console.log('Jobs seeded');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
