import React from 'react'
import Founder from '../../assets/team.png'

const About = () => {
  return (
    <section className="about">
      <main>
        <img src={Founder} alt="Founder" />
        <div className="about-content">
          <h1>About Us</h1>

          <p>
            At Burger Shop, we believe great food brings people together. Every
            burger is crafted with premium ingredients, bold flavors, and a
            commitment to quality, creating memorable dining experiences for
            every guest.
          </p>
        </div>
      </main>
    </section>
  )
}

export default About
