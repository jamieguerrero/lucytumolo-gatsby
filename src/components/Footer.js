import React from 'react'

import logo from '../img/lucy-logo-black.svg'

const Footer = () => (
  <footer>
    <div className="footer-locations">
      <div className="location">
        <strong>OSSINGTON LOCATION</strong>
        <p>91 Ossington Ave., 2nd floor</p>
        <p>(above Crywolf)</p>
        <p>Toronto, Ontario M6J 2Z2</p>
      </div>
      <div className="location">
        <strong>DUFFERIN / COLLEGE LOCATION</strong>
        <p>4 Macklem Ave, 2nd floor</p>
        <p>Toronto, ON M6J 3M2</p>
      </div>
    </div>

    <div className="footer-contact">
        <strong>TELEPHONE</strong>
        <p>(416) 951 5829</p>

        <strong>EMAIL ADDRESS</strong>
        <p>lucyrmt@gmail.com</p>
    </div>

    <div className="social-icons">
      <div className="social-inner">
        <a href="#"><img src="../img/social-facebook.svg" alt="Facebook"/></a>
        <a href="#"><img src="../img/social-twitter.svg" alt="Twitter"/></a>
        <a href="#"><img src="../img/social-instagram.svg" alt="Instagram"/></a>
      </div>
    </div>

    <div className="footer-logo">
      <a href="#"><img src={logo} alt="Instagram"/></a>
    </div>
    </footer>
)

export default Footer
