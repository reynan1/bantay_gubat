
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand, FaImages, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import palawanLogging from "../assets/images/palawan illegal logging.jpeg";
import caragaForest from "../assets/images/cariaga.png";
import denrOperation from "../assets/images/DENR.jpg";
import timberDemand from "../assets/images/causes/timbers.png";
import livelihood from "../assets/images/causes/poverty.png";
import kaingin from "../assets/images/causes/kaingin.png";
import enforcement from "../assets/images/causes/weak-enforcement.png";
import palaWanCommunity from "../assets/images/indegenous/indegenous_final.png";
import caragaHotspots from "../assets/images/indegenous/caraiga_img.png";
import lumberSeizure from "../assets/images/indegenous/illegal_lumber4.png";
import habitatEffect from "../assets/images/effect-habitat-3.png";
import waterEffect from "../assets/images/effect-water-4.png";

const categories = ["All", "Documented cases", "Causes", "Communities", "Effects"] as const;
type Category = (typeof categories)[number];

const galleryItems = [
  { image: palawanLogging, title: "Illegal logging documented in Palawan", location: "Mount Domadoway, Palawan", category: "Documented cases" as Category, description: "An illegally felled tree documented within the Mount Domadoway mining contract area." },
  { image: lumberSeizure, title: "Confiscated forest products", location: "Caraga Region", category: "Documented cases" as Category, description: "An enforcement image representing lumber seized during anti-illegal logging operations." },
  { image: denrOperation, title: "Forest protection operation", location: "Philippines", category: "Documented cases" as Category, description: "Forest personnel support monitoring and enforcement against unauthorized forest activities." },
  { image: timberDemand, title: "Demand for timber", location: "Philippines", category: "Causes" as Category, description: "Market demand can create incentives for unauthorized harvesting when controls are weak." },
  { image: livelihood, title: "Limited livelihood options", location: "Forest-dependent communities", category: "Causes" as Category, description: "Limited income opportunities can increase dependence on forest products for basic needs." },
  { image: kaingin, title: "Agricultural expansion", location: "Philippines", category: "Causes" as Category, description: "Clearing for cultivation can convert forest cover into agricultural land." },
  { image: enforcement, title: "Forest monitoring and enforcement", location: "Philippines", category: "Causes" as Category, description: "Limited monitoring capacity can make unauthorized cutting harder to detect and prevent." },
  { image: palaWanCommunity, title: "Indigenous Pala'wan communities", location: "Southern Palawan", category: "Communities" as Category, description: "Communities around Mount Domadoway depend on forests for resources and cultural places." },
  { image: caragaForest, title: "Forests of Caraga", location: "Caraga Region", category: "Communities" as Category, description: "Caraga contains extensive forest areas that require continued protection and monitoring." },
  { image: caragaHotspots, title: "Remaining logging hotspots", location: "Agusan del Sur and Surigao del Sur", category: "Communities" as Category, description: "DENR reported six identified illegal logging hotspots remaining in Caraga in 2024." },
  { image: habitatEffect, title: "Habitat disruption", location: "Forest ecosystems", category: "Effects" as Category, description: "Removing trees can reduce and fragment the shelter and resources available to wildlife." },
  { image: waterEffect, title: "Changes to waterways", location: "Forest watersheds", category: "Effects" as Category, description: "Loss of forest cover can alter runoff and increase soil entering nearby waterways." },
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
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-teal-8 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><FaExpand aria-hidden="true" /></span>
              <span className="absolute bottom-3 left-3 rounded bg-teal-8 !px-2 !py-1 text-[11px] font-semibold text-white">{item.category}</span>
            </div>
            <div className="!p-4">
              <h2 className="text-sm font-bold leading-snug text-teal-8">{item.title}</h2>
              <p className="!mt-1 flex items-start gap-1.5 text-xs text-gray-500"><FaMapMarkerAlt aria-hidden="true" className="mt-0.5 shrink-0" /> {item.location}</p>
              <p className="!mt-3 text-xs leading-relaxed text-gray-700">{item.description}</p>
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
              <img src={visibleItems[selectedIndex].image} alt={visibleItems[selectedIndex].title} className="max-h-[70vh] w-full object-contain" />
              {visibleItems.length > 1 && (
                <>
                  <button type="button" onClick={showPrevious} className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/95 text-teal-8 shadow hover:bg-green-50" aria-label="Previous image"><FaChevronLeft aria-hidden="true" /></button>
                  <button type="button" onClick={showNext} className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/95 text-teal-8 shadow hover:bg-green-50" aria-label="Next image"><FaChevronRight aria-hidden="true" /></button>
                </>
              )}
            </div>
            <div className="flex items-start justify-between gap-4 !px-4 !py-3">
              <p className="text-xs leading-relaxed text-gray-700">{visibleItems[selectedIndex].description}</p>
              <span className="shrink-0 text-xs font-semibold text-gray-500">{selectedIndex + 1} / {visibleItems.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
