import "./footer.css"
import { FiSend } from "react-icons/fi"
import {Link} from "react-router-dom"
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                <div className="footer__header">
                    <h1>Mekzone</h1>
                    <p>Stay up-to-date with what we're doing.</p>
                    <div className="footer__input">
                        <input placeholder="Your Email" />
                            {/* <button> */}
                                <FiSend className="footer__button" />
                            {/* </button> */}
                    </div>
                </div>
                    <div className="footer__details">
                        <div className="footer__detailCompany">
                             <h2>Company</h2>
                    <ul>
                        <li>
                            <Link to='/about'>
                                 About us
                            </Link>     
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact us
                            </Link>
                       </li>
                        <li>
                             <Link to='/contact'>
                                Meet Our Teams
                             </Link>       
                        </li>
                    </ul>
                    
                        </div>
                    <div className="footer__detailContact">
                        <h2>Contact Info</h2>
                        <h4>ADDRESS</h4>
                        <a>5919 Trussville Crossings Pkwy, Birmingham AL 35235</a>

                        <h4>EMAIL</h4>
                        <a>contact@mekzone.in</a>
                   </div>               
                </div>
                 </div>
                <hr />

                <div className="footer__bottom">
                    <h3>Copyright &#169; 2021.All Rights Reserved.</h3>
                    <div className="footer__bottomOptions">
                        <a>Terms</a>
                        <a>Privacy</a>
                        <a>Support</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
