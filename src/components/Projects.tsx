import CustomCarousel from './CustomCarousel'
import { guided, selfMade } from '../../data/projects.ts'
import '../styles/Projects.css'
import { SetStateAction, useState } from 'react'
import Modal from './Modal.tsx'

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setmodaldata] = useState({})

  function showModal(data: SetStateAction<object>) {
    setIsOpen(true)
    setmodaldata(data)
  }
  return (
    <>
      {isOpen && <div className="wrapper"></div>}
      {isOpen && <Modal data={modalData} setIsOpen={setIsOpen}></Modal>}
      <h1>Projects</h1>
      <h2>Guided Projects</h2>
      <div key="guided" className="container">
        <CustomCarousel>
          {guided.map((project, index) => {
            return (
              <div key={`guided ${index}`} className="project-container">
                <button
                  className="project-btn"
                  onClick={() => showModal(project)}
                >
                  <img key={index} src={project.imgURL} alt={project.imgAlt} />
                  <h3 className="project-name">{project.name}</h3>
                  <p className="overlay-text">Click for Details</p>
                </button>
              </div>
            )
          })}
        </CustomCarousel>
      </div>
      <h2>Self made Projects</h2>
      <div key="self" className="container">
        <CustomCarousel>
          {selfMade.map((project, index) => {
            return (
              <div key={`self ${index}`} className="project-container">
                <button
                  className="project-btn"
                  onClick={() => showModal(project)}
                >
                  <img key={index} src={project.imgURL} alt={project.imgAlt} />
                  <h3 className="project-name">{project.name}</h3>
                  <p className="overlay-text">Click for Details</p>
                </button>
              </div>
            )
          })}
        </CustomCarousel>
      </div>
    </>
  )
}
