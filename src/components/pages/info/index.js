import React from 'react'
import History from '../../pagesComponents/infoComponents/History'
import Contact from '../../pagesComponents/infoComponents/Contact'
import Buy from '../../pagesComponents/infoComponents/Buy'

import { useParams } from 'react-router'


const Info = () => {

    const {data} = useParams();

    const rend = () =>{
        if(data === 'history'){
            return <History />
        }
        else if(data === 'contact'){
            return <Contact />
        }
        else if(data === 'buy'){
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
