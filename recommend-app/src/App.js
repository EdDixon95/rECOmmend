import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Fetchdata from "./components/Fetchtest";
import Footer from "./components/Footer";
import SuggestProduct from "./components/SuggestProduct";
import RegisterUser from "./components/RegisterUser";
import LogIn from "./components/LogIn";
import Checkout from "./components/Checkout";
import AboutUs from "./components/AboutUs";

function App() {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showItems, setShowItems] = useState(false);

  //cart status
  // const itemsAltsName = itemsAlts.name;
  // const { itemsAltsName, setItemsAltName } = useState([])

  return (
    <div className="App">
      <Router>
        <Navbar
          onHome={() => {
            setShowSignUp(false);
            setShowLogIn(false);
            setShowCheckout(false);
            setShowItems(false);
            setShowSuggestion(false);
          }}
          onSuggestion={() => {
            setShowSuggestion(!showSuggestion);
            if (!showSuggestion) {
              setShowSignUp(false);
              setShowLogIn(false);
              setShowCheckout(false);
              setShowItems(false);
            }
          }}
          onSignUp={() => {
            setShowSignUp(!showSignUp);
            if (!showSignUp) {
              setShowLogIn(false);
              setShowCheckout(false);
              setShowSuggestion(false);
              setShowItems(false);
            }
          }}
          onLogIn={() => {
            setShowLogIn(!showLogIn);
            if (!showLogIn) {
              setShowSuggestion(false);
              setShowCheckout(false);
              setShowSignUp(false);
              setShowItems(false);
            }
          }}
          onCheckout={() => {
            setShowCheckout(!showCheckout);
            if (!showCheckout) {
              setShowLogIn(false);
              setShowSuggestion(false);
              setShowSignUp(false);
              setShowItems(false);
            }
          }}
          onViewItems={() => {
            setShowItems(!showItems);
            if (!showItems) {
              setShowLogIn(false);
              setShowSuggestion(false);
              setShowSignUp(false);
              setShowCheckout(false);
            }
          }}
        />
      </Router>
      {showLogIn && <LogIn />}
      {showSuggestion && <SuggestProduct />}
      {showSignUp && <RegisterUser />}
      {showCheckout && <Checkout />}
      {showItems && <Fetchdata />}

      {!(
        showLogIn ||
        showSuggestion ||
        showSignUp ||
        showCheckout ||
        showItems
      ) && <ImageSlider slides={SliderData} />}

      {!(
        showLogIn ||
        showSuggestion ||
        showSignUp ||
        showCheckout ||
        showItems
      ) && <AboutUs />}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
