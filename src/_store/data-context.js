import React, { useState, useEffect } from 'react';
import { THE_CAT_API } from '../constants/constants';
import axios from "axios";

const DataContext = React.createContext({
  catsData: [],
  totalCatsData: 0,
  loading: false,
});

export const DataContextProvider = (props) => {
  const [catsData, setCatsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    const fetchCatsData = async () => {
      try {
        const response = await axios.get(THE_CAT_API);
        const data = response.data;
        const listOfCats = [];
    
        for(const key in data) {
          listOfCats.push(data[key]);
        }
        setIsLoading(false);
        setCatsData(listOfCats);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchCatsData(); 
  }, []);

  const context= {
    catsData: catsData, 
    totalCatsData: catsData.length, 
    loading: isLoading,
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;