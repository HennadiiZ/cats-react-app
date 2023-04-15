import React, { useState, useContext } from 'react';
import classes from './Slider.module.scss'; 
import Card from '../Card/Card';
import DataContext from '../../_store/data-context'; 
import Spinner from '../../UI/spinner/Spinner';
import Button from '../../UI/button/Button';

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const catsDataCtx = useContext(DataContext); 
  
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
    <section className={classes.slider}>

      {catsDataCtx.loading && (
        <div className={classes.slider__spinner}><Spinner/></div>
      )}

      {!catsDataCtx.loading && (
        catsDataCtx.totalCatsData > 0 &&  <Card card={props.cards[currentSlide]} />
      )}

      <div className={classes.slider__buttons}>
        <Button 
         label="Prev" 
         onClick={goToPrevSlide} 
        />
        <Button 
         label="Next" 
         onClick={goToNextSlide} 
        />
      </div> 
    </section>
  );
}

export default Slider;