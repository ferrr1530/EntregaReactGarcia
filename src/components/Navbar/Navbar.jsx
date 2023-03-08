import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = (props) => {
   const [value, setvalue] = useState("")
  

   const handleSumbit = (event) =>{
      event.preventDefault();
      props.setSearch(value)
   }

   const handleChange = (event) => {
      setvalue(event.target.value)
   } 


  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img height="40px" src="https://t4.ftcdn.net/jpg/04/41/39/51/360_F_441395105_CEeRdyGRpTOGPg36rzfwIxNwagyRnGVG.jpg" alt="logo FG" />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
         <Link to={'/'}>Inicio</Link>
      </li>
      <li class="nav-item">
         <Link to={'/contact'}>Contactanos</Link>
      </li>
    </ul>
  </div>
  <div>
    <form onSubmit={handleSumbit}>
       <input type="text" value={value} onChange={handleChange}></input>
       <button type="sumbit">Buscar</button>
    </form>
  </div>
  <CartWidget />
  
</nav>
</>
  )
}

export default Navbar