import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import Form from "./Form";
import Footer from "./Footer";

function SignIn(){

    var userIsRegistered = true;
    

    return(
        <div>
            <div>
            <Navbar />
                <div className="center oops-box">
                    <h4>Welcome back to Bella Italia!</h4>
                    <h5>Sign in below.</h5>
                    <Link className="link-color" to="/register"><p>Or click here to register</p></Link>
                    <Form isRegistered={userIsRegistered} />
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default SignIn;