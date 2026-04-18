import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asynccreateproduct } from '../../store/actions/productActions';

const CreateProduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log(product);
        dispatch(asynccreateproduct(product));
        navigate("/products");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit(CreateProductHandler)}
                className='flex flex-col w-full max-w-lg p-6 bg-white rounded-lg shadow-md'
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Create New Product</h2>

                <input
                    {...register("image")}
                    className='outline-none border-b p-2 text-lg mb-4 focus:border-blue-500 transition'
                    type="url"
                    placeholder='Image URL'
                />

                <input
                    {...register("title")}
                    className='outline-none border-b p-2 text-lg mb-4 focus:border-blue-500 transition'
                    type="text"
                    placeholder='Title'
                />

                <input
                    {...register("price")}
                    className='outline-none border-b p-2 text-lg mb-4 focus:border-blue-500 transition'
                    type="number"
                    placeholder='0.00'
                />

                <textarea
                    {...register("description")}
                    className='outline-none border-b p-2 text-lg mb-4 focus:border-blue-500 transition'
                    placeholder='Enter your description here...'
                ></textarea>

                <input
                    {...register("category")}
                    className='outline-none border-b p-2 text-lg mb-4 focus:border-blue-500 transition'
                    type="text"
                    placeholder='Category'
                />

                <button className='mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
