import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Product() {

    const navigate = useNavigate()
    const handleAll = () => {
        navigate('/products')
    }



    return (
        <div className='flex justify-center space-x-3'>
            <Link to='/products'><button className='border  px-1' >All</button></Link>
            <button className='border px-1'>Men's Clothing</button>
            <button className='border px-1'>Women's Clothing</button>
            <button className='border px-1'>Jewellery</button>
            <button className='border px-1'>Electronics</button>


        </div>
    )
}

export default Product
