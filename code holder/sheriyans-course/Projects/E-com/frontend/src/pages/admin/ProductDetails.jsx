import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { asyncupdateproduct } from '../../store/actions/productActions';
import { asyncdeleteproduct } from '../../store/actions/productActions';

const ProductDetails = () => {
  const { id } = useParams();
  const { productReducer: { products }, usersReducer: { users } } = useSelector((state) => state);
  const product = products?.find((product) => (product.id) == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description
    }
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  return product ? (
    <div className='overflow-auto h-screen bg-gray-50 p-6'>
      <div className='w-full flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg p-6'>
        <img
          className='w-full md:w-1/2 h-96 object-contain rounded-lg bg-gray-100'
          src={product.image}
          alt={product.title}
        />
        <div className='px-3 w-full md:w-1/2'>
          <h1 className="text-5xl mb-4 font-semibold">{product.title}</h1>
          <h2 className='mb-5 text-2xl text-green-500'>${product.price}</h2>
          <p className='mb-4 text-gray-700'>{product.description}</p>
          <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='mt-8'>
        <hr className='my-4' />
        {users && users?.isAdmin && (
          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className='w-full flex flex-col justify-start items-start bg-white rounded-lg shadow-md p-6'
          >
            <input
              {...register("image")}
              className='outline-none border-b p-2 text-lg mb-3 w-full'
              type="url"
              placeholder='Image URL'
            />
            <input
              {...register("title")}
              className='outline-none border-b p-2 text-lg mb-3 w-full'
              type="text"
              placeholder='Title'
            />
            <input
              {...register("price")}
              className='outline-none border-b p-2 text-lg mb-3 w-full'
              type="number"
              placeholder='0.00'
            />
            <textarea
              {...register("description")}
              className='outline-none border-b p-2 text-lg mb-3 w-full'
              placeholder='Enter your description here...'
            ></textarea>
            <input
              {...register("category")}
              className='outline-none border-b p-2 text-lg mb-3 w-full'
              type="text"
              placeholder='Category'
            />
            <button className='mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
              Update Product
            </button>
            <button
              type="button"
              onClick={DeleteHandler}
              className='mt-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'
            >
              Delete Product
            </button>
          </form>
        )}
      </div>
    </div>
  ) : "Loading...";
};

export default ProductDetails;
