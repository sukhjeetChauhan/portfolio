import pdf from '/Sukhjeet Chauhan cv.pdf'

const Resume = () => {
  // const pdf = '/assets/Sukhjeet Chauhan cv.pdf'; // Adjust the path accordingly

  return (
    <div className="resume-container">
      <iframe src={pdf} width="100%" height="680px" title="Resume PDF" />
    </div>
  )
}

export default Resume
