
import React, { useEffect} from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';


const SwCard = ({itemUrl}) => {

    const [swData,setSwData]=useState({})

    const getItemPeople= async()=>{
        const response = await fetch(itemUrl)
        const data = await response.json()
        setSwData(data)
        }


        useEffect(() => {
            getItemPeople()
        }, []);




  
    return (

       
    <Card  className="tarjeta bg-dark text-light m-2" >
      <Card.Title className="encabezado"><h1>{swData.name}</h1></Card.Title>
      <Card.Body>
        <Card.Title className="titulo p-1 text-light" >Genre: {swData.gender} </Card.Title>
              <h2>Birth-Year: {swData.birth_year}</h2>
      </Card.Body>
    </Card>


    )
    
}

export default SwCard