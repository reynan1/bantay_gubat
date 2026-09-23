import { useEffect, useState } from 'react'

const sierraMadrePanorama =
  'https://pais.bmb.gov.ph/pas/bmb_assets2/uploads/pa_profile_pic/Screenshot_2025-06-30_130905.png'
const sierraMadreRainforest =
  'https://martinsandiego.ph/assets/uploads/2022/08/0001-Photojournalist-Martin-San-Diego-Philippine-Hawk-Eagle-Aurora-Dumagat-7MS04498-scaled.jpg'
const sierraMadreDeforestation =
  'https://i0.wp.com/feed.org.ph/wp-content/uploads/2019/05/sierramadre-deforestation.jpg?resize=584%2C391&ssl=1'
const sierraMadreLogs =
  'https://media.philstar.com/photos/2019/09/20/nat4-illegal-logs-afp_2019-09-20_21-08-03.jpg'

const slides = [
  {
    title: 'Protect the Sierra Madre',
    text: `The Sierra Madre is Luzon's long eastern mountain range and one of the country's most important forest landscapes. Its forests help protect watersheds, shelter wildlife, and support communities living along the range.`,
    image: sierraMadrePanorama,
    imageAlt: 'Northern Sierra Madre forested mountains and cloud-covered ridges',
    photoSource: 'DENR Biodiversity Management Bureau / Protected Area Information System',
    reference: 'DENR-BMB PAIS - Northern Sierra Madre Natural Park profile',
    referenceUrl: 'https://pais.bmb.gov.ph/home/info/WXTHTRUGGBP',
  },
  {
    title: 'A Forest Shield for Luzon',
    text: `Sierra Madre forests absorb rainfall, slow runoff, and reduce the force of weather systems coming from the Pacific. When forests are degraded, flood and landslide risks become harder for downstream communities to manage.`,
    image: sierraMadreRainforest,
    imageAlt: 'Misty rainforest in the Sierra Madre mountains of Aurora',
    photoSource: 'Martin San Diego, documentary work in Dumagat ancestral domain',
    reference: 'Climate Change Commission - Save Sierra Madre Day statement',
    referenceUrl: 'https://www.climate.gov.ph/news/934',
  },
  {
    title: 'Deforestation Pressure Is Visible',
    text: `Illegal logging, timber poaching, kaingin, quarrying, and road access can break forest cover into smaller patches. The damage affects more than the cutting site because Sierra Madre watersheds connect uplands, rivers, farms, and towns.`,
    image: sierraMadreDeforestation,
    imageAlt: 'Aerial view of deforested patches in the Sierra Madre mountains',
    photoSource: 'FEED Inc. / Sierra Madre restoration campaign',
    reference: 'GMA News explainer - Sierra Madre and flood protection',
    referenceUrl: 'https://www.gmanetwork.com/news/lifestyle/content/1001970/explainer-why-are-the-sierra-madre-and-nature-based-solutions-important-vs-floods/story/',
  },
  {
    title: 'Illegal Timber Still Needs Enforcement',
    text: `Reports of seized logs and forest products in Sierra Madre watersheds show why monitoring, community reporting, and responsible wood sourcing matter. Protection depends on both enforcement and local participation.`,
    image: sierraMadreLogs,
    imageAlt: 'Large seized logs from an operation in the Sierra Madre watershed',
    photoSource: 'Philstar / AFP file photo',
    reference: 'Philstar - hot logs seized in Sierra Madre watershed',
    referenceUrl: 'https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed',
  },
]

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
                Photo: {slide.photoSource}
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
  )
}

export default Hero
