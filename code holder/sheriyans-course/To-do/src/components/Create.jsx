import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const Create = ({ todos, setTodos }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    setTodos([...todos, data]);
    toast.success('To-do created');
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-700">
        Create a Task
      </h1>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-5 sm:space-y-6"
      >
        <div>
          <input
            {...register('title', {
              required: 'Title cannot be empty',
            })}
            type="text"
            placeholder="Enter your task title..."
            className={`w-full px-4 py-2 rounded-lg border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && (
            <p className="text-xs sm:text-sm text-red-500 mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 sm:py-2.5 text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg transition duration-300 font-semibold shadow"
        >
          Add To-do
        </button>
      </form>
    </div>
  );
};

export default Create;

