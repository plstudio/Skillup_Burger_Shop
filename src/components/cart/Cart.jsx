import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt={title} />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
)

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')

    return savedCart
      ? JSON.parse(savedCart)
      : {
          1: 0,
          2: 0,
          3: 0,
        }
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const increment = (item) => {
    setCartItems((prev) => ({
      ...prev,
      [item]: prev[item] + 1,
    }))
  }

  const decrement = (item) => {
    setCartItems((prev) => ({
      ...prev,
      [item]: prev[item] > 0 ? prev[item] - 1 : 0,
    }))
  }

  const subtotal =
    cartItems[1] * 8.99 + cartItems[2] * 10.99 + cartItems[3] * 12.99

  const tax = subtotal * 0.08
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + tax + shipping

  const clearCart = () => {
    const emptyCart = {
      1: 0,
      2: 0,
      3: 0,
    }

    setCartItems(emptyCart)
    localStorage.removeItem('cartItems')
  }

  return (
    <section className="cart">
      <main>
        <CartItem
          title="Cheese Burger"
          img={burger1}
          value={cartItems[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />

        <CartItem
          title="Veg Cheese Burger"
          img={burger2}
          value={cartItems[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />

        <CartItem
          title="Cheese Burger with French Fries"
          img={burger3}
          value={cartItems[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div>
            <h4>Tax</h4>
            <p>${tax.toFixed(2)}</p>
          </div>

          <div>
            <h4>Shipping Charges</h4>
            <p>${shipping.toFixed(2)}</p>
          </div>

          <div>
            <h4>Total</h4>
            <p>${total.toFixed(2)}</p>
          </div>

          <Link to="/shipping">Checkout</Link>

          <button type="button" onClick={clearCart}>
            Clear Cart
          </button>
        </article>
      </main>
    </section>
  )
}

export default Cart
