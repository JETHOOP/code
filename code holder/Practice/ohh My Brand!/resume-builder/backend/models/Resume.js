import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String },
    company: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String }
});

const educationSchema = new mongoose.Schema({
    id: { type: String, required: true },
    degree: { type: String },
    school: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String }
});

const projectSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String },
    link: { type: String },
    description: { type: String }
});

const skillSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String }
});

const resumeSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    themeColor: { type: String, default: '#1f2937' },
    layout: { type: String, default: 'classic' },
    font: { type: String, default: 'Inter' },
    personal: {
        fullName: { type: String, default: '' },
        email: { type: String, default: '' },
        phone: { type: String, default: '' },
        location: { type: String, default: '' },
        website: { type: String, default: '' },
        summary: { type: String, default: '' },
        photo: { type: String, default: '' }
    },
    experience: [experienceSchema],
    education: [educationSchema],
    projects: [projectSchema],
    skills: [{ id: String, name: String }],
    languages: [{ id: String, name: String, proficiency: String }],
    certifications: [{ id: String, name: String, issuer: String, date: String }]
}, { timestamps: true });

export default mongoose.model('Resume', resumeSchema);
