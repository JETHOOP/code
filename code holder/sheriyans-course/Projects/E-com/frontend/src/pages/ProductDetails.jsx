import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    asyncdeleteproduct,
    asyncupdateproduct,
} from "../store/actions/productActions";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useSelector((state) => state.userReducer);
    const { products } = useSelector((state) => state.productReducer);
    const product = products.find((p) => p.id == id);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            image: product?.image,
            title: product?.title,
            price: product?.price,
            category: product?.category,
            description: product?.description,
        },
    });

    const UpdateProductHandler = (updatedProduct) => {
        dispatch(asyncupdateproduct(product.id, updatedProduct));
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteproduct(id));
        navigate("/");
    };

    return (
        <div className="w-full p-5 bg-gray-50">
            <div key={product?.id} className="w-full shadow-lg mb-5 p-5 bg-white rounded-lg">
                <img
                    className="h-[40vh] w-full object-cover rounded-lg"
                    src={product?.image}
                    alt={product?.title}
                />
                <h1 className="text-4xl font-bold mt-4">{product?.title}</h1>
                <p className="mt-2 text-gray-700">{product?.description}</p>
                <p className="my-5 text-red-500 text-3xl font-semibold">${product?.price}</p>
                <div className="flex justify-between items-center p-3">
                    <button className="text-yellow-500 hover:text-yellow-600 transition">Add to cart</button>
                </div>
            </div>

            {/* Admin Form for Updating Product */}
            {user?.isAdmin && (
                <form
                    onSubmit={handleSubmit(UpdateProductHandler)}
                    className="w-full p-5 bg-white rounded-lg shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-4">Update Product</h2>
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
                    <button className="text-white rounded mt-5 text-lg px-5 py-3 bg-blue-500 hover:bg-blue-600 transition">
                        Update Product
                    </button>
                    <br />
                    <br />
                    <button
                        onClick={DeleteHandler}
                        type="button"
                        className="text-white rounded mt-5 text-lg px-5 py-3 bg-red-500 hover:bg-red-600 transition"
                    >
                        Delete Product
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProductDetails;
