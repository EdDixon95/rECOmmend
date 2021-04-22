import React, {Fragment, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Fetchdata from "./components/Fetchtest";
import Footer from "./components/Footer";
import SuggestProduct from "./components/SuggestProduct";
import RegisterUser from "./components/RegisterUser";
import Checkout from "./components/Checkout"


function App() { 

  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false)

  //cart status
  // const itemsAltsName = itemsAlts.name;
  // const { itemsAltsName, setItemsAltName } = useState([])

  return (
    <div className="App">
      <Router>
        <Navbar onSuggestion = {() => setShowSuggestion(!showSuggestion)} onSignUp={() => setShowSignUp(!showSignUp)} onCheckout={() => setShowCheckout(!showCheckout)}/>
      </Router>

      { showSuggestion&&<SuggestProduct />}
      { showSignUp && <RegisterUser />}
      { showCheckout && <Checkout />}

      {/* <Cart itemsAltsName ={itemsAltsName} />
      */}

      <>
        <ImageSlider slides={SliderData} />
      </>

      <Fetchdata />

      <Footer />
    </div>
  );
}

export default App;
