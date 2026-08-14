import React from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          🍔 Burger Shop
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>

        <DropdownMenu />
      </nav>
    </header>
  )
}

export default Header
