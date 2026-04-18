import React from 'react';
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from 'react-router-dom';
import { asyncregisteruser } from '../store/actions/userActions';
import { useDispatch } from "react-redux";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const RegisterHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        dispatch(asyncregisteruser(user));
        navigate("/login");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit(RegisterHandler)}
                className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <input
                    {...register("username")}
                    className='w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition'
                    type="text"
                    placeholder='John-doe'
                />
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
                    Register User
                </button>
                <p className='mt-5 text-center'>
                    Already have an account? 
                    <Link className='text-blue-500 hover:underline' to="/login"> Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
