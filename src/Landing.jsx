import React from 'react'
import ItemListContainer from './components/ItemListContainer'

import Navbar from './components/Navbar/Navbar'


const Landing = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Bienvenidos a la tienda F/G"/>
    </>
    
  )
}

export default Landing