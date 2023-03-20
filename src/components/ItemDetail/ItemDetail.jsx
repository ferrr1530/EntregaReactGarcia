const ItemDetail = ({item}) => {
  return (
    <div className='container'>{
        <div className='row'>
            <div className='col d-flex aling-items-center justify-content-end'>
            <img src={item.imagen} alt={item.nombre} />
            </div>
        <div className='col d-flex aling-items-center'>
            <div>
              <h1>{item.nombre}</h1>
              <h4>{item.calorias} kcal</h4>
              <p>${item.precio}</p>
            </div>
        </div>
        </div>
      }
      </div>
  )
}

export default ItemDetail