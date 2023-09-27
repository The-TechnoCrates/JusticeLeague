import React from "react";
import Footer from "../components/Footer";
import Practice_area from "../components/Practice_area";
import Testimonial from "../components/Testimonial";
import Homepage from "./Homepage";
function Home() {
  return (
    <div className="">
      <Homepage />
      <Practice_area />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
