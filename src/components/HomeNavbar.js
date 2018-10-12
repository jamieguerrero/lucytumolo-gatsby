import React from 'react'
import Link from 'gatsby-link'

import blacklogo from '../img/lucy-logo-black.svg'
import whitelogo from '../img/lucy-logo-white.svg'

const HomeNavbar = () => (
  <nav>
    <div className="container mobile">
      <div>
        <Link to="/">
          <img src={whitelogo} alt="Lucy Logo" style={{ width: '346px' }} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/modalities">
            Modalities
          </Link>
        </li>
        <li>
          <Link to="/gift">
            Gift Certificates
          </Link>
        </li>
        <li>
          <Link to="/faq">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li><
      /ul>
    </div>
    <div className="container desktop">
      <div>
        <Link to="/">
          <img src={whitelogo} alt="Lucy Logo" style={{ width: '346px' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link to="/about">
          About
        </Link>
        <Link to="/testimonials">
          Testimonials
        </Link>
        <Link to="/modalities">
          Modalities
        </Link>
        <Link to="/gift">
          Gift Certificates
        </Link>
        <Link to="/faq">
          FAQ
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default HomeNavbar
