import React, { useState, useEffect } from 'react';
import { THE_CAT_API } from '../constants/constants';

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

  const replacePhoto = async (breedId) => {

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