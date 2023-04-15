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

  const submitLinkHandler = (e) => { 
    e.preventDefault(); 
    catsDataCtx.replacePhoto(props.card)
    setShowUpdateButton(false);
    const updatedCard = { ...card, pictureUrl };
    catsDataCtx.replacePhoto(props.card, updatedCard);
  };

  const inputChangeHandler = (e) => { 
    e.preventDefault(); 
    setPictureUrl(e.target.value);
  };


  const editLinkHandler = (e) => {
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
          <div className={classes.input__wrapper}>
            { showUpdateButton && (
              <input 
                type="text" 
                value={pictureUrl} 
                onChange={inputChangeHandler} 
              />
            )}
            { showUpdateButton && (
              <Button 
                type='button'
                label="Update" 
                onClick={submitLinkHandler}
              />
            )}
          </div>

          <div>
            { !showUpdateButton && (
              <Button 
                type='button'
                label=" Edit" 
                onClick={editLinkHandler} 
              />
            )}
          </div>
        </form>
      {/*  */}
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