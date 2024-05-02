import CustomCarousel from './CustomCarousel'
import images from '../../data/images.ts'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <h2>Guided Projects</h2>
      <div className="container">
        <CustomCarousel>
          {images.map((image, index) => {
            return (
              <div className="project-container">
                <h3 className="project-name">food Image</h3>
                <img key={index} src={image.imgURL} alt={image.imgAlt} />
              </div>
            )
          })}
        </CustomCarousel>
      </div>
      <h2>Self made Projects</h2>
      <div className="container">
        <CustomCarousel>
          {images.map((image, index) => {
            return (
              <div className="project-container">
                <h3 className="project-name">food Image</h3>
                <img key={index} src={image.imgURL} alt={image.imgAlt} />
              </div>
            )
          })}
        </CustomCarousel>
      </div>
    </>
  )
}
