import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FileText, Plus, Edit2, Trash2 } from 'lucide-react';
import { getAnonConfig } from '../utils/anon';

const API_URL = 'http://localhost:5000/api/resumes';

export default function Dashboard() {
    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchResumes();
    }, []);

    const fetchResumes = async () => {
        try {
            const res = await axios.get(API_URL, getAnonConfig());
            setResumes(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const createNewResume = async () => {
        try {
            const res = await axios.post(API_URL, {}, getAnonConfig());
            navigate(`/builder/${res.data._id}`);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteResume = async (id) => {
        if (window.confirm('Are you sure you want to delete this resume?')) {
            try {
                await axios.delete(`${API_URL}/${id}`, getAnonConfig());
                setResumes(resumes.filter(r => r._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Your Resumes</h1>
                        <p className="text-gray-500">Create, edit, and organize your professional profiles.</p>
                    </div>
                    <button
                        onClick={createNewResume}
                        className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl flex items-center transition-all transform hover:-translate-y-0.5"
                    >
                        <Plus size={20} className="mr-2" />
                        Create New
                    </button>
                </div>

                {/* Empty State */}
                {resumes.length === 0 ? (
                    <div className="glass rounded-2xl shadow-sm border border-white/40 p-16 text-center max-w-2xl mx-auto mt-20">
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FileText size={40} className="text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">No resumes found</h2>
                        <p className="text-gray-500 mb-8 text-lg">It looks like you haven't created any resumes yet. Start building your career profile now.</p>
                        <button
                            onClick={createNewResume}
                            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all"
                        >
                            Start Building
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resumes.map(resume => (
                            <div key={resume._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">

                                {/* Card visual top */}
                                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative p-4 flex items-center justify-center overflow-hidden">
                                    {/* Abstract resume blocks representing the content */}
                                    <div className="w-2/3 h-full bg-white shadow-sm border border-gray-100 opacity-90 p-3 transform rotate-[-2deg] transition-transform group-hover:rotate-0 flex flex-col gap-2">
                                        <div className="h-2 w-1/2 bg-gray-300 rounded" style={{ backgroundColor: resume.themeColor || '#cbd5e1' }}></div>
                                        <div className="h-1 w-3/4 bg-gray-200 rounded mt-2"></div>
                                        <div className="h-1 w-full bg-gray-200 rounded"></div>
                                        <div className="h-1 w-full bg-gray-200 rounded"></div>

                                        <div className="h-1 w-1/3 bg-gray-300 rounded mt-2" style={{ backgroundColor: resume.themeColor || '#cbd5e1' }}></div>
                                        <div className="h-1 w-full bg-gray-200 rounded mt-1"></div>
                                        <div className="h-1 w-full bg-gray-200 rounded"></div>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                        <Link
                                            to={`/builder/${resume._id}`}
                                            className="bg-white text-gray-900 hover:text-blue-600 font-semibold py-2 px-5 rounded-full shadow-lg flex items-center transition-transform transform scale-95 group-hover:scale-100"
                                        >
                                            <Edit2 size={16} className="mr-2" /> Open Editor
                                        </Link>
                                    </div>
                                </div>

                                {/* Card info bottom */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-gray-900 truncate mb-1" title={resume.personal?.fullName || 'Untitled Resume'}>
                                            {resume.personal?.fullName || 'Untitled Resume'}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: resume.themeColor || '#1f2937' }}></span>
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{resume.layout || 'Classic'} Layout</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-400">
                                            {new Date(resume.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                        <button
                                            onClick={() => deleteResume(resume._id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            title="Delete Resume"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
