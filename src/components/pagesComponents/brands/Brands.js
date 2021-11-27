import React from 'react'
import marca from '../../../assets/img/marca.jpg'
import logo from '../../../assets/img/logo-marcas.jpg'

const Brands = () => {
    return (
        <>

        <div className="row ms-5 mb-3">
            <div className="col-12">
                <div className="d-flex align-items-center">
                    <h3 className="text-dark me-3">NUESTRAS MARCAS</h3>                  
                </div>
            </div>
        </div>

         {/* MARCAS  */}
         <div className="row mb-5 marcasContainer">
            <div className='marca' >              
                <div className="marca-wrapper position-relative">  
                       {/* MARCA :: COLOR FONDO  */}
                    <div className="position-absolute fondo-color">  
                        <img src={logo} alt="Marca Selva Madre" className="logo-marca"/>                     
                    </div>            
                   <img src={marca} alt="Marcas Runa Tienda" className="img-fluid imageMarcas"/>
                </div>
            </div>
            <div className='marca'>
                <div className="marca-wrapper position-relative">  
                   { /* MARCA :: COLOR FONDO */}
                 <div className="position-absolute fondo-color">  
                     <img src={logo} alt="Marca Selva Madre" className="logo-marca"/>                     
                 </div>            
                <img src={marca} alt="Marcas Runa Tienda" className="img-fluid imageMarcas"/>
             </div>
            </div>
            <div className='marca'>
                <div className="marca-wrapper position-relative">  
                    {/* MARCA :: COLOR FONDO  */}
                 <div className="position-absolute fondo-color">  
                     <img src={logo} alt="Marca Selva Madre" className="logo-marca"/>                     
                 </div>            
                <img src={marca} alt="Marcas Runa Tienda" className="img-fluid imageMarcas"/>
             </div>
            </div>
            <div className='marca'>
                <div className="marca-wrapper position-relative">  
                    {/* MARCA :: COLOR FONDO  */}
                 <div className="position-absolute fondo-color">  
                     <img src={logo} alt="Marca Selva Madre" className="logo-marca"/>                     
                 </div>            
                <img src={marca} alt="Marcas Runa Tienda" className="img-fluid imageMarcas"/>
             </div>
            </div>
        </div>
            
    </>
    )
}

export default Brands
