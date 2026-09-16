import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/content'
import Button from '../global/Button'
import Logo from '../global/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo variant="title" className="navbar__logo" onClick={closeMenu} />

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' is-active' : ''}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Button to="/contact" className="navbar__cta">
            Get Started
          </Button>
          <button
            type="button"
            className={`navbar__toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`navbar__mobile${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav className="navbar__mobile-links" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? ' is-active' : ''}`
              }
              end={link.path === '/'}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" className="navbar__mobile-cta" onClick={closeMenu}>
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
