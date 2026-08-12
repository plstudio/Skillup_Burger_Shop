import React from 'react'
import MenuCard from './MenuCard'

const Menu = () => {
  const addToCartHandler = (itemNum) => {
    alert(`Added item ${itemNum} to cart`)
  }

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />

        <MenuCard
          itemNum={2}
          burgerSrc="https://images.unsplash.com/photo-1550547660-d9450f859349"
          price={250}
          title="Veg Burger"
          handler={addToCartHandler}
          delay={0.3}
        />

        <MenuCard
          itemNum={3}
          burgerSrc="https://images.unsplash.com/photo-1571091718767-18b5b1457add"
          price={300}
          title="Spicy Burger"
          handler={addToCartHandler}
          delay={0.5}
        />
      </div>
    </section>
  )
}

export default Menu
