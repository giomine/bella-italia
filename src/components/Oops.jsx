import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";

function Oops(props){

    var userIsRegistered = true;

    return(
        <div>
            <Navbar />
                <div className="center oops-box">
                    <h4>Oops! You need to sign in to view {props.pageName}.</h4>
                    <h5>Sign in below.</h5>
                    <Link className="link-color" to="/register"><p>Or click here to register</p></Link>
                    <Form isRegistered={userIsRegistered} />
                </div>
        </div>
    )
}

export default Oops;