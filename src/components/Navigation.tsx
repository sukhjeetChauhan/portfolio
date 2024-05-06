import '../styles/Navigation.css'
import { HashLink } from 'react-router-hash-link'
import HamburgerMenu from './sub-component/Hamburger'
import pdf from '/Sukhjeet Chauhan cv.pdf'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="logo-name">
        <Link to="/">Sukhjeet Chauhan</Link>
      </div>
      <div className="navigation">
        <ul className="nav-list">
          <HashLink smooth to="#about">
            <li>About</li>
          </HashLink>
          <HashLink smooth to="#projects">
            <li>Projects</li>
          </HashLink>
          <HashLink smooth to={pdf} target="_blank">
            <li>Download CV</li>
          </HashLink>
          <HashLink smooth to="#contact">
            <li>Contact</li>
          </HashLink>
        </ul>
      </div>
      <HamburgerMenu />
    </nav>
  )
}
