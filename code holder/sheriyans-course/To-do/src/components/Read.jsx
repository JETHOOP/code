import { Trash2 } from 'lucide-react'; 

const Read = ({ todos, setTodos }) => {
  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
        Your Tasks
      </h1>

      <ol className="space-y-3">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li
              key={todo.id}
              className="flex justify-between items-center gap-4 py-3 px-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <span className="flex-1 text-sm sm:text-base font-medium text-gray-800 break-words">
                {index + 1}. {todo.title}
              </span>
              <button
                onClick={() => deleteHandler(todo.id)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-400 italic py-6 flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 mb-3 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-6h6v6h5V8H4v9h5z"
              />
            </svg>
            No pending todos
          </li>
        )}
      </ol>
    </div>
  );
};

export default Read;

