
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../pagesComponents/banner/Banner'
import defaultImg from  '../../../assets/img/banner.png'
import BackButtom from '../../pagesComponents/backButtom/BackButtom'
import { useParams } from 'react-router'
import { db } from '../../../firebaseConfig'
import { collection, getDocs, query, where } from '@firebase/firestore'

import aqua from '../../pagesComponents/category/categoryImg/aqua.jpg'
import herb from '../../pagesComponents/category/categoryImg/herb.jpg'
import sahu from '../../pagesComponents/category/categoryImg/sahu.jpg'
import aguayos from '../../pagesComponents/category/categoryImg/aguayos.jpg'
import cannabic from '../../pagesComponents/category/categoryImg/cannabic.jpg'
import carbon from '../../pagesComponents/category/categoryImg/carbon.jpg'
import cono from '../../pagesComponents/category/categoryImg/cono.jpg'
import difusores from '../../pagesComponents/category/categoryImg/difusores.jpg'
import frutos from '../../pagesComponents/category/categoryImg/frutos.jpg'
import mat from '../../pagesComponents/category/categoryImg/matYog.jpg'
import santo from '../../pagesComponents/category/categoryImg/paloSanto.jpg'
import sahumadores from '../../pagesComponents/category/categoryImg/sahumadores.jpg'
import sahuPolv from '../../pagesComponents/category/categoryImg/sahuPolv.jpg'
import sahuRes from '../../pagesComponents/category/categoryImg/sahuRes.jpg'
import sahuHerb from '../../pagesComponents/category/categoryImg/sahuHerb.jpg'
import sahuNat from '../../pagesComponents/category/categoryImg/sahuNat.jpg'
import tarot from '../../pagesComponents/category/categoryImg/tarot.jpg'
import velas from '../../pagesComponents/category/categoryImg/velas.jpg'
import sagMadre from '../../pagesComponents/category/categoryImg/sagMadre.jpg'
import sahumos from '../../pagesComponents/category/categoryImg/sahumos.jpg'


const Products =()=> {


	const{id=id.toLowerCase()} = useParams()
	const[h2, setH2]=useState('')

	const [products, setProducts] = useState([]);
	const [img, setImg] = useState(defaultImg);

	const setData= async ()=>{

		if(id=== 'Velas'){setH2('Escencias y velas'); setImg(velas)}
		else if(id === 'sahuhierbas'){setH2('Hierbas para sahumar'); setImg(sahuHerb)}
		else if(id === 'sahupolvo'){setH2('Polvos para sahumar'); setImg(sahuPolv)}
		else if(id === 'sahuresinas'){setH2('Resinas para sahumar'); setImg(sahuRes)}
		else if(id === 'sahunat'){setH2('Sahumos naturales: blends de hierbas y resinas'); setImg(sahuNat)}
		else if(id === 'sahumadores'){setH2('Sahumadores, copaleras y portasahumerios'); setImg(sahumadores)}
		else if(id === 'hierbas'){setH2('Hierbas medicinales, infusiones y té en hebras'); setImg(herb)}
		else if(id === 'sagmadre'){setH2('Linea sagrada madre'); setImg(sagMadre)}
		else if(id === 'satyaygoloka'){setH2('Sahumerios SATYA Y GOLOKA'); setImg(sahu)}
		else if(id === 'tribalsoul'){setH2('Sahumerios y conitos TRIBAL SOUL INDIA'); setImg(cono)}
		else if(id === 'sreevani'){setH2('Sahumerios india Sree vani y Sandesh'); setImg(sahu)}
		else if(id === 'aquas'){setH2('Aguas florida y colonias Muray y Lanman original'); setImg(aqua)}
		else if(id === 'aguayos'){setH2('Aguayos'); setImg(aguayos)}
		else if(id === 'carbon'){setH2('Carbones'); setImg(carbon)}
		else if(id === 'matyoga'){setH2('Mat de yoga'); setImg(mat)}
		else if(id === 'tarot'){setH2('Tarot, cartas, oráculos y runas vikingas'); setImg(tarot)}
		else if(id === 'palosanto'){setH2('Palo santo'); setImg(santo)}
		else if(id === 'difusores'){setH2('Difusores y aromatizantes'); setImg(difusores)}
		else if(id === 'sahumos'){setH2('Sahumos'); setImg(sahumos)}
		else if(id === 'cannabic'){setH2('Medicina cannabica natural'); setImg(cannabic)}
		else if(id === 'frutos'){setH2('Frutos secos'); setImg(frutos)}

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
						<BackButtom style={{backgroundColor:'rgb(206,165,93)'}} nav='/home'/>
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
								<Link to={`/itemDetail/${product.id}`}><button type="button" class="btn border border-dark"><i class="fas fa-cart-plus"></i>Ver producto</button></Link>
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
