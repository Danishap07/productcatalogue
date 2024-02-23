import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Categories() {
    const location = useLocation();
    console.log(location)
    const [data, setData] = useState([])


    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        if (res) {
            console.log(res)
            setData(res.data)

        }
    }





    return (
        <div>
            {
                data ? data.map((e, i) => (
                    <div key={i} className=' px-4 rounded border bg-[#272927] text-white mt-2'>
                        <Link to={"/category/"+e} ><div className='text-xl font-semibold py-2'>{e}</div></Link>
                    </div>
                ))
                    :
                    <h4> No data found.</h4>
            }
        </div>
    )
}

export default Categories
