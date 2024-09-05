import { content } from '../Content'
import { useMemo, useState } from 'react'
// Import collapse component to use collapsed div
import { Collapse } from 'react-collapse'

import gitHub from '../assets/images/Projects/GitHub.png'
import web from '../assets/images/Projects/www.png'

const Projects = () => {
  const { Projects } = content
  const initialState = useMemo(() => {
    const obj = {}
    content.Projects.project_content.forEach((item) => {
      obj[item.title] = false
    })
    return obj
  }, [content])

  const [detailWindowState, setDetailWindowState] = useState(initialState)

  function showDetails(name) {
    // set the state by spreading the orignal state obj and toggling the value of respective name
    setDetailWindowState((detailWindowState) => {
      return { ...detailWindowState, [name]: !detailWindowState[name] }
    })
  }
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center justify-center">
          <div
            data-aos="fade-left"
            className="rounded-3xl pb-16 w-3/5 drop-shadow-primary self-start flex flex-col gap-10"
          >
            {Projects.project_content.map((content, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => showDetails(content.title)}
                  >
                    READ MORE
                  </button>
                </div>
                <Collapse isOpened={detailWindowState[content.title]}>
                  <div className="content">
                    <div className="my-6">
                      <ul className="flex gap-5 flex-wrap">
                        {content.tech.map((item, i) => (
                          <li
                            className="bg-dark_primary px-4 py-2 rounded text-white"
                            key={i}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-5 py-4 items-center justify-start">
                        <p className="text-lg font-bold">Links:</p>
                        <div className="flex gap-2">
                          <a href={content.gitHub} target="_blank">
                            <img className="w-12" src={gitHub} />
                          </a>
                          <a href={content.deploy} target="_blank">
                            <img className="w-12" src={web} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="">{content.description}</p>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
