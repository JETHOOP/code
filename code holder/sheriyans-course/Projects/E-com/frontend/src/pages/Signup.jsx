import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncsignupuser } from "../store/actions/userActions";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const SignupHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        dispatch(asyncsignupuser(user));
        navigate("/signin");
    };

    return (
        <div className="flex justify-center items-center ">
            <form
                onSubmit={handleSubmit(SignupHandler)}
                className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <input
                    {...register("username")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    type="text"
                    placeholder="john-doe"
                />

                <input
                    {...register("email")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    type="email"
                    placeholder="john@doe.doe"
                />
                
                <input
                    {...register("password")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    type="password"
                    placeholder="********"
                />
                
                <button className="w-full mt-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Sign Up
                </button>
                
                <p className="mt-5 text-center">
                    Already have an account?{" "}
                    <Link className="text-blue-500 hover:underline" to="/signin">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;

