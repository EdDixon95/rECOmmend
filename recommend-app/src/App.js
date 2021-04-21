import React, {Fragment} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Fetchdata from "./components/Fetchtest";
import Footer from "./components/Footer";

function App() {
  return (
    <div classname="App">
      <Router>
        <Navbar />
      </Router>
      <>
          <ImageSlider slides={SliderData}/>
      </>
      <Fetchdata />
      <Footer />
    </div>
  );
}

export default App;
