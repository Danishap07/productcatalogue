import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const location = useLocation();
  const productId = location.pathname.replace('/products/', '')

  const [productDetails, setProductDetails] = useState([])

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/' + productId, { headers: { 'Accept': 'application/json', "Content-Type": 'application/json' } })
    // console.log(res);
    if (res.status === 200) {
      console.log(res.data)
      setProductDetails(res.data);
    }
  }


  return (
    <>
    {
      productDetails.id?
      <div className='flex border border-gray-600 shadow rounded-md p-4 max-w-screen-xl w-full mx-auto'>
      <div className='w-64 h-64'>
        <img src={productDetails.image} alt={productDetails.name} />
      </div>
      <div className='my-10 mx-12'>
      <h1 className='text-xl font-bold'>{productDetails.title}</h1>
      <p className='text-lg font-semibold max-w-md'>{productDetails.description}</p> <br/>
      <p className='font-bold'>Price: ${productDetails.price}</p>
      </div>
    </div>
    :
    <div class="border border-gray-600 shadow rounded-md p-4 max-w-screen-xl w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-700 h-24 w-24"></div>
      <div class="flex-1 space-y-6 py-4">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
    }
    </>
  )
}

export default ProductDetails