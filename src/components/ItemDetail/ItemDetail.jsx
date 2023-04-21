import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext);
  const onAdd = (quantity) => {
    addItem(item, quantity);
  }

  return (
    <div className='container'>
        <div className='row my-5'>
            <div className='col d-flex aling-items-center justify-content-end'>
            <img width={450} height={350} src={item.imagen} alt={item.nombre} />
            </div>
        <div className='col d-flex aling-items-center'>
            <div>
              <h1>{item.nombre}</h1>
              <h4>{item.calorias} kcal</h4>
              <p>${item.precio}</p>
              <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
        </div>
      </div>
  )
}

export default ItemDetail