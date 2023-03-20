import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import arrayProductos from '../json/Productos.json';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      const promesa= new Promise((resolve) => {
        setTimeout (() =>{
             resolve (arrayProductos.find(prod => prod.index === parseInt(id)));
        }, 1000);
     });

     promesa.then ((respuesta)=>{
            setItem(respuesta);
     })
     }, [id]);
    
    return (
    <div>
      < ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer