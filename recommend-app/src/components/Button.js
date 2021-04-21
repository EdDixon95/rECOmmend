import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button({ onSignUp }) {
  return (
    <Link to="sign-up">
      <button className="btn navbar-button" onClick={onSignUp}>
        Sign Up
      </button>
    </Link>
  );
}
