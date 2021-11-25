import React from 'react';
import preloadimg from '../../../assets/img/preloadWhite.gif'

const Preload = ({style, widthImg}) => {
    return (
        <div style={style}><img src={preloadimg} width={widthImg} alt=''/></div>
    )
}

export default Preload