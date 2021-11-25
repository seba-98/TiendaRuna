import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sahu from '../../../assets/img/sahumerios.png'
import herb from '../../../assets/img/bannerCategoria.png'


const Category = () => {

    const[allCategory, setAllCategory] = useState(false);

    return (
      <>
        <div class="row ms-5 mb-3">
          <div class="col-12">
            <div class="d-flex align-items-center">
              <h3 class="text-dark me-3">CATEGORIAS DESTACADAS</h3>
              <button
                class="text-primary btn btn-link decoration-none"
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
          <div className="row mb-5 row">
            <div className="col-3">
              <Link to={`/home/products/${"SahuHierbas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas para sahumar</span>
                  </div>
                  <img src={herb} alt="hierbas" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"SahuPolvo"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Polvos para sahumar</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Palosanto"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Palo santo</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Hierbas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas medicinales, infusiones y té en hebras</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="row mb-5 row">
           <div className="col-3">
              <Link to={`/home/products/${"SahuHierbas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas para sahumar</span>
                  </div>
                  <img src={herb} alt="hierbas" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"SahuPolvo"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Polvos para sahumar</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Palosanto"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Palo santo</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Hierbas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Hierbas medicinales, infusiones y té en hebras</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"SahuResinas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Resinas para sahumar</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"SahuNat"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumos naturales: blends de hierbas y resinas</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"SagMadre"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Linea sagrada madre</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Satyaygoloka"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumerios SATYA Y GOLOKA</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"TribalSoul"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumerios y conitos TRIBAL SOUL INDIA</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"SreeVani"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumerios india Sree vani y Sandesh</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Aquas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Aguas florida y colonias MyL</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Carbon"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Carbones</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"MatYoga"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Mat de yoga</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Tarot"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Tarot, cartas, oraculos y runas vikingas</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Palosanto"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Palo santo</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Difusores"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Difusores y aromatizantes</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Sahumos"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Sahumos</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Velas"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Escencias y velas</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Cannabic"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Medicina cannabica</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to={`/home/products/${"Frutos"}`}>
                <div className=" position-relative ">
                  <div className="middle-text">
                    <span>Frutos secos</span>
                  </div>
                  <img src={sahu} alt="Sahumerios" className="img-fluid " />
                </div>
              </Link>
            </div>
          </div>
          
        )}
      </>
    );
}

export default Category
