import React from "react";
// import Header from "./Header";
import Navbar from "./Navbar";
import imagesObject from "../imagesObject";
import ArticleThumbnails from "./ArticleThumbnails";
import Footer from "./Footer";

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
            <Footer />
        </div>
    )    
}

export default ArticlesHomepage;


            