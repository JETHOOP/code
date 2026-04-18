import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const { id, image, title, ingredients, chef, description, } = props.recipe
    return (
        <Link 
        to={`/recipes/details/${id}`}
        className='me-3 mb-3 w-[23vw] rounded block overflow-hidden'>
            <img className='w-full object-cover h-[20vh]' src={image} />
            <h1 className = "px-2 mt-2 font-black">{title}</h1>
            <small>{chef}</small>
            <p>{description}</p>
            <p>{ingredients}</p>
        </Link>
    )
}

export default RecipeCard
