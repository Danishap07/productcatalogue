import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductsLoader from '../components/productsLoader'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        if (res) {
            console.log(res)
            setData(res.data)

        }
    }


    return (
        <div >
            {
                data.length ?
                    <div className='sm:flex px-4 sm:flex-wrap justify-center w-screen overflow-hidden'>
                        {
                            data.map((e, i) => (
                                <div className='grid place-items-center border-2 rounded-lg border-[#000000] w-[20%] m-4'>
                                    <Link to={'/products/' + e.id} >
                                        <div className='w-[180px]'>
                                            <img src={e.image} alt={e.title} width={130} />
                                        </div>
                                        <div>
                                            <h5 className='text-xl font-semibold'>{e.title}</h5>
                                            {/* <h6>{e.description}</h6> */}
                                            <h5 className='text-xl font-semibold'>${e.price}</h5>
                                        </div>
                                    </Link>
                                </div>

                            ))
                        }
                    </div>
                    :
                    <ProductsLoader />
            }


        </div>
    )
}

export default Products
