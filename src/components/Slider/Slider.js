import React, { useState } from "react";
import classes from "./Slider.module.scss"; 

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

      {/*  */}
      <div className={classes.card}>
        <div className={classes.card__image}>
          <img 
            src={props.cards[currentSlide].url} 
            alt="A cat" 
          />
        </div>
        <div className={classes.card__info}>
          <div>name: jhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbj</div>
          <div>description: { props.cards[currentSlide].url } jhjfkjhvhbj,jj,kjbjkbbjkbjk jhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbj</div>
        </div>
      </div>
      {/*  */}
      
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
