import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

function Category () {
    const location = useLocation();
    const categoryName =  location.pathname.replace('/products/', '')

    const [category_list, set_category_list] = useState([]);

    useEffect(() => {
        categoryList();
    },[])

    console.log("jhsdjh", category_list)
    const categoryList = async () => {
        const res = await axios.get('https://fakestoreapi.com/products'+categoryName, {headers: {'Accept': 'application/json', "Content-Type": 'application/json'}})
        // console.log(res); 
        if(res.status === 200) {
          console.log(res.data)
          set_category_list(res.data);
        }
    }

  return (
    // <div>jashja</div>
    <div className='sm:flex px-4 sm:flex-wrap justify-center w-screen overflow-hidden'>
      {
        category_list ? category_list.map((e, i) => (
          <div className='grid place-items-center border-2 rounded-lg border-[#000000] w-[20%] m-4'>
                        <Link to={'/products/'+ e.id} >
                        <div className='w-[180px]'>
                            <img src={e.image} alt={e.title} width={130} />
                        </div>
                        <div>
                            <h5 className='text-xl font-semibold'>{e.title}</h5>
                            <h5 className='text-xl font-semibold'>${e.price}</h5>
                        </div>
                    </Link>
                    </div>
        ))
        :
        <div>No data found</div>
      }
    </div>
  )
}

export default Category