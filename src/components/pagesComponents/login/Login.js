import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebaseConfig';
const auth= getAuth(app);


const Login = () => {

const [user, setUser]=useState('');
const [password, setPassword]=useState('');

const submitHandler = async(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, user, password)
}

    return (
        
        <div className='formContainer'>
            <form className='loginForm'>
                <div></div>
                <h3>Administración de aplicación</h3>
            <div className="loginGroup">
                <input type="text" className='place' value={user} onChange={(e)=>{setUser(e.target.value)}} placeholder='id o email'/>
            </div> 
            <div className="loginGroup">
                <input type="password" className='place' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Contraseña'/>
            </div>    
            <div className="loginGroup"> 
                <input type="submit" id='sub' className='subYes' value="Ingresar" onClick={(e)=>{submitHandler(e)}} />
            </div>    
            </form>
        </div>
       
    )
}

export default Login
