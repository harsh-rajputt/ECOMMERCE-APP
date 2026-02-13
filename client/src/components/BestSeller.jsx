import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((item) => (item.bestSeller));
        setBestSeller(bestProducts.slice(0, 5));
    }, [products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our most popular products that customers love the most.</p>
        </div>
    </div>
  )
}

export default BestSeller