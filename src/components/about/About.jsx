import React from "react";
import img1 from "../../assets/aboutimg1.png";
import img2 from "../../assets/aboutimg2.png";
import star from "../../assets/star.png";
import "../../sass/__about.scss";
const About = () => {
  return (
    <div className="about__wrapper">
      <div className="container">
        <div className="about__title">
          <p>Here are our some of the best clients.</p>
          <h2>Here are our some of the best clients.</h2>
        </div>
        <div className="about__section">
          <div className="about__card">
            <div className="about__card-img">
              <img src={img1} alt="" />
            </div>
            <div className="about__section-info">
              <h4>Hamza Faizi</h4>
              <p>
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <img src={star} alt="" />
            </div>
          </div>
          <div className="about__card">
            <div className="about__card-img">
              <img src={img2} alt="" />
            </div>
            <div className="about__section-info">
              <h4>Hafiz Huzaifa</h4>
              <p>
                I’ve been purchasing smart watches of Mohid for a long time. All
                the products are good quality.
              </p>
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
