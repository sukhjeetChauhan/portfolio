import '../styles/About.css'
import StackIcon from 'tech-stack-icons'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <h2>About me</h2>
      </div>
      <div className="about-image">
        <img src="/mainProPic(B & W).JPG" alt="image of self" />
      </div>
      <div className="about-description">
        <p>
          I have a graduate and Post-graduate qualifications in the field of IT
          and business and I am recent graduate from Dev Academy Aotearoa
        </p>
        <p>
          Recently, I have been diving deeper into the web development world and
          I really enjoy learning new technologies and problem solving. I have
          few projects under my belt which I have displayed in the following
          section.
        </p>
        <p>Tech Stack</p>
        <div className="tech-stack"></div>
        <StackIcon name="html5" />
        <StackIcon name="css3" />
        <StackIcon name="js" />
        <StackIcon name="tailwindcss" />
        <StackIcon name="reactjs" />
        <StackIcon name="nodejs" />
      </div>
    </section>
  )
}
