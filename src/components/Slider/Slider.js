import React, { useState } from "react";
import classes from "./Slider.module.scss"; 
import Card from "../Card/Card";

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToPrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? props.cards.length - 1 : currentSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(
      currentSlide === props.cards.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className={classes.slider}>
      <Card card={props.cards[currentSlide]} />

      <div className={classes.slider__buttons}>
        <button onClick={goToPrevSlide}>
          Prev
        </button>
        <button onClick={goToNextSlide}>
          Next
        </button>
      </div> 

    </div>
  );
}

export default Slider;