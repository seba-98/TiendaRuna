import React, {useState} from 'react'
import { addDoc, collection} from '@firebase/firestore';
import { db, app } from '../../../../firebaseConfig';

import { useFormik } from 'formik';
import * as Yup from 'yup';


const Add = () => {

    const formik= useFormik({
        initialValues:{
            name:'',
            category:'hierbas',
            info:'',
            price:''
        },
        onSubmit:(data, {resetForm})=>{
           
        addDoc(collection(db, 'products'), product).then(data=>{
            
            setImage1('');
            setImage2('')
           
            resetForm({data: ''})
            
            })

        },
        validationSchema: Yup.object({
            category: Yup.string('Ingrese categoria').required('Campo requerido'),
            name: Yup.string('Ingrese nombre').required('Campo requerido'),
            info: Yup.string('Ingrese características').required('Campo requerido'),
            price: Yup.number('Ingrese precio').required('Campo requerido')
        })
    })


    const[image1, setImage1]= useState('');
    const[image2, setImage2]= useState('');
   

    const product ={
        category:formik.values.category.toLowerCase(),
        image1: image1.trim(),
        image2: image2.trim(),
        info: formik.values.info.trim(),
        name: formik.values.name.trim(),
        price: formik.values.price,
    }


        const loadImg= async (e)=>{

           const file1 = e.target.files[0];
           const file2 = e.target.files[1];
           const storageRef = app.storage().ref();

           console.log(e.target.files)
           
           if(file1 && !file2 &&  ( file1.type !=='image/jpeg' &&  file1.type !=='image/png' && file1.type !=='image/jpg')){

            console.log(Error)

           }
           else if(file1 && file2 && ((file1.type !== 'image/jpeg' && file1.type !== 'image/png'&&  file1.type !== 'image/jpg') || ( file2.type !=='image/jpeg' && file2.type !=='image/png' && file2.type !=='image/jpg'))) {
            console.log(Error)
           }
           else if(file1 && !file2 && (file1.type === 'image/jpeg' || file1.type === 'image/png'|| file1.type === 'image/jpg')){
            console.log('GOOD')
            const storagePath = storageRef.child(file1.name);
            try{
                const enviar= await storagePath.put(file1)
                console.log(enviar)
                 
                 const url1 = await storagePath.getDownloadURL();
                 setImage1(url1)
            }
            catch(error){
                console.log(error)
                
            }
           }else if(file1 && file2 && ((file1.type ==='image/jpeg' ||file1.type ==='image/png'|| file1.type ==='image/jpg') && (file2.type === 'image/jpeg' || file2.type ==='image/png'|| file2.type === 'image/jpg'))){
                
                const storagePath = storageRef.child(file1.name);
                const storagePath2 = storageRef.child(file2.name);

                try{
                const enviar1=await storagePath.put(file1)
                const enviar2=await storagePath2.put(file2) 
                console.log(enviar1, enviar2)
               
    
                const url1 = await storagePath.getDownloadURL();
                const url2 = await storagePath2.getDownloadURL();
                setImage1(url1)
                setImage2(url2)
                }
                catch(error){
                    console.log(error)
                    
                } 
        }
    }

    const inputError={ border: '1px solid red'};
    const textError={color: 'red'};
       
    return (
            <form action="" onSubmit={formik.handleSubmit}>
            
                <h3 style={{fontSize:'25px', color:'black'}}>Añadir producto</h3>

                <div className="formGroup">
                    <label htmlFor="">Imagenes</label>
                    <input type="file" name=""  multiple onChange={(e)=>{loadImg(e)}}/>
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
                    </select>
                    {formik.errors.category && <label htmlFor="" style={textError}>{formik.errors.category}</label>}
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
