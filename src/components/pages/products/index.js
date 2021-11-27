
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Banner from '../../pagesComponents/banner/Banner'
import img1 from '../../../assets/img/bannerCategoria.png'
import img2 from '../../../assets/img/sahumerios.png'
import { useParams } from 'react-router'
import { db } from '../../../firebaseConfig'
import { collection, getDocs, query, where } from '@firebase/firestore'


const Products =()=> {

	
	const { img } = useLocation().state;

	const{id} = useParams()
	const[h2, setH2]=useState('')

	const [products, setProducts] = useState([]);

	const setData= async ()=>{

		if(id=== 'Velas'){setH2('Escencias y velas')}
		else if(id === 'SahuHierbas'){setH2('Hierbas para sahumar')}
		else if(id === 'SahuPolvo'){setH2('Polvos para sahumar')}
		else if(id === 'SahuResinas'){setH2('Resinas para sahumar')}
		else if(id === 'SahuNat'){setH2('Sahumos naturales: blends de hierbas y resinas')}
		else if(id === 'Sahumadores'){setH2('Sahumadores, copaleras y portasahumerios')}
		else if(id === 'Hierbas'){setH2('Hierbas medicinales, infusiones y té en hebras')}
		else if(id === 'SagMadre'){setH2('Linea sagrada madre')}
		else if(id === 'Satyaygoloka'){setH2('Sahumerios SATYA Y GOLOKA')}
		else if(id === 'TribalSoul'){setH2('Sahumerios y conitos TRIBAL SOUL INDIA')}
		else if(id === 'SreeVani'){setH2('Sahumerios india Sree vani y Sandesh')}
		else if(id === 'Aquas'){setH2('Aguas florida y colonias Muray y Lanman original')}
		else if(id === 'Aguayos'){setH2('Aguayos')}
		else if(id === 'Carbon'){setH2('Carbones')}
		else if(id === 'MatYoga'){setH2('Mat de yoga')}
		else if(id === 'Tarot'){setH2('Tarot, cartas, oráculos y runas vikingas')}
		else if(id === 'Palosanto'){setH2('Palo santo')}
		else if(id === 'Difusores'){setH2('Difusores y aromatizantes')}
		else if(id === 'Sahumos'){setH2('Sahumos')}
		else if(id === 'Cannabic'){setH2('Medicina cannabica natural')}
		else if(id === 'Frutos'){setH2('Frutos secos')}

		const arr=[];
			const ref= query(collection(db, 'products'), where("category", "==",  id.toLowerCase()));
			const data= await getDocs(ref);

			data.forEach(product=>{
				arr.push({...product.data(), id: product.id})
			})

			setProducts(arr)
	}
	
    useEffect(()=>{
		setData()
    },[])
    
    return (
        <div>
            <Banner  height='500px' img={img}  h2={h2} dis='none'/>

	   <section class="productos-section w-100">
			<div class="container productos-container">

				<div class="row ">
					<div class="col-6 ps-5 mt-4 mb-5 ">
						<h4 class="font-runa">Runa- {h2}</h4>
					</div>
					<div class="col-6 mt-4 mb-5 ">
						<div class="d-flex justify-content-end">

							<ul class="btn categorySelection">
								<li>Filtrar <i class="fas fa-filter"></i>
									<ul className='ulFilter'>
										<li>category</li>
										<li>category</li>
										<li>category</li>
										<li>category </li>
									</ul>
								</li>
								
							</ul>
						</div>
					</div>
				</div>

				<div class="row ">
					<div class="col-4 ps-5 mb-5">
					{products&& products.map((product, idx)=>{
						return(

						<div class="d-flex flex-column justify-content-start" key={idx}>

							<div class="d-flex mb-3">
								<img src={product.image1} alt="" width='200px'/>
								<div class="d-flex flex-column ps-4 pt-3 ">	
									<h5>{product.name}</h5>
									<p>{product.info}</p> 
									
									<div class="mt-4">
										<ul class="ps-0">
											<li>1gr <span class="fw-bold">{product.price}$</span></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="d-flex justify-content-start">
								<Link to={`/home/products/Hierbas/car/${product.id}`}><button type="button" class="btn border border-dark"><i class="fas fa-cart-plus"></i>Ver producto</button></Link>
							</div>
						</div>

						)

					})}

					</div>
				</div>
			</div>
	   </section>


        </div>
    )
}

export default Products
