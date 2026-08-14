import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/DropdownMenu.scss'

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([])
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const navs = [
      { name: 'Login', path: '/login' },
      { name: 'Orders', path: '/myorders' },
      { name: 'Logout', path: '/login' },
    ]

    setNavLinks(navs)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          {/* <Link className="navbar-brand" to="/">
            Burger Shop
          </Link> */}

          <div className="btn-group" ref={menuRef}>
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              onClick={() => setOpen(!open)}
            >
              Menu
            </button>

            {open && (
              <ul
                className="dropdown-menu dropdown-menu-end show"
                style={{ display: 'block' }}
              >
                {navLinks.map((d, i) => (
                  <li key={i}>
                    <Link to={d.path} onClick={() => setOpen(false)}>
                      <button className="dropdown-item" type="button">
                        {d.name}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default DropdownMenu
