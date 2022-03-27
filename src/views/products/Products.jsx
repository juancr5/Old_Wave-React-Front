import React, { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContex';

const Products = () => {

    // Se importa el useState desde el useContext de Categories
    const { categories, setCategories } = useContext(CategoriesContext)


  return (
    <h1>ShoppingCart {categories} </h1>
  )
}

export default Products;
