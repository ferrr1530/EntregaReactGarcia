import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <img height="40px" src="https://t4.ftcdn.net/jpg/04/41/39/51/360_F_441395105_CEeRdyGRpTOGPg36rzfwIxNwagyRnGVG.jpg" alt="logo FG" />
  <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className='navbar-toggler-icon'></span>
  </button>
  <div className='collapse navbar-collapse' id="navbarNav">
    <ul className='navbar-nav'>
      <li className='nav-item'>
         <Link to={'/'}>Productos</Link>
      </li>
      <li className='nav-item'>
         <Link to={'/category/comida'}>Comida</Link>
      </li>
      <li className='nav-item'>
         <Link  to={'/category/papas'}>Papas Fritas</Link>
      </li>
      <li className='nav-item'>
         <Link to={'/category/postres'}>Postres</Link>
      </li>
      <li className='nav-item'>
         <Link to={'/category/bebidas'}>Bebidas</Link>
      </li>
    </ul>
  </div>

  <CartWidget />
  
</nav>
</>
  )
}

export default Navbar