import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { Recipecontext } from '../context/Recipecontext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Create = () => {
    const { register, handleSubmit, reset } = useForm()
    const { data, setdata } = useContext(Recipecontext)

    const navigate = useNavigate()
    const submitHandler = (recipe) => {
        recipe.id = nanoid();
        const copydata = [...data]
        copydata.push(recipe)
        setdata(copydata)
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success("Recipe Created")
        reset()
        navigate("/Recipe")
    }
    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input
                    className='block outline-0 p-2 border-b'
                    {...register("url")}
                    type="text"
                    placeholder="Enter a url"
                />
                <small className='text-red-300'>
                    This i show error is shown
                </small>

                <input
                    className='block outline-0 p-2 border-b'
                    {...register("title")}
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
                <button className=' block bg-gray-900 p-2 mt-2 text-center rounded-xl'>
                    Save Recipe</button>

            </form>
        </>
    )
}

export default Create
