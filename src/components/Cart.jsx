import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import Trash from './images/trash.svg'

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, cartSum} = useContext(CartContext);

    if (cartTotal() === 0){
        return (
        <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
                 <div class="alert alert-primary" role="alert">No se encontraron productos en el carrito</div>
        </div>
        </div>
        </div>
        )
    }
    return (
        <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
            <h1 className='text-center'>PRODUCTOS SELECCIONADOS</h1>
            <table className='table'>
                <tr>
                <td className='text-end' colspan={5}><Link className='btn btn-warning' onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                </tr>
              { 
                cart.map(item => (
                    <tr key={item.index}>
                        <td><img src={item.imagen} alt={item.nombre}/></td>
                        <td>{item.nombre}</td>
                        <td>{item.quantity} x ${item.precio}</td>
                        <td>${item.quantity * item.precio}</td>
                        <td><button type='button' className='btn btn-warning' onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"}><img src={Trash} alt={"Eliminar producto"} /></button></td>
                    </tr>
                ))
                }
                <tr>
                    <td>Total a Pagar</td>
                    <td><b>{cartSum()}</b></td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </div>
        </div>
        </div>
  )
}

export default Cart