import React from 'react'
import { motion } from 'framer-motion'
import me from '../../assets/skj.jpg'
const Founder = () => {
  const options = {
    initial: {
      x: '-100%',
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h2>Nelson</h2>

        <p>
          Hey, everyone! I'm Nelson, founder of Burger Shop. Our mission is
          simple: create unforgettable burgers using fresh ingredients, bold
          flavors, and a passion for great food.
        </p>
      </motion.div>
    </section>
  )
}

export default Founder
