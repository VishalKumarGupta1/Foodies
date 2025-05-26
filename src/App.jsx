import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hotdessert from "./components/Hotdessert";
import Banner from "./components/Banner";
import Popularrecipe from "./components/Popularrecipe";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="relative overflow-hidden text-dark">
        <Navbar />
        <Hero/>
      </div>
      <div className="overflow-hidden">
      <Hotdessert/>
      <Banner/>
      <Popularrecipe/>
      <Testimonial/>
      <Footer/>
      </div>
    </>
  );
};

export default App;
