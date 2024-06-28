import React from "react";
import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { IoCart } from "react-icons/io5";
import "../../sass/__header.scss";
import { Link } from "react-router-dom";
const navlink = [
  {
    id: 1,
    link: "Home",
    path: "/",
  },
  {
    id: 2,
    link: "Brands",
    path: "/brands",
  },

  {
    id: 3,
    link: "Recent Products",
    path: "/products",
  },
  {
    id: 4,
    link: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    link: "About",
    path: "/",
  },
  {
    id: 6,
    link: "Login",
    path: "/login",
  },
];
const Header = () => {
  let navlinkItems = navlink.map((nav) => (
    <Link to={nav.path} key={nav.id}>
      {nav.link}
    </Link>
  ));
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
