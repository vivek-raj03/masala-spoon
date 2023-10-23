import React from 'react'
import '../styles/cards.css'
import foodimage1 from '../Images/foodimage1.jpg'
import foodimage2 from '../Images/foodimage2.jpg'
import foodimage3 from '../Images/foodimage3.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlinePlayCircle} from 'react-icons/ai'


export default function cards() {
  return (
    <>
    
    <div className="card-container">
      <div className='abs-green'></div>
  <div className="cards">
    <h4 className="card-head">Upload Your Recipe</h4>
    <p className="card-content">
      Why Keeping your Recipe or dish limited when you can share it with the world
    </p>
    <br />
     <a href="#" className="card-link">
      SEE MORE
    </a>
    &nbsp;
    <AiOutlineArrowRight />
    <img src={foodimage1} alt="Card 1" />
  </div>
  <div className="cards">
    <h4 className="card-head">Search New Recipe</h4>
    <p className="card-content">
      Explore New Recipe or Dishes around the world. And treat your appetite.
    </p>
    <br />

    <a href="#" className="card-link">
      SEE MORE
    </a>
    &nbsp;
    <AiOutlineArrowRight />
    <img src={foodimage2} alt="Card 2" />
  </div>
  <div className="cards">
    <h4 className="card-head">Rate someone's Dishes</h4>
    <p className="card-content">
      Explore Recipe and make new foods and rate their recipe with your Review.
    </p>
    <br />
    <a href="#" className="card-link">
      SEE MORE
    </a>
    &nbsp;
    <AiOutlineArrowRight />
    {/* <br /> */}
    <img src={foodimage3} alt="Card 2" />
  </div>
</div>
    </>
  )
}
