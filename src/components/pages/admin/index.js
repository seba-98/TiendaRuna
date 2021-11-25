import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { app } from '../../../firebaseConfig';
import Swal from 'sweet-alert'

import Login from '../../pagesComponents/login/Login';
import Add from '../../pagesComponents/adminComponents/add/Add';
import Remove from '../../pagesComponents/adminComponents/remove/Remove';
import Sells from '../../pagesComponents/adminComponents/sells/Sells';
import Update from '../../pagesComponents/adminComponents/update/Update';

const auth= getAuth(app);

const Admin = () => {

    const [window, setWindow]=useState('add');
    const [globalUser, setGlobalUser]= useState(null)


    onAuthStateChanged(auth, (user)=>{ 
        user ? setGlobalUser(user) : setGlobalUser(null)
    })

    const render=()=>{

        if(window==='add'){
            return <Add/>
        }
        else if(window==='update'){
            return <Update/>
        }
        else if(window==='remove'){
            return <Remove/>
        }
        else if(window==='sells'){
            return <Sells/>
        }
    }
   
       if(globalUser !== null){

        return (
            <>
                <div style={{paddingTop:window === 'remove' ? '200px' : '100px'}}></div>
                <div className='formContainer' style={{marginBottom: '50px'}}>
                    <h2>Panel de administración</h2>
                    <h3>Elije acciones sobre tus productos</h3>
                    <nav>
                        <ul>
                            <li style={{backgroundColor: window==='add' && '#B87800', color: window==='add' && 'white'}} onClick={()=>{setWindow('add')}}>Añadir</li>
                            <li style={{backgroundColor: window==='remove' && '#B87800', color: window==='remove' && 'white'}} onClick={()=>{setWindow('remove')}}>Borrar</li>
                            <li style={{backgroundColor: window==='update' && '#B87800', color: window==='update' && 'white'}} onClick={()=>{setWindow('update')}}>Actualizar</li>
                            <li style={{backgroundColor: window==='sells' && '#B87800', color: window==='sells' && 'white'}} onClick={()=>{setWindow('sells')}}>Ventas</li>
                             <li onClick={()=>{
                                signOut(auth)}}>Cerrar sesión</li> 
                        </ul>
                    </nav>
                { render()}
                </div>
            </>
            )
    }else{
        return <Login />
    }
            
}

export default Admin
