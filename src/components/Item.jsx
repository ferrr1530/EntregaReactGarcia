import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    < Link to={"/item/" + item.id} className='text-decoration-none text-dark'>
    <div className='card'>
  <img width={450} height={350} className='card-img-top' src={item.imagen} alt={item.nombre} />
  <div className='card-body'>
    <p className='card-title'>{item.nombre}</p>
  </div>
    </div>
    </Link>
  )
}

export default Item