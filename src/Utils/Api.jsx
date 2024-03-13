import axios from "axios";

const base_url="https://youtube138.p.rapidapi.com";
 
const options = {
   
     
    params: {
       
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '1c7eec097fmsha1861b28fa9b407p1dd859jsnea4631163983',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
   

export const fetchDataFromApi=async (url)=>{
    const {data}=await axios.get(`${base_url}/${url}`,options);
    return data ;
}
