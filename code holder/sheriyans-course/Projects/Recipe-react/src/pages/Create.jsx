import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipecontext } from "../context/RecipeContext"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate()
    const { data, setdata } = useContext(recipecontext)
    const { register, handleSubmit, reset } = useForm()

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid()
        setdata([...data, recipe])
        toast.success("New recipe created")
        navigate("/recipes")
        reset()

    }

    return (
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <input
                className="border-b block outline-0 p-2"
                type="url"
                {...register('image')}
                placeholder="Enter image URL"
            />

            <input
                className="border-b block outline-0 p-2"
                type="text"
                placeholder="Recipe title"
                {...register('title')} />

            <input
                className="border-b block outline-0 p-2"
                type="text"
                placeholder="chef"
                {...register('chef')} />

            <textarea
                className="border-b block outline-0 p-2"
                placeholder="Enter decription"
                {...register('description')} />

            <textarea
                className="border-b block outline-0 p-2"
                placeholder="//write ingredients seperated by comma"
                {...register('ingredients')} />

            <textarea
                className="border-b block outline-0 p-2"
                placeholder="//write ingredients seperated by comma"
                {...register('instructions')} />


            <select
                className="border-b block outline-0 p-2"
                {...register('category  ')}
            >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunc</option>
                <option value="dinner">Dinner</option>
            </select >


            <button className="mt-5 block bg-gray-800 rounded-md px-4 py-2">
                Save Recipe
            </button>
        </form>
    )
}

export default Create
