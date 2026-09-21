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
      <section className="relative isolate flex min-h-[620px] justify-center overflow-hidden bg-green-950 text-white shadow-2xl sm:min-h-[680px] lg:h-[60vh] lg:min-h-[480px] lg:max-h-[680px]">
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="grid h-full w-full max-w-[1600px] place-items-center !px-12 !py-12 text-center sm:!px-20 lg:w-[86%] lg:!px-16 lg:!py-10 xl:!px-20">
          {slides.map((slide, index) => (
          <div
            key={slide.title}
            aria-hidden={activeSlide !== index}
            inert={activeSlide !== index}
            className={`col-start-1 row-start-1 mx-auto flex w-full flex-col items-center justify-center gap-6 transition-all delay-500 duration-[500ms] ease-in-out motion-reduce:transition-none lg:flex-row lg:gap-10 ${
              activeSlide === index
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-4 opacity-0'
            }`}
          >
            <div className="flex w-full max-w-2xl flex-col items-start lg:w-1/2">
{/*                 <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] !mb-2 text-green-200 sm:text-sm">
                  status of {slide.title} 
                </p> */}
                <h1 className="w-full !text-left !text-2xl !font-bold !leading-tight !text-white sm:!text-3xl lg:!text-4xl">
                  {slide.title}
                </h1>
                <p className="!mt-4 w-full !text-left text-sm font-medium leading-6 text-green-50 sm:text-base lg:!mt-5">
                  {slide.text}
                </p>

               
               <div className="!mt-5 max-w-full rounded-md bg-white/90 !px-4 !py-2 hover:bg-green-100">
                  <a
                    href={slide.referenceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block max-w-full break-words text-left text-xs font-bold leading-5 text-green-950 transition sm:text-sm"
                  >
                    Reference: {slide.reference}
                  </a>
               </div>
            </div>
            <div className="flex w-full max-w-2xl flex-col items-start gap-2 lg:w-1/2">
                <img src={slide.image} alt={slide.imageAlt} className="aspect-[16/9] w-full rounded-md object-cover shadow-lg" />
                <p className="w-full text-left text-[11px] leading-4 text-green-100 sm:text-xs">
                  Photo:{slide.photoSource}
                </p>
            </div>

          </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 !mx-auto flex w-[98%] -translate-y-1/2 items-center justify-between sm:w-[96%]">
          <button
            type="button"
            onClick={showPreviousSlide}
            className="pointer-events-auto grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-white/40 bg-black/40 text-lg font-bold text-white backdrop-blur transition hover:bg-white hover:text-green-950 sm:h-11 sm:w-11 sm:text-xl"
            aria-label="Previous slide"
          >
            {'<'}
          </button>
          <button
            type="button"
            onClick={showNextSlide}
            className="pointer-events-auto grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-white/40 bg-black/40 text-lg font-bold text-white backdrop-blur transition hover:bg-white hover:text-green-950 sm:h-11 sm:w-11 sm:text-xl"
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
