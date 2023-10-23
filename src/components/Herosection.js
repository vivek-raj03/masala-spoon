import { Button } from "react-bootstrap";
import foodvector3 from '../Images/foodvector3.jpg'
import '../styles/hero.css';
import { Link } from "react-router-dom";
function Herosection(props) {
    return ( 
        <>
        <div className="big-container">
            <dvi className="content-hero">
                <h1 className="hero-title">Masala Spoon</h1>
                <p className="hero-q">{props.quote}</p>
                <Link to='/upload'>
                    <Button variant="outline-success" className="btn-upload">Upload Your Recipe</Button>
                </Link>

            </dvi>
            <div className="vector-hero">
                <img src={props.imageSource} alt="" className="hero-image" />

            </div>
        </div>
        
        </>
     );
}

export default Herosection;