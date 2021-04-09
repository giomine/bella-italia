import React, { Component } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { IconContext } from "react-icons";
import { FaBookReader, FaSearch, FaVolumeUp, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default class LandingPage extends Component {

    componentDidMount(){

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel-box');
            // var instances = 
            M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true
            });
          });

          document.addEventListener('DOMContentLoaded', function() {
            var elem = document.querySelectorAll('.carousel-slider');
            // var instance = 
            M.Carousel.init(elem, {
            fullWidth: true,
            indicators: true
            });
          });

          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            // var instances = 
            M.Sidenav.init(elems, {
              edge: "right"
            });
          });

        }

    render() {
    return(
        <IconContext.Provider value={{ color: "rgb(105, 196, 105)", size: "2.5em" }}>
        <div className="html-page">
            {/* <body> */}
{/* <!-- HEADER --> */}
    <header>
    <Navbar />
    
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/0">Articles</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
      </ul>
    
{/* <!-- TITLE SECTION --> */}
<section className="title-background">

    <div className="container center-align title-alignment">
        <div className="title-section">
            <h2 className="title-h2">A new way to study, practice, and deeply comprehend Italian</h2>
            <hr />
            <h5>Lovingly crafted by the team behind Human Italian</h5>
            <Link to="/register"><button className="top-button">Sign Up Now</button></Link>
            <Link to="/1"><button className="top-button">Try For Free</button></Link>
            <div>
              <Link to="/0"><button className="top-button top-button-articles">Go To Articles</button></Link>
            </div>
        </div>
    </div> {/* <!-- Materialize container --> */}

</section>
</header>

{/* <!-- INTRO --> */}
<section className="intro-background">
  <div className="intro-container container">
      <div className="phone-container">
        <img className="phone" src={process.env.PUBLIC_URL + '/html-images/phone.png'} alt="phone" />
      </div>
      <div className="intro-section">
          <h4>Italian reading and listening practice at just the right level</h4>
          <h5>Looking for reading material to put your Italian to use?</h5>
          <p>You've come to the right place. Bella Italia provides carefully curated, level-appropriate content with which to 
            practice and grow.</p>
          <p>With thoughtfully annotated articles spanning a variety of interesting subject matter and a unique system that presents
              content in a manner appropriate to your knowledge, it bridges the gap between the controlled, textbook Italian that most
              students start with and the wide-open world of real-life, native communication.</p>
          <p>How does it all work? Read on.</p>
      </div>
  </div> {/* <!-- Materialize container --> */}
</section>

{/* <!-- FEATURES --> */}
<section className="features-background">
  <div className="features-container container">
    <div className="features-one">
      <div className="feature-content">
        <div className="icon">< FaBookReader /><i className="fas fa-book-reader fa-3x"></i></div>
        <h5>Written and annotated for you</h5>
        <p>We start by writing interesting articles at a friendly difficulty level suited to an intermediate student. 
          Our team of editors then carefully annotates each article, linking every word to a dictionary entry showing 
          the exact sense being used in the current context.</p>
      </div>
    </div>
    <div className="features-two">
      <div className="feature-content">
        <div className="icon">< FaSearch /><i className="fas fa-search fa-3x"></i></div>
        <h5>We go deeper</h5>
        <p>We also show how each conjugated word relates to its dictionary form. Additional notes provide deeper explanation
         for multi-word expressions and tricky constructions. We try hard to anticipate what might be confusing to an intermediate 
         student and proactively explain things.</p>
      </div>
    </div>
    <div className="features-three">
      <div className="feature-content">
        <div className="icon">< FaVolumeUp className="3x" /><i className="fas fa-volume-up fa-3x"></i></div>
        <h5>Translations and recordings</h5>
        <p>Finally, translations on every sentence help you to double-check that you've understood things correctly, and
         per-sentence recordings let you practice your listening.</p>
      </div>
    </div>
  </div>
</section>

{/* <!-- DEMO --> */}
<section className="demo-background">
  <div className="demo-container container">
    <div>
      <a href="/1">
        <img className="demo-screenshot responsive-img" src={process.env.PUBLIC_URL + "./html-images/quizscreen.png"} alt="logo" />
      </a>
    </div>
    <div className="text-container">
      <Link className="link-color" to="/1"><h5>Click here to try for free</h5></Link>
      <p>Try a full module for free, no commitment!</p>
       <p>Each module consists of a text and a quiz.</p>
       <p>The text could be anything from an article
       or story to historical texts, cultural information, news and more. The text is accompanied by a vocab list of words carefully
       chosen by our editors.</p>
       <p>Following this, a quiz tests your knowledge to see what you have learned from the module.</p>
    </div>
  </div>
</section>

{/* <!-- FRESH CONTENT --> */}
<section className="fresh-background">
  <div className="fresh-container container">
    <h5>A steady stream of fresh content</h5>
    <p>In order to grow with your Italian, you need not only to learn new grammar and vocabulary, but to exercise what you already 
      know by seeing it used in new and varied ways. You also need exposure to different styles of communication. After all, the way 
      close friends talk is different from how you would speak to your boss at work or with a stranger on the street. Similarly, the 
      style of writing in a newspaper article is different from what you might find in an email.</p>
    <p>We've prepared a wide variety of articles, organized into a constantly growing collection of fun and interesting series. With 
      fresh new content appearing all the time, Bella Italia is your constant companion on your journey to ever higher vistas.</p>
    <div className="carousel carousel-box">
      <Link to="/1"><img className="carousel-item carousel-item-imgs" src={process.env.PUBLIC_URL + "./Italy-carousel/1.png"} alt="content" /></Link>
      <Link to="/7"><img className="carousel-item carousel-item-imgs" src={process.env.PUBLIC_URL + "./Italy-carousel/2.png"} alt="content" /></Link>
      <Link to="/5"><img className="carousel-item carousel-item-imgs" src={process.env.PUBLIC_URL + "./Italy-carousel/3.png"} alt="content" /></Link>
      <Link to="/8"><img className="carousel-item carousel-item-imgs" src={process.env.PUBLIC_URL + "./Italy-carousel/4.png"} alt="content" /></Link>
      <Link to="/11"><img className="carousel-item carousel-item-imgs" src={process.env.PUBLIC_URL + "./Italy-carousel/5.png"} alt="content" /></Link>
      <Link to="/9"><img className="carousel-item carousel-item-imgs" src={process.env.PUBLIC_URL + "./Italy-carousel/6.png"} alt="content" /></Link>
    </div>
  </div>
</section>

{/* <!-- CALL TO ACTION --> */}
<section className="call-background">
<div className="call-container container">
      <h5 className="center-align">Ready to start? Sign up now.</h5>
      <p className="call-text center-align">Test drive Bella Italia, free, for as long as you'd like. When you're convinced it's right 
        for you, purchase a subscription for the very reasonable prices below.</p>
  
  <div className="card-wrapper">
    <div className="cards">
      <div className="card-one">
        <div className="card-content">
          <div className="card-title card-odd">
            <h4>Bella Italia Free</h4>  
          </div>
          <div className="card-price card-even">
            <h3 className="card-price-border">FREE</h3>
          </div>
          <div className="card-features">
            <p className="card-odd">Instant Sign Up</p>
            <p className="card-even">Use as long as you'd like</p>
            <p className="card-odd">Selected articles</p>
            <p className="card-even">Full review functionality</p>
            <p className="card-odd">Upgrade anytime</p>
            <p className="card-even"></p>
            <p className="card-features-last card-odd"></p>
          </div>
          <div className="card-button-box card-even">
            <Link to="/register"><div className="top-button card-button">GET STARTED NOW</div></Link>
            </div>
        </div>
      </div>
      <div className="card-two">
        <div className="card-content">
            <div className="card-title pro-color">
              <h4>Bella Italia Pro</h4>  
            </div>
            <div className="card-price card-even">
              <h3 className="card-price-border pro-text-color">£9 <span className="card-text-small">/MONTH</span></h3>
              <h3 className="card-price-border pro-text-color">£89 <span className="card-text-small">/YEAR</span></h3>
            </div> 
            <div className="card-features">
              <p className="card-odd">Instant Sign Up</p>
              <p className="card-even">Full access to more than 740 modules</p>
              <p className="card-odd">New articles released weekly</p>
              <p className="card-even">Downloadable audio</p>
              <p className="card-odd">Built-in review functionality</p>
              <p className="card-even">Lock in a great price</p>
              <p className="card-features-last card-odd">Support a team that cares deeply about helping you succeed with Italian</p>
            </div>
            <div className="card-button-box card-even">
              <Link to="/register"><div className="top-button pro-button-color card-button">GET STARTED NOW</div></Link>
            </div>
          </div>
      </div>
  </div> {/*<!-- cards -->*/}
  </div> {/*<!-- card wrapper -->*/}
</div> {/*<!-- container -->*/}
</section>

{/* <!-- TESTIMONIALS --> */}
<section className="test-background">
  <div className="test-container container">
    <div className="carousel carousel-slider center">
      <div className="carousel-item white-text test-item" href="#one!">
        <h5 className="center-align">“The creator is a genius.”</h5>
        <p className="white-text">—Betty</p>
      </div>
      <div className="carousel-item white-text test-item" href="#two!">
        <h5 className="center-align">“I love this app.”</h5>
        <p className="white-text">—Brian</p>
      </div>
      <div className="carousel-item white-text test-item" href="#three!">
        <h5 className="center-align">“The articles are fun to read and interesting. The tools such as listening to individual sentences and 
          the clickable definitions are helpful as well.”</h5>
        <p className="white-text">—Meg</p>
      </div>
    </div>
  </div>
</section>

{/* <!-- BRAND --> */}
<section className="brand-background">
  <div className="brand-container container">
    <div className="brand-logo-bottom">
      <img src={process.env.PUBLIC_URL + "./html-images/learn italian/1small.png"} alt="logo" />
    </div>
    <div className="brand-text">
      <p>Bella Italia is lovingly crafted by the team behind Human Italian. We don't mass-produce language apps. Our passion is 
        helping people to deeply comprehend Italian, and we think you'll see that reflected in our work.</p>
    </div>
    <div className="brand-socials">
    <div className="icon">< FaFacebookSquare className="3x" /><i className="fas fa-volume-up fa-3x"></i>Facebook</div>
    <div className="icon">< FaTwitterSquare className="3x" /><i className="fas fa-volume-up fa-3x"></i>Twitter</div>
    </div>
    <div className="brand-email">
      <p><div style={{ color: "rgb(50, 54, 74" }}>Email us:</div> <div>bella@italia.com</div></p>
    </div>
  </div>
</section>

{/* <!-- FOOTER --> */}

<Footer />

{/* <footer>
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
</footer> */}

    
 
 {/* <!-- Compiled and minified JavaScript -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
 <!-- Compiled and minified JavaScript -->
 <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
    
    <script>
      document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  
    {/*$(document).ready(function(){
      $('.carousel').carousel({
        fullWidth: true,
        indicators: true
      });
    });
  
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  
    // document.getElementsByclassName('.copyright').innerText = new Date().getFullYear();  want to make dynamic date
  
  </script>      
</body> */}

        </div>
        </IconContext.Provider>
    )
}
}