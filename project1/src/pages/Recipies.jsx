import {useContext } from 'react';
import {datacontext } from "../context/RecipeContext";

const Recipies = () => {
  const {data} = useContext(datacontext);
  
  const renderrecipes = data.map((recipe) => (
    <div key = {recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ))
  return (
    <div>Recipes</div>
  )
}

export default Recipies