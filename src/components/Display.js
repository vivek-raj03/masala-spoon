import React from "react";
import '../styles/Display.css';
function Display(props) {
    const searchResults=props.searchResults;
    return ( 
        <>
     {searchResults.map((recipe) => (
          <div key={recipe.id} className="card">
            <h2 className="dish-name">{recipe.dishName}</h2>
            <p className="author-name">Author: {recipe.authorName}</p>
            <p className="food-type">Type: {recipe.foodType}</p>
            <p className="ing">Ingredients: {recipe.ingredients}</p>
            <p className="ins">Cooking Instructions: {recipe.cookingInstructions}</p>
          </div>
        ))}
        </>
     );
}

export default Display;