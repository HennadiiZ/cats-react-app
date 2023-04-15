import React, { useState, useEffect } from 'react';
import { THE_CAT_API, API_KEY } from '../constants/constants';

const DataContext = React.createContext({
  catsData: [],
  totalCatsData: 0,
  loading: false,
  replacePhoto: (id) => {},
});

export const DataContextProvider = (props) => {
  const [catsData, setCatsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {  
    setIsLoading(true);  
    const fetchCatsData = async () => {
        try {
          // const response = await fetch(`${THE_CAT_API}search?limit=10`);
          // const response = await fetch('https://api.thecatapi.com/v1/breeds');
          const response = await fetch(`${THE_CAT_API}`);
          if (!response.ok) {
            throw new Error("Cats not found");
          }
          const data = await response.json();
        
          const listOfCats = [];
      
          for(const key in data) {
            listOfCats.push({itemId: key, ...data[key]});
          }
          setIsLoading(false);
          setCatsData(listOfCats);
        } catch (error) {
          console.error("Error:", error.message);
        }
    }
    fetchCatsData(); 
  }, []);

  // const replacePhoto = async (breed) => {
  //   console.log('props', breed.id);
  //   console.log('prop', breed); 
  
  //   breed.url = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(`${THE_CAT_API}${breed.id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify(breed),
  //       headers: {
  //         'x-api-key': API_KEY,
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error('Update failed');
  //     }
  
  //     const updatedCardItem = await response.json();
  //     const cardIndex = setCatsData.findIndex((card) => card.id === updatedCardItem.id);
  //     const updatedCardItems = [...catsData];
  //     updatedCardItems[cardIndex] = updatedCardItem;
  
  //     setCatsData(updatedCardItems);
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  //   setIsLoading(false);
  // };








  const replacePhoto = async (breedId) => {
    const card = catsData?.find(item => +item.id ===  +breedId);
    console.log('id ', breedId);
    console.log('card', card); 
  
    // breed.url = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  
    // try {
    //   setIsLoading(true);
    //  // const response = await fetch(`${THE_CAT_API}${breedId}`, {
    // const response = await fetch(https://api.thecatapi.com/v1/images/search?breed_ids=${currentBreed.id}, {
    //     method: 'PUT',
    //     body: JSON.stringify(card),
    //     headers: {
    //       'x-api-key': API_KEY,
    //     },
    //   });
    //   if (!response.ok) {
    //     throw new Error('Update failed');
    //   }
  
    //   const updatedCardItem = await response.json();
    //   const cardIndex = setCatsData.findIndex((card) => card.id === updatedCardItem.id);
    //   const updatedCardItems = [...catsData];
    //   updatedCardItems[cardIndex] = updatedCardItem;
  
    //   setCatsData(updatedCardItems);
    // } catch (error) {
    //   console.error('Error:', error.message);
    // }
    // setIsLoading(false);
  };




  const context= {
    catsData: catsData, 
    totalCatsData: catsData.length, 
    loading: isLoading,
    replacePhoto: replacePhoto,
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;






















// import { createSlice, configureStore } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = { 
//   catsData: [],
//   isLoading: false, 
// };

// export const catsDataSlice = createSlice({
//   name: 'catsData',
//   initialState: initialState,

//   reducers: {
//     setcatsData: (state, action) => {
//       state.repos = action.payload;
//       state.filteredData = action.payload;
//     },
//     setIsLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//   },
// });


// export const reposActions = catsDataSlice.actions;


// const store = configureStore({
//   reducer: catsDataSlice.reducer
// });
// export default store;


// export const fetchCatsData = () => async (dispatch) => {

//   const URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

//   dispatch(catsDataSlice.actions.setIsLoading(true));

//   try {
//     const response = await axios.get(
//       URL
//     );

//     if (response.status !== 200) {
//       throw new Error('Network response was not ok');
//     }

//     dispatch(catsDataSlice.actions.setcatsData(response.data.items));

//   } catch (error) {
//     console.error('There was a problem with the operation:', error);
//   } finally {
//     dispatch(catsDataSlice.actions.setIsLoading(false));
//   }
// };