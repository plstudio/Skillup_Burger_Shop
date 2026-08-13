import React from 'react'
import { Link } from 'react-router-dom'
import Founder from './Founder'
import Menu from './Menu'

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>BURGER SHOP</h1>
          <p>Give Yourself a New Taste</p>

          <Link to="/menu">Explore Menu</Link>
        </div>
      </section>

      <Founder />
      <Menu />
    </>
  )
}

export default Home
