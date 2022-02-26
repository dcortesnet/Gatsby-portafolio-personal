import * as React from "react"
import iconFacebook from "../images/facebook.png"
import iconInstagram from "../images/instagram.png"
import iconTwitter from "../images/twitter.png"
import iconLinkedin from "../images/linkedin.png"
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__social-list">
        <li className="footer__social-list__item">
          <img
            className="footer__social-list__item__icon"
            src={iconFacebook}
            alt="facebook"
          />
        </li>
        <li className="footer__social-list__item">
          <img
            className="footer__social-list__item__icon"
            src={iconInstagram}
            alt="Instagram"
          />
        </li>
        <li className="footer__social-list__item">
          <img
            className="footer__social-list__item__icon"
            src={iconTwitter}
            alt="twitter"
          />
        </li>
        <li className="footer__social-list__item">
          <img
            className="footer__social-list__item__icon"
            src={iconLinkedin}
            alt="linkedin"
          />
        </li>
      </ul>
      <p className="footer__text">Copyright ©2021 All rights reserved </p>
    </footer>
  )
}

export default Footer
