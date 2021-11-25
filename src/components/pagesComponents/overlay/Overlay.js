
const Overlay = ({over}) => {

    return (
        <>
           <div id="overlay"></div>
                <div className={'sidebar-wrapper'} id="sidebar">
                    <div className="position-absolute cross-wrapper" id="cerrar-submenu" onClick={()=>{over(false)}}>
                        <i className="fas fa-times fs-3 text-dark"></i>
                    </div> 
                    <ul className="mt-5">
                        <li className="pt-4 fs-5 fw-bold w-75"> <a href="#">Nuestra Historia</a>  </li>
                        <li className="pt-3 fs-5 fw-bold w-75"><a href="#">Palo Santo</a></li>
                        <li className="pt-3 fs-5 fw-bold w-75"><a href="#">Medicina Natural Cannábica</a></li>           
                        <li className="pt-3 fs-5 fw-bold w-75 position relative submenu">
                            
                        <a href="categoria.html">Hierbas</a>  
                            <ul className="d-none">
                                <li className="pt-3 fs-5 fw-normal"> <a href="#">Para Sahumar</a> </li>
                                <li className="pt-3 fs-5 fw-normal"><a href="#">Medicinales</a> </li>
                            </ul>
                        </li>
                        <li className="pt-3 fs-5 fw-bold w-75"><a href="#">Resinas para Sahumar</a></li>
                        <li className="pt-3 fs-5 fw-bold w-75"><a href="#">Polvos para Sahumar</a></li>
                        <li className="pt-3 fs-5 fw-bold w-75"><a href="#">Sahumerios</a></li>
                    
                    </ul>
                </div>  
        </>
    )
}

export default Overlay
