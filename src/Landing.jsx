import React, { useEffect, useState } from 'react'



import ItemListContainer from './components/ItemListContainer'

import Navbar from './components/Navbar/Navbar'
import Results from './components/Navbar/Results'


const Landing = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
      if (search !== ""){
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then((res)=> res.json())
      .then((data)=> setResults(data.results))
      }
    }, [search])
    
  return (
    
    <>
    <Navbar setSearch={setSearch}/>
    <Results results={results} />
    <ItemListContainer greeting="Bienvenidos a la tienda F/G"/>

    
    
    </>
  )
}

export default Landing