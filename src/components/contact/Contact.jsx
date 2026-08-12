import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    alert('Message Sent Successfully!')

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="contact">
      <form onSubmit={submitHandler}>
        <h2>Contact Us</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact
