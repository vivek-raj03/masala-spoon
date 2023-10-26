import React, { useState } from 'react';
import '../styles/uploadform.css';
import {BsPersonFill} from "react-icons/bs"
import {FaBowlFood} from "react-icons/fa6"
import {GiRoastChicken} from "react-icons/gi"
import {PiPlantDuotone} from "react-icons/pi"
import {PiCookingPotFill} from "react-icons/pi"
import {GiKnifeFork} from "react-icons/gi"
import {PiCookingPotDuotone} from "react-icons/pi"
import { recipies } from '../utils/data';
import Display from './Display';


export default function Uploadform() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    authorName: '',
    dishName: '',
    foodType: '',
    ingredients: '',
    cookingInstructions: '',
  });
  const showAlert = () => {
    window.alert('Recipe-Submitted');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData={
      authorName: formData.authorName,
      dishName: formData.dishName,
      foodType: formData.foodType,
      ingredients: formData.ingredients,
      cookingInstructions: formData.cookingInstructions,
    }
    recipies.push(newData);
    console.log(recipies);
    console.log(newData);
  };
  
    const handleSearch = () => {
      // Filter recipes based on the search query
      const filteredRecipes = recipies.filter((recipe) =>
        recipe.dishName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredRecipes);
    };
  

  return (
    <>
    <div className="container">
      <h2 className><span className='veg'><PiCookingPotDuotone/></span>Share Your Recipe<span className='big-logo'><PiCookingPotDuotone/></span></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="authorName">Author Name:<span><BsPersonFill/></span></label>
          <input
            className='content-box'
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dishName">Dish Name:<span><FaBowlFood/></span></label>
          <input
            className='content-box'
            type="text"
            id="dishName"
            name="dishName"
            value={formData.dishName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="foodType"><span className='veg'><PiPlantDuotone/></span>Select Food Type:<span><GiRoastChicken/></span></label>
          <select
            className='content-box'
            id="foodType"
            name="foodType"
            value={formData.foodType}
            onChange={handleInputChange}
            required
          >
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:<span><GiKnifeFork/></span></label>
          <textarea
            className='content-box'
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cookingInstructions">Cooking Instructions:<span><PiCookingPotFill/></span></label>
          <textarea
            className='content-box'
            id="cookingInstructions"
            name="cookingInstructions"
            value={formData.cookingInstructions}
            onChange={handleInputChange}
            required
          />
        </div>

        <button className="sub-btn"type="submit" onClick={showAlert}>Submit Recipe</button>
      </form>
      <hr></hr>
      <input
        type="text"
        placeholder="Search by Dish Name"
        className='content-box'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button  className="s-btn"onClick={handleSearch}>Search</button>
    <Display searchResults={searchResults}/>
    </div>
    
   
    </>
  );
}

// export default Uploadform;
