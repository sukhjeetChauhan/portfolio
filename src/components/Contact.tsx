import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="img-container">
        <img src="/contact.jpg" alt="contact Image" />
      </div>
      <div className="contact-detail">
        <h2 className="contact-heading">Contact Me</h2>
        <p>
          Email: <span>chauhansukhjeet@gmail.com</span>
        </p>
        <p>
          Phone: <span>0274370467</span>
        </p>
      </div>
    </div>
  )
}
