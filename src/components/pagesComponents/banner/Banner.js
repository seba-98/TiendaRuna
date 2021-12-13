import React from 'react'
import imgFondoBlanco from '../../../assets/img/logo-blanco.png'
import banner from '../../../assets/img/banner.png'

const Banner = ({img={banner}, height, h2='Productos de poder', dis='block'}) => {


    return (
        <div className='header-bar banner-categoria' style={{backgroundImage: `url(${img})` , height:height} }>
            <div className="container h-75">
                <div className="row h-100">
                    <div className="col-12 h-100">
                        <div className="d-flex flex-column justify-content-center align-items-end h-100">
                            <img src={imgFondoBlanco} alt="Runa Tienda"  class="logo-banner" style={{display:`${dis}`}}/>
                            <h1 className="text-white fs-72" style={{display:`${dis}`}}>Tienda holística</h1>
                            <h2 className={`text-white fs-72 ${dis==='none'&& 'middle-text-categoria'}`}>{h2}</h2>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
