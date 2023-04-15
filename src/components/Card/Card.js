import classes from "./Card.module.scss"; 
import DataContext from '../../_store/data-context'; 
import { useContext } from "react";


function Card(props) {

  const catsDataCtx = useContext(DataContext); 

  const replacePhotoHandler = () => { 

    catsDataCtx.replacePhoto(props.card)
    // console.log(catsDataCtx.replacePhoto)
    console.log('props', props.card.id);
  };

  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img 
          src={props.card.url} 
          alt="A cat" 
        />
      </div>
      <div className={classes.card__info}>
        <div>
          Name: jhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,
        </div>
        <div>
          Description: { props.card.url } jhjfkjhvhbj, 
          {/* Description: { props?.card?.breeds[0]?.name } jhjfkjhvhbj, */}
        </div>
      </div>


        <button onClick={replacePhotoHandler}>
          Replace Pic
        </button>

    </div>
  );
}

export default Card;