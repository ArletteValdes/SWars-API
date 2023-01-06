import { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import SwCard from "./SwCard";
import SearchText from "./SearchText";

const SwApp=()=>{

  //UseStates requeridos

  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");

  //Llamado API general

  const SwAppRequest = async () => {
    const response = await fetch("api.json");
    //espero promesa sea resuelta
    const data = await response.json();
    setInfo(data.results)
 
  };

  // //Hook para evitar que se lea toda la función con cada refresh

  useEffect(() => {
   SwAppRequest();
  }, []);


    //Placeholder filtro
const filteredResults = info.filter((results)=> results.name.includes(search))

// console.log(info)

  return (
  

<>
            <Header />
            <SearchText setSearch={setSearch} />
             {/* <section 
              className="d-flex flex-wrap"/> */}
              
            {filteredResults.map((results) => <SwCard key={results.name} />)} 
            
            
        </>
  
  )
};

export default SwApp;
