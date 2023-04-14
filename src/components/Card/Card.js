import classes from "./Card.module.scss"; 

function Card(props) {
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
    </div>
  );
}

export default Card;