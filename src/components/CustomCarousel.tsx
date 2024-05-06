import { useState, useEffect } from 'react'

import '../styles/CustomCarousel.css'

function CustomCarousel({ data, showModal }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDone, setSlideDone] = useState(true)
  const [timeID, setTimeID] = useState(0)

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false)
      setTimeID(
        setTimeout(() => {
          slideNext()
          setSlideDone(true)
        }, 5000)
      )
    }
  }, [slideDone])

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= data.length - 1) {
        return 0
      } else {
        return val + 1
      }
    })
  }

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return data.length - 1
      } else {
        return val - 1
      }
    })
  }

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID)
      // setTimeID(0)

      setSlideDone(false)
    }
  }

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true)
    }
  }

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {data.map((project, index) => {
        return (
          <div
            className={'slider__item slider__item-active-' + (activeIndex + 1)}
            key={index}
          >
            <div key={`${project.name} ${index}`} className="project-container">
              <button
                className="project-btn"
                onClick={() => showModal(project)}
              >
                <img key={index} src={project.imgURL} alt={project.imgAlt} />
                <h3 className="project-name">{project.name}</h3>
                <p className="overlay-text">Click for Details</p>
              </button>
            </div>
          </div>
        )
      })}
      {/* 
      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? 'container__slider__links-small container__slider__links-small-active'
                  : 'container__slider__links-small'
              }
              onClick={(e) => {
                e.preventDefault()
                setActiveIndex(index)
              }}
            ></button>
          )
        })}
      </div> */}

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault()
          slideNext()
        }}
      >
        {'>'}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault()
          slidePrev()
        }}
      >
        {'<'}
      </button>
    </div>
  )
}

export default CustomCarousel
