import CustomCarousel from './CustomCarousel'
import guided from '../../data/projects.ts'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <h2>Guided Projects</h2>
      <div className="container">
        <CustomCarousel>
          {guided.map((project, index) => {
            return (
              <div className="project-container">
                <h3 className="project-name">{project.name}</h3>
                <img key={index} src={project.imgURL} alt={project.imgAlt} />
              </div>
            )
          })}
        </CustomCarousel>
      </div>
      <h2>Self made Projects</h2>
      <div className="container">
        <CustomCarousel>
          {guided.map((project, index) => {
            return (
              <div className="project-container">
                <h3 className="project-name">{project.name}</h3>
                <img key={index} src={project.imgURL} alt={project.imgAlt} />
              </div>
            )
          })}
        </CustomCarousel>
      </div>
    </>
  )
}
