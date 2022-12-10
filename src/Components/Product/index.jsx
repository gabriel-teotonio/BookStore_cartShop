import React, { useState } from 'react'
import '../Product/style.css'

export const Product = ({name,imgUrl,price,book, handleAddToCart}) => {
  const priceFormated = price.toFixed(2).toString().replace(".",",")
  
  return (
    <li className='product-item'>
        <img src={imgUrl} alt="image" />
        <h4>{name}</h4>
        <div className='price'>R$ {priceFormated}</div>
        <button
        onClick={() => handleAddToCart(book)}
        >Comprar</button>
    </li>
  )
} 
