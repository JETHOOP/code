import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const { user } = useSelector((state) => state.userReducer);
    return (
        <div className="flex gap-x-10 mb-10 p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <NavLink
                className={({ isActive }) => 
                    isActive ? "text-red-400 font-bold" : "hover:text-red-300"
                }
                to="/"
            >
                Home
            </NavLink>

            {user ? (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-red-400 font-bold" : "hover:text-red-300"
                        }
                        to="/settings"
                    >
                        User Settings
                    </NavLink>
                    {user?.isAdmin && (
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "text-red-400 font-bold" : "hover:text-red-300"
                            }
                            to="/create-product"
                        >
                            Create Product
                        </NavLink>
                    )}
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-red-400 font-bold" : "hover:text-red-300"
                        }
                        to="/cart"
                    >
                        Cart
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-red-400 font-bold" : "hover:text-red-300"
                        }
                        to="/signin"
                    >
                        Sign In
                    </NavLink>
                </>
            )}

            <NavLink
                className={({ isActive }) => 
                    isActive ? "text-red-400 font-bold" : "hover:text-red-300"
                }
                to="/about"
            >
                About
            </NavLink>
        </div>
    );
};

export default Nav;
