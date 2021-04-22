import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1>About Us</h1>
      <p>
        <strong className="brand">
          <span className="brand-col-1">r</span>
          <span className="brand-col-2">ECO</span>
          <span className="brand-col-1">mmend</span>
        </strong>
        is an eco-friendly company that is commited to making the world a
        greener place.
        <br />
        <br />
        Our mission is to provide quality alternatives to your everyday items to
        reduce wastage.
        <br />
        We want to get the oceans 70% cleaner by 2030 and reduce land waste by
        25% by 2032 and you can help us on our journey!
        <br />
        If you're an eager greener and you have any suggestions of other
        alternatives please fill out the Suggest A Product form, we would really
        appreciate it!
        <br />
        #rECOmmend #SaveTheOcean🐟🌊 #SaveOurWorld🌎
      </p>
    </div>
  );
};

export default AboutUs;
