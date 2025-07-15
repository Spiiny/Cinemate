import { useState,useEffect } from "react";

export const UseFetch = (apiPath,queryTerm="") => {

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=b7a50a2c94bcad543a7e1cba7c4e0555&query=${queryTerm}`;

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
