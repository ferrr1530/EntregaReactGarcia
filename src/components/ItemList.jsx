import { Link } from 'react-router-dom';
import React from 'react'
import Item from './Item';



const ItemList = ({items}) => {
  return (
    < Link to={"/item/" + items.index} className="text-decoration-none text-dark">
    <div className='row'>
      {items.map( item => ( 
      <div className='col-md-4' key={item.index}> 
      <Item item={item} />
      </div>
        ))}</div>
    </Link>
  )
}

export default ItemList