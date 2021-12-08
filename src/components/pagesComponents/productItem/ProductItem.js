import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
        <div class="d-flex flex-column justify-content-start product"  >

							<div class="d-flex mb-3 subProduct">
								<div className='productImgContainer'>
									<img src={image1} alt="" width='200px'/>
								</div>
								<div class="d-flex flex-column ps-4 pt-3 product-detail">	
									<h5>{name}</h5>
									<p>{info}</p> 
									<div class="mt-04 mb-4">
										<ul class="ps-0 ">
                                            {
                                            isOffer===true&& <li> <span class="fw-bold"><strike> {oldPrice ? oldPrice : price+30*price/100}$</strike> Antes</span></li>}
											<li> <span class="fw-bold">{price}$ c/u</span> {isOffer===true&& <span style={offerStyle}>¡OFERTA!</span>}</li>
										</ul>
									</div>
									<div class="d-flex justify-content-start">
										<Link to={`/itemDetail/${id}`}><button type="button" class="btn border border-dark"><i class="fas fa-cart-plus"></i>Ver producto</button></Link>
									</div>

								</div>
							</div>

						</div>
    )
}

export default ProductItem
