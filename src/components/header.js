import * as React from "react"
import "../styles/header.css"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__nav__list">
        <Link className="header__nav__list__element__link" to="/index-page">
          <li className="header__nav__list__element">Home</li>
        </Link>

        <Link className="header__nav__list__element__link" to="/blog-page/">
          <li className="header__nav__list__element">Blog</li>
        </Link>

        <Link className="header__nav__list__element__link" to="/work-page/">
          <li className="header__nav__list__element">Work</li>
        </Link>
      </ul>
    </nav>
  </header>
)

export default Header
