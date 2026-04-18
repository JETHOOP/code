import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import { Route, Routes } from 'react-router-dom'
import Pagenotfound from '../pages/Pagenotfound'
import Fav from '../pages/fav'
const Mainroute = () => {
  return (
    <>
      <Routes >

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Recipe/details/:id" element={<SingleRecipe />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="*" element={<Pagenotfound />} />

      </Routes>
    </>
  )
}

export default Mainroute
