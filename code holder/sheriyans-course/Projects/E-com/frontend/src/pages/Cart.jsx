import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";

const Cart = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);



    const IncreaseQuantity = (index) => {
        const copyUser = { ...user, cart: [...user.cart] };
        copyUser.cart[index] = {
            ...copyUser.cart[index],
            quantity: copyUser.cart[index].quantity + 1,
        };
        dispatch(asyncupdateuser(user.id, copyUser));
    };

    const DecreaseQuantity = (index) => {
        const copyUser = { ...user, cart: [...user.cart] };

        if (copyUser.cart[index].quantity === 1) {
            copyUser.cart.splice(index, 1);
        } else {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity - 1,
            };
        }
        dispatch(asyncupdateuser(user.id, copyUser));
    };
    const totalAmount = user.cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    return (
        <div className="p-5 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-5">Your Cart</h2>
            {user.cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                user.cart.map((ci, i) => (
                    <div
                        className="mb-4 bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
                        key={i}
                    >
                        <img
                            className="h-24 w-24 object-cover rounded-md"
                            src={ci.product.image}
                            alt={ci.product.title}
                        />
                        <h1 className="flex-grow text-lg font-semibold mx-4">{ci.product.title}</h1>
                        <h2 className="text-lg font-bold text-green-600">${ci.product.price.toFixed(2)}</h2>
                        <div className="flex items-center">
                            <button
                                onClick={() => IncreaseQuantity(i)}
                                className="text-2xl text-blue-500 hover:text-blue-700 transition"
                            >
                                +
                            </button>
                            <span className="mx-3 text-lg">{ci.quantity}</span>
                            <button
                                onClick={() => DecreaseQuantity(i)}
                                className="text-2xl text-red-500 hover:text-red-700 transition"
                            >
                                -
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;

