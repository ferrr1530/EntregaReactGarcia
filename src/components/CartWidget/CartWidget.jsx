import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Carrito2 from '../images/Carrito2.svg'

const CartWidget = () => {
   const {cartTotal} = useContext(CartContext);

  return (cartTotal() > 0) ?
    < Link to={'/cart'} className='btn btn-warning position-relative'>
      <img src={Carrito2} alt={"Carrito"} />
    <span>{cartTotal()}</span>
    </Link> : "";
}

export default CartWidget