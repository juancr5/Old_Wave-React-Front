import React from 'react'
import { useParams } from 'react-router-dom';

const ProductScreen = () => {

    const {productId} = useParams();

  return (
      <>
      <h1>HolaS + {productId}</h1>
      </>
  )
}

export default ProductScreen;