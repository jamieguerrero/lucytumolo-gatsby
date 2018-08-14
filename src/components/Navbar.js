import React from 'react'
import Link from 'gatsby-link'

import blacklogo from '../img/lucy-logo-black.svg'
import whitelogo from '../img/lucy-logo-white.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container mobile">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={whitelogo} alt="Lucy Logo" style={{ width: '346px' }} />
        </Link>
      </div>
      <ul className="navbar-items">
        <li>
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/modalities">
            Modalities
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/gift">
            Gift Certificates
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/faq">
            FAQ
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </li><
      /ul>
    </div>
    <div className="container desktop">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={blacklogo} alt="Lucy Logo" style={{ width: '346px' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/testimonials">
          Testimonials
        </Link>
        <Link className="navbar-item" to="/modalities">
          Modalities
        </Link>
        <Link className="navbar-item" to="/gift">
          Gift Certificates
        </Link>
        <Link className="navbar-item" to="/faq">
          FAQ
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
