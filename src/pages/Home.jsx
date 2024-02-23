import React from 'react'
import Main from '../components/main'
import Navbar from '../components/navbar'
import Categories from './categories'
import Product from '../components/product'


function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Main />
            <Product />
            <Categories />

        </>
    )
}

export default Home
