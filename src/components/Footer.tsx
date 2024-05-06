import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer-container" id="contact">
      <h1>Lets connect</h1>
      <div className="footer">
        <Link
          to="https://www.linkedin.com/in/sukhjeet-chauhan-627401140/"
          target="_blank"
        >
          <i className="fa fa-linkedin fa-4x icon-40 logo"></i>
        </Link>
        <Link to="https://github.com/sukhjeetChauhan" target="_blank">
          <i className="fa fa-github fa-4x icon-40 logo"></i>
        </Link>
        <Link to="/contact">
          <i className="fa fa-envelope fa-4x icon-40 logo"></i>
        </Link>

        <Link to="/contact">
          <i className="fa fa-phone fa-4x icon-40 logo"></i>
        </Link>
      </div>
    </div>
  )
}
