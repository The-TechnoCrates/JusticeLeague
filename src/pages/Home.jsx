import React from "react";
import Footer from "../components/Footer";
import Practice_area from "../components/Practice_area";
import Testimonial from "../components/Testimonial"
import Navbar from "../components/navbar";
import NavbarComponent from "../components/navbar";
function Home() {
  return (
    <div className="">
      <NavbarComponent/>
      <Practice_area/>
      <Testimonial/>
      <Footer />

    </div>
  );
}

export default Home;
