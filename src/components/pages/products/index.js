
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../pagesComponents/banner/Banner'
import defaultImg from  '../../../assets/img/banner.png'
import BackButtom from '../../pagesComponents/backButtom/BackButtom'
import { useParams } from 'react-router'
import ProductItem from '../../pagesComponents/productItem/ProductItem'
import { loadArticles } from '../../../helpers/loadArticles'

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
import all from '../../pagesComponents/category/categoryImg/allArticles.jpg'


const Products =()=> {


	const{id} = useParams()
	const[h2, setH2]=useState('')

	const [products, setProducts] = useState([]);
	const [img, setImg] = useState(defaultImg);
	const [paramId, setParamId] = useState(id.toLowerCase());

	
	
    useEffect(()=>{
		const setData= async ()=>{
			if(paramId=== 'velas'){setH2('Escencias y velas'); setImg(velas)}
			else if(paramId === 'sahuhierbas'){setH2('Hierbas para sahumar'); setImg(sahuHerb)}
			else if(paramId === 'sahupolvo'){setH2('Polvos para sahumar'); setImg(sahuPolv)}
			else if(paramId === 'sahuresinas'){setH2('Resinas para sahumar'); setImg(sahuRes)}
			else if(paramId === 'sahunat'){setH2('Sahumos naturales: blends de hierbas y resinas'); setImg(sahuNat)}
			else if(paramId === 'sahumadores'){setH2('Sahumadores, copaleras y portasahumerios'); setImg(sahumadores)}
			else if(paramId === 'hierbas'){setH2('Hierbas medicinales, infusiones y té en hebras'); setImg(herb)}
			else if(paramId === 'sagmadre'){setH2('Linea sagrada madre'); setImg(sagMadre)}
			else if(paramId === 'satyaygoloka'){setH2('Sahumerios SATYA Y GOLOKA'); setImg(sahu)}
			else if(paramId === 'tribalsoul'){setH2('Sahumerios y conitos TRIBAL SOUL INDIA'); setImg(cono)}
			else if(paramId === 'sreevani'){setH2('Sahumerios india Sree vani y Sandesh'); setImg(sahu)}
			else if(paramId === 'aquas'){setH2('Aguas florida y colonias Muray y Lanman original'); setImg(aqua)}
			else if(paramId === 'aguayos'){setH2('Aguayos'); setImg(aguayos)}
			else if(paramId === 'carbon'){setH2('Carbones'); setImg(carbon)}
			else if(paramId === 'matyoga'){setH2('Mat de yoga'); setImg(mat)}
			else if(paramId === 'tarot'){setH2('Tarot, cartas, oráculos y runas vikingas'); setImg(tarot)}
			else if(paramId === 'palosanto'){setH2('Palo santo'); setImg(santo)}
			else if(paramId === 'difusores'){setH2('Difusores y aromatizantes'); setImg(difusores)}
			else if(paramId === 'sahumos'){setH2('Sahumos'); setImg(sahumos)}
			else if(paramId === 'cannabic'){setH2('Medicina cannabica natural'); setImg(cannabic)}
			else if(paramId === 'frutos'){setH2('Frutos secos'); setImg(frutos)}
			else if(paramId === 'allarticles'){setH2('Frutos secos'); setImg(all)}
		}

		setData()
		setParamId(id)
		loadArticles(paramId).then(r=>{

				setProducts(r.arr ?  r.arr : r)
				setH2(c=> r.h2 ? r.h2 : c)
		})
		
    },[id, paramId])
    
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
												<Link to='/home/products/allarticles'><li >Todos los productos</li></Link>
												<Link to='/home/products/sahuhierbas'><li >Hierbas para sahumar</li></Link>
												<Link to='/home/products/sahupolvo'><li>Polvos para sahumar</li></Link>
												<Link to='/home/products/sahuresinas'><li >Resinas para sahumar</li></Link>
												<Link to='/home/products/sahunat'><li >Sahumos naturales: blends de hierbas y resinas</li></Link>
												<Link to='/home/products/sahumadores'><li>Sahumadores, copaleras y portasahumerios</li></Link>
												<Link to='/home/products/hierbas'><li>Hierbas medicinales, infusiones y té en hebras</li></Link>
												<Link to='/home/products/sagmadre'><li>Linea sagrada madre</li></Link>
												<Link to='/home/products/satyaygoloka'><li >Sahumerios SATYA Y GOLOKA </li></Link>
												<Link to='/home/products/tribalsoul'><li>Sahumerios y conitos TRIBAL SOUL INDIA</li></Link>
												<Link to='/home/products/sreevani'><li>Sahumerios india Sree vani y Sandesh</li></Link>
												<Link to='/home/products/aquas'><li>Aguas florida y colonias MyL </li></Link>
												<Link to='/home/products/carbon'><li>Carbones</li></Link>
												<Link to='/home/products/matyoga'><li>Mat de yoga</li></Link>
												<Link to='/home/products/tarot'><li>Tarot, cartas, oraculos y runas vikingas</li></Link>
												<Link to='/home/products/palosanto'><li>Palo santo</li></Link>
												<Link to='/home/products/difusores'><li>Difusores y aromatizantes</li></Link>
												<Link to='/home/products/sahumos'><li>Sahumos</li></Link>
												<Link to='/home/products/velas'><li>Escencias y velas</li></Link>
												<Link to='/home/products/cannabic'><li>Medicina cannabica</li></Link>
												<Link to='/home/products/frutos'><li>Frutos secos</li></Link>
												
											</ul>
										</li>
										
									</ul>
								</div>
							</div>
						</div>

						<div class="row ">
							<div class="col-4 ps-5 mb-5 productsSubContainer">
							{
								products&& products.map((product, idx)=>{
									return<ProductItem {...product} key={idx}/>
								})
							}
							</div>
						</div>
					</div>
			</section>


        </div>
    )
}

export default Products
