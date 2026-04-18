import React from 'react';

export default function Preview({ data }) {
    const { layout, themeColor, personal, experience, education, projects, skills, languages, certifications } = data;

    const themeStyle = { color: themeColor || '#1f2937' };
    const borderThemeStyle = { borderColor: themeColor || '#1f2937' };
    const bgThemeStyle = { backgroundColor: themeColor || '#1f2937', color: 'white' };
    const fontStyle = { fontFamily: data.font || 'Inter' };

    if (layout === 'modern') {
        return (
            <div className="a4-paper print-container shadow-2xl rounded-sm overflow-hidden flex p-0 bg-white" style={{ ...fontStyle, WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                {/* Sidebar (Left) */}
                <div className="w-1/3 p-8 flex flex-col gap-6" style={bgThemeStyle}>

                    {/* Photo */}
                    {personal?.photo && (
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                            <img src={personal.photo} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    )}

                    {/* Contact */}
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 mb-3">Contact</h2>
                        <div className="text-sm space-y-2 font-medium opacity-90 break-words">
                            {personal?.email && <div>{personal.email}</div>}
                            {personal?.phone && <div>{personal.phone}</div>}
                            {personal?.location && <div>{personal.location}</div>}
                            {personal?.website && <div>{personal.website.replace(/^https?:\/\//, '')}</div>}
                        </div>
                    </div>

                    {/* Skills */}
                    {skills?.length > 0 && (
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 mb-3">Skills</h2>
                            <ul className="text-sm space-y-1 opacity-90 font-medium">
                                {skills.map(skill => (
                                    <li key={skill.id}>• {skill.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Languages */}
                    {languages?.length > 0 && (
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 mb-3">Languages</h2>
                            <ul className="text-sm space-y-1 opacity-90 font-medium">
                                {languages.map(lang => (
                                    <li key={lang.id} className="flex justify-between">
                                        <span>{lang.name}</span>
                                        <span className="text-xs opacity-75 mt-0.5">{lang.proficiency}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Main Content (Right) */}
                <div className="w-2/3 p-8 bg-white text-gray-800 flex flex-col gap-6">
                    {/* Header Area */}
                    <div>
                        <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-2" style={themeStyle}>
                            {personal?.fullName || 'Your Name'}
                        </h1>
                        {personal?.summary && (
                            <p className="text-sm leading-relaxed text-gray-700 mt-4">{personal.summary}</p>
                        )}
                    </div>

                    {/* Experience */}
                    {experience?.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#e5e7eb' }}>Experience</h2>
                            <div className="space-y-4">
                                {experience.map(exp => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-bold text-md text-gray-900">{exp.title || 'Job Title'}</h3>
                                            <span className="text-sm font-semibold" style={themeStyle}>{exp.startDate} {exp.startDate && exp.endDate && ' - '} {exp.endDate}</span>
                                        </div>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="italic text-sm text-gray-700">{exp.company || 'Company'}</span>
                                            <span className="text-xs text-gray-500">{exp.location}</span>
                                        </div>
                                        {exp.description && <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projects */}
                    {projects?.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#e5e7eb' }}>Projects</h2>
                            <div className="space-y-4">
                                {projects.map(proj => (
                                    <div key={proj.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-bold text-md text-gray-900">{proj.name || 'Project Name'}</h3>
                                            {proj.link && <a href={proj.link} className="text-xs underline text-gray-500">{proj.link.replace(/^https?:\/\//, '')}</a>}
                                        </div>
                                        {proj.description && <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{proj.description}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {education?.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#e5e7eb' }}>Education</h2>
                            <div className="space-y-3">
                                {education.map(edu => (
                                    <div key={edu.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-bold text-md text-gray-900">{edu.degree || 'Degree'}</h3>
                                            <span className="text-sm font-semibold" style={themeStyle}>{edu.startDate} {edu.startDate && edu.endDate && ' - '} {edu.endDate}</span>
                                        </div>
                                        <div className="flex justify-between items-baseline">
                                            <span className="italic text-sm text-gray-700">{edu.school || 'School'}</span>
                                            <span className="text-xs text-gray-500">{edu.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certifications */}
                    {certifications?.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#e5e7eb' }}>Certifications</h2>
                            <div className="space-y-3">
                                {certifications.map(cert => (
                                    <div key={cert.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-bold text-md text-gray-900">{cert.name}</h3>
                                            <span className="text-sm font-semibold text-gray-500">{cert.date}</span>
                                        </div>
                                        <div className="text-sm text-gray-700">{cert.issuer}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (layout === 'minimal') {
        return (
            <div className="a4-paper print-container rounded-sm shadow-2xl bg-white text-gray-800 overflow-hidden break-words" style={{ ...fontStyle, WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                <div className="mb-8 pb-4 border-b-4 flex items-center justify-between" style={borderThemeStyle}>
                    <div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter" style={themeStyle}>{personal?.fullName || 'Your Name'}</h1>
                        {personal?.summary && <p className="text-sm mt-3 max-w-xl text-gray-600 border-l-2 pl-3" style={borderThemeStyle}>{personal.summary}</p>}
                    </div>
                    {personal?.photo && (
                        <div className="w-20 h-20 rounded shadow-md overflow-hidden flex-shrink-0 border" style={borderThemeStyle}>
                            <img src={personal.photo} alt="Profile" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all" />
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-10">
                    {personal?.email && <div>{personal.email}</div>}
                    {personal?.phone && <div>{personal.phone}</div>}
                    {personal?.location && <div>{personal.location}</div>}
                    {personal?.website && <div>{personal.website.replace(/^https?:\/\//, '')}</div>}
                </div>

                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12">

                        {experience?.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-sm font-black uppercase tracking-widest mb-4" style={themeStyle}>Experience</h2>
                                <div className="space-y-5">
                                    {experience.map(exp => (
                                        <div key={exp.id} className="grid grid-cols-12 gap-4">
                                            <div className="col-span-3 text-xs font-bold text-gray-400 mt-1">{exp.startDate} - {exp.endDate}</div>
                                            <div className="col-span-9">
                                                <h3 className="font-bold text-gray-900 text-base">{exp.title} <span className="text-gray-400 font-normal">at {exp.company}</span></h3>
                                                <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {projects?.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-sm font-black uppercase tracking-widest mb-4" style={themeStyle}>Projects</h2>
                                <div className="space-y-5">
                                    {projects.map(proj => (
                                        <div key={proj.id} className="grid grid-cols-12 gap-4">
                                            <div className="col-span-3 text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">Showcase</div>
                                            <div className="col-span-9">
                                                <h3 className="font-bold text-gray-900 text-base">{proj.name}</h3>
                                                {proj.link && <a href={proj.link} className="text-xs text-blue-500 hover:underline">{proj.link}</a>}
                                                <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-wrap">{proj.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {education?.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-sm font-black uppercase tracking-widest mb-4" style={themeStyle}>Education</h2>
                                <div className="space-y-4">
                                    {education.map(edu => (
                                        <div key={edu.id} className="grid grid-cols-12 gap-4">
                                            <div className="col-span-3 text-xs font-bold text-gray-400 mt-1">{edu.startDate} - {edu.endDate}</div>
                                            <div className="col-span-9">
                                                <h3 className="font-bold text-gray-900 text-base">{edu.degree}</h3>
                                                <div className="text-sm text-gray-500">{edu.school}, {edu.location}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {skills?.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-sm font-black uppercase tracking-widest mb-3" style={themeStyle}>Skills</h2>
                                <div className="flex flex-wrap gap-2 uppercase tracking-wider text-xs font-bold text-gray-600">
                                    {skills.map(skill => (
                                        <span key={skill.id} className="px-3 py-1 border border-gray-200 rounded-full">{skill.name}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-8">
                            {certifications?.length > 0 && (
                                <div>
                                    <h2 className="text-sm font-black uppercase tracking-widest mb-3" style={themeStyle}>Certifications</h2>
                                    <ul className="space-y-2">
                                        {certifications.map(cert => (
                                            <li key={cert.id} className="text-sm">
                                                <span className="font-bold text-gray-900">{cert.name}</span> <span className="text-gray-500">({cert.issuer}) {cert.date}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {languages?.length > 0 && (
                                <div>
                                    <h2 className="text-sm font-black uppercase tracking-widest mb-3" style={themeStyle}>Languages</h2>
                                    <ul className="space-y-2">
                                        {languages.map(lang => (
                                            <li key={lang.id} className="text-sm">
                                                <span className="font-bold text-gray-900">{lang.name}</span> <span className="text-gray-500">- {lang.proficiency}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (layout === 'professional') {
        return (
            <div className="a4-paper print-container rounded-sm shadow-2xl overflow-hidden break-words flex flex-col p-0 bg-gray-50" style={{ ...fontStyle, WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>

                {/* Top Header Block */}
                <div className="w-full p-10 flex items-center justify-between" style={bgThemeStyle}>
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight mb-2">{personal?.fullName || 'Your Name'}</h1>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium opacity-90">
                            {personal?.email && <span>{personal.email}</span>}
                            {personal?.phone && <><span>|</span><span>{personal.phone}</span></>}
                            {personal?.website && <><span>|</span><span>{personal.website.replace(/^https?:\/\//, '')}</span></>}
                            {personal?.location && <><span>|</span><span>{personal.location}</span></>}
                        </div>
                    </div>
                    {personal?.photo && (
                        <div className="w-24 h-24 rounded shadow-lg overflow-hidden border-2 border-white/50 shrink-0 bg-white">
                            <img src={personal.photo} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>

                {/* Body */}
                <div className="p-10 flex-1 grid grid-cols-3 gap-8 text-gray-800">

                    {/* Main Column */}
                    <div className="col-span-2 space-y-8">
                        {personal?.summary && (
                            <div>
                                <h2 className="text-xl font-bold border-b-2 pb-1 mb-3" style={borderThemeStyle}>Profile</h2>
                                <p className="text-sm text-gray-700 leading-relaxed font-medium">{personal.summary}</p>
                            </div>
                        )}

                        {experience?.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold border-b-2 pb-1 mb-4" style={borderThemeStyle}>Professional Experience</h2>
                                <div className="space-y-6">
                                    {experience.map(exp => (
                                        <div key={exp.id}>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-bold text-gray-700 uppercase tracking-wide" style={themeStyle}>{exp.company}</span>
                                                <span className="text-xs font-semibold text-white px-2 py-0.5 rounded shadow-sm" style={{ backgroundColor: themeColor || '#4b5563' }}>{exp.startDate} - {exp.endDate}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {projects?.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold border-b-2 pb-1 mb-4" style={borderThemeStyle}>Key Projects</h2>
                                <div className="space-y-5">
                                    {projects.map(proj => (
                                        <div key={proj.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="font-bold text-md text-gray-900">{proj.name}</h3>
                                                {proj.link && <a href={proj.link} className="text-xs font-semibold hover:underline" style={themeStyle}>{proj.link.replace(/^https?:\/\//, '')}</a>}
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2 leading-relaxed whitespace-pre-wrap">{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Side Column */}
                    <div className="col-span-1 space-y-8">
                        {skills?.length > 0 && (
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold border-b pb-1 mb-4" style={borderThemeStyle}>Expertise</h2>
                                <ul className="text-sm space-y-2 font-medium text-gray-700 list-disc list-inside marker:text-[color:var(--tw-border-opacity)]" style={{ '--tw-border-opacity': themeColor }}>
                                    {skills.map(skill => (
                                        <li key={skill.id}>{skill.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {education?.length > 0 && (
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold border-b pb-1 mb-4" style={borderThemeStyle}>Education</h2>
                                <div className="space-y-4">
                                    {education.map(edu => (
                                        <div key={edu.id}>
                                            <h3 className="font-bold text-sm text-gray-900 leading-tight">{edu.degree}</h3>
                                            <div className="text-xs font-semibold mt-1 mb-1" style={themeStyle}>{edu.school}</div>
                                            <div className="flex justify-between text-xs text-gray-500">
                                                <span>{edu.startDate} - {edu.endDate}</span>
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {certifications?.length > 0 && (
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold border-b pb-1 mb-4" style={borderThemeStyle}>Certifications</h2>
                                <ul className="text-sm space-y-3">
                                    {certifications.map(cert => (
                                        <li key={cert.id}>
                                            <div className="font-bold text-gray-900">{cert.name}</div>
                                            <div className="text-xs text-gray-600 font-medium">{cert.issuer} &bull; {cert.date}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {languages?.length > 0 && (
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-lg font-bold border-b pb-1 mb-4" style={borderThemeStyle}>Languages</h2>
                                <ul className="text-sm space-y-2">
                                    {languages.map(lang => (
                                        <li key={lang.id} className="flex justify-between border-b pb-1 last:border-0 border-gray-50">
                                            <span className="font-bold text-gray-700">{lang.name}</span>
                                            <span className="text-gray-500">{lang.proficiency}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        );
    }

    // default 'classic'
    return (
        <div className="a4-paper print-container rounded-sm shadow-2xl bg-white text-gray-800 overflow-hidden break-words" style={{ ...fontStyle, WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>

            {/* Photo (Classic Top Right or Left floating could be added, but let's keep it centered if present) */}
            <div className="mb-6 pb-6 border-b-2 flex flex-col items-center text-center relative" style={borderThemeStyle}>

                {personal?.photo && (
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2" style={borderThemeStyle}>
                        <img src={personal.photo} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                )}

                <h1 className="text-3xl font-bold tracking-tight uppercase mb-2" style={themeStyle}>
                    {personal?.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-700 font-medium">
                    {personal?.email && <span>{personal.email}</span>}
                    {personal?.phone && <><span>•</span><span>{personal.phone}</span></>}
                    {personal?.location && <><span>•</span><span>{personal.location}</span></>}
                    {personal?.website && <><span>•</span><span>{personal.website.replace(/^https?:\/\//, '')}</span></>}
                </div>
            </div>

            {/* Summary */}
            {personal?.summary && (
                <div className="mb-6">
                    <p className="text-sm leading-relaxed text-gray-700">{personal.summary}</p>
                </div>
            )}

            {/* Experience */}
            {experience?.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#d1d5db' }}>
                        Experience
                    </h2>
                    <div className="space-y-4">
                        {experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-md text-gray-900">{exp.title || 'Job Title'}</h3>
                                    <span className="text-sm font-semibold" style={themeStyle}>
                                        {exp.startDate} {exp.startDate && exp.endDate && ' - '} {exp.endDate}
                                    </span>
                                </div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <span className="italic text-sm text-gray-700">{exp.company || 'Company'}</span>
                                    <span className="text-sm text-gray-600">{exp.location}</span>
                                </div>
                                {exp.description && (
                                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {exp.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {projects?.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#d1d5db' }}>
                        Projects
                    </h2>
                    <div className="space-y-4">
                        {projects.map(proj => (
                            <div key={proj.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-md text-gray-900">{proj.name || 'Project Name'}</h3>
                                    {proj.link && (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm underline" style={themeStyle}>
                                            {proj.link.replace(/^https?:\/\//, '')}
                                        </a>
                                    )}
                                </div>
                                {proj.description && (
                                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {proj.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Education */}
            {education?.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#d1d5db' }}>
                        Education
                    </h2>
                    <div className="space-y-4">
                        {education.map(edu => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-md text-gray-900">{edu.degree || 'Degree'}</h3>
                                    <span className="text-sm font-semibold" style={themeStyle}>
                                        {edu.startDate} {edu.startDate && edu.endDate && ' - '} {edu.endDate}
                                    </span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="italic text-sm text-gray-700">{edu.school || 'School'}</span>
                                    <span className="text-sm text-gray-600">{edu.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="col-span-1 border-r border-gray-100 pr-4">
                    {/* Skills */}
                    {skills?.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#d1d5db' }}>
                                Skills
                            </h2>
                            <div className="flex flex-wrap gap-x-3 gap-y-2">
                                {skills.map(skill => (
                                    <span key={skill.id} className="text-sm font-medium px-2 py-1 rounded" style={{ backgroundColor: themeColor ? `${themeColor}15` : '#f3f4f6', color: themeColor || '#1f2937' }}>
                                        {skill.name || 'Skill Name'}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Languages */}
                    {languages?.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#d1d5db' }}>Languages</h2>
                            <ul className="text-sm space-y-1">
                                {languages.map(lang => (
                                    <li key={lang.id} className="flex justify-between text-gray-700 font-medium">
                                        <span>{lang.name}</span><span className="text-gray-400">{lang.proficiency}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="col-span-1 pl-4">
                    {/* Certifications */}
                    {certifications?.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-1 mb-3" style={{ ...themeStyle, borderColor: '#d1d5db' }}>Certifications</h2>
                            <ul className="text-sm space-y-3">
                                {certifications.map(cert => (
                                    <li key={cert.id} className="text-gray-700">
                                        <span className="font-bold block text-gray-900">{cert.name}</span>
                                        <span className="text-gray-500 font-medium">{cert.issuer} {cert.date ? `(${cert.date})` : ''}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
