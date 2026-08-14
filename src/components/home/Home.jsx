import React from 'react'
import { Link } from 'react-router-dom'
import Founder from './Founder'
import Menu from './Menu'

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>Burger Worth Remembering</h1>
          <p>
            Fresh ingredients. Bold flavor. Made to order and delivered hot.
          </p>
          <Link to="/menu" className="hero-btn">
            Explore Menu
          </Link>
        </div>
      </section>

      <Founder />
      <Menu />
    </>
  )
}

export default Home
