import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)  
            })
            const data = response.json()
            navigate("/login")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        console.log(form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-800 to-indigo-900">

            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Register
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                        />
                    </div>

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

                    <button
                        type="submit"
                        className="w-full bg-sky-800 text-white py-2 rounded-xl hover:bg-sky-900 transition"
                    >
                        Register
                    </button>

                    {/* Login Link */}
                    <div className="text-center">
                        <Link to="/" className="text-blue-500">
                            Already have an account? Login here
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default RegisterPage;