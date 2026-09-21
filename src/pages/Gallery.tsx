
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand, FaExternalLinkAlt, FaImages, FaMapMarkerAlt, FaPlay, FaTimes } from "react-icons/fa";
import illegalLoggingVideo from "../assets/images/gallery-illegal-logging-video.jpg";
import wildlifeVideo from "../assets/images/gallery-wildlife-video.jpg";
import communityVideo from "../assets/images/gallery-community-video.jpg";
import lapnisanVideo from "../assets/images/gallery-documented-lapnisan-video.jpg";
import denrCampaignVideo from "../assets/images/gallery-documented-denr-video.jpg";
import forestRegenerationVideo from "../assets/images/gallery-forest-regeneration-video.jpg";
import timberDemandVideo from "../assets/images/gallery-cause-timber-video.jpg";
import livelihoodVideo from "../assets/images/gallery-cause-livelihood-video.jpg";
import agricultureVideo from "../assets/images/gallery-cause-agriculture-video.jpg";
import governanceVideo from "../assets/images/gallery-cause-governance-video.jpg";
import palawanCommunityVideo from "../assets/images/gallery-community-palawan-video.jpg";
import philippineForestsVideo from "../assets/images/gallery-community-forests-video.jpg";
import caragaHotspotsVideo from "../assets/images/gallery-community-caraga-hotspots-video.jpg";

const categories = ["All", "Documented cases", "Causes", "Communities", "Effects"] as const;
type Category = (typeof categories)[number];

type GalleryItem = {
  image: string;
  title: string;
  location: string;
  category: Category;
  description: string;
  source?: string;
  sourceUrl?: string;
  youtubeId?: string;
};

