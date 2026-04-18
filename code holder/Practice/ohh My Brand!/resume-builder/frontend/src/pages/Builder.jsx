import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import { Loader2, Download, Save, ArrowLeft, Upload, FileJson, Link as LinkIcon } from 'lucide-react';
import { getAnonConfig } from '../utils/anon';

const API_URL = 'http://localhost:5000/api/resumes';

export default function Builder() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('editor'); // for mobile responsiveness later
    const [resumeData, setResumeData] = useState({
        themeColor: '#1f2937',
        layout: 'classic',
        font: 'Inter',
        personal: { fullName: '', email: '', phone: '', location: '', website: '', summary: '', photo: '' },
        experience: [],
        education: [],
        projects: [],
        skills: [],
        languages: [],
        certifications: []
    });

    useEffect(() => {
        if (id) {
            fetchResume();
        } else {
            setLoading(false);
        }
    }, [id]);

    const fetchResume = async () => {
        try {
            const res = await axios.get(`${API_URL}/${id}`, getAnonConfig());
            setResumeData({
                ...res.data,
                themeColor: res.data.themeColor || '#1f2937',
                layout: res.data.layout || 'classic',
                font: res.data.font || 'Inter',
                projects: res.data.projects || [],
                languages: res.data.languages || [],
                certifications: res.data.certifications || []
            });
        } catch (err) {
            console.error(err);
            alert('Failed to load resume');
            navigate('/');
        } finally {
            setLoading(false);
        }
    };

    const saveResume = async () => {
        setSaving(true);
        try {
            if (id) {
                await axios.put(`${API_URL}/${id}`, resumeData, getAnonConfig());
            } else {
                const res = await axios.post(API_URL, resumeData, getAnonConfig());
                navigate(`/builder/${res.data._id}`, { replace: true });
            }
        } catch (err) {
            console.error(err);
            alert('Failed to save resume');
        } finally {
            setSaving(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleExportJSON = () => {
        const dataStr = JSON.stringify(resumeData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${resumeData.personal.fullName || 'resume'}-data.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleImportJSON = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const parsed = JSON.parse(event.target.result);
                    // Just take the data fields, drop the _id to avoid conflicts if saving as new
                    const { _id, userId, createdAt, updatedAt, __v, ...safeData } = parsed;
                    setResumeData(prev => ({ ...prev, ...safeData }));
                } catch (error) {
                    alert('Invalid JSON file.');
                }
            };
            reader.readAsText(file);
        }
    };

    const handleCopyLink = () => {
        if (!id) {
            alert('Please save the resume first to generate a link.');
            return;
        }
        const url = `${window.location.origin}/resume/${id}`;
        navigator.clipboard.writeText(url);

        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            alert('Link copied! Note: Since you are running locally, this is a localhost link. Once deployed, it will use your real live domain.');
        } else {
            alert('Public link copied to clipboard!');
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
                <Loader2 className="animate-spin mr-3" size={24} /> Loading Editor...
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-[#eef2f6]"> {/* slightly nicer off-white backdrop */}

            {/* Top Navbar */}
            <header className="glass-dark text-white px-6 py-4 shrink-0 flex items-center justify-between z-20 print:hidden sticky top-0">
                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-400 hover:text-white transition group flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                            <ArrowLeft size={16} />
                        </div>
                    </Link>
                    <div>
                        <h1 className="font-bold tracking-wide text-lg">Builder Studio</h1>
                        <p className="text-xs text-gray-400 font-medium">Auto-saving to MongoDB</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center flex-wrap justify-end">

                    <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2.5 rounded-lg text-sm transition font-medium"
                        title="Copy Public Link"
                    >
                        <LinkIcon size={16} /> <span className="hidden sm:inline">Share</span>
                    </button>

                    <button
                        onClick={handleExportJSON}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2.5 rounded-lg text-sm transition font-medium"
                        title="Download Data (.json)"
                    >
                        <FileJson size={16} /> <span className="hidden sm:inline">JSON</span>
                    </button>

                    <label className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2.5 rounded-lg text-sm transition font-medium cursor-pointer" title="Import Data (.json)">
                        <Upload size={16} /> <span className="hidden sm:inline">Import</span>
                        <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                    </label>

                    <button
                        onClick={saveResume}
                        disabled={saving}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white px-5 py-2.5 rounded-lg text-sm transition font-semibold"
                    >
                        {saving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                        {saving ? 'Saving...' : 'Save'}
                    </button>

                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm transition font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    >
                        <Download size={16} />
                        <span className="hidden sm:inline">Export PDF</span>
                    </button>
                </div>
            </header>

            {/* Main Workspace splits into 2 panels */}
            <div className="flex flex-1 overflow-hidden print:overflow-visible h-full">
                {/* Editor Panel (Left) */}
                <div className="w-1/2 overflow-y-auto bg-gray-50 border-r border-gray-200 print:hidden custom-scrollbar shadow-[inset_-10px_0_20px_-10px_rgba(0,0,0,0.05)] relative z-10">
                    <Editor data={resumeData} setData={setResumeData} />
                </div>

                {/* Preview Panel (Right) */}
                <div className="w-1/2 overflow-y-auto p-12 flex justify-center items-start print:w-full print:p-0 print:block custom-scrollbar relative">

                    {/* subtle dots pattern background for the canvas wrapper */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                    <div className="relative z-10 transform origin-top transition-transform duration-300">
                        <Preview data={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
