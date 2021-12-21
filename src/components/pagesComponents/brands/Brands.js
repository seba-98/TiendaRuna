import React from 'react'
import marca from '../../../assets/img/marca.jpg'
import logo from '../../../assets/img/logo-marcas.jpg'
import satya from '../../../assets/img/satya.jpg'
import goloka from '../../../assets/img/goloka.jpg'
import myl from '../../../assets/img/myl.jpg'

const Brands = () => {
    return (
        <>

        <div className="row ms-5 mb-3">
            <div className="col-12">
                <div className="d-flex align-items-center">
                    <h3 className="text-dark me-3">ALGUNAS DE NUESTRAS MARCAS</h3>                  
                </div>
            </div>
        </div>

         {/* MARCAS  */}
         <div className="row mb-5 marcasContainer">
            <div className='marca' >              
                <div className="marca-wrapper position-relative" style={{height:'100%'}}>  
                       {/* MARCA :: COLOR FONDO  */}
                    <div className="position-absolute fondo-color">  
                        <img src={logo} alt="Marca Selva Madre" className="logo-marca"/>                     
                    </div>            
                   <img src={marca} alt="Marcas Runa Tienda" className="img-fluid imageMarcas" style={{height:'100%'}}/>
                </div>
            </div>
            <div className='marca'>
                <div className="marca-wrapper position-relative" style={{height:'100%'}}>  
                   { /* MARCA :: COLOR FONDO */}
                 <div className="position-absolute fondo-color">  
                 <h3 >Satya</h3>                   
                 </div>            
                <img src={satya} alt="Marcas Runa Tienda" className="img-fluid imageMarcas" style={{height:'100%'}}/>
             </div>
            </div>
            <div className='marca'>
                <div className="marca-wrapper position-relative" style={{height:'100%'}}>  
                    {/* MARCA :: COLOR FONDO  */}
                 <div className="position-absolute fondo-color">  
                     <h3>Goloka</h3>                 
                 </div>            
                <img src={goloka} alt="Marcas Runa Tienda" className="img-fluid imageMarcas" style={{height:'100%'}}/>
             </div>
            </div>
            <div className='marca'>
                <div className="marca-wrapper position-relative" style={{height:'100%'}}>  
                    {/* MARCA :: COLOR FONDO  */}
                 <div className="position-absolute fondo-color">  
                     <h3>Murray y Lanman</h3>                  
                 </div>            
                <img src={myl} alt="Marcas Runa Tienda" className="img-fluid imageMarcas" style={{height:'100%'}}/>
             </div>
            </div>
        </div>
            
    </>
    )
}

export default Brands
