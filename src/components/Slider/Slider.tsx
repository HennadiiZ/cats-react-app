// import React, { useState, useEffect } from 'react';
// import classes from './Slider.module.scss'; 
// import Card from '../Card/Card';
// import Spinner from '../../UI/spinner/Spinner';
// import Button from '../../UI/button/Button';
// import { fetchCatsList } from '../../_store/data-context';
// import { useSelector, useDispatch } from 'react-redux';


// function Slider(props) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   // const catsDataCtx = useContext(DataContext); 

//   const cats = useSelector((state) => state.cats);
//   const isLoading = useSelector((state) => state.isLoading);
//   // const dispatch = useDispatch();


//   // useEffect(() => {
//   //   dispatch(fetchCatsList());
//   // }, [dispatch]);
  
//   const goToPrevSlide = () => {
//     setCurrentSlide(
//       currentSlide === 0 ? props.cards.length - 1 : currentSlide - 1
//     );
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide(
//       currentSlide === props.cards.length - 1 ? 0 : currentSlide + 1
//     );
//   };

//   return (
//     <section className={classes.slider}>
//       <h1>The Cat Super App</h1>

//       {isLoading && (
//         <div className={classes.slider__spinner}><Spinner/></div>
//       )}

//       {!isLoading && (
//         cats.length > 0 &&  <Card card={props.cards[currentSlide]} />
//       )}

//       <div className={classes.slider__buttons}>
//         <Button 
//          label="Prev" 
//          onClick={goToPrevSlide} 
//         />
//         <Button 
//          label="Next" 
//          onClick={goToNextSlide} 
//         />
//       </div> 
//     </section>
//   );
// }

// export default Slider;





//tsx
import React, { useState } from 'react';
import classes from './Slider.module.scss';
import Card from '../Card/Card';
import Spinner from '../../UI/spinner/Spinner';
import Button from '../../UI/button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../_store/data-context';

function Slider(props: { cards: { id: number; url: string; name: string; description: string }[] }) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const cats = useSelector((state: RootState) => state.cats);
  const isLoading = useSelector((state: RootState) => state.isLoading);

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
      <h1>The Cat Super App</h1>

      {isLoading && (
        <div className={classes.slider__spinner}><Spinner /></div>
      )}

      {!isLoading && (
        cats.length > 0 && <Card card={props.cards[currentSlide]} />
      )}

      <div className={classes.slider__buttons}>
        <Button
          label="Prev"
          onClick={goToPrevSlide} 
          type='button'       
        />
        <Button
          label="Next"
          onClick={goToNextSlide}
          type='button'   
        />
      </div>
    </section>
  );
}

export default Slider;
