import { useEffect } from 'react';
import { useState, createContext } from 'react';

export const Recipecontext = createContext();

const RecipeProvider = (props) => {
  const [data, setdata] = useState([
    {
      "id": 1,
      "url": "https://images.unsplash.com/photo-1749230950849-f3f93591f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
      "title": "Classic Spaghetti Carbonara",
      "step": "Cook the spaghetti according to package instructions. In a bowl, whisk together eggs, Parmesan cheese, and black pepper. In a skillet, cook pancetta until crispy. Remove from heat and set aside. Drain the cooked spaghetti and add it to the skillet with the pancetta. Pour the egg mixture over the spaghetti and toss quickly to coat. Serve immediately with additional Parmesan cheese and black pepper.",
      "chef": "Chef Mario",
      "ingredient": "400g spaghetti, 4 large eggs, 1 cup grated Parmesan cheese, 100g pancetta (diced), Black pepper to taste, Salt to taste",
      "instruction": "Ensure the spaghetti is al dente. The egg mixture should coat the pasta without scrambling."
    }
  ]);
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || [])
  }, [])
  return (
    <Recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </Recipecontext.Provider>
  );
};

export default RecipeProvider;