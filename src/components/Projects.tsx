import CustomCarousel from './CustomCarousel'
import images from '../../data/images.ts'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <div className="container">
      <CustomCarousel>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />
        })}
      </CustomCarousel>
    </div>
  )
}
