import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

const AutoDetail = () => {
 
 const {id} = useParams();
 const [auto, setAuto] = useState(null)
 

 useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=autos/${id}`)
     .then( response => response.json())
     .then( dataJson => setAuto(dataJson))
   
 }, [id])
 
 
 
    return (
      <>
      < Navbar />
    <div>{

      auto  ?
      <>
      <div>
       <img style={{width:'200px',height:'200px'}} src={auto.thumbnail}></img>
      <div>
           <h1>{auto.title}</h1>
           <p> Precio: ${auto.price}</p>
           <p>Cantidad de vendidos: {auto.sold_quantity}</p>
      </div>
      </div>
      </>
      :
      <p>Cargando...</p>
      
    }
    </div>
    </>
  )
}

export default AutoDetail