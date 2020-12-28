import React from "react";
import { Link } from "react-router-dom";

function ArticleThumbnails(props){
    return(
        <div>
        <Link to={props.link}>
            <div className="thumbnails-containers">
            <img className="thumbnails" src={props.pictures} alt="pics"></img>
            </div>
        </Link>
        </div>
    )
}

export default ArticleThumbnails;