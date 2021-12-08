import { useState, createContext} from "react";

export const cartContext = createContext();

export const CartProvider=({children})=>{
    const storage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    const[carrito, setCarrito] = useState(storage);
  

    localStorage.setItem('cartItems',JSON.stringify(carrito) )
    return(

        <cartContext.Provider value={[carrito, setCarrito]}>

            {children}

        </cartContext.Provider>

    )

}