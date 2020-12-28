import React from "react";
import Navbar from "./Navbar"
import Form from "./Form";
import { Link } from "react-router-dom"

function Register(){

    var userIsRegistered = false;

    return(
        <div>
            <div>
            <Navbar />
                <div className="center oops-box">
                    <h4>We're happy to have you at Bella Italia!</h4>
                    <h5>Fill in the form to register.</h5>
                    <Link  className="link-color" to="/signin"><p>Or click here to sign in</p></Link>
                    <Form isRegistered={userIsRegistered} />
                </div>
            </div>
        </div>
    )
}

export default Register;