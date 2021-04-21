import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Fetchdata from "./components/Fetchtest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Fetchdata />
      <Footer />
    </div>
  );
}

export default App;
