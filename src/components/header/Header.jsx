import React from "react";
import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { IoCart } from "react-icons/io5";
import "../../sass/__header.scss";
const navlink = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Brands",
  },
  {
    id: 3,
    link: "Recent Products",
  },
  {
    id: 4,
    link: "Contact",
  },
  {
    id: 5,
    link: "About",
  },
];
const Header = () => {
  let navlinkItems = navlink.map((nav) => <p key={nav.id}>{nav.link}</p>);
  return (
    <div className="header__wrapper">
      <div className="container">
        <div className="header__section">
          <div className="header__logo">
            <img src={logo} alt="" />
            <h3>Mohid</h3>
          </div>
          <div className="header__links">{navlinkItems}</div>
          <div className="header__items">
            <IoSearch />
            <BsFillPersonFill />
            <div>
              <IoCart />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
