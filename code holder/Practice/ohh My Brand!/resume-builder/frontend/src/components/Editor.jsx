import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Plus, Trash2, ArrowUp, ArrowDown, Upload, Type, Palette, LayoutTemplate } from 'lucide-react';

export default function Editor({ data, setData }) {
    const THEMES = ['#1f2937', '#2563eb', '#059669', '#dc2626', '#7c3aed', '#ea580c'];
    const FONTS = ['Inter', 'Roboto', 'Playfair Display', 'Merriweather'];

    const changeTheme = (color) => setData(prev => ({ ...prev, themeColor: color }));
    const setLayout = (layoutType) => setData(prev => ({ ...prev, layout: layoutType }));
    const setFont = (fontFamily) => setData(prev => ({ ...prev, font: fontFamily }));

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatePersonal('photo', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const updatePersonal = (field, value) => {
        setData(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
    };

    const moveItem = (listName, index, direction) => {
        setData(prev => {
            const list = [...prev[listName]];
            if (direction === 'UP' && index > 0) {
                [list[index - 1], list[index]] = [list[index], list[index - 1]];
            } else if (direction === 'DOWN' && index < list.length - 1) {
                [list[index + 1], list[index]] = [list[index], list[index + 1]];
            }
            return { ...prev, [listName]: list };
        });
    };

    // Lists management
    const addExperience = () => setData(prev => ({ ...prev, experience: [...prev.experience, { id: uuidv4(), title: '', company: '', location: '', startDate: '', endDate: '', description: '' }] }));
    const updateExperience = (id, field, value) => setData(prev => ({ ...prev, experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp) }));
    const removeExperience = (id) => setData(prev => ({ ...prev, experience: prev.experience.filter(exp => exp.id !== id) }));

    const addProject = () => setData(prev => ({ ...prev, projects: [...(prev.projects || []), { id: uuidv4(), name: '', link: '', description: '' }] }));
    const updateProject = (id, field, value) => setData(prev => ({ ...prev, projects: prev.projects.map(proj => proj.id === id ? { ...proj, [field]: value } : proj) }));
    const removeProject = (id) => setData(prev => ({ ...prev, projects: prev.projects.filter(proj => proj.id !== id) }));

    const addEducation = () => setData(prev => ({ ...prev, education: [...prev.education, { id: uuidv4(), degree: '', school: '', location: '', startDate: '', endDate: '' }] }));
    const updateEducation = (id, field, value) => setData(prev => ({ ...prev, education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu) }));
    const removeEducation = (id) => setData(prev => ({ ...prev, education: prev.education.filter(edu => edu.id !== id) }));

    const addSkill = () => setData(prev => ({ ...prev, skills: [...prev.skills, { id: uuidv4(), name: '' }] }));
    const updateSkill = (id, newName) => setData(prev => ({ ...prev, skills: prev.skills.map(skill => skill.id === id ? { ...skill, name: newName } : skill) }));
    const removeSkill = (id) => setData(prev => ({ ...prev, skills: prev.skills.filter(skill => skill.id !== id) }));

    const addLanguage = () => setData(prev => ({ ...prev, languages: [...(prev.languages || []), { id: uuidv4(), name: '', proficiency: '' }] }));
    const updateLanguage = (id, field, value) => setData(prev => ({ ...prev, languages: prev.languages.map(lang => lang.id === id ? { ...lang, [field]: value } : lang) }));
    const deleteLanguage = (id) => setData(prev => ({ ...prev, languages: prev.languages.filter(lang => lang.id !== id) }));

    const addCertification = () => setData(prev => ({ ...prev, certifications: [...(prev.certifications || []), { id: uuidv4(), name: '', issuer: '', date: '' }] }));
    const updateCertification = (id, field, value) => setData(prev => ({ ...prev, certifications: prev.certifications.map(cert => cert.id === id ? { ...cert, [field]: value } : cert) }));
    const deleteCertification = (id) => setData(prev => ({ ...prev, certifications: prev.certifications.filter(cert => cert.id !== id) }));


    const InputG = ({ label, value, onChange, placeholder, type = "text" }) => (
        <div className="mb-5">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{label}</label>
            <input
                type={type}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition shadow-sm"
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );

    return (
        <div className="max-w-2xl mx-auto pb-24 p-8">

            {/* Configuration Header */}
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Configure Resume</h1>

            {/* Design Settings (Theme, Layout, Font) */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Colors */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg"><Palette size={16} /></div>
                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Accent</h2>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                        {THEMES.map(color => (
                            <button
                                key={color}
                                onClick={() => changeTheme(color)}
                                className={`w-9 h-9 rounded-full border-2 transition-all shadow-sm ${data.themeColor === color ? 'border-gray-900 scale-110 ring-4 ring-gray-100' : 'border-white hover:scale-105 hover:shadow-md'}`}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                </div>

                {/* Layout */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg"><LayoutTemplate size={16} /></div>
                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Structure</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setLayout('classic')}
                            className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all shadow-sm ${data.layout === 'classic' ? 'bg-purple-50 border-purple-200 text-purple-800 ring-2 ring-purple-100' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                            Classic Centered
                        </button>
                        <button
                            onClick={() => setLayout('modern')}
                            className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all shadow-sm ${data.layout === 'modern' ? 'bg-purple-50 border-purple-200 text-purple-800 ring-2 ring-purple-100' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                            Modern Panel
                        </button>
                        <button
                            onClick={() => setLayout('minimal')}
                            className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all shadow-sm ${data.layout === 'minimal' ? 'bg-purple-50 border-purple-200 text-purple-800 ring-2 ring-purple-100' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                            Minimal Timeline
                        </button>
                        <button
                            onClick={() => setLayout('professional')}
                            className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all shadow-sm ${data.layout === 'professional' ? 'bg-purple-50 border-purple-200 text-purple-800 ring-2 ring-purple-100' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                            Professional Block
                        </button>
                    </div>
                </div>

                {/* Typography */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm col-span-1 md:col-span-3">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-1.5 bg-orange-50 text-orange-600 rounded-lg"><Type size={16} /></div>
                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Typography Family</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {FONTS.map(font => (
                            <button
                                key={font}
                                onClick={() => setFont(font)}
                                className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${data.font === font ? 'bg-orange-50 border-orange-200 text-orange-800 shadow-sm' : 'bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100'}`}
                                style={{ fontFamily: font }}
                            >
                                {font}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Editor Sections... */}

            {/* Personal Details */}
            <section className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">1</span>
                    Personal Details
                </h2>

                <div className="mb-8 flex items-center gap-6 bg-white p-6 border border-gray-100 rounded-2xl shadow-sm">
                    <div className="w-24 h-24 rounded-full bg-gray-50 border-2 border-dashed border-gray-300 overflow-hidden flex items-center justify-center shrink-0">
                        {data.personal?.photo ? (
                            <img src={data.personal.photo} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-400 text-xs font-medium">Avatar</span>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Profile Picture (Optional)</label>
                        <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2.5 rounded-lg text-sm font-medium transition shadow-sm flex items-center w-fit">
                            <Upload size={16} className="mr-2 text-gray-500" /> Upload Image
                            <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-5">
                    <InputG label="Full Name" value={data.personal?.fullName} onChange={(val) => updatePersonal('fullName', val)} />
                    <InputG label="Email Address" value={data.personal?.email} onChange={(val) => updatePersonal('email', val)} type="email" />
                    <InputG label="Phone Number" value={data.personal?.phone} onChange={(val) => updatePersonal('phone', val)} />
                    <InputG label="Location" value={data.personal?.location} onChange={(val) => updatePersonal('location', val)} placeholder="City, State" />
                    <div className="col-span-2">
                        <InputG label="Website / LinkedIn" value={data.personal?.website} onChange={(val) => updatePersonal('website', val)} />
                    </div>
                    <div className="col-span-2 mb-4">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Professional Summary</label>
                        <textarea
                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition shadow-sm"
                            rows={4}
                            value={data.personal?.summary || ''}
                            onChange={(e) => updatePersonal('summary', e.target.value)}
                            placeholder="Highlight your top skills and career goals..."
                        ></textarea>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">2</span>
                    Work Experience
                </h2>
                <div className="space-y-6">
                    {data.experience?.map((exp, index) => (
                        <div key={exp.id} className="bg-white border border-gray-100 rounded-2xl p-6 relative group shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -top-3 right-6 bg-white border border-gray-200 rounded-full px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shadow-sm">
                                <button onClick={() => moveItem('experience', index, 'UP')} disabled={index === 0} className="p-1 text-gray-400 hover:text-blue-600 disabled:opacity-30 rounded hover:bg-gray-100"><ArrowUp size={14} /></button>
                                <button onClick={() => moveItem('experience', index, 'DOWN')} disabled={index === data.experience.length - 1} className="p-1 text-gray-400 hover:text-blue-600 disabled:opacity-30 rounded hover:bg-gray-100"><ArrowDown size={14} /></button>
                                <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                <button onClick={() => removeExperience(exp.id)} className="p-1 text-gray-400 hover:text-red-500 rounded hover:bg-gray-100"><Trash2 size={14} /></button>
                            </div>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                                <InputG label="Job Title" value={exp.title} onChange={(val) => updateExperience(exp.id, 'title', val)} />
                                <InputG label="Company" value={exp.company} onChange={(val) => updateExperience(exp.id, 'company', val)} />
                                <InputG label="Start Date" value={exp.startDate} onChange={(val) => updateExperience(exp.id, 'startDate', val)} placeholder="MM/YYYY" />
                                <InputG label="End Date" value={exp.endDate} onChange={(val) => updateExperience(exp.id, 'endDate', val)} placeholder="Present" />
                                <InputG label="Location" value={exp.location} onChange={(val) => updateExperience(exp.id, 'location', val)} />
                                <div className="col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                    <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm min-h-[120px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" value={exp.description || ''} onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={addExperience} className="mt-6 flex items-center justify-center w-full py-3 gap-2 text-sm font-bold text-gray-600 border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 transition"><Plus size={18} /> Add Experience</button>
            </section>

            {/* Projects */}
            <section className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">3</span>
                    Projects
                </h2>
                <div className="space-y-6">
                    {data.projects?.map((proj, index) => (
                        <div key={proj.id} className="bg-white border border-gray-100 rounded-2xl p-6 relative group shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -top-3 right-6 bg-white border border-gray-200 rounded-full px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shadow-sm">
                                <button onClick={() => moveItem('projects', index, 'UP')} disabled={index === 0} className="p-1 text-gray-400 hover:text-blue-600 disabled:opacity-30 rounded hover:bg-gray-100"><ArrowUp size={14} /></button>
                                <button onClick={() => moveItem('projects', index, 'DOWN')} disabled={index === (data.projects?.length || 0) - 1} className="p-1 text-gray-400 hover:text-blue-600 disabled:opacity-30 rounded hover:bg-gray-100"><ArrowDown size={14} /></button>
                                <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                <button onClick={() => removeProject(proj.id)} className="p-1 text-gray-400 hover:text-red-500 rounded hover:bg-gray-100"><Trash2 size={14} /></button>
                            </div>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                                <InputG label="Project Name" value={proj.name} onChange={(val) => updateProject(proj.id, 'name', val)} />
                                <InputG label="Link (Optional)" value={proj.link} onChange={(val) => updateProject(proj.id, 'link', val)} placeholder="https://..." />
                                <div className="col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                    <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm min-h-[90px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" value={proj.description || ''} onChange={(e) => updateProject(proj.id, 'description', e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={addProject} className="mt-6 flex items-center justify-center w-full py-3 gap-2 text-sm font-bold text-gray-600 border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 transition"><Plus size={18} /> Add Project</button>
            </section>

            {/* Education */}
            <section className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">4</span>
                    Education
                </h2>
                <div className="space-y-6">
                    {data.education?.map((edu, index) => (
                        <div key={edu.id} className="bg-white border border-gray-100 rounded-2xl p-6 relative group shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -top-3 right-6 bg-white border border-gray-200 rounded-full px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shadow-sm">
                                <button onClick={() => moveItem('education', index, 'UP')} disabled={index === 0} className="p-1 text-gray-400 hover:text-blue-600 disabled:opacity-30 rounded hover:bg-gray-100"><ArrowUp size={14} /></button>
                                <button onClick={() => moveItem('education', index, 'DOWN')} disabled={index === data.education.length - 1} className="p-1 text-gray-400 hover:text-blue-600 disabled:opacity-30 rounded hover:bg-gray-100"><ArrowDown size={14} /></button>
                                <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                <button onClick={() => removeEducation(edu.id)} className="p-1 text-gray-400 hover:text-red-500 rounded hover:bg-gray-100"><Trash2 size={14} /></button>
                            </div>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                                <InputG label="Degree / Program" value={edu.degree} onChange={(val) => updateEducation(edu.id, 'degree', val)} />
                                <InputG label="School" value={edu.school} onChange={(val) => updateEducation(edu.id, 'school', val)} />
                                <InputG label="Start Date" value={edu.startDate} onChange={(val) => updateEducation(edu.id, 'startDate', val)} placeholder="YYYY" />
                                <InputG label="End Date" value={edu.endDate} onChange={(val) => updateEducation(edu.id, 'endDate', val)} placeholder="YYYY" />
                                <InputG label="Location" value={edu.location} onChange={(val) => updateEducation(edu.id, 'location', val)} />
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={addEducation} className="mt-6 flex items-center justify-center w-full py-3 gap-2 text-sm font-bold text-gray-600 border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 transition"><Plus size={18} /> Add Education</button>
            </section>

            {/* Skills */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">5</span>
                        Skills
                    </h2>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {data.skills?.map((skill) => (
                            <div key={skill.id} className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden pr-1 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition shadow-sm">
                                <input type="text" className="bg-transparent border-none px-4 py-2 text-sm font-medium text-gray-800 focus:outline-none w-32" value={skill.name} onChange={(e) => updateSkill(skill.id, e.target.value)} placeholder="React JS" />
                                <button onClick={() => removeSkill(skill.id)} className="p-1.5 text-gray-400 hover:bg-red-50 rounded hover:text-red-500 transition mr-1"><Trash2 size={14} /></button>
                            </div>
                        ))}
                    </div>
                    <button onClick={addSkill} className="flex items-center gap-2 text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 px-5 py-2.5 rounded-xl shadow-md transition"><Plus size={16} /> Add Skill Tag</button>
                </div>
            </section>

            {/* Languages */}
            <section className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">6</span>
                    Languages
                </h2>
                <div className="space-y-6">
                    {data.languages?.map((lang) => (
                        <div key={lang.id} className="bg-white border border-gray-100 rounded-2xl p-6 relative group shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -top-3 right-6 bg-white border border-gray-200 rounded-full px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shadow-sm">
                                <button onClick={() => deleteLanguage(lang.id)} className="p-1 text-gray-400 hover:text-red-500 rounded hover:bg-gray-100"><Trash2 size={14} /></button>
                            </div>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                                <InputG label="Language" value={lang.name} onChange={(val) => updateLanguage(lang.id, 'name', val)} placeholder="English" />
                                <InputG label="Proficiency" value={lang.proficiency} onChange={(val) => updateLanguage(lang.id, 'proficiency', val)} placeholder="Native" />
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={addLanguage} className="mt-6 flex items-center justify-center w-full py-3 gap-2 text-sm font-bold text-gray-600 border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 transition">
                    <Plus size={18} /> Add Language
                </button>
            </section>

            {/* Certifications */}
            <section className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">7</span>
                    Certifications
                </h2>
                <div className="space-y-6">
                    {data.certifications?.map((cert) => (
                        <div key={cert.id} className="bg-white border border-gray-100 rounded-2xl p-6 relative group shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -top-3 right-6 bg-white border border-gray-200 rounded-full px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shadow-sm">
                                <button onClick={() => deleteCertification(cert.id)} className="p-1 text-gray-400 hover:text-red-500 rounded hover:bg-gray-100"><Trash2 size={14} /></button>
                            </div>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                                <InputG label="Name" value={cert.name} onChange={(val) => updateCertification(cert.id, 'name', val)} />
                                <InputG label="Issuer" value={cert.issuer} onChange={(val) => updateCertification(cert.id, 'issuer', val)} />
                                <div className="col-span-2">
                                    <InputG label="Date" value={cert.date} onChange={(val) => updateCertification(cert.id, 'date', val)} placeholder="YYYY" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={addCertification} className="mt-6 flex items-center justify-center w-full py-3 gap-2 text-sm font-bold text-gray-600 border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 transition">
                    <Plus size={18} /> Add Certification
                </button>
            </section>

        </div>
    );
}
