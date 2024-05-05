import '../styles/Landing.css'
import { HashLink } from 'react-router-hash-link'

export default function Landing() {
  return (
    <section className="section landing-area">
      <div className="intro">
        <p>Hi! My name is Sukh.</p>
        <p>
          I'm a <span className="designation">fullstack developer</span>
        </p>
        <p>located in Auckland</p>
      </div>

      <p>
        Never become so much of an expert that you stop gaining expertise. I use
        this quote as my motto in life. Always striving for perfection while
        remaining a lifelong student.
      </p>

      <HashLink smooth to="#projects">
        <button id="landing-button">→ See my Projects</button>
      </HashLink>
    </section>
  )
}
