import React from 'react'
import '../CartItem/style.css'

export const CartItem = ({item,addToCart,removeFromCart}) => {
  return (
    <li className='cart-item'>
        <img className='cart-item_img' src={item.urlImg} alt={item.name} />
        <div className='cart-item_infos'>
        <h4 className='cart-item_title'>{item.name}</h4>
            <div className='cart-item_infosBotton'>
                <span className='cart-item_qtd'>{item.qtd}</span>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item)}>-</button>
                <span className='cart-item_price'>R${item.price}</span>
            </div>
        </div>
    </li>
  )
}
