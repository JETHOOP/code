import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import Home from './pages/Home';
import ViewResume from './pages/ViewResume';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Navbar /><Home /></>} />
                <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
                <Route path="/builder/:id?" element={<Builder />} />
                <Route path="/resume/:id" element={<ViewResume />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
