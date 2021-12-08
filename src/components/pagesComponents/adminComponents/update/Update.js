import React, { useState } from 'react';
import { doc, updateDoc, getDoc } from '@firebase/firestore';
import { db } from '../../../../firebaseConfig';
import { LoadImg } from '../../../../helpers/loadImg';
import BackButtom from '../../backButtom/BackButtom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import swal from 'sweetalert';

const Update = () => {
    const formik= useFormik({
        initialValues:{
            category:'',
            name:'',
            offer:true,
            info:'',
            price:'',
            oldPrice:''
        },
        onSubmit:(data, {resetForm})=>{
           
        const docRef = doc(db, 'products', id);
        updateDoc(docRef, product).then(r=>{
            swal({
                    title: "Producto Actualizado",
                    icon: "success",
                }); 
                setId('')
                setUpdateProduct(false)
                resetForm({data: ''})

        })
    },
        validationSchema: Yup.object({
            category: Yup.string('Ingrese categoria').required('Campo requerido'),
            offer: Yup.string('Debe elegir una opción').required('Campo requerido'),
            name: Yup.string('Ingrese nombre').required('Campo requerido'),
            info: Yup.string('Ingrese características').required('Campo requerido'),
            price: Yup.number('Ingrese precio').required('Campo requerido'),
            oldPrice: Yup.number('Ingrese precio').required('Campo requerido')
        })
    })

   
    const [id, setId]= useState('');
    const[image1, setImage1]= useState('');
    const[image2, setImage2]= useState('');
    const[loadingImg, setLoadingImg]= useState(false);
    const[updateProduct, setUpdateProduct] = useState(false)


    const product ={
        category:formik.values.category.toLowerCase(),
        image1: image1.trim(),
        image2: image2 ? image2.trim() : null,
        offer: formik.values.offer,
        info: formik.values.info.trim(),
        name: formik.values.name.trim(),
        oldPrice:formik.values.oldPrice,
        price: formik.values.price,
    }


    const saveImages= async (e) =>{
        const file1 = e.target.files[0];
        const file2 = e.target.files[1];
        setLoadingImg(true)

        LoadImg(file1, file2).then(r=>{
            setImage1(r.img1)
            setImage2(r.img2)
            setLoadingImg(false)
        })
    }


    const search = async (e) =>{ //Funcion para encontrar el producto a actualizar y setear sus valores por defecto
        e.preventDefault();
        const docRef = doc(db, 'products', id);

        try{//al encontrar el producto habilitamos los campos y los rellenamos por defecto con los datos originales del producto
            const document = await getDoc(docRef);

            swal({
                title:'Producto encontrado',
                icon:'success'
            })

            formik.setFieldValue('category', document.data().category)
            formik.setFieldValue('name', document.data().name)
            formik.setFieldValue('offer', document.data().offer)
            formik.setFieldValue('info', document.data().info)
            formik.setFieldValue('price', document.data().price)
            formik.setFieldValue('oldPrice', document.data().price)

            setImage1(document.data().image1)
            setImage2(document.data().image2 ? document.data().image2 : null)

            setUpdateProduct(true)
        }
        catch(error){
            swal({
                title: "Producto no encontrado",
                icon: "warning",
                });
                setUpdateProduct(false) //si el producto no se encuentra, este estado queda en false y los campos inhabilitados
        }
    }


    const inputError={ border: '1px solid red'};
    const textError={color: 'red'};
    const styleLoading={color: 'black', fontWeight:'bold', fontSize:'25px'}


    return (
            <form action="" onSubmit={formik.handleSubmit}>
                 <div className='contentAddButton'>
                    <BackButtom nav='/home'/>
                    <h3 style={{fontSize:'25px', color:'black'}}>Actualizar producto</h3>
                 </div>
                <div className="formGroup">
                    <label htmlFor="">ID del producto</label>
                    <input type="text" name="id" id=""className='places' onChange={(e) => {setId(e.target.value)}} value={id}/><button onClick={(e)=>{search(e)}}>Buscar</button>
                </div>
                <h3 style={{fontSize:'25px', color:'black'}}>{!updateProduct ? 'Ingrese el id para poder actualizar un producto' : 'Producto encontrado puede realizar cambios'} </h3>
                <div className="formGroup">
                    <label htmlFor="">Imagenes</label>
                    <input type="file" name="imagenes" multiple className='places' disabled={updateProduct ? false : true} id="" onChange={(e)=>{saveImages(e)}}/>
                    {loadingImg=== true && <label style={styleLoading}>CARGANDO IMAGENES...</label>}
                </div>

                <div className="formGroup">
                    <label htmlFor="">Categoría</label>
                    <select name="category" id="" className='places' disabled={updateProduct ? false : true} onChange={formik.handleChange} value={formik.values.category} style={formik.errors.category && inputError}>
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
                    <select name="offer" id=""  disabled={updateProduct ? false : true} onChange={formik.handleChange} >
                        <option value={true}>En oferta</option>
                        <option value={false}>No en oferta</option>
                    </select>
                    {formik.errors.offer && <label htmlFor="" style={textError}>{formik.errors.offer}</label>}
                </div>
                <div className="formGroup">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="name" id=""className='places' disabled={updateProduct ? false : true}  onChange={formik.handleChange} value={formik.values.name} style={formik.errors.name && inputError}/>
                    {formik.errors.name && <label htmlFor="" style={textError}>{formik.errors.name}</label>}
                </div>
                <div className="formGroup">
                    <label htmlFor="">Descripción</label>
                    <input type="text" name="info"className='places' disabled={updateProduct ? false : true} onChange={formik.handleChange} id="" value={formik.values.info} style={formik.errors.info && inputError}/>
                    {formik.errors.info && <label htmlFor="" style={textError}>{formik.errors.info}</label>}
                </div>
                <div className="formGroup">
                    <label htmlFor="">Precio</label>
                    <input type="number" name="price"className='places' disabled={updateProduct ? false : true} onChange={formik.handleChange} id="" value={formik.values.price} style={formik.errors.price && inputError}/>
                    {formik.errors.price && <label htmlFor="" style={textError}>{formik.errors.price}</label>}
                </div>
                <div className="formGroup">
                    <label htmlFor="">Precio viejo</label>
                    <input type="number" name="oldPrice"className='places' disabled={updateProduct ? false : true} onChange={formik.handleChange} id="" value={formik.values.oldPrice} style={formik.errors.oldPrice && inputError}/>
                    {formik.errors.oldPrice && <label htmlFor="" style={textError}>{formik.errors.oldPrice}</label>}
                </div>
                <div className='subyesContainer'><input type="submit" value="Actualizar producto" disabled={updateProduct ? false : true}  className="subYes" /></div>
            </form>
    )
}

export default Update
