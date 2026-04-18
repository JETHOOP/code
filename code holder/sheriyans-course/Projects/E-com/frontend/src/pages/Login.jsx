import React from 'react';
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from 'react-router-dom';
import { asyncloginuser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const LoginHandler = (user) => {
        dispatch(asyncloginuser(user));
        navigate("/");
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit(LoginHandler)}
                className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                    {...register("email")}
                    className='w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition'
                    type="email"
                    placeholder='John@doe.com'
                />
                <input
                    {...register("password")}
                    className='w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition'
                    type="password"
                    placeholder='*********'
                />
                <button className='w-full mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
                    Login User
                </button>
                <p className='mt-5 text-center'>
                    Don't have an account? <Link className='text-blue-500 hover:underline' to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
};
export default Login;