import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                                <FileText size={24} />
                            </div>
                            <span className="font-bold text-xl text-gray-900 tracking-tight">Resume Builder</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/dashboard"
                            className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-5 py-2 rounded-lg shadow-md transition flex items-center gap-2"
                        >
                            <LayoutDashboard size={16} /> Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
