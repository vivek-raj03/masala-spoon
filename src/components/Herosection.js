import { Button } from "react-bootstrap";
import foodvector3 from '../Images/foodvector3.jpg'
import '../styles/hero.css';
import { Link } from "react-router-dom";
function Herosection() {
    return ( 
        <>
        <div className="big-container">
            <dvi className="content-hero">
                <h1 className="hero-title">Masala Spoon</h1>
                <p className="hero-q">"One cannot think well, love well, sleep well, if one has not dined well."</p>
                <Link to='/upload'>
                    <Button variant="outline-success" className="btn-upload">Upload Your Recipe</Button>
                </Link>

            </dvi>
            <div className="vector-hero">
                <img src={foodvector3} alt="" className="hero-image" />

            </div>
        </div>
        
        </>
     );
}

export default Herosection;