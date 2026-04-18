import React from 'react'
import { Link } from 'react-router-dom'

const Recipecard = (props) => {
    const {id , url ,title,  chef ,instruction } = props.recipe
  return (
    <Link to={`/Recipe/details/${id}`} className='mr-3 mb-3  block w-[23vw] rounded overflow-hidden duration-150 hover:scale-105'>
      <img className="object-cover w-full h-[20vh] "  />
      <h1 className='px-2 mt-2 font-black'>{title}</h1>
      <small className="px-2 text-red-300">{chef}</small>
      <p className = "px-2">
        {instruction}
        <small>more</small>
      </p>
      
    </Link>
  )
}

export default Recipecard
