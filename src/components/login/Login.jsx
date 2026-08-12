import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <section className="login">
      <div className="loginContainer">
        <div className="tabs">
          <button onClick={() => setIsLogin(true)}>Login</button>

          <button onClick={() => setIsLogin(false)}>Register</button>
        </div>

        {isLogin ? (
          <form>
            <h2>Login</h2>

            <input type="email" placeholder="Email" required />

            <input type="password" placeholder="Password" required />

            <button type="submit">Login</button>
          </form>
        ) : (
          <form>
            <h2>Register</h2>

            <input type="text" placeholder="Name" required />

            <input type="email" placeholder="Email" required />

            <input type="password" placeholder="Password" required />

            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Login
