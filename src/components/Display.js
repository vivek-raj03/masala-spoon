import React from "react";
function Display(props) {
    const searchResults=props.searchResults;
    return ( 
        <>
     {searchResults.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.dishName}</h2>
            <p>Author: {recipe.authorName}</p>
            <p>Type: {recipe.foodType}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Cooking Instructions: {recipe.cookingInstructions}</p>
          </div>
        ))}
        </>
     );
}

export default Display;