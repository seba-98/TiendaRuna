import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import { cartContext } from '../../../CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({over}) => {
    const [carrito]=useContext(cartContext);
    let cant=0;
    for (const item of carrito) {
        cant= cant + item.cantidad;
    }
    
    
    return (
      <>  
        <div className="w-100 navbar">
            <div className="navbar-wrapper d-flex justify-content-around align-items-center w-100">
                
                <div className='brand'>
                    <div className="hamburger-wrapper pointer navItem">
                        <button className="text-dark" id="hamburger" onClick={()=>{over(true)}}><FontAwesomeIcon icon={faBars} size='3x'/></button>                              
                    </div>

                    <div className="logo-wrapper">
                        <Link to='/'><img src={logo} alt="Runa Tienda"/></Link>
                    </div>
                </div>
                <div className="secondBrand">
                    <div className="login-wrapper d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faUser} size='2x' style={{color:'white', margin:'10px'}} />
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold text-white">Hola !</p>
                            <div className="d-flex">
                                <Link to='home/admin'><button type="button" className="btn btn-runa me-1">Admin Log</button></Link>
                            </div>
                        </div>
                    </div>
                    <Link to='/cart'>
                        <div className="carrito-wrapper mt-2 position-relative pointer">
                            <FontAwesomeIcon icon={faShoppingCart}size='2x' />
                            <div className="counter-wrapper position-absolute ">
                                <span>{carrito.reduce((total, item)=>{return total + item.cantidad},0) }</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     
    </>

    )
}

export default Navbar
