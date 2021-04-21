import React, {Fragment, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Fetchdata from "./components/Fetchtest";
import Footer from "./components/Footer";
import SuggestProduct from "./components/SuggestProduct"
import RegisterUser from "./components/RegisterUser"

function App() { 

  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <div className="App">
      <Router>
        <Navbar onSuggestion = {() => setShowSuggestion(!showSuggestion)} onSignUp={() => setShowSignUp(!showSignUp)} />
      </Router>

      { showSuggestion&&<SuggestProduct />}
      {showSignUp && <RegisterUser />}

      <>
        <ImageSlider slides={SliderData} />
      </>

      <Fetchdata />

      <Footer />
    </div>
  );
}

export default App;
