import React, { useEffect, useState} from 'react'
import History from '../../pagesComponents/infoComponents/History'
import Contact from '../../pagesComponents/infoComponents/Contact'
import Buy from '../../pagesComponents/infoComponents/Buy'
import { useLocation } from 'react-router-dom';


const Info = () => {

    const {pathname} = useLocation();
    const [route, setRoute] = useState(pathname)

    useEffect(()=>{

        setRoute(pathname)

    }, [pathname])


    const rend = () =>{
        if(route === '/info/historia'){
            return <History />
        }
        else if(route === '/info/contacto'){
            return <Contact />
        }
        else if(route === '/info/comprar'){
            return <Buy />
        }
    }

    return (
        <div className='info'>
            {rend()}
        </div>
    )
}

export default Info
