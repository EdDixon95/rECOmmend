import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <h1>Featured Products</h1>
      <section className="slider">
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.url} alt={slide.title} className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageSlider;
