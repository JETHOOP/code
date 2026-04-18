import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FileEdit, ShieldCheck, Download, Sparkles } from 'lucide-react';

export default function Home() {
    const token = localStorage.getItem('token');
    if (token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
                    Build a resume that gets you <span className="text-blue-600">hired.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
                    Create professional, customized, and beautiful resumes in minutes. Choose from elegant layouts, advanced typography, and custom color themes designed to stand out.
                </p>
                <div className="mt-10 flex justify-center gap-x-6">
                    <Link
                        to="/register"
                        className="group inline-flex items-center justify-center rounded-full py-3 px-8 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 shadow-xl transition-all"
                    >
                        Create My Resume <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                    </Link>
                    <Link
                        to="/login"
                        className="group inline-flex items-center justify-center rounded-full py-3 px-8 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all"
                    >
                        Login to Account
                    </Link>
                </div>
            </main>

            {/* Feature Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to impress</h2>
                        <p className="mt-4 text-lg text-gray-600">Stop struggling with Word docs. Build it perfectly the first time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="glass rounded-2xl p-8 border border-gray-100 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                            <div className="mx-auto w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <FileEdit size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Live Editing</h3>
                            <p className="text-gray-600">See your changes happen instantly on an A4 preview canvas. No refreshing required.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="glass rounded-2xl p-8 border border-gray-100 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                            <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Storage</h3>
                            <p className="text-gray-600">Create an account to securely save multiple resumes. Access them anytime, anywhere.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="glass rounded-2xl p-8 border border-gray-100 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                            <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Download size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">1-Click PDF Export</h3>
                            <p className="text-gray-600">Download your flawless resume directly to PDF using perfectly optimized print layouts.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
