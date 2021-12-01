import React, {useState, useContext} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BackButtom from '../../pagesComponents/backButtom/BackButtom';
import BuyModal from '../../pagesComponents/buyModal/BuyModal';
import { cartContext } from '../../../CartContext';

const BuyForm = () => {

    const[openModal, setOpenModal] = useState(false);
   const formik = useFormik({
       initialValues:{
        name:'',
        city:'',
        tele:'',
        prov:'',
        email:'',
        cp:'',
        location:''
       },
       onSubmit:(data)=>{
           console.log('aaa')
        setOpenModal(true)
       },
       validationSchema:Yup.object({
        name:Yup.string('Ingrese nombre').required('Campo requerido').min(8, 'Minimo 8 carácteres'),
        city: Yup.string('Ingrese ciudad').required('Campo requerido'),
        tele:Yup.number('Ingrese solo números').required('Campo requerido'),
        email: Yup.string('Ingrese Email').required('Campo requerido'),
        cp: Yup.number('Ingrese solo números').required('Campo requerido'),
        location: Yup.string('Ingrese ciudad').required('Campo requerido'),
        prov: Yup.string('Ingrese provincia').required('Campo requerido'),
       })
   }) 

   const[carrito] = useContext(cartContext);
   const set=()=>{return carrito.reduce((total, item)=>{return total + item.cantidad*item.price}, 0)}
   
   const{name, tele, email, location, city, prov,cp}=formik.values;


    const sellData={
        name:name?name.trim().replace(/ /gi, "_") : '',
        tel: tele,
        email: email? email.trim().replace(/ /gi, "_") : '',
        location: location? location.trim().replace(/ /gi, "_") : '',
        city: city? city.trim().replace(/ /gi, "_") : '',
        prov: prov? prov.trim().replace(/ /gi, "_") : '',
        cp: cp,
    }


   const styleInputErr={
    border:'1px solid red'
    }
    const styleTextErr={
    color: 'red'
    }

    const disableSubmit=()=>{
        if(!name || !tele|| !email|| !location|| !city|| !prov||!cp){
            return 'grey'
        }
    }
    
    return (

        <div className='formContent'>
            {set() !==0 ?
            <>
            <div className='contentTitleBuyForm'>
                <BackButtom nav='/cart'/>
                <h3 style={{fontSize:'25px', color:'black'}}>Formulario de compra</h3>
            </div>
                <form action="" onSubmit={formik.handleSubmit} className='buyForm'>
                {openModal === true && <BuyModal data={sellData} modal={(e)=>{setOpenModal(e)}}/>}
                    <section className='inputContainer' >
                        <div className='buyFormGroup'>
                            <label htmlFor="">Nombre y apellido</label>
                            <input type="text" name="name" id="" onChange={formik.handleChange} style={formik.errors.name && styleInputErr}/>
                            {formik.errors.name && <label style={styleTextErr}>{formik.errors.name}</label>}
                        </div>
                        <div className='buyFormGroup'>
                            <label htmlFor="">Ciudad</label>
                            <input type="text" name="city" id=""  onChange={formik.handleChange} style={formik.errors.city && styleInputErr}/>
                            {formik.errors.city && <label style={styleTextErr}>{formik.errors.city}</label>}
                        </div>
                        <div className='buyFormGroup'>
                            <label htmlFor="">Teléfono</label>
                            <input type="number" name="tele" id=""  onChange={formik.handleChange} style={formik.errors.tele && styleInputErr} />
                            {formik.errors.tele && <label style={styleTextErr}>{formik.errors.tele}</label>}
                        </div>
                        <div className='buyFormGroup'>
                            <label htmlFor="">Provincia</label>
                            <input type="text" name="prov" id=""  onChange={formik.handleChange} style={formik.errors.prov && styleInputErr}/>
                            {formik.errors.prov && <label style={styleTextErr}>{formik.errors.prov}</label>}
                        </div>
                        <div className='buyFormGroup'>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" onChange={formik.handleChange} tyle={formik.errors.email && styleInputErr} />
                            {formik.errors.email && <label style={styleTextErr}>{formik.errors.email}</label>}
                        </div>
                        <div className='buyFormGroup'>
                            <label htmlFor="">Código postal</label>
                            <input type="number" name="cp" id=""  onChange={formik.handleChange} style={formik.errors.cp && styleInputErr}/>
                            {formik.errors.cp && <label style={styleTextErr}>{formik.errors.cp}</label>}
                        </div>
                        <div className='buyFormGroup'>
                            <label htmlFor="">Domicilio</label>
                            <input type="text" name="location" id=""  onChange={formik.handleChange} style={formik.errors.location && styleInputErr} />
                            {formik.errors.location && <label style={styleTextErr}>{formik.errors.location}</label>}                            
                        </div>
                    </section>

                <input type="submit" className='sendButton' value="Registrar compra" style={{backgroundColor: disableSubmit()}}/>
                </form>
            </>
            :
            <h3 style={{textAlign:'center', padding:'250px 0 250px 0'}}>(Carrito vacío) debe tener productos en el carrito para registrar una compra</h3>
            }

        </div>
        
        
    )
}

export default BuyForm
