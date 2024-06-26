import React from "react";
import newsletterimg from "../../assets/newsletterimg.png";
import "../../sass/__newsletter.scss";
const Newslatter = () => {
  return (
    <div className="newsletter__wrapper">
      <div className="container">
        <div className="newsletter__section">
          <div className="newsletter__info">
            <h1>Subscribe To Newsletter</h1>
            <p>Get free guide about smart watches daily. </p>
            <form>
              <input type="text" placeholder="Enter Email Address" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="newsletter__img">
            <img src={newsletterimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
