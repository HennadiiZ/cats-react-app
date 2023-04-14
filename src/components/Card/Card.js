import classes from "./Card.module.scss"; 


function Card(props) {

  return (

    // <div className={classes.card}>
    //   <div className={classes.card__image}>
    //     <img 
    //       src={props.card.url} 
    //       alt="A cat" 
    //     />
    //   </div>
    //   <div className={classes.card__info}>
    //     <div>name: jhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbj</div>
    //     <div>
    //       description: jhjfkjhvhbj,jj,kjbjkbbjkbjk jhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbj
    //     </div>
    //   </div>
    // </div>


    <div className={classes.card}>
      <div className={classes.card__image}>
          <img 
            src={props.card.url} 
            alt="A cat" 
          />
      </div>
      <div className={classes.card__info}>
          <div>name: jhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbj</div>
          <div>description: jhjfkjhvhbj,jj,kjbjkbbjkbjk jhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbjjhjfkjhvhbj,jj,kjbjkbbjkbj</div>
      </div>
    </div>

  );
}

export default Card;