import React from "react";
// import Header from "./Header";
import Navbar from "./Navbar";
import imagesObject from "../imagesObject";
import ArticleThumbnails from "./ArticleThumbnails";

function ArticlesHomepage(){
    function Display(props){
        return <ArticleThumbnails
        key={props.id}
        pictures={props.imgURL}
        link={props.link}
        />
    }

    return(
        <div>
            {/* <Header /> */}
            <Navbar />
            {imagesObject.map(Display)}
        </div>
    )    
}

export default ArticlesHomepage;


            