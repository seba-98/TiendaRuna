import React, { useContext, useState, useEffect} from 'react'
import { cartContext } from '../../../CartContext';
import { db } from '../../../firebaseConfig'
import swal from 'sweetalert';
import { collection, addDoc } from '@firebase/firestore';

const BuyModal = ({data, modal}) => {

    const {
        cp, 
        prov, 
        city,  
        location, 
        email,
        tel,
        name
    }=data;

   const[carrito, setCarrito ] = useContext(cartContext);
   const set=()=>{return carrito.reduce((total, item)=>{return total + item.cantidad*item.price}, 0)}
   const[dataProduct, setDataProduct] = useState([]);



    useEffect(()=>{
        setDataProduct(()=>{
            const arr= carrito.map(item=>{
                return {
                       nameProduct: item.name,
                       cantProduct: item.cantidad,
                       totalProductPrice: item.price * item.cantidad
                    } 
            })
            return arr;
        })
    },[carrito])
    
    
    const sellData={
        name: name,
        tel: tel,
        email: email,
        location: location,
        city: city,
        prov: prov,
        cp: cp,
        dataProduct: dataProduct,
        finalPrice:set()
    }


    const buy=(e)=>{
        e.preventDefault()
        const docRef= collection(db, 'sells');
        addDoc(docRef, sellData ).then(r=>{
            swal({
                title:'Compra realizada!',
                text:'Se informará por email y teléfono los medios de pago',
                icon:'success'
            })
            setCarrito([])
            modal(false);
        }) 
        
    }



    return (
        <div className='buyModal'>
            <div className='buyInfo'>
                    <div className='closeButtonContent'><button onClick={()=>{modal(false)}}>✕</button></div>
                        <div className='itemsModalContent'>
                            <h2 style={{color:'black'}}>Usted esta comprando</h2>
                            {
                                carrito && carrito.map((item, idx)=>{
                                    return(
                                        
                                        <div key={idx} className='buyDescription buyItem'>
                                            <p>{item.name}</p>
                                            <p>Cantidad {item.cantidad} unidades</p>
                                            <p>Precio {item.cantidad * item.price}$</p>
                                        </div>
                                    )
                                })
                            }
                            <div className='buyDescription'>
                                <p>precio final:{set()}$</p>
                            </div>
                            <div className='buyDescription'>
                                <p>DATOS DE CLIENTE</p>
                                <p>nombre y apellido: {name}</p>
                                <p>telefono: {tel}</p>
                                <p>email: {email}</p>
                                <p>dirección: {location}</p>
                                <p>ciudad: {city}</p>
                                <p>provincia: {prov}</p>
                                <p>código postal: {cp}</p>
                                
                            </div>
                        </div>
                                <button className='sendButton' onClick={buy} >Finalizar compra</button>
                </div>

        </div>
    )
}

export default BuyModal
