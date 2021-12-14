import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import aqua from './categoryImg/aqua.jpg'
import herb from './categoryImg/herb.jpg'
import sahu from './categoryImg/sahu.jpg'
import aguayos from './categoryImg/aguayos.jpg'
import cannabic from './categoryImg/cannabic.jpg'
import carbon from './categoryImg/carbon.jpg'
import cono from './categoryImg/cono.jpg'
import difusores from './categoryImg/difusores.jpg'
import frutos from './categoryImg/frutos.jpg'
import mat from './categoryImg/matYog.jpg'
import santo from './categoryImg/paloSanto.jpg'
import sahumadores from './categoryImg/sahumadores.jpg'
import sahuPolv from './categoryImg/sahuPolv.jpg'
import sahuRes from './categoryImg/sahuRes.jpg'
import sahuHerb from './categoryImg/sahuHerb.jpg'
import sahuNat from './categoryImg/sahuNat.jpg'
import tarot from './categoryImg/tarot.jpg'
import velas from './categoryImg/velas.jpg'
import sagMadre from './categoryImg/sagMadre.jpg'
import sahumos from './categoryImg/sahumos.jpg'
import all from './categoryImg/allArticles.jpg'




const Category = () => {

    const[allCategory, setAllCategory] = useState(false);

    return (
      <>
        <div className="row ms-5 mb-3 mt-3 categoryTitle">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <h3 className="text-dark me-3">CATEGORIAS DESTACADAS</h3>
              <button
                className="text-primary btn btn-link decoration-none"
                onClick={() => {
                  setAllCategory(!allCategory);
                }}
              >
                {allCategory === true ? "Ver menos" : "Ver Todas"}
              </button>
            </div>
          </div>
        </div>

        {allCategory === false ? (
          <div className='categoryList'>
            <div >
              <Link to={`/home/products/${"allarticles"}`} state={{img:sahuHerb}}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Todos los artículos</span>
                  </div>
                  <img src={all} alt="hierbas" className="img-fluid " style={{border:'8px solid rgba(243, 49, 49, 0.7)'}}/>
                </div>
              </Link>
            </div>
            <div >
              <Link to={`/home/products/${"sahuhierbas"}`}  state={{img:sahuHerb}}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas para sahumar</span>
                  </div>
                  <img src={sahuHerb} alt="hierbas" className="img-fluid categoryImg" />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"palosanto"}`} state={{img:santo}}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Palo santo</span>
                  </div>
                  <img src={santo} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"hierbas"}`} state={{img:herb}}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas medicinales, infusiones y té en hebras</span>
                  </div>
                  <img src={herb} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className='categoryList'>
            <div>
              <Link to={`/home/products/${"allarticles"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Todos los artículos</span>
                  </div>
                  <img src={all} alt="hierbas" className="img-fluid " style={{border:'8px solid rgba(243, 49, 49, 0.7)'}}/>
                </div>
              </Link>
            </div>
           <div>
              <Link to={`/home/products/${"sahuhierbas"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas para sahumar</span>
                  </div>
                  <img src={sahuHerb} alt="hierbas" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div >
              <Link to={`/home/products/${"sahupolvo"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Polvos para sahumar</span>
                  </div>
                  <img src={sahuPolv} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"palosanto"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Palo santo</span>
                  </div>
                  <img src={santo} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"hierbas"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas medicinales, infusiones y té en hebras</span>
                  </div>
                  <img src={herb} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div >
              <Link to={`/home/products/${"sahuresinas"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Resinas para sahumar</span>
                  </div>
                  <img src={sahuRes} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div >
              <Link to={`/home/products/${"sahunat"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumos naturales: blends de hierbas y resinas</span>
                  </div>
                  <img src={sahuNat} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div >
              <Link to={`/home/products/${"sagmadre"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Linea sagrada madre</span>
                  </div>
                  <img src={sagMadre} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div >
              <Link to={`/home/products/${"satyaygoloka"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumerios SATYA Y GOLOKA</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"tribalsoul"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumerios y conitos TRIBAL SOUL INDIA</span>
                  </div>
                  <img src={cono} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"sreevani"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumerios india Sree vani y Sandesh</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"aquas"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Aguas florida y colonias MyL</span>
                  </div>
                  <img src={aqua} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"carbon"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Carbones</span>
                  </div>
                  <img src={carbon} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"matyoga"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Mat de yoga</span>
                  </div>
                  <img src={mat} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"tarot"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Tarot, cartas, oraculos y runas vikingas</span>
                  </div>
                  <img src={tarot} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"aguayos"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Aguayos</span>
                  </div>
                  <img src={aguayos} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"sahumadores"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumadores</span>
                  </div>
                  <img src={sahumadores} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"difusores"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Difusores y aromatizantes</span>
                  </div>
                  <img src={difusores} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"sahumos"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumos</span>
                  </div>
                  <img src={sahumos} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"velas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Escencias y velas</span>
                  </div>
                  <img src={velas} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"cannabic"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Medicina cannabica</span>
                  </div>
                  <img src={cannabic} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/home/products/${"frutos"}`} >
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Frutos secos</span>
                  </div>
                  <img src={frutos} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
          </div>
          
        )}
      </>
    );
}

export default Category
