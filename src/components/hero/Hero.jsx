import React from "react";
import { IoSearch } from "react-icons/io5";
import heroImg from "../../assets/heroimg.png";
import "../../sass/__hero.scss";
const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <div className="hero__section">
          <div className="hero__section-info">
            <h1>Discover Most Suitable Watches</h1>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <form>
              <IoSearch />
              <input type="text" placeholder="Find the best brands" />
              <button>Search</button>
            </form>
          </div>
          <div className="hero__section-img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
