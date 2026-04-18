import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {

    const [data, setdata] = useState([{
        image:"https://images.unsplash.com/photo-1752946587785-5a659ba52bde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
        title: "Classic Margherita Pizza",
        chef: "Duggo",
        description:"this is the decription of this card",
        ingredients:"something",
        category: "Dinner"
    }])
    return (
        <recipecontext.Provider value={{ data, setdata }}>
            {props.children}
        </recipecontext.Provider>

    )
}

export default RecipeContext
