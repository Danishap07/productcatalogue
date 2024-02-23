import React,{useState, useEffect} from 'react'
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
        const res = await axios.get('https://fakestoreapi.com/products/'+productId, {headers: {'Accept': 'application/json', "Content-Type": 'application/json'}})
        // console.log(res);
        if(res.status === 200) {
          console.log(res.data)
          setProductDetails(res.data);
        }
    }


  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails