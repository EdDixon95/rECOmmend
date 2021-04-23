import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar({
  onSuggestion,
  onSignUp,
  onLogIn,
  onCheckout,
  onViewItems,
  onHome,
}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); //enables toggle
  const closeMobileMenu = () => setClick(false); //menu will disappear and direct to intended page
  //if/else shorthand if 'click' is true then display icon else, display bars
  //ul - 'click' on tag will drag out menu
  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            onHome();
            closeMobileMenu();
          }}
        >
          <img className="logo-image" src={logo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                onHome();
                closeMobileMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                onViewItems();
                closeMobileMenu();
              }}
            >
              Eco Shop <i className="fas fa-leaf" />
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                onSuggestion();
                closeMobileMenu();
              }}
            >
              Suggest A Product <i class="fas fa-question" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                onLogIn();
                closeMobileMenu();
              }}
            >
              Log In <i class="fas fa-user-circle"></i>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
              className="nav-links-mobile pc"
              onClick={() => {
                onSignUp();
                closeMobileMenu();
              }}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={onCheckout}>
              Checkout <i class="fas fa-shopping-bag"></i>
            </Link>
          </li>
        </ul>
        <Button onSignUp={onSignUp} />
      </nav>
    </>
  );
}

export default Navbar;
