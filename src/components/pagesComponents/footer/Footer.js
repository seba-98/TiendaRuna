import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
    <footer className="w-100">
        <div className="container">
            <div className="row ">

                <div className="col-3 mt-5">
                    <p className="text-white fs-5 mb-2">No te olvides de seguirnos en:</p>
                    <div className="d-flex justify-content-start align-items-center ms-5">
                        <a href="https://www.instagram.com/runaruna.tienda/" className="me-3 hover-redes"><img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt='instagram'/></a> 
                        <a href="https://www.facebook.com/runa.tiendaonline/" className="me-3 hover-redes"> <img src="https://img.icons8.com/fluency/48/000000/facebook.png" alt='facebook'/></a> 
                                                
                    </div>
                </div>

                <div className="col-3 mt-5">
                    <h4 className="text-white fs-5 mt-1 mb-3">Guia de Compra</h4>
                    <Link to='/info/comprar'>
                        <ul className="ps-0">
                            <li className="ps-0"><button className="text-white hover-links">Como comprar y</button></li>
                            <li className="ps-0"><button className="text-white hover-links">recibir tus productos</button></li>
                        </ul>
                    </Link>
                </div>

               
            </div>
        </div>
    </footer>
    )
}

export default Footer
