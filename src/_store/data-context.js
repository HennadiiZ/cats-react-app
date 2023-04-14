import React, { useState, useEffect } from 'react';
import { THE_CAT_API } from '../constants/constants';

const DataContext = React.createContext({
  catsData: [],
  totalCatsData: 0,
  loading: false,
  // addCats: (newCat) => {},
  // removeCats: (id) => {},
  // updateCat: (id) => {}, 
});

export const DataContextProvider = (props) => {
  const [catsData, setCatsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {  
    setIsLoading(true);  
    // fetchCatsData(setCatsData, setIsLoading); 

    const fetchCatsData = async () => {
        try {
          const response = await fetch(THE_CAT_API);
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

//   const addCatsHandler = (newCat) => {
//     setCatsData([...catsData, newCat]);
//   };

//   const removeCatHandler = (itemId) => {
//     setCatsData((prevCat) => {
//       return prevCat.filter(item => item.id !== itemId);
//     }); 
//   };

//   const updateCatHandler = (itemId, cat) => {};

  const context= {
    catsData: catsData, 
    totalCatsData: catsData.length, 
    loading: isLoading,
    // addCats: addCatsHandler,
    // removeCats: removeCatHandler,
    // updateCat: updateCatHandler, 
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