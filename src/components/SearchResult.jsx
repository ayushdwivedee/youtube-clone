import React , {useState,useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { fetchDataFromApi } from '../Utils/Api';
import LeftNav from "./LeftNav";
import {ContextApi} from "../context/ContextApi";
import SearchResultVideoCard from './SearchResultVideoCard';

const SearchResult = () => {
  const [result,setResult]=useState([]);
  const {searchquery}=useParams();
  const {setLoading}=useContext(ContextApi);

console.log(searchquery);
  
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults()
  },[searchquery]);
 
  const fetchSearchResults=() =>{
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchquery}`).then((res)=>{
      // console.log(res);
      setResult(res?.contents);
      setLoading(false)
    });
  };
  return (
    <div className='flex  flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className="md:pl-40 md:ml-20 grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
              {result?.map((item) => {
                if(item?.type !== "video") return false;
                let video = item?.video;
                return (
                  <SearchResultVideoCard key={video?.videoId} video={video}/>
                )
              })}
          </div>
      </div>
    </div>
  )
}

export default SearchResult
