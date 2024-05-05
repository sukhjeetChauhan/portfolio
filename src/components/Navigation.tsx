import '../styles/Navigation.css'
import { HashLink } from 'react-router-hash-link'
import HamburgerMenu from './sub-component/Hamburger'

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="logo-name">Sukhjeet Chauhan</div>
      <div className="navigation">
        <ul className="nav-list">
          <HashLink smooth to="#about">
            <li>About</li>
          </HashLink>
          <HashLink smooth to="#projects">
            <li>Projects</li>
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
