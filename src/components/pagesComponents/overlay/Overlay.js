
import { Link } from "react-router-dom"
const Overlay = ({over}) => {

    return (
        <>
           <div id="overlay"></div>
                <div className={'sidebar-wrapper'} id="sidebar">
                    <div className="position-absolute cross-wrapper" id="cerrar-submenu" onClick={()=>{over(false)}}>
                        <i className="fas fa-times fs-3 text-dark"></i>
                    </div> 
                    <ul className="mt-5">
                        <Link to='/info/historia'><li className="pt-4 fs-5 fw-bold w-75"> Nuestra Historia </li></Link>
                        <Link to='/info/contacto'><li className="pt-3 fs-5 fw-bold w-75">Contacto</li> </Link>
                        <Link to='/info/comprar'><li className="pt-3 fs-5 fw-bold w-75 ">¿Como comprar?</li></Link>   
                        <br/>
                        <li className="pt-3 fs-5 fw-bold w-75">Resinas para Sahumar</li>
                        <li className="pt-3 fs-5 fw-bold w-75">Polvos para Sahumar</li>
                        <li className="pt-3 fs-5 fw-bold w-75">Sahumerios</li>
                    </ul>
                </div>  
        </>
    )
}

export default Overlay
