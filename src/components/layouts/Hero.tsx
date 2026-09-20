import { useEffect, useState } from 'react'
import palawanIllegalLogging from '../../assets/images/palawan illegal logging.jpeg'
import DENR  from '../../assets/images/DENR.jpg'
import cariaga from '../../assets/images/cariaga.png'
import surigao from '../../assets/images/illegal-logging-surigao.png'

const slides = [
  {
    title: 'Illegal Logging Threatens Palawan Forests',
    text: `A July 2021 report documented illegal tree cutting near Mount Domadoway in Palawan. The forest is important to indigenous Pala'wan communities because it provides food, water, and supports cultural traditions. `,
    image: palawanIllegalLogging,
    imageAlt: "Environmental para-enforcer inspecting an illegally felled tree in Palawan",
    photoSource: "Teofilo Tredez / PNNI via Earth Journalism Network",
    reference: "Keith Anthony S. Fabro, Mongabay / EJN, July 7, 2021",
    referenceUrl:
      "https://earthjournalism.net/stories/illegal-logging-in-philippines-palawan-stokes-fears-of-a-mining-resurgence",
  },

  {
    title: 'Anti-Illegal Logging Operations in Caraga',
    text: `From January to May 2025, DENR Caraga recorded 148 anti-illegal-logging apprehensions. More than 310,000 board feet of undocumented forest products were confiscated.`,
    image: DENR,
    imageAlt:"Confiscated undocumented forest products during an anti-illegal logging operation",
    photoSource: "Philippine Information Agency / DENR Caraga",
    reference: "PIA — Anti-illegal logging operations in Caraga, 2025",
    referenceUrl: "https://pia.gov.ph/news/denr-slashes-number-of-illegal-logging-hotspots-across-caraga/", 
  },

  {
    title: 'Illegal Logging Incidents Recorded in Quirino',
    text: `In 2025, authorities recorded 13 illegal-logging incidents in Quirino. Enforcement operations resulted in the seizure of more than 19,600 board feet of forest products.`,
    image: cariaga,
    imageAlt:"Authorities conducting an anti-illegal logging operation in Quirino",
    photoSource: "AI generated photo base on the information of Illegal logging Incidents Recorded in Quirino", 
    reference: "PIA — Illegal logging in Quirino, 2025",
    referenceUrl: "https://newsinfo.inquirer.net/972512/4-farmers-nabbed-for-illegal-logging-in-quirino", 
  },

  {
    title: 'PNP and DENR Intensify Action Against Illegal Logging',
    text: `In June 2026, the Philippine National Police directed regional commanders to strengthen coordination with the DENR and intensify operations against illegal logging and mining.`,
    image: surigao,
    imageAlt:"Philippine authorities conducting an environmental law enforcement operation",
    photoSource: "Photo courtesy of the Philippine National Police (PNP) via the Philippine News Agency (PNA).",
    reference:"PNA — PNP-DENR crackdown on illegal logging, June 2026",
    referenceUrl:
      "https://www.pna.gov.ph/articles/1278206",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const showPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  const showNextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    )
  }

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      )
    }, 30000)

    return () => window.clearInterval(slideTimer)
  }, [])

  return (
    <>
      <section className="relative isolate h-[60vh] min-h-[430px] overflow-hidden bg-green-950 text-white shadow-2xl flex justify-center">
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="grid h-full w-[85%]  place-items-center px-16 py-14 text-center sm:px-24 lg:px-28 ">
          {slides.map((slide, index) => (
          <div
            key={slide.title}
            aria-hidden={activeSlide !== index}
            inert={activeSlide !== index}
            className={` flex justify-center items-center col-start-1 row-start-1 mx-auto w-full transition-all delay-500 duration-[500ms] ease-in-out motion-reduce:transition-none ${
              activeSlide === index
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-4 opacity-0'
            }`}
          >
            <div className='w-[45%] flex flex-col items-start'>
{/*                 <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] !mb-2 text-green-200 sm:text-sm">
                  status of {slide.title} 
                </p> */}
                <h1 className="!max-w-2xl text-left !font-black !font-semibold !leading-tight !mb-6 !text-white sm:!text-4xl lg:!text-2xl text-center !w-[90%]">
                  {slide.title}
                </h1>
                <p className="mx-auto mt-4 max-w-xl !text-sm font-medium leading-6 text-green-50 sm:text-base !mb-8 !text-left  !w-[100%]">
                  {slide.text}
                </p>

               
               <div className="bg-white/90  rounded-md !px-4 !py-2 hover:bg-green-100">
                  <a
                    href={slide.referenceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 max-w-full rounded-md text-sm font-bold text-green-950 transition  !mb-2"
                  >
                    Reference: {slide.reference}
                  </a>
               </div>
            </div>
            <div className='w-[45%] flex items-center gap-5 flex-col'>
                <img src={slide.image} alt={`image of ${slide.title}`} className='w-90 h-68 rounded-md'/>
                <p className="mt-3 text-xs text-green-100 w-[60%]">
                  Photo:{slide.photoSource}
                </p>
            </div>

          </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 w-[95%] !mx-auto items-center justify-between px-[5%]">
          <button
            type="button"
            onClick={showPreviousSlide}
            className="grid h-11 w-11  cursor-pointer place-items-center rounded-full border border-white/40 bg-black/30 text-xl font-bold text-white backdrop-blur transition hover:bg-white hover:text-green-950"
            aria-label="Previous slide"
          >
            {'<'}
          </button>
          <button
            type="button"
            onClick={showNextSlide}
            className="grid h-11 w-11  cursor-pointer place-items-center rounded-full border border-white/40 bg-black/30 text-xl font-bold text-white backdrop-blur transition hover:bg-white hover:text-green-950"
            aria-label="Next slide"
          >
            {'>'}
          </button>
        </div>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.title}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition ${
                activeSlide === index ? 'w-9 bg-white' : 'w-2.5 bg-white/45'
              }`}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : undefined}
            />
          ))}
        </div>
      </section>
    
    </>
  )
}

export default Hero
