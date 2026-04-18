import  { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Recipecontext } from '../context/Recipecontext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'remixicon/fonts/remixicon.css'

const SingleRecipe = () => {
    const { data, setdata } = useContext(Recipecontext)

    const params = useParams()
    const recipe = data.find((recipe) => params.id == recipe.id)

    const deleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id)
        setdata(filterdata)
        toast.success("recipe deleted")
        navigate("/Recipe")
    }
    const { register, handleSubmit, reset } = useForm()

    const navigate = useNavigate()
    const submitHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipe }
        localStorage.setItem("recipes", JSON.stringify(copydata))
        setdata(copydata)
        toast.success("recipe created")
    }

    const favourite = JSON.parse(localStorage.getItem("fav")) || []

    const favHandler = () => {
        favourite.push(recipe)
        localStorage.setItem("fav", JSON.stringify(favourite))
    }
    const unfavHandler = () => {
        const filterfav = favourite.filter((f) => f.id != recipe.id)
        localStorage.setItem("fav", JSON.stringify(filterfav))

    }
    return recipe ? (
        <div className='w-full flex'>
            {
                favourite.find(f => f.id === recipe?.id)
                    ? <i
                        onClick={unfavHandler}
                        className="text-3xl text-red-600 ri-heart-fill"
                    ></i>
                    : <i
                        onClick={favHandler}
                        className="text-3xl text-red-600 ri-heart-line"
                    ></i>
            }
            <div className="relative left  w-1/2 p-2">
                <h1 className="text-5xl font-black">{recipe.title}</h1>
                <img className="h-[20vh]" src={recipe.url} alt="" />
            </div>
            <form className="w1/2 p-2" onSubmit={handleSubmit(submitHandler)}>
                <input
                    className='block outline-0 p-2 border-b'
                    {...register("url")}
                    value={recipe.url}
                    type="text"
                    placeholder="Enter a url"
                />
                <small className='text-red-300'>
                    This i show error is shown
                </small>

                <input
                    className='block outline-0 p-2 border-b'
                    {...register("title")}
                    value={recipe.title}
                    type="text"
                    placeholder='Recipe title'
                />
                <small className='text-red-300'>
                    This i show error is shown
                </small>


                <textarea
                    className='block outline-0 p-2 border-b'
                    {...register("Steps")}
                    type="text"
                    placeholder='//Start from here'
                ></textarea>
                <small className='text-red-300'>
                    This i show error is shown
                </small>

                <input
                    type="text"
                    className='block outline-0 p-2 border-b'
                    {...register("chef")}
                    placeholder='chef name' />

                <textarea
                    className='block outline-0 p-2 border-b'
                    {...register("ingredients")}
                    type="text"
                    placeholder='write ingredients'
                ></textarea>
                <small className='text-red-300'>
                    This i show error is shown
                </small>

                <textarea
                    className='block outline-0 p-2 border-b'
                    {...register("instructions")}
                    type="text"
                    placeholder='Write instructions'
                ></textarea>
                <small className='text-red-300'>
                    This i show error is shown
                </small>

                <select className='block outline-0 p-2 border-b text-red-300 '
                    {...register("category")}>
                    <option value="breakfast">Breakfast</option>
                    <option value="brunch">Brunch</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>

                </select>
                <button className=' block bg-blue-900 p-2 mt-2 text-center rounded-xl'>
                    Update Recipe
                </button>

                <button onClick={deleteHandler} className=' block bg-red-900 p-2 mt-2 text-center rounded-xl'>
                    Delete Recipe
                </button>
            </form>
            <div className="right w-1/2 p-2"></div>

        </div>) :
        ("loading")
}
export default SingleRecipe