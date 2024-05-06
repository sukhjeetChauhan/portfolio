import { Link } from 'react-router-dom'
import '../styles/Modal.css'
import { Data } from '../models/models'

interface ModalProps {
  data: Data // Specify the type for the 'data' prop
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> // Specify the type for the 'showModal' prop
}

export default function Modal({ data, setIsOpen }: ModalProps) {
  function handleClose() {
    setIsOpen(false)
  }

  return (
    <div className="modal-container">
      <img src={data.imgURL} alt={data.imgAlt} />
      <div className="link-btn-container">
        {data.deploy !== '' && (
          <Link to={data.deploy} target="_blank">
            <button className="btn">Live</button>
          </Link>
        )}
        {data.gitHub !== '' && (
          <Link to={data.gitHub} target="_blank">
            <button className="btn">Code</button>
          </Link>
        )}
      </div>
      <div className="content">
        <div className="tech">
          <ul className="tech-list">
            {data.tech.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="description">{data.description}</p>
      </div>
      <button className="closeModal" onClick={handleClose}>
        X
      </button>
    </div>
  )
}
