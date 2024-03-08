import axios from "axios";

const base_url="https://youtube138.p.rapidapi.com";
 
const options = {
   
     
    params: {
       
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '419d973996msh42453439a8eae42p119debjsn568e72626a50',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
   

export const fetchDataFromApi=async (url)=>{
    const {data}=await axios.get(`${base_url}/${url}`,options);
    return data ;
}