import '../styles/footer.css';
import {BsFillPersonCheckFill,BsLinkedin} from "react-icons/bs"
import {FaLocationDot} from "react-icons/fa6"
import {AiOutlineMail,AiFillCopyrightCircle} from "react-icons/ai"
import {BiSolidPhoneCall} from "react-icons/bi"
function Footer() {
    return ( 
        <>
        <div className="footer">
            <div className="name-add">
                <ul className='list-name'>
                    <li>Contact Us</li>
                    <li><span className='footer-icon'><BsFillPersonCheckFill/></span>Vivek Raj</li>
                    <li> <span  className='footer-icon'><FaLocationDot/></span>Chitkara University,Rajpura,Punjab</li>
                </ul>
            </div>
            <div className="socials">
                <ul className='list-socials'>
                    <li><a href="https://www.linkedin.com/in/code-vivek/" target='_blank'><span  className='footer-icon'><BsLinkedin/></span>LinkedIn</a></li>
                    <li><a href="mailto:vivek03023@gmail.com"><span  className='footer-icon'><AiOutlineMail/></span>Mail Me</a></li>
                    <li><a href="tel:+918797116165"><span  className='footer-icon'><BiSolidPhoneCall/></span>Call Me:+918797116165</a></li>

                </ul>
            </div>
            
        </div>
        <div className='simple-line'>
        <span className='footer-icon'><AiFillCopyrightCircle/></span> Copyright Reserve Year -- 2023
        </div>
        </>
     );
}

export default Footer;