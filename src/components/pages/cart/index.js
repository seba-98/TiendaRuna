import React, { useContext } from 'react'
import { cartContext } from '../../../CartContext';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [carrito, setCarrito] = useContext(cartContext);


    const add = (item) =>{
        item.cantidad = item.cantidad + 1;
        const update= carrito.filter(art=>{

            if(art === item){
                return item
            }else{
                return art
            }
        })
        setCarrito(update)
    }

    const remove = (item) =>{
        item.cantidad = item.cantidad - 1;

        if(item.cantidad >=1){
            const update= carrito.filter(art=>{
    
                if(art === item){
                    return item
                }else{
                    return art
                }
            })
            setCarrito(update)
        }else{
            const update= carrito.filter(art=>{
                if(art !== item){
                    return art
                }
            })
            setCarrito(update)
        }
    }

    const clear = () =>{
        setCarrito([])
        swal({
            title:'Vaciaste el carrito',
            icon:'warning'
        })

    }

    return (
        <ul className='cartContainer'>
            <h3>Carrito de compras</h3>

            {carrito && carrito.length > 0 ? carrito.map((item, idx)=>{

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
                            <button className='cartMenos' onClick={()=>{remove(item)}}>-</button>
                            <p>{item.cantidad}</p>
                            <button className='cartMas' onClick={()=>{add(item)}} >+</button>
                        </div>
                    </div>
                    <div className='cartInfo'>
                        <p>Precio total/articulo: {item.cantidad*item.price} $</p>
                    </div> 
                </li>
                )
            })
            :
            <h3 style={{padding:'150px 0 150px 0'}}>Carrito vacío</h3>
        }
            <li className='finalPrice'>Precio final (sin envio): {carrito.reduce((total, item)=>{return total + item.price * item.cantidad}, 0)}$ </li>
            <li className='btnFinal' >
            <Link to='/buyForm'><button className='btnCompra' style={{backgroundColor: carrito.length<1 && 'grey'}} disabled={carrito.length<1 ? true : false}>REALIZAR COMPRA</button></Link>
            <button className='btnVaciar' onClick={clear} style={{backgroundColor: carrito.length<1 && 'grey'}} disabled={carrito.length<1 ? true : false}>Vaciar carrito</button>
            </li>
        </ul>
    )
}

export default Cart
