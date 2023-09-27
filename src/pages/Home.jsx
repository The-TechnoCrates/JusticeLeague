import React from "react";
import Footer from "../components/Footer";
import { Navbar } from "react-bootstrap";
import Practice_area from "../components/Practice_area";
import Testimonial from "../components/Testimonial"
function Home() {
  return (
    <div className="">
      <Navbar />
      <Practice_area/>
      <Testimonial/>
      <Footer />

    </div>
  );
}

export default Home;
