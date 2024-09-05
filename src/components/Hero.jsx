// import content
import { useEffect } from 'react'
import { content } from '../Content'
const Hero = () => {
  const { hero } = content

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end md:justify-center items-end">
        <div
          data-aos="slide-left"
          data-aos-delay="1000"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[20%] md:top-[40%] right-[-30%] md:right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{' '}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="md:w-8/12">
          <div className="md:pb-40 pb-16 pl-20 pt-5 w-fit" data-aos="fade-down">
            <h2 className="text-6xl">{hero.title}</h2>
            <br />
            <div className="flex justify-end">
              <a href="#contact">
                <button className="btn">{hero.btnText}</button>
              </a>
            </div>
            <div className="flex flex-col gap-10 mt-10">
              {hero.hero_content.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5
                ${i === 1 && ' flex-row-reverse text-right'}  `}
                >
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sec col */}
        {/* <div className="md:h-[37rem] h-96 w-30%">
          {/* <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          /> 
        </div> */}
      </div>
    </section>
  )
}

export default Hero
