
// the last one IMPORTANT
// import classes from './Card.module.scss'; 
// import DataContext from '../../_store/data-context'; 
// import { useContext, useState, useEffect } from 'react';
// import Button from '../../UI/button/Button';

// function Card(props) {
//   const catsDataCtx = useContext(DataContext); 
//   const [catImage, setCatImage] = useState(null);
//   const [catName, setCatName] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.thecatapi.com/v1/images/${props.card.reference_image_id}`)
//       .then(response => response.json())
//       .then(data => {
//         setCatImage(data.url);
//         // console.log(data.breeds[0].name);
//         setCatName(data.breeds[0].name);
//       });
//   }, [catImage, props.card.reference_image_id]);

// //   console.log(catImage);
// console.log(catName);

//   const randomPhotoHandler = (e) => { 
//     e.preventDefault(); 
//     // catsDataCtx.replacePhoto(props.card.id)


//   fetch("https://api.thecatapi.com/v1/breeds")
//   .then((response) => response.json())
//   .then((data) => {
//     const filteredBreeds = data.filter((breed) =>
//       breed.name.toLowerCase().includes(catName.toLowerCase())
//     );
//     console.log(filteredBreeds);
//   })
//   .catch((error) => console.error(error));
//   };



//   return (
//     <div className={classes.card}>
//       <div className={classes.card__image}>

//         {/* <img 
//           src={catImage.url} 
//           alt={props.card.name} 
//         /> */}

//         {catImage ? (
//           <img src={catImage} alt="Cat" />
//         ) : (
//           <p>Loading cat image...</p>
//         )}

//       </div>
//       <div className={classes.card__info}>
//         <div>
//           Name: { props.card.name }
//         </div>
//         <hr className={classes.card__divider} />
//         <div>
//           Description: { props.card.description }
//         </div>
//       </div>


//       <Button 
//         type='button'
//         label="Replace" 
//         onClick={randomPhotoHandler}
//       />
  
//     </div>
//   );

// //   return (
// //     <div className={classes.card}>
// //       <div className={classes.card__image}>
// //         <img 
// //           src={props.card.url} 
// //           alt="A cat" 
// //         />
// //       </div>
// //       <div className={classes.card__info}>
// //         <div>
// //           Name: 
// //         </div>
// //         <hr className={classes.card__divider} />
// //         <div>
// //           Description: { props.card.url }
// //           {/* Description: { props?.card?.breeds[0]?.name } jhjfkjhvhbj, */}
// //         </div>
// //       </div>


// //       <Button 
// //         type='button'
// //         label="Replace" 
// //         onClick={randomPhotoHandler}
// //       />
  
// //     </div>
// //   );
// }

// export default Card;




// ---- with form input
// import classes from './Card.module.scss'; 
// import DataContext from '../../_store/data-context'; 
// import { useContext, useState, useEffect } from 'react';
// import Button from '../../UI/button/Button';

// function Card(props) {
//   const catsDataCtx = useContext(DataContext); 
//   //
//   const [pictureUrl, setPictureUrl] = useState(props.card.url); 
//   const [showUpdateButton, setShowUpdateButton] = useState(false);
//   const card = catsDataCtx?.catsData?.find(item => +item.id ===  +props.cardId);

//   useEffect(() => {
//     setPictureUrl(props.card.url);
//   }, [props.card.url]);
//   //

//   const submitLinkHandler = (e) => { 
//     e.preventDefault(); 
//     catsDataCtx.replacePhoto(props.card)
//     setShowUpdateButton(false);
//     const updatedCard = { ...card, pictureUrl };
//     catsDataCtx.replacePhoto(props.card, updatedCard);
//   };

//   const inputChangeHandler = (e) => { 
//     e.preventDefault(); 
//     setPictureUrl(e.target.value);
//   };


//   const editLinkHandler = (e) => {
//     e.preventDefault();
//     setShowUpdateButton(true);
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
//           {/* Description: { props?.card?.breeds[0]?.name } jhjfkjhvhbj, */}
//         </div>
//       </div>


//         <form>
//           <div className={classes.input__wrapper}>
//             { showUpdateButton && (
//               <input 
//                 type="text" 
//                 value={pictureUrl} 
//                 onChange={inputChangeHandler} 
//               />
//             )}
//             { showUpdateButton && (
//               <Button 
//                 type='button'
//                 label="Update" 
//                 onClick={submitLinkHandler}
//               />
//             )}
//           </div>

//           <div>
//             { !showUpdateButton && (
//               <Button 
//                 type='button'
//                 label=" Edit" 
//                 onClick={editLinkHandler} 
//               />
//             )}
//           </div>
//         </form>
  
