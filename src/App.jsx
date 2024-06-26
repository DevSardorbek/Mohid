import { useState } from "react";
import Header from "./components/header/Header";

import "./sass/style.scss";
import Hero from "./components/hero/Hero";
import NewProducts from "./components/newProducts/NewProducts";
import About from "./components/about/About";
import Newslatter from "./components/newsletter/Newslatter";
import Footer from "./components/footer/Footer";
import OurProducts from "./components/ourProducts/OurProducts";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <NewProducts />
      <OurProducts />
      <About />
      <Newslatter />
      <Footer />
    </>
  );
}

export default App;
