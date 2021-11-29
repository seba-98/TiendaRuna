import React from 'react'
import Banner from '../../pagesComponents/banner/Banner'
import Category from '../../pagesComponents/category/Category'
import Brands from '../../pagesComponents/brands/Brands'
import homeImg from '../../../assets/img/banner.png'

const Home = () => {
    return (

        <>
            <Banner img={homeImg} height='820px'/>
            <div className='home'>
                <Category />    
                <Brands />
            </div>
        </>
    )
}
export default Home
