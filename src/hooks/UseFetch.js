import { useState,useEffect } from "react";

export const UseFetch = (apiPath,queryTerm="") => {

    const apiKey = import.meta.env.VITE_API_KEY;
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

    useEffect(()=>{
    async function fetches(){
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results)
    }
    fetches();
  },[url]);

  return {data};
}
