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

function App() {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  //cart status
  // const itemsAltsName = itemsAlts.name;
  // const { itemsAltsName, setItemsAltName } = useState([])

  return (
    <div className="App">
      <Router>
        <Navbar
          onSuggestion={() => {
            setShowSuggestion(!showSuggestion);
          }}
          onSignUp={() => setShowSignUp(!showSignUp)}
          onLogIn={() => setShowLogIn(!showLogIn)}
          onCheckout={() => setShowCheckout(!showCheckout)}
        />
      </Router>
      {showLogIn && <LogIn />}
      {showSuggestion && <SuggestProduct />}
      {showSignUp && <RegisterUser />}
      {showCheckout && <Checkout />}
      {/* <Cart itemsAltsName ={itemsAltsName} />
       */}

      {!(showLogIn || showSuggestion || showSignUp) && (
        <ImageSlider slides={SliderData} />
      )}

      {!(showLogIn || showSuggestion || showSignUp) && <Fetchdata />}

      <Footer />
    </div>
  );
}

export default App;
