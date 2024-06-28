import React from "react";
import Hero from "../../components/hero/Hero";
import NewProducts from "../../components/newProducts/NewProducts";
import OurProducts from "../../components/ourProducts/OurProducts";
import About from "../../components/about/About";
import Newslatter from "../../components/newsletter/Newslatter";
const Home = () => {
  return (
    <div className="home__wrapper">
      <Hero />
      <NewProducts />
      <OurProducts />
      <About />
      <Newslatter />
    </div>
  );
};

export default Home;
