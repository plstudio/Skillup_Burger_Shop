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
    <div className="btn-group" ref={menuRef}>
      <button
        type="button"
        className="dropdown-toggle"
        onClick={() => setOpen(!open)}
      >
        MENU
      </button>

      {open && (
        <ul className="dropdown-menu-custom">
          {navLinks.map((d, i) => (
            <li key={i}>
              <Link to={d.path} onClick={() => setOpen(false)}>
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownMenu
