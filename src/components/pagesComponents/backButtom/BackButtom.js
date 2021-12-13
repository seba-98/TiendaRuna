 import React from 'react'
 import { Link } from 'react-router-dom'
 
 const BackButtom = ({nav=null, render, style}) => {

     return (
         <>
            {nav ?
            <Link to={nav}><button className='backButtom' style={style}>⇦</button></Link>
            :
            <button className='backButtom' style={style} onClick={()=>{render(true)}}>⇦</button>
            }
         </>   
     )
 }
 
 export default BackButtom
 