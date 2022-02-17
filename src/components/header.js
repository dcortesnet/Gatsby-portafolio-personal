import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/header.css"

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav__list">
        <li className="header__nav__list-element">Trabajo</li>
        <li className="header__nav__list-element">Blog</li>
        <li className="header__nav__list-element">Contacto</li>
      </ul>
    </nav>
  </header>
)

export default Header
