import '../styles/Modal.css'

export default function Modal({ data }) {
  console.log(data)
  return (
    <div className="modal-container">
      <img src={data.imgURL} alt={data.imgAlt} />
      <p className="description">{data.description}</p>
    </div>
  )
}
