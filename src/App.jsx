import { useState } from 'react'
import { AsideCart } from './Components/AsideCart'
import { Product } from './Components/Product'
import { products } from './Data/products'
import './App.css'
import { useMemo } from 'react'
import { CartItem } from './Components/CartItem'

function App() {
  const [modalAside, setModalAside] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [cartTotal,setCartTotal] = useState("")

  useMemo(()=> {
    calculateCartTotal(cartItems)
  },[cartItems])

  function closeModal () {
     setModalAside("")
  }
  function showModal () {
     setModalAside("show")
  }

  function handleAddToCart (book) {
    const copyCartItem = [...cartItems]
    const item = copyCartItem.find(item => item.id === book.id)

    if(!item){
      cartItems.length <= 0 && showModal()
      setCartItems([...cartItems, {...book, qtd:1}])
    }
    else{
      setCartItems(cartItems.map(item => item.id === book.id ? {...item, qtd: item.qtd +1}: item))
    }
  }

  function handleRemoveFromCart (book) {
    const copyCartItem = [...cartItems]
    const item = copyCartItem.find(item => item.id === book.id)
    if(item.qtd === 1){
      setCartItems(copyCartItem.filter(item => item.id !== book.id ))
    }
    else{
        setCartItems(cartItems.map(item => item.id === book.id ? {...item, qtd: item.qtd - 1}: item))
      }
  }

  function calculateCartTotal (items) {
    const allCartPrices = items.map(item => item.price * item.qtd)
    const totalCartPrice = allCartPrices.reduce((acc,value) => acc += value, 0)

    setCartTotal(totalCartPrice.toFixed(2))
  }

  return (
    <>
    <AsideCart 
    closeModal={closeModal}
    modalAside={modalAside}
    cartItems={cartItems}
    addToCart={handleAddToCart}
    removeFromCart={handleRemoveFromCart}
    cartTotal={cartTotal}
    />
      <header>
        <h1>BookStore</h1>
        <button onClick={showModal} className='cart-button'>
          <img src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="img-cart" />
          <div>Meu carrinho</div>
        </button>
      </header>
      <section className='main'>
        <ul className='product-list'>
          {
            products.map((book) => (
              <Product 
                key={book.id}
                productId={book.id}
                name={book.name}
                imgUrl={book.urlImg}
                price={book.price}
                book={book}
                handleAddToCart={handleAddToCart}
              />
            ))
          }          
          
        </ul>
      </section>
    </>
  )    
}

export default App
