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
    const response = await fetch('https://swapi.dev/api/people');
    //espero promesa sea resuelta
    const data = await response.json();
    setInfo(data.results)

    console.log(data)
 
  };

  // //Hook para evitar que se lea toda la función con cada refresh

  useEffect(() => {
   SwAppRequest();
  }, []);


    //Placeholder filtro
const filteredInfo= info.filter((item)=> item.name.includes(search))



  return (
  

    <>
   <Header/>
<SearchText setSearch={setSearch}/>
    <section 
    className="d-flex flex-wrap"/>
      {filteredInfo.map((item)=><SwCard key={item.name} gender={gender}/>)}
    </>
  
  )
};

export default SwApp;
