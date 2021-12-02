import React from 'react'

const Footer = () => {
    return (
    <footer className="w-100">
        <div className="container">
            <div className="row ">

                <div className="col-3 mt-5">
                    <p className="text-white fs-5 mb-2">No te olvides de seguirnos en:</p>
                    <div className="d-flex justify-content-start align-items-center ms-5">
                        <a href="https://www.instagram.com/runaruna.tienda/" className="me-3 hover-redes"><i className="fab fa-instagram fs-2 text-white"></i></a> 
                        <a href="https://www.facebook.com/runa.tiendaonline/" className="me-3 hover-redes"> <i className="fab fa-facebook fs-2 text-white"></i></a> 
                                                
                    </div>
                </div>

                <div className="col-3 mt-5">
                    <h4 className="text-white fs-5 mt-1 mb-3">Guia de Compra</h4>
                    <ul className="ps-0">
                        <li className="ps-0"><button className="text-white hover-links">Como comprar y</button></li>
                        <li className="ps-0"><button className="text-white hover-links">recibir tus productos</button></li>
                    </ul>
                </div>

                <div className="col-3 mt-5">
                    <h4 className="text-white fs-5 mt-1 mb-3">Nosotros</h4>
                    <ul className="ps-0">
                        <li className="ps-0"><button className="text-white hover-links">Contacto</button></li>
                        <li className="ps-0"><button className="text-white hover-links">Ubicación</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
