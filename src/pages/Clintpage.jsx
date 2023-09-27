import React from "react";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import bars from "../assets/bars.png";
import back from "../assets/background.jpg";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";
import LawyersCards from "./clienthome";
import {RxHamburgerMenu}  from 'react-icons/rx'

function ClientPage() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <RxHamburgerMenu/>
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
            <LawyersCards/>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
