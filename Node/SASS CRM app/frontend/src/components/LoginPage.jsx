import { useState } from "react";
import { Link } from "react-router-dom"
import { Alert, AlertTitle } from '@mui/material';

function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [errorMsg, setErrorMsg] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })
            const data = await response.json()
            if (!response.ok) {
                // If backend returns 400 or 500, throw error to catch block
                throw new Error(data.message || "Login failed");
            }

            console.log("Success:", data);
        } catch (error) {
            setErrorMsg(error.message);
        }
        console.log(form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-800 to-indigo-900">

            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                            />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                            />
                    </div>

                            {errorMsg && (
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    <AlertTitle>Error</AlertTitle>
                                    {errorMsg}
                                </Alert>
                            )}
                    <button
                        type="submit"
                        className="w-full bg-sky-800 text-white py-2 rounded-xl hover:bg-sky-900 transition"
                    >
                        Login
                    </button>
                    <div className="text-center">
                        <Link className="text-blue-400 text-center" to="/register">Do not have an acount?Register here</Link>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default LoginPage;