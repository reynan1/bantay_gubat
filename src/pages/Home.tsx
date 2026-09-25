import { useState } from "react";
import {
  FaBookOpen,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGlobeAsia,
  FaHistory,
  FaLeaf,
  FaMapMarkerAlt,
  FaMountain,
  FaShieldAlt,
  FaTree,
  FaUsers,
  FaWater,
} from "react-icons/fa";

const sierraMadreImages = {
  panorama: "https://pais.bmb.gov.ph/pas/bmb_assets2/uploads/pa_profile_pic/Screenshot_2025-06-30_130905.png",
  rainforest: "https://martinsandiego.ph/assets/uploads/2022/08/0001-Photojournalist-Martin-San-Diego-Philippine-Hawk-Eagle-Aurora-Dumagat-7MS04498-scaled.jpg",
  deforestation: "https://i0.wp.com/feed.org.ph/wp-content/uploads/2019/05/sierramadre-deforestation.jpg?resize=584%2C391&ssl=1",
  seizedLogs: "https://media.philstar.com/photos/2019/09/20/nat4-illegal-logs-afp_2019-09-20_21-08-03.jpg",
};

function Home() {
  const [selectedStatus, setSelectedStatus] = useState(0);

  const statusCards = [
    {
      value: "01",
      title: "Rapid Forest Cover Decline",
      label: "Overall condition",
      icon: FaMountain,
      image: sierraMadreImages.panorama,
      imageAlt: "Forested peaks of the Northern Sierra Madre",
      photoSource: "DENR-BMB Protected Area Information System",
      summary: "The Sierra Madre is a nearly 1.4-million-hectare forest landscape, but Haribon reports that approximately 9,000 hectares of its forest cover are being lost each year.",
      details: [
        "The Haribon Foundation reported that the Sierra Madre is losing about 9,000 hectares of forest cover each year. A separate GMA report estimated that 130,000 hectares were lost from 2003 to 2020, an average of about 7,647 hectares per year during that period.",
        "Reported drivers include illegal logging and timber poaching, kaingin, mining, roads, dams, energy projects, resorts, camping sites, and other development that clears or divides forest areas. Some projects also encroach on ancestral areas and affect Indigenous communities living along the range.",
        "Protected areas and strict protection zones cover important parts of the Sierra Madre, but enforcement remains uneven. Haribon warned that reforestation cannot keep pace if destructive and unauthorized development continues. The annual-loss figures are estimates from different sources and periods, so they should be presented as reported indicators rather than one exact total for the entire range.",
      ],
      reference: "Philstar - Sierra Madre losing 9,000 hectares of forest cover each year, according to Haribon",
      referenceUrl: "https://www.philstar.com/headlines/climate-and-environment/2025/11/12/2486728/sierra-madre-losing-9000-hectares-forest-cover-each-year-haribon",
    },
    {
      value: "02",
      title: "Illegal Logging and Timber Poaching",
      label: "Forest condition",
      icon: FaTree,
      image: sierraMadreImages.seizedLogs,
      imageAlt: "Logs seized from a Sierra Madre watershed operation",
      photoSource: "Philstar / Sierra Madre watershed enforcement report",
      summary: "A 2019 DENR operation recovered 21,332.11 board feet of illegally cut lumber worth P1.7 million from four Aurora towns along the Sierra Madre mountain range.",
      details: [
        "In the cited September 2019 report, the DENR recovered illegally cut lumber in Dipaculao, Dinalungan, Casiguran, and Dilasag, towns located along the midsection of the Sierra Madre in Aurora.",
        "The confiscated lumber included narra, red lauan, and white almond. The local environment office also reported confiscating more than 9,638.34 board feet from January to June of that year, excluding other wood products taken from illegal loggers.",
        "This report documents the scale of one enforcement operation. It should not be treated as the current or total volume of illegal logging across the entire Sierra Madre mountain range.",
      ],
      reference: "Philstar - P1.7 million 'hot' logs seized in Sierra Madre watershed",
      referenceUrl: "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed",
    },
    {
      value: "03",
      title: "Watershed and Slope Degradation",
      label: "Environmental risk",
      icon: FaWater,
      image: sierraMadreImages.deforestation,
      imageAlt: "Cleared forest area in the Sierra Madre",
      photoSource: "FEED Inc. / Sierra Madre forest restoration reporting",
      summary: "Deforestation weakens the forest's ability to absorb rainfall, hold soil, regulate river flow, and protect slopes from erosion.",
      details: [
        "Damaged and cleared areas contribute to faster runoff and more sediment entering rivers. These conditions can worsen erosion, landslides, and flooding during heavy rainfall.",
        "Watershed degradation affects both upland and downstream locations because changes in forest cover influence water quality, river behavior, farms, infrastructure, and community safety.",
      ],
      reference: "GMA News - Why the Sierra Madre and nature-based solutions matter against floods",
      referenceUrl: "https://www.gmanetwork.com/news/lifestyle/content/1001970/explainer-why-are-the-sierra-madre-and-nature-based-solutions-important-vs-floods/story/",
    },
    {
      value: "04",
      title: "Communities and Wildlife at Risk",
      label: "Affected life",
      icon: FaUsers,
      image: sierraMadreImages.rainforest,
      imageAlt: "Rainforest in Dumagat ancestral domain in the Sierra Madre",
      photoSource: "Martin San Diego / Dumagat ancestral domain reporting",
      summary: "Forest degradation threatens wildlife habitat and affects Agta, Dumagat, farming, and downstream communities that depend on healthy forests and rivers.",
      details: [
        "Habitat fragmentation places pressure on plants and wildlife, while degraded water, food sources, forest materials, and cultural sites directly affect forest-dependent communities.",
        "Protection efforts need Indigenous participation, community monitoring, secure livelihoods, and meaningful consultation because environmental damage and conservation decisions both affect local rights and daily life.",
      ],
      reference: "Limits to Indigenous Participation: The Agta and the Northern Sierra Madre Natural Park",
      referenceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4194021/",
    },
  ];

  const selected = statusCards[selectedStatus];
  const SelectedIcon = selected.icon;

  const timelineEvents = [
    {
      date: "1920s-1960s",
      title: "Logging concessions entered the Sierra Madre",
      icon: FaTree,
      metric: "Early concessions were followed by expanded commercial extraction",
      description: "A forestry research report traces logging concessions in the Laguna section of the Sierra Madre to the 1920s and maps Interwood logging across portions of the range in 1961.",
      source: "CIFOR-ICRAF environmental services report",
      sourceUrl: "https://www.cifor-icraf.org/publications/downloads/Publications/PDFS/RP03291.pdf",
    },
    {
      date: "Early 1970s",
      title: "Commercial logging intensified",
      icon: FaMountain,
      metric: "Northern Sierra Madre logging described as rampant",
      description: "Research on Philippine forest management describes commercial logging in the Northern Sierra Madre as widespread by the early 1970s, contributing to long-term forest degradation and easier access to upland areas.",
      source: "Institute for Global Environmental Strategies",
      sourceUrl: "https://www.iges.or.jp/system/files/publication_documents/pub/researchreport/740/ir98-3-18.pdf",
    },
    {
      date: "1975",
      title: "Revised Forestry Code issued",
      icon: FaBookOpen,
      metric: "Presidential Decree No. 705",
      description: "The national forestry code established rules for classifying, using, protecting, rehabilitating, and developing forest lands, forming part of the legal basis used against unauthorized forest activity.",
      source: "Lawphil",
      sourceUrl: "https://lawphil.net/statutes/presdecs/pd1975/pd_705_1975.html",
    },
    {
      date: "2001",
      title: "Northern Sierra Madre protected by law",
      icon: FaShieldAlt,
      metric: "Republic Act No. 9125",
      description: "The law established the Northern Sierra Madre Natural Park and its protected-area management framework, covering one of Luzon's largest remaining forest landscapes.",
      source: "DENR-BMB PAIS",
      sourceUrl: "https://pais.bmb.gov.ph/home/info/WXTHTRUGGBP",
    },
    {
      date: "2011",
      title: "Natural-forest logging moratorium declared",
      icon: FaFileAlt,
      metric: "Executive Order No. 23",
      description: "The order prohibited timber cutting and harvesting in natural and residual forests and created an anti-illegal logging task force to strengthen enforcement nationwide.",
      source: "Lawphil",
      sourceUrl: "https://lawphil.net/executive/execord/eo2011/eo_23_2011.html",
    },
    {
      date: "2019",
      title: "Hot logs seized in Sierra Madre watershed",
      icon: FaTree,
      metric: "21,332.11 board feet worth P1.7 million",
      description: "The DENR recovered illegally cut lumber in four Aurora towns along the Sierra Madre, documenting continued timber poaching despite forest laws and protected areas.",
      source: "Philstar",
      sourceUrl: "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed",
    },
    {
      date: "2025",
      title: "Continuing forest loss reported",
      icon: FaGlobeAsia,
      metric: "About 9,000 hectares reportedly lost each year",
      description: "Haribon reported continuing forest-cover loss linked to illegal logging, kaingin, mining, roads, dams, resorts, and other development. The estimate indicates that forest decline remains an active problem.",
      source: "Philstar report citing Haribon Foundation",
      sourceUrl: "https://www.philstar.com/headlines/climate-and-environment/2025/11/12/2486728/sierra-madre-losing-9000-hectares-forest-cover-each-year-haribon",
    },
  ];

  return (
    <>
      <section id="status-illegal-logging" className="w-full border-t-[1px] text-teal-8">
        <div className="flex w-full items-center gap-3 !px-3 !pt-7 !pb-2 sm:gap-4 sm:!px-6 sm:!pt-8">
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
          <div className="text-center">
            <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
              <FaLeaf aria-hidden="true" className="shrink-0" />
              Sierra Madre: Current Environmental Problems
            </h1>
            <p className="!mt-1 text-xs text-gray-600">Select a problem card to view its current status, evidence, and environmental impact</p>
          </div>
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        </div>

        <div className="!mx-3 !mt-5 border-l-4 border-teal-700 bg-green-50 !px-4 !py-4 sm:!mx-6 sm:!px-5">
          <div className="flex items-start gap-3">
            <FaBookOpen aria-hidden="true" className="!mt-1 shrink-0 text-lg text-teal-8" />
            <div className="min-w-0">
              <h2 className="!mb-1 text-base font-bold text-teal-8">What is illegal logging in the Sierra Madre context?</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Illegal logging is the cutting, harvesting, transporting, or selling of trees and forest products without required permits or government approval. In the Sierra Madre, the issue matters because upland forest loss can affect biodiversity, watersheds, Indigenous communities, and towns downstream.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 !px-3 !py-5 sm:grid-cols-2 sm:!px-6 sm:!py-6 lg:grid-cols-4">
          {statusCards.map((status, index) => (
            <button
              key={status.title}
              type="button"
              onClick={() => setSelectedStatus(index)}
              aria-pressed={selectedStatus === index}
              aria-controls="detailStatus"
              className="forest-selector-card group flex h-full min-w-0 cursor-pointer flex-col rounded-md border p-3 text-left text-teal-8 shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <div className="flex min-h-20 w-full items-start gap-3 !py-3 !px-2">
                <span className="forest-icon-badge grid h-12 w-12 !shrink-0 place-items-center rounded-full text-xl">
                  <status.icon aria-hidden="true" />
                </span>
                <div className="!min-w-0">
                  <span className="block text-2xl font-bold leading-tight">{status.value}</span>
                  <span className="!mt-1 block text-xs font-semibold leading-snug">{status.title}</span>
                </div>
              </div>
              <div className="forest-selector-panel !mt-2 w-full flex-1 rounded-bl-md rounded-br-md !py-3 !px-4 transition-colors">
                <span className="flex items-center gap-2 text-xs font-bold text-teal-8">
                  <FaMapMarkerAlt aria-hidden="true" /> {status.label}
                </span>
                <span className="!mt-2 block text-xs leading-relaxed text-gray-700">{status.summary}</span>
              </div>
            </button>
          ))}
        </div>

        <div id="detailStatus" className="!mt-5 w-full border-t border-gray-200 !px-3 !py-8 text-teal-8 sm:!px-6 sm:!py-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
            <div className="flex min-w-0 flex-col gap-2">
              <img src={selected.image} alt={selected.imageAlt} className="aspect-[3/2] w-full rounded-md object-cover" />
              <span className="text-xs text-gray-600">{selected.photoSource}</span>
            </div>

            <div className="min-w-0 !space-y-3">
              <div className="flex items-center gap-3">
                <SelectedIcon aria-hidden="true" className="mt-0.5 shrink-0 text-xl" />
                <div className="min-w-0">
                  <h2 className="text-base !text-xl font-bold leading-tight !mb-0 !text-teal-8">{selected.title}</h2>
                  <p className="!mt-1 text-xs leading-snug text-gray-600">{selected.summary}</p>
                </div>
              </div>
              <h3 className="border-y border-gray-200 !py-3 text-sm font-semibold text-teal-8">
                Current status
              </h3>
              {selected.details.map((detail) => (
                <p key={detail} className="text-sm leading-relaxed text-gray-700 !mt-5">{detail}</p>
              ))}
              <div className="!mt-6 border-t border-gray-200 !pt-4">
                <h3 className="flex items-center gap-2 text-base font-bold text-teal-8">
                  <FaBookOpen aria-hidden="true" className="text-xl" /> Reference
                </h3>
                <div className="!mt-2 flex min-w-0 items-start gap-3 text-xs leading-relaxed">
                  <FaFileAlt aria-hidden="true" className="mt-0.5 shrink-0 text-teal-8" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800">{selected.reference}</p>
                    <a href={selected.referenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center gap-1 text-blue-700 hover:underline">
                      <span className="min-w-0 break-all">{selected.referenceUrl}</span>
                      <FaExternalLinkAlt aria-hidden="true" className="shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="!mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Forest condition", content: "Extensive forests remain across the range, especially in protected areas, but clearing and fragmentation continue in multiple watersheds and forest-edge communities.", icon: FaTree },
              { title: "Main pressures", content: "Illegal timber cutting, kaingin, mining, quarrying, road access, and land conversion are among the continuing pressures on Sierra Madre forests.", icon: FaWater },
              { title: "Protection outlook", content: "Protected areas, forest patrols, Indigenous stewardship, restoration, and enforcement provide a foundation for recovery, but conditions and reporting vary across the range.", icon: FaShieldAlt },
            ].map(({ title, content, icon: Icon }) => (
              <div key={title} className="group min-w-0 cursor-pointer rounded-md border border-teal-100 bg-white !p-4 transition-all duration-200 hover:border-teal-700 hover:bg-green-50 hover:shadow-md">
                <h3 className="flex items-center gap-2 text-sm font-bold text-teal-8">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-50 text-lg text-teal-8 transition-colors duration-200 group-hover:bg-white"><Icon aria-hidden="true" /></span>
                  {title}
                </h3>
                <p className="!mt-3 text-xs leading-relaxed text-gray-700">{content}</p>
              </div>
            ))}
          </div> */}

        </div>
      </section>

      <section id="timeline-events" className="w-full border-t border-gray-200 !px-3 !py-8 text-gray-800 sm:!px-6 sm:!py-10">
        <div className="text-center">
          <h2 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
            <FaHistory aria-hidden="true" className="shrink-0" />
            Illegal Logging and Deforestation Timeline
          </h2>
          <p className="!mt-1 text-sm text-gray-600">From early commercial logging to the latest reported forest-loss status</p>
        </div>
        <ol className="relative !mx-auto !mt-9 max-w-5xl before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-teal-300 md:before:left-1/2">
          {timelineEvents.map((event, index) => (
            <li key={event.title} className={`relative flex !pb-10 last:!pb-0 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
              <span className="absolute left-5 top-0 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-teal-200 bg-green-50 text-base text-teal-8 shadow-sm md:left-1/2" aria-hidden="true">
                <event.icon />
              </span>
              <div className={`min-w-0 w-full !pl-14 md:w-[calc(50%-2.5rem)] md:!pl-0 ${index % 2 === 0 ? "md:pr-4 md:text-right" : ""}`}>
                <p className="text-sm font-bold text-gray-900">{event.date}</p>
                <h3 className="!mt-1 text-base font-semibold leading-snug text-teal-8">{event.title}</h3>
                <p className="!mt-1 text-sm font-semibold text-gray-900">{event.metric}</p>
                <p className="!mt-2 text-sm leading-relaxed text-gray-700">{event.description}</p>
                <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="!mt-2 inline-block text-xs font-medium text-teal-8 underline underline-offset-2 hover:text-teal-700">
                  {event.source}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default Home;
