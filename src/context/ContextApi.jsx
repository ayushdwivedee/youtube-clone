import React, { useEffect, createContext, useState } from "react";
import { fetchDataFromApi } from "../Utils/Api";

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  
  useEffect(()=>{
    fetchDataForSelectedCategory(selectCategories)
  },[selectCategories])

const fetchDataForSelectedCategory=async(query)=>{
   setLoading(true)
    try {
     const {contents}= await fetchDataFromApi(`search/?q=${query}`)
    //  console.log(contents)
     setSearchResults(contents)
     setLoading(false)
   } catch (error) {
    console.log("Something went wrong");
    setLoading(false)
   }
}

  return (
    <ContextApi.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        selectCategories,
        setSelectCategories,
        searchResults,
        setSearchResults,
        loading,
        setLoading,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
