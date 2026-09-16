import { Link } from 'react-router-dom'
import { contactDetails, navLinks, solutions } from '../../data/content'
import Logo from '../global/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="inverse" to="/" className="footer__logo" />
          <p>
            Smart, scalable, and customizable web-based business solutions
            designed to simplify operations for growing organizations.
          </p>
        </div>

        <div>
          <h2 className="footer__heading">Navigate</h2>
          <ul className="footer__list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Solutions</h2>
          <ul className="footer__list">
            {solutions.slice(0, 6).map((solution) => (
              <li key={solution.slug}>
                <Link to="/solutions">{solution.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Contact</h2>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li>
              <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>
                {contactDetails.phone}
              </a>
            </li>
            <li>{contactDetails.location}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} iKeySuite. All rights reserved.</p>
          <p>A product of iKey Solutions PH.</p>
        </div>
      </div>
    </footer>
  )
}
