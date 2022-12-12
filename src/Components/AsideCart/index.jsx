import { CartItem } from '../CartItem'
import "../AsideCart/style.css"

export const AsideCart = ({closeModal,modalAside,cartItems,addToCart,removeFromCart,cartTotal}) => {
  return (
    <aside className={`aside-cart ${modalAside}`}>
        <div className='header-aside'>
        <h5>Meu carrinho</h5>
        <button 
        className='button-closeAside'
        onClick={closeModal}
        >X</button>
        </div>
        <div className='body-aside'>
            <ul className='cart-list'>
              {
              cartItems.length !== 0 
              ? cartItems.map(item => (
                  <CartItem 
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  />
                ))
              : <p className='info-empty'>O carrinho está vazio</p>
              }
            </ul>
            <div className='infos-buy'>
              <div className='infos-price'>
                <span>Total: R$ ${cartTotal}</span>
              </div>
              <button
               className='btnAside-buy'
               >Finalizar compra</button>
            </div>
        </div>
        </aside>
  )
}
 