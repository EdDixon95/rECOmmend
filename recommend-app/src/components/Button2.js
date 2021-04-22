 import React from "react";
import "./Button2.css";
import { Link } from "react-router-dom";

export function Button({ onSignUp }) {
  return (
    <Link to="sign-up">
      <button id="btn-cart" to="/cart" className="nav-links-mobile" >
              Cart
            </button>
    </Link>
  );
}
 
 
 
 
 