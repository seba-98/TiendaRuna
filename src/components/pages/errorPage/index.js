import React from 'react'
import ScrollToTop from '../../widgets/scrollRestoration/ScrollToTop'

const Error = () => {
    return (
        <div className='errorContent'>
            <ScrollToTop />
            <div className='errorBox'>
                <h3>Lo sentimos, la pagina que buscas no existe :(</h3>
            </div>
        </div>
        
    )
}

export default Error
