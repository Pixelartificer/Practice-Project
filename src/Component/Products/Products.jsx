import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = ({addToCart}) => {

    const[products, setProducts] = useState([]);
    console.log(products);



    useEffect(()=>{
        fetch('fakeData01.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


  return (
    <div className='text-center grid grid-cols-5 p-5 '>
       {

        products.map(product => <Product
        key={product.id}
        product={product}
        addToCart={addToCart}
        >
        </Product>) 
       }
    </div>
  )
}

export default Products