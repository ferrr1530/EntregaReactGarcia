import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './Context/CartContext';


const Cart = () => {
    const {cart, totalCart, removeItem, clear, totalAPagar} = useContext(CartContext);

    if (totalCart() === 0 ) {
        return(
            <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
                 <div class="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
        </div>
        </div>
        </div>
        )
    }

    return (
        <div className="container">
        <h1 className='text-center'>PRODUCTOS SELECCIONADOS</h1>
        <table className="table">
            <thead>
            <tr>
                <td>&nbsp;</td>
                <td>Nombre</td>
                <td>Cantidad</td>
                <td>Precio</td>
                
                <td>Subtotal</td>
                <td>&nbsp;</td>
                
            </tr>
            </thead>
            <tbody>
            
                {
                    cart.map(item =>
                        <tr key={item.index}>
                            
                            <td><img src={item.imagen} alt={item.nombre} width={80}/></td>
                            <td>{item.nombre}</td>
                            <td>{item.quantity}</td>
                            <td>${item.precio}</td>
                            <td>${item.precio * item.quantity}</td>
                            <td><Link onClick={() => {removeItem(item.index)}}><i className="bi bi-trash-fill"></i></Link></td>
                            
                        </tr>
                        )
                }
            
            <tr>
                <td><Link className="btn btn-danger" to={"/checkout"}>Finalizar compra</Link></td>
                <th><button type="buttom" className="btn btn-danger" onClick={() => {clear()}}>Vaciar Carrito</button></th>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td className="text-end">Total a pagar: <b>${totalAPagar()}</b> </td>
                
                
                </tr>
                </tbody>
        </table>
        </div>
        
    )
}


export default Cart;