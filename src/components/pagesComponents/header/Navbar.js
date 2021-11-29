import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import { cartContext } from '../../../CartContext'


const Navbar = ({over}) => {
    const [carrito]=useContext(cartContext);
    let cant=0;
    for (const item of carrito) {
        cant= cant + item.cantidad;
        console.log(cant)
    }
    
    return (
      <>  
        <div className="w-100 navbar">
            <div className="container">
                <div className="row w-100">
                    <div className="col-12">
                        <div className="navbar-wrapper d-flex justify-content-between align-items-center w-100">

                            <div className="hamburger-wrapper pointer navItem">
                                <button className="text-dark" id="hamburger" onClick={()=>{over(true)}}><i className="fas fa-bars pointer"></i></button>                              
                            </div>

                            <div className="logo-wrapper">
                            <Link to='/'><img src={logo} alt="Runa Tienda"/></Link>
                            </div>
                            
                            <div className="input-buscando-wrapper position-relative">
                                <input type="text" name="buscar" id="buscarInput" className="input-runa text-white" placeholder="¿Qué estás buscando?"/>
                                <i className="fas fa-search position-absolute "></i>
                            </div>

                            <div className="login-wrapper d-flex justify-content-center align-items-center">
                                <i className="far fa-user text-white me-3"></i>
                                <div className="d-flex flex-column">
                                    <p className="fs-6 fw-bold text-white">Hola !</p>
                                    <div className="d-flex">
                                        <Link to='home/admin'><button type="button" className="btn btn-runa me-1">Admin Log</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carrito-wrapper mt-2 position-relative pointer">
                                <i className="fas fa-shopping-cart text-white"></i>
                                <div className="counter-wrapper position-absolute ">
                                    <span>{carrito.reduce((total, item)=>{return total + item.cantidad},0) }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </>

    )
}

export default Navbar
