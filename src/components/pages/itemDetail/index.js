import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router';
import { db } from '../../../firebaseConfig';
import { getDoc, doc} from '@firebase/firestore';
import { cartContext } from '../../../CartContext';



const ItemDetail = () => {

    const {id}= useParams();
    const [carrito, setCarrito] = useContext(cartContext)
    const [cantidad, setCantidad]= useState(0);
    
    const [article, setArticle] = useState({});
   
    

    useEffect(()=>{

        const equalQuantity = () => {
            //funcion para ver si el articulo en el array del localStorage es igual a la cantidad
            // y setear el estado de la cantidad a ese valor
            const stor = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [];
              
            let coincidence;

            if (stor.length >= 1) {
                coincidence = stor.find((i) => i.id === id);
                if (coincidence) {
                const cant = coincidence.cantidad !== undefined ? coincidence.cantidad : 0;
                setCantidad(cant);
              } 
              else {
                setCantidad(0);
              }
            } else if (stor.length > 0 && stor[0].id === article.id) {
              coincidence = { ...stor[0] };
              if (coincidence) {
                const cant =
                  coincidence.cantidad !== undefined ? coincidence.cantidad : 0;
                setCantidad(cant);
              } else {
                setCantidad(0);
              }
            }
          };


        const getArticle= async()=>{
    
            const dataRef= doc(db, 'products', id)
            const datos= await getDoc(dataRef);
    
           setArticle({...datos.data(), id:datos.id})
        }
        
        equalQuantity();
        getArticle()
        
    }, [])
    

    const addItem=()=>{

        const newItem = {...article, cantidad: cantidad+1};
        setCantidad(newItem.cantidad)

        const artInCart= carrito.find(i=> i.id=== article.id);

        if( artInCart && artInCart.id === article.id){
            const index= carrito.indexOf(artInCart)
            carrito.splice(index, 1);
            setCarrito([...carrito, newItem])
        }else if(!artInCart ){
            setCarrito([...carrito, newItem])
        }

    }
    const removeItem=()=>{

        const newItem = {...article, cantidad: cantidad-1};
        setCantidad(newItem.cantidad)
        const artInCart= carrito.find(i=> i.id=== article.id);

        if(newItem.cantidad >= 1){

            if( artInCart && artInCart.id === article.id){
                const index= carrito.indexOf(artInCart)
                carrito.splice(index, 1);
                setCarrito([...carrito, newItem])
            }
        }else{
        
            if( artInCart && artInCart.id === article.id){
                const index= carrito.indexOf(artInCart)
                carrito.splice(index, 1);
                setCarrito(c=>[...c])
                localStorage.setItem('cartItems', JSON.stringify(carrito))
            }
        }
    }

   

    return (
        <div className='detailContent'>

                <h2>{article.name}</h2>
            <div className="itemImages">
                <img src={article.image1} alt="" /> {article.image2 ? <img src={article.image2} alt=""  /> : null} 
            </div>
            <div className="itemDescription">
                <p>{article.info}</p>
            </div>
            <div className="itemPrice">
                <p>Precio c/u:</p>
                <span> {article.price}</span>$
            </div>
            <div className="itemButtons">
                <div className="buttonContainer">
                    <button className='menos' disabled={cantidad <=0 ? true : false} style={{backgroundColor: cantidad < 1 && 'grey'}} onClick={removeItem}>-</button>
                    <p>{cantidad}</p>
                    <button className='mas' onClick={addItem}>+</button>
                </div>
                <p>Unidades en el carrito</p>
            </div>
            
        </div>
    )
}

export default ItemDetail
