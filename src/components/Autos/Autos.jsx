import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer'
import Navbar from '../Navbar/Navbar'



const Autos = () => {
     const [autosList, setAutos] = useState(null)

     useEffect(() => {
          fetch('https://api.mercadolibre.com/sites/MLA/search?q=autos')
          .then( response => response.json())
          .then( dataJson => setAutos(dataJson.results))
          
     }, [])
     
  return (
    <>
    < Navbar />

    <div>
    <h1>Lista de Autos</h1>
    <ul style={{margin: 0, padding: 0, color: 'blue' }}>
               {
                autosList?.map((autos, index) =>(
                  <li style={{backgroundColor: 'green', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
                    <Link to={`/auto/${index+1}`}>{autos.title} </Link>
                  </li>
                ))
               }

    </ul>
    </div>

    <ItemListContainer greeting="Bienvenidos a la tienda F/G"/>
    </>
  )
}

export default Autos