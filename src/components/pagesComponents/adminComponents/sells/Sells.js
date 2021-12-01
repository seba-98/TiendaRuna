import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebaseConfig'
import SellItem from './SellItem';
import { getDocs, collection, deleteDoc, doc } from '@firebase/firestore'
import  swal  from 'sweetalert';
import BackButtom from '../../backButtom/BackButtom'
const Sells = () => {

    const[products, setProducts]= useState([]);
    const[sellData, setSellData] = useState(true)

    const giveProducts=async()=>{
        const arr=[];
        const dataRef= collection(db, 'sells');
        const data= await getDocs(dataRef);

        data.forEach(item=>{arr.push({...item.data(), id:item.id})});
        setProducts(arr)
    }

    useEffect(()=>{
        giveProducts()
    },[])

    return (
        <>
        <BackButtom style={{position:'relative', right:'200px'}}/>
        
            <h3 className='sellTitle'>{sellData !==true ? 'Gestión de ventas' : 'Información de venta'}</h3>

            {sellData ===true ?
            <ul className='sellUl'>
                {products.map(sell=>{

                    return(
                        <li className='sell'>
                            <h3>Cliente:{' '+sell.name}</h3>
                            <p>ID Venta:{' '+sell.id }</p>
                            <button
                            className='delSell'
                             onClick={()=>{
                                swal({
                                    title: "Atención!",
                                    text: `¿Desea borrar venta con id: ${sell.id}?`,
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                  })
                                  .then(async(willDelete) => {


                                    if (willDelete) {
                                      await deleteDoc(doc(db, "sells", sell.id));

                                      swal(`Venta con id: ${sell.id} eliminada`, {
                                        icon: "success",
                                      });
                                      giveProducts()
                                    } else {
                                      swal("No se elimino la venta");
                                    }
                                  });
                            }
                            }>Eliminar venta</button>
                            <button className='viewSell' onClick={()=>{setSellData(sell)}}>Ver venta</button>
                            
                        </li>
                    )

                })}
            </ul>
            :
            <SellItem data={sellData}/>
        }
        </>
    )
}

export default Sells
