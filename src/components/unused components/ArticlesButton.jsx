import React from "react";
import { Link } from "react-router-dom";

function ArticlesButton(){
    return(
        <div>
            <Link to="/0">
                <button className="new-button-styles">Article Library</button>
            </Link>
        </div>
    )
}

export default ArticlesButton;