import React, { useContext } from 'react'
import { cartContext } from '../../../CartContext';
import img from '../../../assets/img/marca.jpg'

const Cart = () => {

    const [carrito, setCarrito] = useContext(cartContext);


    return (
        <ul className='cartContainer'>
            <h3>Carrito de compras</h3>

            {carrito && carrito.map((item, idx)=>{

                return(
                <li key={idx}>
                    <img src={item.image1} alt="" width='200px' /> 
                    <div className='cartInfo'>
                        <p>{item.name}</p>
                    </div> 
                    <div className='cartInfo'>
                        <p>Precio unidad: {item.price} $</p>
                    </div> 
                    <div className="cartButtons">
                        <div className="cartButtonContainer">
                            <button className='cartMenos' >-</button>
                            <p>{item.cantidad}</p>
                            <button className='cartMas' >+</button>
                        </div>
                    </div>
                    <div className='cartInfo'>
                        <p>Precio total/articulo: {item.cantidad*item.price} $</p>
                    </div> 
                </li>
                )
            })}

            <li className='finalPrice'>Precio final (sin envio): {carrito.reduce((total, item)=>{return total + item.price * item.cantidad}, 0)}$ </li>
            <li className='btnFinalCompra'><button>REALIZAR COMPRA</button></li>
        </ul>
    )
}

export default Cart