const galleryItems: GalleryItem[] = [
  {
    image: lapnisanVideo,
    title: "Illegal cutting of Lapnisan trees",
    location: "Philippines",
    category: "Documented cases",
    description: "GMA Public Affairs investigates the illegal cutting of Lapnisan, a tree targeted for its valuable agarwood.",
    source: "GMA Public Affairs / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=YKLoRDYcPOE",
    youtubeId: "YKLoRDYcPOE",
  },
  {
    image: denrCampaignVideo,
    title: "DENR campaign against illegal logging",
    location: "Philippines",
    category: "Documented cases",
    description: "ABS-CBN News reports on a DENR campaign responding to continued illegal logging in mountain areas.",
    source: "ABS-CBN News / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=ZEuXL0SjJjA",
    youtubeId: "ZEuXL0SjJjA",
  },
  {
    image: illegalLoggingVideo,
    title: "Coordinated action against illegal logging",
    location: "Philippines",
    category: "Documented cases",
    description: "PTV Philippines reports on coordinated DENR and DILG action against illegal logging and illegal quarrying.",
    source: "PTV Philippines / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=aEzcIP1MoIE",
    youtubeId: "aEzcIP1MoIE",
  },
  {
    image: timberDemandVideo,
    title: "Demand for timber",
    location: "Timber-producing countries",
    category: "Causes",
    description: "FAO examines how demand in domestic timber markets can encourage illegal logging and how legal-market incentives can reduce it.",
    source: "Food and Agriculture Organization of the United Nations / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=wR_uucwEhHw",
    youtubeId: "wR_uucwEhHw",
  },
  {
    image: livelihoodVideo,
    title: "Limited livelihood options",
    location: "Forest-dependent communities",
    category: "Causes",
    description: "FAO shows why forests support local livelihoods and why protecting income and resources matters for reducing pressure on forests.",
    source: "Food and Agriculture Organization of the United Nations / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=jtpPoacQkm8",
    youtubeId: "jtpPoacQkm8",
  },
  {
    image: agricultureVideo,
    title: "Agricultural expansion",
    location: "Global forest landscapes",
    category: "Causes",
    description: "WWF explains how food production and agricultural supply chains can drive forest clearing and deforestation.",
    source: "WWF UK / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=iWWsstJLTuE",
    youtubeId: "iWWsstJLTuE",
  },
  {
    image: governanceVideo,
    title: "Forest monitoring and enforcement",
    location: "Timber-producing countries",
    category: "Causes",
    description: "FAO presents forest law enforcement, governance, and legal timber trade as connected responses to illegal logging.",
    source: "Food and Agriculture Organization of the United Nations / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=vgt0mbfLT28",
    youtubeId: "vgt0mbfLT28",
  },
  {
    image: palawanCommunityVideo,
    title: "Indigenous Pala'wan communities",
    location: "Palawan, Philippines",
    category: "Communities",
    description: "NTFP-EP Asia documents how Palaw'an communities sustainably manage almaciga resin and depend on healthy forests for their livelihoods.",
    source: "NTFP-EP Asia / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=Te4sg5qHeMI",
    youtubeId: "Te4sg5qHeMI",
  },
  {
    image: philippineForestsVideo,
    title: "People protecting Philippine forests",
    location: "Philippines",
    category: "Communities",
    description: "This DENR-supported film presents the importance of forests and the role of Filipino foresters and communities in protecting them.",
    source: "DENR FASPS Official / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=00UiM4G6FuQ",
    youtubeId: "00UiM4G6FuQ",
  },
  {
    image: caragaHotspotsVideo,
    title: "Remaining logging hotspots",
    location: "Caraga Region",
    category: "Communities",
    description: "Catholic Media Network reports DENR Caraga's acknowledgement that illegal-logging hotspots remain in the region.",
    source: "Catholic Media Network / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=ruUL6mcbStg",
    youtubeId: "ruUL6mcbStg",
  },
  {
    image: wildlifeVideo,
    title: "Wildlife depends on forest habitat",
    location: "Philippines",
    category: "Effects",
    description: "National Geographic follows a Philippine eagle family and highlights efforts to protect this critically endangered forest species.",
    source: "National Geographic Animals / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=-JP-zoBLyWE",
    youtubeId: "-JP-zoBLyWE",
  },
  {
    image: communityVideo,
    title: "Forests support people and livelihoods",
    location: "Philippines",
    category: "Effects",
    description: "FAO explains how Philippine forests provide water, livelihoods, and other benefits, and how restoration supports local communities.",
    source: "Food and Agriculture Organization of the United Nations / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=NWGTb4mPVKQ",
    youtubeId: "NWGTb4mPVKQ",
  },
  {
    image: forestRegenerationVideo,
    title: "Restoring degraded forests",
    location: "Bohol, Philippines",
    category: "Effects",
    description: "FAO documents assisted natural regeneration in Bohol and the role of local communities in restoring and managing forests.",
    source: "FAO Education Hub / YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=9RPDsi7mkSE",
    youtubeId: "9RPDsi7mkSE",
  },
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const visibleItems = useMemo(() => galleryItems.filter((item) => selectedCategory === "All" || item.category === selectedCategory), [selectedCategory]);

  const closeViewer = () => setSelectedIndex(null);
  const showPrevious = () => setSelectedIndex((current) => current === null ? null : (current - 1 + visibleItems.length) % visibleItems.length);
  const showNext = () => setSelectedIndex((current) => current === null ? null : (current + 1) % visibleItems.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, visibleItems.length]);

  return (
    <section className="w-full border-t border-gray-200 !pb-12 text-teal-8">
      <div className="flex w-full items-center gap-4 !px-6 !pt-8 !pb-2">
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8"><FaImages aria-hidden="true" /> Forest Gallery</h1>
          <p className="!mt-1 text-xs text-gray-600">Cases, communities, causes, and effects of illegal logging</p>
        </div>
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 !px-6 !py-6" aria-label="Gallery categories">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => { setSelectedCategory(category); setSelectedIndex(null); }} aria-pressed={selectedCategory === category} className={`cursor-pointer rounded-md border !px-4 !py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${selectedCategory === category ? "border-teal-8 bg-teal-8 text-white" : "border-gray-200 bg-white text-teal-8 hover:border-teal-700 hover:bg-green-50"}`}>
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 !px-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, index) => (
          <button key={`${item.title}-${item.location}`} type="button" onClick={() => setSelectedIndex(index)} className="group min-w-0 cursor-pointer overflow-hidden rounded-md border border-gray-200 bg-white text-left shadow-sm transition-all duration-200 hover:border-teal-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" aria-label={`Open image: ${item.title}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              {item.youtubeId && (
                <span className="absolute inset-0 grid place-items-center bg-black/20">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-teal-8 text-lg text-white shadow-lg transition-transform duration-200 group-hover:scale-110"><FaPlay aria-hidden="true" className="ml-0.5" /></span>
                </span>
              )}
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-teal-8 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><FaExpand aria-hidden="true" /></span>
              <span className="absolute bottom-3 left-3 rounded bg-teal-8 !px-2 !py-1 text-[11px] font-semibold text-white">{item.category}</span>
            </div>
            <div className="!p-4">
              <h2 className="text-sm font-bold leading-snug text-teal-8">{item.title}</h2>
              <p className="!mt-1 flex items-start gap-1.5 text-xs text-gray-500"><FaMapMarkerAlt aria-hidden="true" className="mt-0.5 shrink-0" /> {item.location}</p>
              <p className="!mt-3 text-xs leading-relaxed text-gray-700">{item.description}</p>
              {item.source && <p className="!mt-2 text-[11px] leading-relaxed text-gray-500">{item.youtubeId ? "Video" : "Photo"}: {item.source}</p>}
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 !p-4 sm:!p-8" role="dialog" aria-modal="true" aria-label={visibleItems[selectedIndex].title} onMouseDown={(event) => event.target === event.currentTarget && closeViewer()}>
          <div className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-md bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 !px-4 !py-3">
              <div className="min-w-0">
                <h2 className="truncate text-sm font-bold text-teal-8">{visibleItems[selectedIndex].title}</h2>
                <p className="!mt-0.5 flex items-center gap-1.5 text-xs text-gray-500"><FaMapMarkerAlt aria-hidden="true" /> {visibleItems[selectedIndex].location}</p>
              </div>
              <button type="button" onClick={closeViewer} className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full text-gray-600 hover:bg-green-50 hover:text-teal-8" aria-label="Close image viewer"><FaTimes aria-hidden="true" /></button>
            </div>
            <div className="relative min-h-0 flex-1 bg-gray-950">
              {visibleItems[selectedIndex].youtubeId ? (
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${visibleItems[selectedIndex].youtubeId}?rel=0`}
                    title={visibleItems[selectedIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img src={visibleItems[selectedIndex].image} alt={visibleItems[selectedIndex].title} className="max-h-[70vh] w-full object-contain" />
              )}
              {visibleItems.length > 1 && (
                <>
                  <button type="button" onClick={showPrevious} className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/95 text-teal-8 shadow hover:bg-green-50" aria-label="Previous image"><FaChevronLeft aria-hidden="true" /></button>
                  <button type="button" onClick={showNext} className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/95 text-teal-8 shadow hover:bg-green-50" aria-label="Next image"><FaChevronRight aria-hidden="true" /></button>
                </>
              )}
            </div>
            <div className="flex items-start justify-between gap-4 !px-4 !py-3">
              <div className="min-w-0">
                <p className="text-xs leading-relaxed text-gray-700">{visibleItems[selectedIndex].description}</p>
                {visibleItems[selectedIndex].sourceUrl && (
                  <a href={visibleItems[selectedIndex].sourceUrl} target="_blank" rel="noopener noreferrer" className="!mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-teal-8 hover:underline">
                    {visibleItems[selectedIndex].youtubeId ? "Video" : "Photo"}: {visibleItems[selectedIndex].source} <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </div>
              <span className="shrink-0 text-xs font-semibold text-gray-500">{selectedIndex + 1} / {visibleItems.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
