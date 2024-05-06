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
      <h1 id="projects">Projects</h1>
      <h2>Guided Projects</h2>
      <div key="guided" className="container">
        <CustomCarousel data={guided} showModal={showModal} />
      </div>
      <h2>Self made Projects</h2>

      <div key="self" className="container">
        <CustomCarousel data={selfMade} showModal={showModal} />
      </div>
    </>
  )
}
