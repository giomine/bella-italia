import React from 'react';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>
            <footer>
                <nav className="nav-bottom transparent">
                    <div className="nav-wrapper-bottom nav-wrapper">
                    <ul className="navbar-ul-bottom">
                        <div className="navbar-ul-bottom-left">
                        <li>
                            <p className="footer-text copyright"><a href="http://www.satorireader.com">Inspired by <span style={{ textDecoration: "underline" }}>SatoriReader.com</span></a></p>
                        </li>
                        </div>
                        <div className="navbar-ul-bottom-right">
                        <li>
                            <Link to="/signin"><p className="footer-text">Sign In</p></Link>
                        </li>
                        </div>
                    </ul>
                    </div>
                </nav>
            </footer>
        </div>
    )
}


export default Footer;