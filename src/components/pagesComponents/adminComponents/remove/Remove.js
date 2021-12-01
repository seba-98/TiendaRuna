import React, { useEffect, useState } from 'react'
import { getDocs, deleteDoc, collection, doc,  } from '@firebase/firestore';
import { db } from '../../../../firebaseConfig';
import BackButtom from '../../backButtom/BackButtom';
import Preload from '../../../widgets/preload/Preload'
import swal from 'sweetalert';


const Remove = () => {
    const[products, setProducts]= useState([]);
    const[req, setReq]= useState(false);
    

    const dataRequest = async()=>{
        const arr=[];
        const dest= await getDocs(collection(db, 'products'));
        dest.forEach(producto=>{
            arr.push({...producto.data(), id:producto.id})
        });
        setProducts(arr);
        setTimeout(()=>{setReq(true)},500)
    }
    useEffect(()=>{
        dataRequest();
    },[])

   
    const remove= async(e, id)=>{
        e.preventDefault();
        await deleteDoc(doc(db, "products", id)).then(response=>{
            swal({
                title:'Producto eliminado de la tienda',
                icon:'warning'
            })
        });
        dataRequest();
    }
    return (

        
             <form action="" >
                <div className='contentAddButton'>
                    <BackButtom nav='/home'/>
                    <h3 style={{fontSize:'25px', color:'black'}}>Remover producto</h3>
                </div>
                    <div className='ulDelete'>
                        {products && products.map((Item, idx)=>{
                            return (
                                <div className='itemDelete' key={idx}>
                                    {
                                    req=== false ? <Preload widthImg='200px'/> : 
                                    <>
                                        <img src={Item.image1} alt="" width='150px'  />
                                        <p>{Item.name}</p>
                                        <button className='buttonDelete' onClick={(e)=>{remove(e, Item.id)}}>Eliminar</button>
                                    </>  
                                    }
                                </div>
                            )
                        })} 
                </div>
            </form>
    )
}

export default Remove