//     </div>
//   );
// }

// export default Card;












//---- before form
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


































// - after important (this one is not important)
// import classes from './Card.module.scss'; 
// import DataContext from '../../_store/data-context'; 
// import { useContext, useState, useEffect } from 'react';
// import Button from '../../UI/button/Button';

// function Card(props) {
//   const catsDataCtx = useContext(DataContext); 
//   const [catImage, setCatImage] = useState(null);
//   const [catName, setCatName] = useState(null);




//   useEffect(() => {
//     fetch(`https://api.thecatapi.com/v1/images/${props.card.reference_image_id}`)
//       .then(response => response.json())
//       .then(data => {
//         setCatImage(data.url);
//         setCatName(data.breeds[0].name);
//       });
//   }, [catImage, props.card.reference_image_id]);


//   const randomPhotoHandler = (e) => { 
//     e.preventDefault(); 
//   fetch("https://api.thecatapi.com/v1/breeds")
//   .then((response) => response.json())
//   .then((data) => {
//     const filteredBreeds = data.filter((breed) =>
//       breed.name.toLowerCase().includes(catName.toLowerCase())
//     );
//     console.log(filteredBreeds);
//   })
//   .catch((error) => console.error(error));
//   };



//   const [cats, setCats] = useState([]);


//   const handleRandomPicClick = (index, breedId) => {

//     console.log(props.card.id);

//     fetch("https://api.thecatapi.com/v1/images/search", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key": "https://api.thecatapi.com/v1/breeds/",
//       },
//       body: JSON.stringify({
//         // breed_id: breedId,
//         breed_id: props.card.id,
//         mime_types: "jpg,png",
//         size: "",
//         sub_id: "",
//         limit: 1,
//         page: 1,
//         order: "RANDOM",
//         format: "json",
//       }),
//     })
//     // .then((response) => response.json())
//     .then((response) => {
//         console.log("Response status:", response.status);
//         return response.json();
//       })
//     .then((data) => {
//     //   const newCats = [...cats];
//     //   newCats[index].url = data[0].url;
//     //   setCats(newCats);
//     console.log(data);
//     })
//     .catch((error) => console.error(error));
//   };  



//   return (
//     <div className={classes.card}>
//       <div className={classes.card__image}>
//         {catImage ? (
//           <img src={catImage} alt="Cat" />
//         ) : (
//           <p>Loading cat image...</p>
//         )}

//       </div>
//       <div className={classes.card__info}>
//         <div>
//           Name: { props.card.name }
//         </div>
//         <hr className={classes.card__divider} />
//         <div>
//           Description: { props.card.description }
//         </div>
//       </div>
//       {/* <Button 
//         type='button'
//         label="Replace" 
//         onClick={randomPhotoHandler}
//       /> */}

//       <Button 
//         type='button'
//         label="Replace" 
//         onClick={handleRandomPicClick}
//       />
  
//     </div>
//   );
// }

// export default Card;





















import axios from "axios";
import classes from "./Card.module.scss";
import DataContext from "../../_store/data-context";
import { useContext, useState, useEffect } from "react";
import Button from "../../UI/button/Button";
import { API_KEY } from "../../constants/constants";

function Card(props) {
  const catsDataCtx = useContext(DataContext);
  //
  const [pictureUrl, setPictureUrl] = useState(props.card.url);
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const card = catsDataCtx?.catsData?.find(
    (item) => +item.id === +props.cardId
  );

  async function getBreedImage() {
    const { data } = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=&api_key=${API_KEY}`
    );
    setPictureUrl(data[0].url);
    return data;
  }

  console.log(props);

  useEffect(() => {
    getBreedImage();
  }, [props.card.id]);

  const submitLinkHandler = (e) => {
    e.preventDefault();
    catsDataCtx.replacePhoto(props.card);
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
        <img src={pictureUrl} alt="A cat" />
      </div>
      <div className={classes.card__info}>
        <div>Name: {props.card.name}</div>
        <hr className={classes.card__divider} />
        <div>
          Description: {props.card.description}
          {/* Description: { props?.card?.breeds[0]?.name } jhjfkjhvhbj, */}
        </div>
      </div>

      {/*  */}
      <form>
        <div className={classes.input__wrapper}>
          {showUpdateButton && (
            <input
              type="text"
              value={pictureUrl}
              onChange={inputChangeHandler}
            />
          )}
          {showUpdateButton && (
            <Button type="button" label="Update" onClick={submitLinkHandler} />
          )}
        </div>

        <div>
          <Button type="button" label="Refresh" onClick={getBreedImage} />
        </div>
      </form>
      {/*  */}
    </div>
  );
}

export default Card;