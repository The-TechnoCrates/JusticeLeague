import React from "react";
import insta from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import bars from "../assets/bars.png"
import back from "../assets/background.jpg"
import twitter from "../assets/twitter.png"
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <img src={bars} alt="Logo" />
          </div>
          <div className="navbar-menu__wrapper">
            <div className="navbar__menu">
              <a href="#" className="active">
                Home
              </a>
              <a href="#"> About Us </a>
            </div>
            <div className="navbar__auth">
              <Link to="/login" className="sign-in">
                Sign In
              </Link>
              <Link to="/signup">Join Us</Link>
            </div>
          </div>
          <div className="navbar-menu__small-device">
            <img src="/assets/bars.png" alt="Bars" />
          </div>
        </div>
        <div className="hero">
          <div className="hero__content">
            <div className="snippets">
              <span> Law and Rights </span>
            </div>
            <div className="title">
              <span>
                Join <span className="summer">Justice Leagues</span>
              </span>
            </div>
            <div className="description">
              <span>
              Discover a tailored eMarketplace designed exclusively for legal professionals. Our platform seamlessly connects legal service providers with clients seeking expert assistance. Whether you're a seasoned attorney, paralegal, or legal consultant, finding the right clients has never been easier. Likewise, clients can efficiently locate experienced legal professionals to address their unique needs. Experience a smarter, more efficient way to connect and thrive in the legal industry.
              </span>
            </div>
            <button className="order-now">Drop your info here!</button>
            <div className="social-media">
              <a href="#">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={insta} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="hero__image">
            <img src={back} alt="pic" />
          </div>
        </div>
        <div className="background">
          <img src="" alt="Background pic" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
