import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center gap-x-4 text-sm items-center  py-2 rounded-md mb-10 '>
            <NavLink className={(e) => e.isActive ? "text-red-300" :''} to="/" >Home</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" :''} to="/recipes" >Recipes</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" :''} to="/about" >About</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-300" :''} to="/create-recipe" >Create-recipe</NavLink>
        </div>
    )
}

export default Navbar

/*
step 1
In navbar folder the navlink takes place or i can say where we can this thing is header which remains same in all pages 
This thing conatins <NavLink/> tag which redirects to a new page with the help of routes
To show desired components to and payth should be the same which represents the api or route 
If both are not same then ther data won't be shown of component

*/