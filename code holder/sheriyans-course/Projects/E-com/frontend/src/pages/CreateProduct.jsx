import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asynccreateproduct } from "../store/actions/productActions";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateproduct(product));
        navigate("/");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit(CreateProductHandler)}
                className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Create New Product</h2>

                <input
                    {...register("image")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    type="url"
                    placeholder="Product Image URL"
                />

                <input
                    {...register("title")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    type="text"
                    placeholder="Product Title"
                />

                <input
                    {...register("price")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    type="text"
                    placeholder="0.00"
                />

                <input
                    {...register("category")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    type="text"
                    placeholder="Product Category"
                />

                <textarea
                    {...register("description")}
                    className="w-full text-lg mb-4 p-2 border-b border-gray-300 outline-none focus:border-blue-500 transition"
                    placeholder="Product Description Here..."
                ></textarea>

                <button className="w-full text-white rounded mt-5 text-lg px-5 py-3 bg-blue-500 hover:bg-blue-600 transition">
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;

