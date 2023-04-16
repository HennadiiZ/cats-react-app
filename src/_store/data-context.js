// import React, { useState, useEffect } from 'react';
// import { THE_CAT_API } from '../constants/constants';
// import axios from "axios";

// const DataContext = React.createContext({
//   catsData: [],
//   totalCatsData: 0,
//   loading: false,
// });

// export const DataContextProvider = (props) => {
//   const [catsData, setCatsData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
  
//   useEffect(() => {
//     setIsLoading(true);
//     const fetchCatsData = async () => {
//       try {
//         const response = await axios.get(THE_CAT_API);
//         const data = response.data;
//         const listOfCats = [];
    
//         for(const key in data) {
//           listOfCats.push(data[key]);
//         }
//         setIsLoading(false);
//         setCatsData(listOfCats);
//       } catch (error) {
//         console.error("Error:", error.message);
//       }
//     }
//     fetchCatsData(); 
//   }, []);

//   const context= {
//     catsData: catsData, 
//     totalCatsData: catsData.length, 
//     loading: isLoading,
//   };
      
//   return (
//     <DataContext.Provider value={context}>
//       { props.children }
//     </DataContext.Provider>
//   );
// }

// export default DataContext;





//redux
// import React from 'react';
// import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';
// import { THE_CAT_API } from '../constants/constants';
// import axios from 'axios';

// const initialState = {
//   catsData: [],
//   totalCatsData: 0,
//   isLoading: false,
//   error: null
// };

// export const fetchCatsData = createAsyncThunk(
//   'cats/fetchCatsData',
//   async () => {
//     const response = await axios.get(THE_CAT_API);
//     return response.data;
//   }
// );

// export const catsSlice = createSlice({
//   name: 'cats',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCatsData.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCatsData.fulfilled, (state, action) => {
//         state.catsData = action.payload;
//         state.totalCatsData = action.payload.length;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(fetchCatsData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// const store = configureStore({
//   reducer: {
//     cats: catsSlice.reducer,
//   },
// });
// export default store;

// export const selectCatsData = (state) => state.cats.catsData;
// export const selectTotalCatsData = (state) => state.cats.totalCatsData;
// export const selectLoading = (state) => state.cats.isLoading;
// export const selectError = (state) => state.cats.error;










//my redux toolkit
import { THE_CAT_API } from '../constants/constants';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { 
  cats: [],
  isLoading: false,
};

export const catsSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    setCats: (state, action) => {
      state.cats = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});


export const catsActions = catsSlice.actions;


const store = configureStore({
  reducer: catsSlice.reducer
});
export default store;


export const fetchCatsList = () => async (dispatch) => {

  dispatch(catsSlice.actions.setIsLoading(true));

  try {
    const response = await axios.get(
      THE_CAT_API
    );

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    // console.log(response.data);
    dispatch(catsSlice.actions.setCats(response.data));

  } catch (error) {
    console.error('There was a problem with the axios operation:', error);
  } finally {
    dispatch(catsSlice.actions.setIsLoading(false));
  }
};
//