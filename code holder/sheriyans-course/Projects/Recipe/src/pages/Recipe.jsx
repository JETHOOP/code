import { useContext } from 'react';
import { Recipecontext } from '../context/Recipecontext';
import Recipecard from '../components/Recipecard';


const Recipe = () => {
    const { data } = useContext(Recipecontext)

    const renderrecipe = data.map((recipe) => (
        <Recipecard key={recipe.id} recipe={recipe} />
    ))

    return (
        <div className='flex flex-wrap'>
            {data.length > 0 ? renderrecipe : "no recipes found"}
        </div>
    )
}

export default Recipe
