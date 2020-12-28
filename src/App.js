import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ArticlesHomepage from "./components/ArticlesHomepage";
import Article1 from "./components/Articles/Article1";
import Article2 from "./components/Articles/Article2";
import Article3 from "./components/Articles/Article3";
import Article4 from "./components/Articles/Article4";
import Article5 from "./components/Articles/Article5";
import Article6 from "./components/Articles/Article6";
import Article7 from "./components/Articles/Article7";
import Article8 from "./components/Articles/Article8";
import Article9 from "./components/Articles/Article9";
import Article10 from "./components/Articles/Article10";
import Article11 from "./components/Articles/Article11";
import Article12 from "./components/Articles/Article12";
import Article13 from "./components/Articles/Article13";
import Article14 from "./components/Articles/Article14";
import Quiz from "./components/Quiz/quiz";
import Result from "./components/Quiz/end";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import SignIn from "./components/SignIn";


export default function App(){
    
    return(
        <BrowserRouter>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/0" component={ArticlesHomepage} />
            <Route exact path="/1" component={Article1} />
            <Route exact path="/2" component={Article2} />
            <Route exact path="/3" component={Article3} />
            <Route exact path="/4" component={Article4} />
            <Route exact path="/5" component={Article5} />
            <Route exact path="/6" component={Article6} />
            <Route exact path="/7" component={Article7} />
            <Route exact path="/8" component={Article8} />
            <Route exact path="/9" component={Article9} />
            <Route exact path="/10" component={Article10} />
            <Route exact path="/11" component={Article11} />
            <Route exact path="/12" component={Article12} />
            <Route exact path="/13" component={Article13} />
            <Route exact path="/14" component={Article14} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/end" component={Result} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={SignIn} />
        </div>
        </BrowserRouter>
    );
}