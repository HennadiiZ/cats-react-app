import classes from './Card.module.scss'; 
import DataContext from '../../_store/data-context'; 
import { useContext, useState, useEffect } from 'react';
import Button from '../../UI/button/Button';

function Card(props) {
  const catsDataCtx = useContext(DataContext); 


  //
  const [pictureUrl, setPictureUrl] = useState(props.card.url); 
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  const card = catsDataCtx?.catsData?.find(item => +item.id ===  +props.cardId);

  useEffect(() => {
    setPictureUrl(props.card.url);
  }, [props.card.url]);
  //

  const replacePhotoHandler = (e) => { 
    catsDataCtx.replacePhoto(props.card)
    // console.log(catsDataCtx.replacePhoto)
    // console.log('props', props.card.id);
    console.log(pictureUrl);

    e.preventDefault(); 


    e.preventDefault();
    setShowUpdateButton(false);
    const updatedCard = { ...card, pictureUrl };
    // cardsCtx.updateCard(card.id, updatedCard);
    catsDataCtx.replacePhoto(props.card, updatedCard);
  };

  const titleChangeHandler = (e) => { 
    e.preventDefault(); 
    setPictureUrl(e.target.value);
  };


  const titleEditHandler = (e) => {
    e.preventDefault();
    setShowUpdateButton(true);
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
          Name: 
        </div>
        <hr className={classes.card__divider} />
        <div>
          Description: { props.card.url }
          {/* Description: { props?.card?.breeds[0]?.name } jhjfkjhvhbj, */}
        </div>
      </div>

      {/*  */}
      <form>
            <div className={classes.input_wrapper}>
              { showUpdateButton && <input type="text" value={pictureUrl} onChange={titleChangeHandler} />}
            </div>
            <div className={classes.btns_wrapper}>
              { !showUpdateButton && (
                <button 
                  type='button' 
                  className={classes.btn_edit} 
                  onClick={titleEditHandler}
                >
                  Edit
                </button>
              )}
              { showUpdateButton && (
                <button 
                  type='button' 
                  className={classes.btn_edit} 
                  onClick={replacePhotoHandler}
                >
                  Update
                </button>
              )}
            </div>
          </form>
      {/*  */}

      <Button 
        label="Replace Pic" 
        onClick={replacePhotoHandler} 
      />
    </div>
  );
}

export default Card;







//----
// import classes from './Card.module.scss'; 
// import DataContext from '../../_store/data-context'; 
// import { useContext } from 'react';
// import Button from '../../UI/button/Button';

// function Card(props) {
//   const catsDataCtx = useContext(DataContext); 

//   const replacePhotoHandler = () => { 
//     catsDataCtx.replacePhoto(props.card)
//     // console.log(catsDataCtx.replacePhoto)
//     console.log('props', props.card.id);
//   };

//   return (
//     <div className={classes.card}>
//       <div className={classes.card__image}>
//         <img 
//           src={props.card.url} 
//           alt="A cat" 
//         />
//       </div>
//       <div className={classes.card__info}>
//         <div>
//           Name: 
//         </div>
//         <hr className={classes.card__divider} />
//         <div>
//           Description: { props.card.url }
//         </div>
//       </div>

//       <Button 
//         label="Replace Pic" 
//         onClick={replacePhotoHandler} 
//       />
//     </div>
//   );
// }

// export default Card;