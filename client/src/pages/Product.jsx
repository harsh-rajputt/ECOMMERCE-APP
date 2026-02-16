import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
  const {productId} = useParams();
  console.log("Params:", useParams());
  console.log( "productId:", productId[0]);
  return (
    <div>Product {productId}</div>
  )
}

export default Product