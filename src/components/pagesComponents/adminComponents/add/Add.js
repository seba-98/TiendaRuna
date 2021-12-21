import React, {useState} from 'react'
import { addDoc, collection} from '@firebase/firestore';
import { db } from '../../../../firebaseConfig';
import swal from 'sweetalert';
import BackButtom from '../../backButtom/BackButtom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadImg } from '../../../../helpers/loadImg';



const Add = () => {

    const formik= useFormik({
        initialValues:{
            name:'',
            category:'hierbas',
            offer:true,
            info:'',
            price:''
        },
        onSubmit:(data, {resetForm})=>{
           
        addDoc(collection(db, 'products'), product).then(data=>{
            
            setImage1('');
            setImage2('')
            swal({
                title:'Producto creado',
                icon:'success'
            })
           
            resetForm({data: ''})
            
            })
        },
        validationSchema: Yup.object({
            category: Yup.string('Ingrese categoria').required('Campo requerido'),
            offer: Yup.boolean('debe elegir una opción').required('es requerido'),
            name: Yup.string('Ingrese nombre').required('Campo requerido'),
            info: Yup.string('Ingrese características').required('Campo requerido'),
            price: Yup.number('Ingrese precio').required('Campo requerido')
        })
    })


    const[image1, setImage1]= useState('');
    const[image2, setImage2]= useState('');
    const[loadingImg, setLoadingImg]= useState(false);

   

    const product ={
        category:formik.values.category.toLowerCase(),
        image1: image1,
        image2: image2 ? image2 : null,
        offer: formik.values.offer,
        info: formik.values.info.trim(),
        name: formik.values.name.trim(),
        price: formik.values.price,
    }


    const loadImg=(e)=>{
        const file1 = e.target.files[0];
        const file2 = e.target.files[1];
        setLoadingImg(true)

        LoadImg(file1, file2).then(r=>{
            setImage1(r.img1)
            setImage2(r.img2)
            setLoadingImg(false)
        })
    }

    const inputError={ border: '1px solid red'};
    const textError={color: 'red'};
    const styleLoading={color: 'black', fontWeight:'bold', fontSize:'25px'}
       
    return (
            <form action="" onSubmit={formik.handleSubmit}>
            
                <div className='contentAddButton'>
                    <BackButtom nav='/home' style={{backgroundColor:'rgb(255, 255, 255)'}}/>
                    <h3 style={{fontSize:'25px', color:'black'}}>Añadir producto</h3>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Imagenes</label>
                    <input type="file" name=""  multiple onChange={loadImg}/>
                    {loadingImg=== true && <label style={styleLoading}>CARGANDO IMAGENES...</label>}
                </div>
                <hr/>

                <h3 style={{fontSize:'25px', color:'black'}}>{!image1 && !image2 ? 'Primero debe cargar la imagen antes de completar los campos' : 'Imagen cargada! Puede crear el articulo'}</h3>
                
                <div className="formGroup">
                    <label htmlFor="">Categoría</label>
                    <select name="category"  className='places' disabled={!image1 && !image2 ? true : false}  onChange={formik.handleChange} style={formik.errors.category && inputError}>
                        <option value="SahuHierbas">Hierbas para sahumar</option>
                        <option value="SahuPolvo">Polvos para sahumar</option>
                        <option value="SahuResinas">Resinas para sahumar</option>
                        <option value="SahuNat">Sahumos naturales: blends de hierbas y resinas</option>
                        <option value="Sahumadores">Sahumadores, copaleras y portasahumerios</option>
                        <option value="Hierbas">Hierbas medicinales, infusiones y té en hebras</option>
                        <option value="SagMadre">Linea sagrada madre</option>
                        <option value="Satyaygoloka">Sahumerios SATYA Y GOLOKA </option>
                        <option value="TribalSoul">Sahumerios y conitos TRIBAL SOUL INDIA</option>
                        <option value="SreeVani">Sahumerios india Sree vani y Sandesh</option>
                        <option value="Aquas">Aguas florida y colonias MyL </option>
                        <option value="Carbon">Carbones</option>
                        <option value="MatYoga">Mat de yoga</option>
                        <option value="Tarot">Tarot, cartas, oraculos y runas vikingas</option>
                        <option value="Palosanto">Palo santo</option>
                        <option value="Difusores">Difusores y aromatizantes</option>
                        <option value="Sahumos">Sahumos</option>
                        <option value="Velas">Escencias y velas</option>
                        <option value="Cannabic">Medicina cannabica</option>
                        <option value="Frutos">Frutos secos</option>
                        <option value="Aguayos">Aguayos</option>
                    </select>
                    {formik.errors.category && <label htmlFor="" style={textError}>{formik.errors.category}</label>}
                </div> 
                <div className='formGroup'>
                <label htmlFor="">Poner en oferta</label>
                    <select name="offer" id="" disabled={!image1 && !image2 ? true : false} onChange={formik.handleChange} >
                        <option value={true}>En oferta</option>
                        <option value={false}>No en oferta</option>
                    </select>
                    {formik.errors.offer && <label htmlFor="" style={textError}>{formik.errors.offer}</label>}
                </div>
                <div className="formGroup">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="name" className='places' disabled={!image1 && !image2 ? true : false} value={formik.values.name} onChange={formik.handleChange} style={formik.errors.name && inputError}/>
                    {formik.errors.name && <label htmlFor="" style={textError}>{formik.errors.name}</label>}
                </div>
                <div className="formGroup">
                    <label htmlFor="">Descripción</label>
                    <input type="text" name="info"className='places' disabled={!image1 && !image2 ? true : false} value={formik.values.info}  onChange={formik.handleChange} style={formik.errors.info && inputError}/>
                    {formik.errors.info && <label htmlFor="" style={textError}>{formik.errors.info}</label>}
                </div>
                <div className="formGroup">
                    <label htmlFor="">Precio</label>
                    <input type="number" name="price"className='places' disabled={!image1 && !image2 ? true : false} value={formik.values.price}  onChange={formik.handleChange} style={formik.errors.price && inputError}/>
                    {formik.errors.price && <label htmlFor="" style={textError}>{formik.errors.price}</label>}
                </div>
                <div className='subyesContainer'><input type="submit" value="Guardar producto" disabled={!image1 && !image2 ? true : false} onSubmit={formik.handleReset}  className="subYes" /></div>
                
            </form>
    )
}

export default Add
