import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Preview from '../components/Preview';
import { Loader2, FileText, Download } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/resumes';

export default function ViewResume() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const res = await axios.get(`${API_URL}/public/${id}`);
                setResumeData(res.data);
            } catch (err) {
                console.error(err);
                alert('Failed to load resume or it does not exist.');
            } finally {
                setLoading(false);
            }
        };
        fetchResume();
    }, [id]);

    const handlePrint = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="animate-spin mr-3 text-blue-600" size={32} />
            </div>
        );
    }

    if (!resumeData) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
                <FileText size={64} className="text-gray-300 mb-4" />
                <h1 className="text-2xl font-bold text-gray-700">Resume Not Found</h1>
                <Link to="/" className="mt-4 text-blue-600 hover:underline">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0 print:hidden sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                        <FileText size={20} />
                    </div>
                    <span className="font-bold text-lg text-gray-900 tracking-tight">
                        {resumeData.personal?.fullName ? `${resumeData.personal.fullName}'s Resume` : 'Resume'}
                    </span>
                </div>
                <div>
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm transition font-semibold shadow-md"
                    >
                        <Download size={16} />
                        Download / Print
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center items-start print:p-0">
                <div className="relative transform origin-top w-full max-w-[210mm]">
                    <Preview data={resumeData} />
                </div>
            </main>
        </div>
    );
}
