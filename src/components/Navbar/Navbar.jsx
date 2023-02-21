import React from 'react'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <>
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="Tienda F/G">F/G</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="Inicio">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Productos">Nuestros Productos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Contacto">Contactanos</a>
      </li>
    </ul>
  </div>
  <CartWidget />
</nav>
</>
  )
}

export default Navbar