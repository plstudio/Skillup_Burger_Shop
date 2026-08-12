import React from 'react'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BURGER SHOP</h2>
        <p>We are trying to give you the best taste possible.</p>
      </div>

      <div>
        <h5>Follow Us</h5>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer
