import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ProductItem = ({image1, name, info, price, id, offer, oldPrice}) => {
    
    const [isOffer, setIsOffer ] = useState(false);

    useEffect(()=>{

        offer === true || offer=== "true" ? setIsOffer(true) : setIsOffer(false)

    }, [offer])


    const offerStyle={
        fontWeight: 'bold',
        color: 'red',
        fontSize: '23px'
    }
    return (
        <div className="d-flex flex-column justify-content-start product"  >

							<div className="d-flex mb-3 subProduct">
								<div className='productImgContainer'>
									<img src={image1} alt="" width='200px'/>
								</div>
								<div className="d-flex flex-column ps-4 pt-3 product-detail">	
									<h5>{name}</h5>
									<p>{info}</p> 
									<div className="mt-04 mb-4">
										<ul className="ps-0 ">
                                            {
                                            isOffer===true&& <li> <span className="fw-bold"><strike> {oldPrice ? oldPrice : price+30*price/100}$</strike> Antes</span></li>}
											<li> <span className="fw-bold">{price}$ c/u</span> {isOffer===true&& <span style={offerStyle}>¡OFERTA!</span>}</li>
										</ul>
									</div>
									<div className="d-flex justify-content-start">
										<Link to={`/itemDetail/${id}`}><button type="button" className="btn border border-dark"><FontAwesomeIcon icon={faCartPlus}/> Ver producto</button></Link>
									</div>

								</div>
							</div>

						</div>
    )
}

export default ProductItem
