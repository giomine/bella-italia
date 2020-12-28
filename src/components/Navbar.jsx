import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
    <nav className=" nav-top transparent">
        <div className="nav-wrapper-top nav-wrapper">
          <a href="/" className="brand-logo"><img src={process.env.PUBLIC_URL + "./html-images/learn italian/1small.png"} alt="logo" /></a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons hamburger">menu</i></a>
          <ul className="right hide-on-med-and-down navbar-ul">
            <li><Link className="nav-li" to="/0">Articles</Link></li>
            <li><Link className="nav-li" to="/dashboard">Dashboard</Link></li>
            <li><Link className="nav-li" to="/signin">Sign In</Link></li>
            <li><Link className="nav-li" to="/register">Sign Up</Link></li>
          </ul>
        </div>
    </nav>
    
    )
}

export default Navbar;