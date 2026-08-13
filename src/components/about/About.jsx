import React from 'react'
import Founder from '../../assets/OIP.jpg'

const About = () => {
  return (
    <section className="about">
      <div>
        <img src={Founder} alt="Founder" />

        <h1>About Us</h1>

        <p>
          Welcome to Burger Shop. We are committed to serving fresh,
          high-quality burgers with outstanding customer service.
        </p>
      </div>
    </section>
  )
}

export default About
