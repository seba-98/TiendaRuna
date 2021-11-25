import React from 'react'
import Navbar from './Navbar';

const Header = ({over=(e)=>{}}) => {
    return (
        <header>
            <Navbar over={(e)=>{over(e)}}/>
        </header>
    )
}

export default Header
