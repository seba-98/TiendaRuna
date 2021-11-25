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
                        <a href="https://www.instagram.com/runaruna.tienda/" className="me-3 hover-redes"> <i className="fab fa-facebook fs-2 text-white"></i></a> 
                        <a href="https://www.instagram.com/runaruna.tienda/" className="me-3 hover-redes"> <i className="fab fa-whatsapp fs-2 text-white"></i></a>                        
                    </div>
                </div>

                <div className="col-3 mt-5">
                    <h4 className="text-white fs-5 mt-1 mb-3">Guia de Compra</h4>
                    <ul className="ps-0">
                        <li className="ps-0"><button className="text-white hover-links">Crear una Cuenta</button></li>
                        <li className="ps-0"><button className="text-white hover-links">Pago</button></li>
                        <li className="ps-0"><button className="text-white hover-links">Envío</button></li>
                        <li className="ps-0"><button className="text-white hover-links">Guía para nuevos usuarios</button></li>
                    </ul>
                </div>

                <div className="col-3 mt-5">
                    <h4 className="text-white fs-5 mt-1 mb-3">Guia de Compra</h4>
                    <ul className="ps-0">
                        <li className="ps-0"><button className="text-white hover-links">Crear una Cuenta</button></li>
                        <li className="ps-0"><button className="text-white hover-links">Pago</button></li>
                        <li className="ps-0"><button className="text-white hover-links">Envío</button></li>
                        <li className="ps-0"><button class="text-white hover-links">Guía para nuevos usuarios</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
