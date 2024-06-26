import React from "react";
import apple from "../../assets/apple.png";
import xiaomi from "../../assets/xiaomi.png";
import fitbit from "../../assets/fitbit.png";
import "../../sass/__newProducts.scss";
let carditems = [
  {
    id: 1,
    title: "Apple",
    desc: "Apple is one of the most famous smart watches providing company.",
    img: apple,
  },
  {
    id: 2,
    title: "Xiaomi",
    desc: "Xiaomi smart watches are produced by MI company.",
    img: xiaomi,
  },
  {
    id: 3,
    title: "FitBit",
    desc: "FitBit smart watches are best for there health and fitness features.",
    img: fitbit,
  },
];
const NewProducts = () => {
  let card = carditems.map((item) => (
    <div key={item.id} className="newProducts__card">
      <div className="card__img">
        <img src={item.img} alt="" />
      </div>
      <div className="card__info">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="newProducts__wrapper">
      <div className="container">
        <div className="newProducts__section">{card}</div>
      </div>
    </div>
  );
};

export default NewProducts;
