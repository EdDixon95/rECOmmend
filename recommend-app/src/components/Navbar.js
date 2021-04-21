import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar( {onSuggestion} ) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); //enables toggle
  const closeMobileMenu = () => setClick(false); //menu will disappear and direct to intended page
  //if/else shorthand if 'click' is true then display icon else, display bars
  //ul - 'click' on tag will drag out menu
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/EcoShop" className="nav-links" onClick={closeMobileMenu}>
              Eco Shop <i className="fas fa-leaf" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/suggest-a-product"
              className="nav-links"
              onClick={onSuggestion}
            >
              Suggest A Product <i class="fas fa-question" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
