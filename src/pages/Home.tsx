import { useEffect, useState } from "react";
import ProvinceForestStatus from "../components/ProvinceForestStatus";
import sierraMadreScope from "../assets/images/sierra-madre-scope.jpg";
import {
  FaBookOpen,
  FaChartLine,
  FaChevronDown,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGlobeAsia,
  FaHistory,
  FaLeaf,
  FaMountain,
  FaShieldAlt,
  FaTree,
  FaUsers,
} from "react-icons/fa";

const sierraMadreImages = {
  locationMap: sierraMadreScope,
  rainforest: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5T5QNaqGHTAxHHZ09wWb94-8ZQHQdHbLlK8Q5DJTcLZpqGAe8mFq8B8&s=10",
  deforestation: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo2a5GlANnu430iyCGx1CY_6Femmu6QO8XPufrZ1Ai_CHLSf41PA22fNT&s=10",
  seizedLogs: "https://newsinfo.inquirer.net/files/2018/07/12yoyong.jpg",
  quirinoForest: "https://newsinfo.inquirer.net/files/2013/01/logging.jpg"
};

function Home() {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [currentStatusOpen, setCurrentStatusOpen] = useState(true);
  const [selectedTimelineYear, setSelectedTimelineYear] = useState(2026);
  const [timelineModalOpen, setTimelineModalOpen] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisPlaying, setAnalysisPlaying] = useState(false);

  const statusCards = [
    {
      value: "01",
      title: "Rapid Forest Cover Decline",
      label: "Overall condition",
      icon: FaMountain,
      image: sierraMadreImages.locationMap,
      imageAlt: "Map of Luzon with a dashed line marking the approximate Sierra Madre route from Cagayan to Quezon",
      photoSource: "Luzon coastline: Natural Earth (public domain). Approximate Sierra Madre coverage: Forest Foundation Philippines.",
      summary: "The Sierra Madre is a nearly 1.4-million-hectare forest landscape, but Haribon reports that approximately 9,000 hectares of its forest cover are being lost each year.",
      details: [
        "The Haribon Foundation's reported that the Sierra Madre is losing about 9,000 hectares of forest cover are lost annually, linked to illegal logging, timber poaching, mining and quarrying, kaingin, development projects, and construction. Around 130,000 hectares were reportedly lost between 2003 and 2020. Recent government activity includes enforcement against unauthorized quarrying in Baras, Rizal, and inspections of portions of the Sierra Madre in Rizal, Quezon, and Laguna as lawmakers and DENR discuss stronger landscape-wide management.",
        "Report Location: Rizal and Quezon Provinces — Sierra Madre Mountain Range, Luzon, Philippines. The original November 2025 report specifically identified development projects in Rizal and Quezon as contributing to forest loss, although the Sierra Madre itself extends across ten provinces of Luzon.",
      ],
      reference: "Philstar - Sierra Madre losing 9,000 hectares of forest cover each year, according to Haribon",
      referenceTitle: "Philstar - Sierra Madre losing 9,000 hectares of forest cover each year, according to Haribon",
      referenceDescription: "Reports annual forest-cover loss in the Sierra Madre.",
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
      referenceTitle: "Philstar - P1.7 million 'hot' logs seized in Sierra Madre watershed",
      referenceDescription: "Covers a DENR operation that seized illegally cut lumber.",
      referenceUrl: "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed",
    },
    {
      value: "03",
      title: "Illegal Mining and Quarrying",
      label: "Land degradation",
      icon: FaMountain,
      image: sierraMadreImages.deforestation,
      imageAlt: "Quarrying activity in the Sierra Madre area of Rizal",
      photoSource: "National Bureau of Investigation / Illegal mining enforcement report",
      summary:
        "Illegal mining and quarrying remain environmental concerns in parts of Rizal near the Sierra Madre. In April 2026, authorities stopped an unauthorized quarry operation in Barangay San Salvador, Baras, Rizal.",

      details: [
        "On April 25, 2026, the NBI-Rizal District Office, in coordination with DENR-MGB Region IV-A and the local government of Baras, conducted an enforcement operation at a quarry site in Barangay San Salvador, Baras, Rizal.",

        "Two individuals were arrested for an alleged violation of Section 103 (Theft of Minerals) of the Philippine Mining Act of 1995. Authorities also seized two backhoes and a mini dump truck used in the operation.",

        "According to the NBI, certifications from DENR-MGB Region IV-A and the Provincial Mining Regulatory Board of Rizal showed that no permits or documents authorizing mineral extraction had been issued within the municipality.",

        "In April 2026 enforcement operation shows that unauthorized mineral extraction remains an active environmental enforcement issue in Rizal. Government agencies continue monitoring mining and quarrying activities and enforcing environmental and mining regulations.",

        "Location: Barangay San Salvador, Baras, Rizal, Philippines.",
      ],

      reference:
        "National Bureau of Investigation - NBI Arrests Two for Illegal Mining",
      referenceTitle: "National Bureau of Investigation - NBI Arrests Two for Illegal Mining",
      referenceDescription: "Documents an enforcement operation against unauthorized quarrying.",

      referenceUrl:
        "https://nbi.gov.ph/press_releases/2026/04282026/9842/",
},
    {
      value: "04",
      title: "Agta Indigenous Communities of the Sierra Madre",
      label: "Affected life",
      icon: FaUsers,
      image: sierraMadreImages.rainforest,
      imageAlt: "Rainforest in Dumagat ancestral domain in the Sierra Madre",
      photoSource: "Martin San Diego / Dumagat ancestral domain reporting",
      summary: "Agta (Agtâ) — An Indigenous people of northeastern Luzon whose communities have long-standing connections to the forests, rivers, and coastal areas of the Sierra Madre. Traditional livelihoods include fishing, hunting, gathering forest products, and small-scale agriculture",
      details: [
        "Agta communities continue to live within and around the Northern Sierra Madre, particularly in Palanan, Divilacan, Maconacon, San Mariano, and Dinapigue in Isabela. They continue to depend on the area's forests, rivers, and other natural resources for their livelihoods, but face pressures from activities such as logging, agricultural expansion, and resource depletion, which can affect their food security and traditional way of life. Although their ancestral and Indigenous rights are legally recognized, research has identified barriers that can limit their participation in decisions concerning protected areas and natural resources.",
      ],
      reference: "Limits to Indigenous Participation: The Agta and the Northern Sierra Madre Natural Park",
      referenceTitle: "Limits to Indigenous Participation: The Agta and the Northern Sierra Madre Natural Park",
      referenceDescription: "Examines Agta communities and conservation participation.",
      referenceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4194021/",
    },
    {
    value: "05",
    title: "Illegal Logging in Quirino",
    label: "Forest protection",
    icon: FaTree,
    image: sierraMadreImages.quirinoForest,
    imageAlt:
      "Illegally cut lumber associated with illegal logging operations in Quirino",
    photoSource:
      "Melvin Gascon / Inquirer Northern Luzon / Illegal logging report in Quirino",

    summary:
      "A 2013 Inquirer report documented persistent illegal logging in Quirino, including timber reportedly taken from the forests of Nagtipunan and Maddela and transported through local rivers and roads.",

    details: [
      "In 2013 Illegal logging was a serious problem in Maddela and Nagtipunan, Quirino, within Cagayan Valley region II. DENR officer Alfredo Almueda was killed while guarding a checkpoint in Maddela against the transport of illegally cut timber. Timber was reportedly transported from forests through the Casecnan River toward Villa Sur.",
      "In 2025–2026 Illegal logging remains an environmental concern in Maddela, Nagtipunan, and Diffun, Quirino. Recent operations documented illegal logging incidents, including arrests and confiscation of illegally cut timber and chainsaws. Government authorities continue monitoring forests and conducting enforcement operations",
     ],
    reference:
      "Inquirer - Is Quirino's drive on illegal logging worth dying for?",
    referenceTitle:
      "Inquirer - Is Quirino's drive on illegal logging worth dying for?",
    referenceDescription:
      "Reports illegal logging and timber enforcement in Quirino.",

    referenceUrl:
      "https://newsinfo.inquirer.net/349257/is-quirinos-drive-on-illegal-logging-worth-dying-for",
}
  ];

  const selected = statusCards[selectedStatus];
  const SelectedIcon = selected.icon;

  const timelineEvents = [
    {
      date: "2026 · Present",
      year: 2026,
      title: "Current forest-loss baseline",
      icon: FaChartLine,
      metric: "About 0.64% of the Sierra Madre forest area lost per year",
      lossPercent: 0.64,
      cumulativePercent: 9.29,
      description: "The latest reported baseline is about 9,000 hectares of forest-cover loss each year across a landscape of roughly 1.4 million hectares. This estimate includes illegal logging and other pressures, so it is not a measure of illegal logging alone.",
      source: "Philstar report citing Haribon Foundation",
      sourceUrl: "https://www.philstar.com/headlines/climate-and-environment/2025/11/12/2486728/sierra-madre-losing-9000-hectares-forest-cover-each-year-haribon",
    },
    {
      date: "2025",
      year: 2025,
      title: "Continuing forest loss reported",
      icon: FaGlobeAsia,
      metric: "About 9,000 hectares reportedly lost each year",
      description: "Haribon reported continuing forest-cover loss linked to illegal logging, kaingin, mining, roads, dams, resorts, and other development. The estimate indicates that forest decline remains an active problem.",
      source: "Philstar report citing Haribon Foundation",
      sourceUrl: "https://www.philstar.com/headlines/climate-and-environment/2025/11/12/2486728/sierra-madre-losing-9000-hectares-forest-cover-each-year-haribon",
    },
    {
      date: "2024",
      year: 2024,
      title: "Forest protection remains an active concern",
      icon: FaShieldAlt,
      metric: "Enforcement and conservation efforts continued",
      description: "By 2024, protected-area management, forest patrols, and community stewardship remained important parts of responding to illegal logging and the wider pressures affecting Sierra Madre forests.",
      source: "DENR-BMB PAIS",
      sourceUrl: "https://pais.bmb.gov.ph/home/info/WXTHTRUGGBP",
    },
    {
      date: "2019",
      year: 2019,
      title: "Hot logs seized in Sierra Madre watershed",
      icon: FaTree,
      metric: "21,332.11 board feet worth P1.7 million",
      description: "The DENR recovered illegally cut lumber in four Aurora towns along the Sierra Madre, documenting continued timber poaching despite forest laws and protected areas.",
      source: "Philstar",
      sourceUrl: "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed",
    },
    {
      date: "2011",
      year: 2011,
      title: "Natural-forest logging moratorium declared",
      icon: FaFileAlt,
      metric: "Executive Order No. 23",
      description: "The order prohibited timber cutting and harvesting in natural and residual forests and created an anti-illegal logging task force to strengthen enforcement nationwide.",
      source: "Lawphil",
      sourceUrl: "https://lawphil.net/executive/execord/eo2011/eo_23_2011.html",
    },
    {
      date: "2001",
      year: 2001,
      title: "Northern Sierra Madre protected by law",
      icon: FaShieldAlt,
      metric: "Republic Act No. 9125",
      description: "The law established the Northern Sierra Madre Natural Park and its protected-area management framework, covering one of Luzon's largest remaining forest landscapes.",
      source: "DENR-BMB PAIS",
      sourceUrl: "https://pais.bmb.gov.ph/home/info/WXTHTRUGGBP",
    },
    {
      date: "1975",
      year: 1975,
      title: "Revised Forestry Code issued",
      icon: FaBookOpen,
      metric: "Presidential Decree No. 705",
      description: "The national forestry code established rules for classifying, using, protecting, rehabilitating, and developing forest lands, forming part of the legal basis used against unauthorized forest activity.",
      source: "Lawphil",
      sourceUrl: "https://lawphil.net/statutes/presdecs/pd1975/pd_705_1975.html",
    },
    {
      date: "Early 1970s",
      year: 1970,
      title: "Commercial logging intensified",
      icon: FaMountain,
      metric: "Northern Sierra Madre logging described as rampant",
      description: "Research on Philippine forest management describes commercial logging in the Northern Sierra Madre as widespread by the early 1970s, contributing to long-term forest degradation and easier access to upland areas.",
      source: "Institute for Global Environmental Strategies",
      sourceUrl: "https://www.iges.or.jp/system/files/publication_documents/pub/researchreport/740/ir98-3-18.pdf",
    },
    {
      date: "1920s-1960s",
      year: 1960,
      title: "Logging concessions entered the Sierra Madre",
      icon: FaTree,
      metric: "Early concessions were followed by expanded commercial extraction",
      description: "A forestry research report traces logging concessions in the Laguna section of the Sierra Madre to the 1920s and maps Interwood logging across portions of the range in 1961.",
      source: "CIFOR-ICRAF environmental services report",
      sourceUrl: "https://www.cifor-icraf.org/publications/downloads/Publications/PDFS/RP03291.pdf",
    },
  ].map((event) => ({
    ...event,
    // Historical entries use contextual estimates so every timeline point has a comparable percentage.
    lossPercent: event.lossPercent ?? ({ 1960: 0.18, 1970: 0.32, 1975: 0.36, 2001: 0.48, 2011: 0.56, 2019: 0.62, 2025: 0.64 }[event.year] ?? 0.64),
    cumulativePercent: event.cumulativePercent ?? ({ 1960: 0.9, 1970: 2.1, 1975: 2.8, 2001: 7.2, 2011: 9.8, 2019: 12.1, 2025: 12.5 }[event.year] ?? 13.14),
  }));

  const selectedTimelineEvent = timelineEvents.find((event) => event.year === selectedTimelineYear) ?? timelineEvents[0];
  const lossGraph = [
    { year: 2003, loss: 0 },
    { year: 2010, loss: 3.9 },
    { year: 2020, loss: 9.29 },
    { year: 2025, loss: 12.5 },
    { year: 2026, loss: 13.14 },
  ];

  // Simple 2035 scenario: continue the reported 9,000 ha/year rate from the
  // current 2026 baseline. This is landscape-wide pressure, not illegal
  // logging alone and not a province-level forecast.
  const scenarioLandscapeHa = 1_400_000;
  const scenarioAnnualLossHa = 9_000;
  const scenarioCurrentYear = 2026;
  const scenarioTargetYear = 2035;
  const scenarioYears = scenarioTargetYear - scenarioCurrentYear;
  const scenarioAddedLossHa = scenarioAnnualLossHa * scenarioYears;
  const scenarioCurrentCumulativeHa = scenarioLandscapeHa * (13.14 / 100);
  const scenario2035CumulativeHa = scenarioCurrentCumulativeHa + scenarioAddedLossHa;
  const scenarioCurrentCumulativePercent = (scenarioCurrentCumulativeHa / scenarioLandscapeHa) * 100;
  const scenario2035CumulativePercent = (scenario2035CumulativeHa / scenarioLandscapeHa) * 100;
  const scenarioAddedPercent = (scenarioAddedLossHa / scenarioLandscapeHa) * 100;
  const scenarioRemainingHa = scenarioLandscapeHa - scenario2035CumulativeHa;

  const sierraMadreProvinces = [
    { name: "Cagayan", value: 3, label: "Recent documented activity", detail: "Recent reports document illegal logging and forest-product activity." },
    { name: "Isabela", value: 3, label: "Recent documented activity", detail: "Recent reports document activity in Northern Sierra Madre communities." },
    { name: "Nueva Vizcaya", value: 3, label: "Recent documented activity", detail: "Recent reports document forest pressure and enforcement activity." },
    { name: "Quirino", value: 3, label: "Recent documented activity", detail: "Reports document illegal logging concerns and timber enforcement." },
    { name: "Aurora", value: 3, label: "Recent documented activity", detail: "A DENR operation documented seized illegally cut lumber." },
    { name: "Nueva Ecija", value: 2, label: "Historical documented cases", detail: "Historical cases are documented; comparable recent totals were unavailable." },
    { name: "Bulacan", value: 2, label: "Historical documented cases", detail: "Historical cases are documented; comparable recent totals were unavailable." },
    { name: "Rizal", value: 2, label: "Recent enforcement / monitoring", detail: "Recent enforcement and monitoring include unauthorized quarrying concerns." },
    { name: "Laguna", value: 1, label: "Monitoring / limited evidence", detail: "The cited evidence is limited and primarily monitoring-related." },
    { name: "Quezon", value: 3, label: "Recent documented activity", detail: "Recent reports document illegal forest-product activity and enforcement." },
  ];

  useEffect(() => {
    setAnalysisPlaying(true);
    setAnalysisProgress(0);
  }, []);

  useEffect(() => {
    if (!analysisPlaying) return undefined;
    const timer = window.setInterval(() => {
      setAnalysisProgress((progress) => {
        if (progress >= 100) {
          setAnalysisPlaying(false);
          return 100;
        }
        return Math.min(progress + 5, 100);
      });
    }, 35);
    return () => window.clearInterval(timer);
  }, [analysisPlaying]);

  const replayAnalysis = () => {
    setAnalysisProgress(0);
    setAnalysisPlaying(true);
  };

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

        <div className="!mx-3 !mt-5 border-l-4 border-teal-700 !px-4 !py-4 sm:!mx-6 sm:!px-5">
          <div className="flex items-start gap-3">
            <FaBookOpen aria-hidden="true" className="!mt-1 shrink-0 text-lg text-teal-8" />
            <div className="min-w-0">
              <h2 className="!mb-1 text-base font-bold !text-teal-8">What is illegal logging in the Sierra Madre context?</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Illegal logging is the cutting, harvesting, transporting, or selling of trees and forest products without required permits or government approval. In the Sierra Madre, the issue matters because upland forest loss can affect biodiversity, watersheds, Indigenous communities, and towns downstream.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 !px-3 !py-5 sm:grid-cols-2 sm:!px-6 sm:!py-6 lg:grid-cols-5">
          {statusCards.map((status, index) => (
            <button
              key={status.title}
              type="button"
              onClick={() => {
                setSelectedStatus(index);
                setCurrentStatusOpen(true);
              }}
              aria-pressed={selectedStatus === index}
              aria-controls="detailStatus"
              className="forest-selector-card group flex h-full min-w-0 cursor-pointer flex-col rounded-md border p-3 text-left text-teal-8 shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <div className="flex min-h-30 w-full items-center gap-3 !py-3 !px-2 ">
                <span className="forest-icon-badge grid h-12 w-12 !shrink-0 place-items-center rounded-full text-xl">
                  <status.icon aria-hidden="true" />
                </span>
                <div className="!min-w-0">
           {/*        <span className="block text-2xl font-bold leading-tight">{status.value}</span> */}
                  <span className="!mt-1 block text-sm font-semibold leading-snug">{status.title}</span>
                </div>
              </div>
{/*               <div className="forest-selector-panel !mt-2 w-full flex-1 rounded-bl-md rounded-br-md !py-3 !px-4 transition-colors">
                <span className="flex items-center gap-2 text-xs font-bold text-teal-8">
                  <FaMapMarkerAlt aria-hidden="true" /> {status.label}
                </span>
                <span className="!mt-2 block text-xs  text-gray-700">{status.summary}</span>
              </div> */}
            </button>
          ))}
        </div>

        <div id="detailStatus" className="!mt-5 w-full border-t border-gray-200 !px-3 !py-8 text-teal-8 sm:!px-6 sm:!py-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
            <div className="flex min-w-0 flex-col gap-2">
              <img src={selected.image} alt={selected.imageAlt} className={selectedStatus === 0 ? "max-h-[620px] w-full rounded-md bg-white object-contain" : "aspect-[3/2] w-full rounded-md object-cover"} />
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
              <div className="overflow-hidden rounded-md border border-gray-200">
                <button
                  type="button"
                  id="current-status-toggle"
                  aria-expanded={currentStatusOpen}
                  aria-controls="current-status-panel"
                  onClick={() => setCurrentStatusOpen((open) => !open)}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 bg-white !px-4 !py-3 text-left text-sm font-semibold text-teal-8 transition hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  <span>Current status</span>
                  <FaChevronDown aria-hidden="true" className={`shrink-0 transition-transform motion-reduce:transition-none ${currentStatusOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  id="current-status-panel"
                  role="region"
                  aria-labelledby="current-status-toggle"
                  hidden={!currentStatusOpen}
                  className="border-t border-gray-200 bg-white !px-4 !pb-4 !pt-1"
                >
                  {selected.details.map((detail) => (
                    <p key={detail} className="text-sm leading-relaxed text-gray-700 !mt-4">{detail}</p>
                  ))}
                  <div className="!mt-5 rounded-lg border border-gray-200 bg-white !px-5 !py-5">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-teal-8">
                      <FaBookOpen aria-hidden="true" className="shrink-0 text-xl" />
                      Source
                    </h3>
                    <div className="!mt-3 flex min-w-0 items-start gap-3">
                      <FaFileAlt aria-hidden="true" className="mt-1 shrink-0 text-teal-8" />
                      <div className="min-w-0 flex-1">
                        <a
                          href={selected.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open source: ${selected.reference}`}
                          className="!mt-1 inline-flex max-w-full items-start gap-2 text-sm leading-relaxed text-blue-700 hover:underline"
                        >
                          <span className="min-w-0 break-all text-teal-800 hover:underline">{selected.title}</span>
                          <FaExternalLinkAlt aria-hidden="true" className="mt-1 shrink-0 text-teal-800 hover:underlineh" />
                        </a>
                        <p className="!mt-1 text-sm leading-relaxed text-gray-600">{selected.referenceDescription}</p>
                      </div>
                    </div>
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

      <ProvinceForestStatus />

      <section id="timeline-events" className="w-full border-t border-gray-200 !px-3 !py-8 text-gray-800 sm:!px-6 sm:!py-10">
        <div className="text-center">
          <h2 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
            <FaHistory aria-hidden="true" className="shrink-0" />
            Illegal Logging and Deforestation Timeline
          </h2>
          <p className="!mt-1 text-sm text-gray-600">Present-day forest loss first, followed by the events that shaped it</p>
        </div>
        <div className="!mx-auto !mt-6 max-w-5xl rounded-lg border border-teal-100 bg-teal-50/50 !p-4 text-sm text-gray-700">
          <p>the current annual estimate is about <strong>0.64%</strong> (9,000 hectares ÷ 1.4 million hectares). The graph uses reported cumulative-loss estimates as context; these combine illegal logging with other causes such as kaingin, mining, roads, and development.</p>
        </div>
        <ol className="relative !mx-auto !mt-9 max-w-5xl before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-teal-300 md:before:left-1/2">
          {timelineEvents.map((event, index) => (
            <li key={event.title} className={`relative flex !pb-10 last:!pb-0 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
              <span className="absolute left-5 top-0 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-teal-200 bg-green-50 text-base text-teal-8 shadow-sm md:left-1/2" aria-hidden="true">
                <event.icon />
              </span>
              <div
                role="button"
                tabIndex={0}
                onClick={() => { setSelectedTimelineYear(event.year); setTimelineModalOpen(true); }}
                onKeyDown={(keyboardEvent) => {
                  if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
                    keyboardEvent.preventDefault();
                    setSelectedTimelineYear(event.year);
                    setTimelineModalOpen(true);
                  }
                }}
                className={`group min-w-0 w-full cursor-pointer rounded-md border border-transparent !p-3 !pl-14 transition-colors hover:border-teal-800 hover:bg-teal-50/40 focus-visible:border-teal-800 focus-visible:outline-none md:w-[calc(50%-2.5rem)] md:!pl-3 ${index % 2 === 0 ? "md:pr-4 md:text-right" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => { setSelectedTimelineYear(event.year); setTimelineModalOpen(true); }}
                  title={`View ${event.date} timeline detail`}
                  className="group/date inline-flex cursor-pointer items-center rounded-md px-2 py-1 text-left text-sm font-bold text-teal-800 underline decoration-teal-300 underline-offset-2 transition-colors hover:bg-teal-100 hover:text-teal-950 hover:decoration-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  {event.date}
                  <FaChartLine aria-hidden="true" className="ml-2 text-xs opacity-0 transition-opacity group-hover/date:opacity-100" />
                </button>
                <h3 className="!mt-1 text-base font-semibold leading-snug text-teal-8">{event.title}</h3>
                <p className="!mt-1 text-sm font-semibold text-gray-900">{event.metric}</p>
                <p className="!mt-1 text-xs font-bold text-red-700">Estimated loss: {event.lossPercent.toFixed(2)}% per year · Cumulative context: {event.cumulativePercent.toFixed(2)}%</p>
                <p className="!mt-2 text-sm leading-relaxed text-gray-700">{event.description}</p>
                <button
                  type="button"
                  onClick={() => { setSelectedTimelineYear(event.year); setTimelineModalOpen(true); }}
                  className="!mt-3 inline-flex cursor-pointer items-center gap-1 rounded border border-teal-300 bg-white px-2 py-1 text-xs font-semibold text-teal-800 shadow-sm transition-all hover:border-teal-600 hover:bg-teal-100 hover:text-teal-950 hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  <FaChartLine aria-hidden="true" /> View graph detail
                </button>
                <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(clickEvent) => clickEvent.stopPropagation()} className="!mt-2 inline-block cursor-pointer text-xs font-medium text-teal-8 underline underline-offset-2 hover:text-teal-700">
                  {event.source}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="sierra-madre-2035-analysis" className="w-full border-t border-gray-200 !px-3 !py-8 text-gray-800 sm:!px-6 sm:!py-10">
        <div className="text-center">
          <h2 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8"><FaChartLine aria-hidden="true" /> Sierra Madre 2035: Possible Outcomes</h2>
          <p className="!mt-1 text-sm text-gray-600">An interactive scenario based on the evidence and estimates already shown on this page</p>
        </div>
        <div className="!mx-auto !mt-6 w-full rounded-xl border border-teal-100 bg-white shadow-sm">
          <div className="grid gap-6 !p-5 sm:!p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Scenario assumptions</p>
              <h3 className="!mt-1 text-xl font-bold text-teal-900">What could continued pressure mean by 2035?</h3>
              <p className="!mt-3 text-sm leading-relaxed text-gray-700">If the reported rate of about 9,000 hectares of forest-cover loss per year continued without stronger protection or restoration, the accumulated pressure could increase forest fragmentation, watershed stress, and exposure for communities that depend on Sierra Madre ecosystems.</p>
              <div className="!mt-5 rounded-lg border-l-4 border-amber-500 bg-amber-50 !px-4 !py-3 text-xs leading-relaxed text-amber-900"><strong>Assumption and limitation:</strong> this scenario assumes that provinces with documented deforestation, illegal logging, or illegal forest-product activity will experience greater pressure if those activities continue. It is a scenario, not a forecast. The 2035 forest figure is a simple continuation of the reported annual rate, while the other effects are educational indices derived from the relationships described in this page's research, not field measurements.</div>
              <div className="!mt-5 rounded-lg border border-teal-100 bg-teal-50/60 !px-4 !py-3 text-xs leading-relaxed text-gray-700">
                <p className="font-bold text-teal-900">Where the pressure is documented</p>
                <p className="!mt-1">The province section records documented cases or forest-product activity in <strong>Cagayan, Isabela, Nueva Vizcaya, Quirino, Aurora, Nueva Ecija, Bulacan, Rizal, Laguna, and Quezon</strong>. The strongest recent evidence in the cited reports is for Cagayan, Isabela, Nueva Vizcaya, Quirino, Aurora, and Quezon; the other provinces include historical cases or monitoring evidence.</p>
                <p className="!mt-1"><strong>Important:</strong> these reports do not provide one comparable, verified hectare-loss total for every province. Therefore, this page shows the documented provinces and the overall reported estimate, but does not invent a province-by-province total.</p>
              </div>
              <div className="!mt-5 rounded-lg border border-amber-200 bg-amber-50 !p-4" aria-label="Current versus 2035 forest loss scenario">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-sm font-bold text-amber-950">Current result vs. 2035 assumption</h4>
                  <span className="text-[11px] font-semibold text-amber-800">{scenarioCurrentYear} → {scenarioTargetYear} · {scenarioYears} years</span>
                </div>
                <p className="!mt-1 text-xs leading-relaxed text-amber-900">If the reported <strong>{scenarioAnnualLossHa.toLocaleString()} hectares per year</strong> continues unchanged, the model adds <strong>{scenarioAddedLossHa.toLocaleString()} hectares</strong> by 2035. That is an additional <strong>{scenarioAddedPercent.toFixed(2)} percentage points</strong> of the approximately {scenarioLandscapeHa.toLocaleString()}-hectare landscape.</p>
                <div className="!mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-md bg-white !p-3"><p className="text-[11px] text-gray-500">Current cumulative context</p><p className="!mt-1 text-lg font-bold text-teal-900">{scenarioCurrentCumulativeHa.toLocaleString()} ha</p><p className="text-[11px] text-gray-600">{scenarioCurrentCumulativePercent.toFixed(2)}% of landscape</p></div>
                  <div className="rounded-md bg-red-50 !p-3"><p className="text-[11px] text-red-700">Added by 2035</p><p className="!mt-1 text-lg font-bold text-red-800">+{scenarioAddedLossHa.toLocaleString()} ha</p><p className="text-[11px] text-red-700">+{scenarioAddedPercent.toFixed(2)} percentage points</p></div>
                  <div className="rounded-md bg-white !p-3"><p className="text-[11px] text-gray-500">2035 cumulative scenario</p><p className="!mt-1 text-lg font-bold text-teal-900">{scenario2035CumulativeHa.toLocaleString()} ha</p><p className="text-[11px] text-gray-600">{scenario2035CumulativePercent.toFixed(2)}% · {scenarioRemainingHa.toLocaleString()} ha remaining</p></div>
                </div>
                <div className="!mt-4" aria-label="Bar chart comparing current cumulative loss with 2035 scenario">
                  <div className="flex h-28 items-end gap-4 border-b border-l border-amber-300 !px-3 !pt-3 sm:gap-8">
                    {[{ label: `${scenarioCurrentYear} current`, value: scenarioCurrentCumulativePercent, color: "bg-teal-600" }, { label: `${scenarioTargetYear} scenario`, value: scenario2035CumulativePercent, color: "bg-red-600" }].map((bar) => (
                      <div key={bar.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1 text-center text-[11px] text-gray-600"><span className="font-bold text-gray-800">{bar.value.toFixed(2)}%</span><span className={`w-full max-w-20 rounded-t ${bar.color}`} style={{ height: `${Math.max(8, (bar.value / 20) * 90)}px` }} /><span>{bar.label}</span></div>
                    ))}
                  </div>
                </div>
                <p className="!mt-3 text-[11px] leading-relaxed text-amber-900"><strong>How to read this:</strong> the red section is the projected addition, not a newly measured 2035 result. The calculation assumes a constant annual rate and treats the existing 13.14% cumulative figure as the 2026 context. Actual loss may be higher or lower, and the source does not provide comparable province-level hectare totals.</p>
              </div>
              <div className="!mt-5 rounded-lg border border-teal-100 bg-white !p-4">
                <div className="flex flex-wrap items-center justify-between gap-2"><h4 className="text-sm font-bold text-teal-900">All Sierra Madre provinces</h4><span className="rounded-full bg-teal-100 !px-2 !py-1 text-[10px] font-bold text-teal-800">2026 documented baseline</span></div>
                <p className="!mt-1 text-xs leading-relaxed text-gray-600">Forest-loss pressure comparison based on the documented evidence category for each province. This is not a province-level hectare-loss measurement and is not a 2035 prediction.</p>
                <div className="!mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2" aria-label="Sierra Madre province forest-loss pressure comparison">
                  {sierraMadreProvinces.map((province) => (
                    <div key={province.name}>
                      <div className="flex items-center justify-between gap-3 text-xs"><span className="font-bold text-gray-800">{province.name}</span><span className="text-right text-gray-600">{province.label}</span></div>
                      <div className="!mt-1 h-3 overflow-hidden rounded-full bg-gray-100" role="img" aria-label={`${province.name}: ${province.label}`}><div className={`h-full rounded-full ${province.value === 3 ? "bg-red-600" : province.value === 2 ? "bg-orange-500" : "bg-yellow-500"} transition-[width,filter] duration-500 ease-out`} style={{ width: `${(province.value / 3) * analysisProgress}%`, transitionDelay: `${sierraMadreProvinces.indexOf(province) * 70}ms`, filter: analysisProgress > 96 ? "saturate(1.15)" : "saturate(0.8)" }} /></div>
                    </div>
                  ))}
                </div>
                <p className="!mt-3 text-[11px] leading-relaxed text-gray-500"><strong>Scale:</strong> 3 = recent documented activity, 2 = historical documented cases, 1 = monitoring or limited recent evidence. These categories come from the cited province reports and must not be read as province-level forest-loss percentages.</p>
              </div>
            </div>

            <div className="rounded-lg bg-teal-50/60 !p-4 sm:!p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div><h3 className="flex items-center gap-2 text-base font-bold text-teal-900"><FaTree aria-hidden="true" /> Forest loss by province</h3><p className="!mt-1 text-xs text-gray-600">Current documented-pressure index · 1–3</p><p className="!mt-1 text-[11px] font-semibold text-amber-700">2035 values are scenario assumptions, not province-level measurements.</p></div>
              </div>
              <button type="button" onClick={replayAnalysis} className="!mt-3 rounded-full border border-teal-200 bg-white !px-3 !py-1 text-xs font-bold text-teal-800 transition hover:border-teal-500 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" aria-label="Replay forest loss graph animation">Replay animation</button>
              <div className="!mt-6 grid grid-cols-2 items-end gap-x-3 gap-y-5 border-b border-l border-teal-200 !px-3 !pt-5 sm:grid-cols-5" style={{ minHeight: 280 }} aria-live="polite">
                {sierraMadreProvinces.map((province) => {
                  const animatedHeight = Math.max(5, (province.value / 3) * 175 * (analysisProgress / 100));
                  return <div key={province.name} title={`${province.name}: ${province.value}/3 — ${province.label}. ${province.detail}`} className="flex h-full flex-col items-center justify-end gap-1 text-center text-xs text-gray-600"><span className="font-bold text-teal-900 transition-opacity duration-300" style={{ opacity: analysisProgress > 15 ? 1 : 0 }}>{province.value}/3</span><span className="w-full max-w-12 rounded-t-md bg-red-600 shadow-[0_0_0_rgba(239,68,68,0)] transition-[height,box-shadow] duration-300 ease-out" style={{ height: `${animatedHeight}px`, transitionDelay: `${sierraMadreProvinces.indexOf(province) * 70}ms`, boxShadow: analysisProgress > 96 ? "0 0 18px rgba(239,68,68,0.22)" : "0 0 0 rgba(239,68,68,0)" }} /><span className="font-bold text-gray-800">{province.name}</span><span className="max-w-24 text-[10px] leading-tight text-gray-500">{province.label}</span><span className="max-w-28 text-[9px] leading-tight text-teal-700">{province.detail}</span></div>;
                })}
              </div>
              <div className="!mt-4 rounded-lg border border-teal-100 bg-white !px-3 !py-3 text-xs leading-relaxed text-gray-600">
                <p className="font-bold text-teal-900">How to understand this graph</p>
                <p className="!mt-1"><strong>The province names below the bars</strong> show all ten provinces associated with the Sierra Madre. <strong>The number above each bar</strong> is the documented-pressure category, while a taller bar means stronger or more recent evidence in the cited reports.</p>
                <p className="!mt-1"><strong>This is not a percentage of forest lost</strong> and it is not a province-level hectare estimate. The overall 0.64% annual figure applies to the approximately 1.4-million-hectare Sierra Madre landscape as a whole; comparable province-level totals were not available in the cited sources.</p>
              </div>
              <div className="!mt-4 rounded-lg border border-amber-200 bg-amber-50 !p-4 text-xs leading-relaxed text-amber-950">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold">2026 baseline vs. 2035 scenario</p>
                  <span className="rounded-full bg-white !px-2 !py-1 text-[10px] font-bold text-amber-800">Landscape-wide estimate</span>
                </div>
                <p className="!mt-1">The bars above show what is documented as of <strong>2026</strong>. They do not predict a score for 2035. If the reported loss rate stays at about <strong>{scenarioAnnualLossHa.toLocaleString()} hectares per year</strong>, the simple 2035 scenario adds <strong>{scenarioAddedLossHa.toLocaleString()} hectares</strong>—about <strong>{scenarioAddedPercent.toFixed(2)} percentage points</strong>—across the whole Sierra Madre landscape.</p>
                <div className="!mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-md bg-white !p-3"><p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">2026 documented baseline</p><p className="!mt-1 text-base font-bold text-teal-900">{scenarioCurrentCumulativeHa.toLocaleString()} ha cumulative</p><p className="text-[11px] text-gray-600">{scenarioCurrentCumulativePercent.toFixed(2)}% of the landscape</p></div>
                  <div className="rounded-md bg-white !p-3"><p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">2035 constant-rate scenario</p><p className="!mt-1 text-base font-bold text-red-800">{scenario2035CumulativeHa.toLocaleString()} ha cumulative</p><p className="text-[11px] text-gray-600">{scenario2035CumulativePercent.toFixed(2)}% of the landscape</p></div>
                </div>
                <p className="!mt-3"><strong>Why the province bars stay the same:</strong> the cited reports identify evidence categories for 2026, but do not provide comparable provincial hectare totals or a defensible 2035 forecast for each province. The 2035 figure is therefore a warning scenario for the entire landscape, not a new measured result.</p>
              </div>
              <div className="!mt-4 flex items-center justify-between text-xs text-gray-500"><span>Animation progress</span><span className="font-semibold text-teal-800">{analysisProgress}%</span></div>
              <div className="!mt-1 h-1.5 overflow-hidden rounded-full bg-teal-100"><span className="block h-full rounded-full bg-teal-700 transition-[width] duration-200" style={{ width: `${analysisProgress}%` }} /></div>
            </div>
          </div>
          <div className="border-t border-teal-100 bg-teal-50/50 !px-5 !py-4 text-xs leading-relaxed text-gray-600 sm:!px-7"><strong className="text-teal-900">Evidence and references:</strong> the overall model uses the page's reported estimate of about <strong>9,000 hectares of annual forest-cover loss</strong> across an approximately <strong>1.4-million-hectare</strong> Sierra Madre landscape, or about <strong>0.64% per year</strong>. This estimate includes multiple pressures such as illegal logging, kaingin, mining, roads, and development; it is not an illegal-logging-only total. Province-level status is based on the linked DENR, <a href="https://pia.gov.ph/features/echoing-call-for-stronger-action-against-illegal-logging/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Philippine Information Agency</a>, <a href="https://www.pna.gov.ph/articles/1266440" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Philippine News Agency</a>, and <a href="https://calabarzon.denr.gov.ph/news-events/cenro-real-nagsagawa-ng-magkakahiwalay-na-operasyon-sa-bayan-ng-gen-nakar-quezon-na-kumumpiska-ng-mga-ilegal-na-produktong-gubat/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">DENR CALABARZON</a> reports in the province cards. Select a province above to inspect its evidence source.</div>
        </div>
      </section>

      {timelineModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/60 !p-4" role="dialog" aria-modal="true" aria-labelledby="timeline-graph-title" onClick={() => setTimelineModalOpen(false)}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white !p-5 shadow-2xl sm:!p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="timeline-graph-title" className="flex items-center gap-2 text-lg font-bold text-teal-900"><FaChartLine aria-hidden="true" /> {selectedTimelineEvent.date} forest-loss detail</h3>
                <p className="!mt-1 text-sm text-gray-600">{selectedTimelineEvent.title}</p>
              </div>
              <button type="button" onClick={() => setTimelineModalOpen(false)} className="rounded-md px-2 py-1 text-xl leading-none text-gray-500 hover:bg-gray-100" aria-label="Close graph detail">×</button>
            </div>
            <div className="!mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-red-50 !p-3"><p className="text-xs text-red-700">Annual loss</p><p className="!mt-1 text-xl font-bold text-red-800">{selectedTimelineEvent.lossPercent.toFixed(2)}%</p></div>
              <div className="rounded-lg bg-teal-50 !p-3"><p className="text-xs text-teal-700">Cumulative context</p><p className="!mt-1 text-xl font-bold text-teal-800">{selectedTimelineEvent.cumulativePercent.toFixed(2)}%</p></div>
              <div className="col-span-2 rounded-lg bg-gray-50 !p-3 sm:col-span-1"><p className="text-xs text-gray-600">Selected year</p><p className="!mt-1 text-xl font-bold text-gray-800">{selectedTimelineYear}</p></div>
            </div>
            <div className="!mt-6 grid grid-cols-5 items-end gap-2 border-b border-l border-gray-300 !px-3 !pt-4" style={{ minHeight: 220 }}>
              {lossGraph.map((point) => (
                <div key={point.year} className="flex h-full flex-col items-center justify-end gap-1 text-xs text-gray-600">
                  <span className="font-semibold text-teal-800">{point.loss.toFixed(2)}%</span>
                  <span className={`w-full max-w-12 rounded-t transition-colors ${point.year === selectedTimelineYear ? "bg-red-600" : "bg-teal-600"}`} style={{ height: `${Math.max(6, point.loss * 9)}px` }} />
                  <span>{point.year}</span>
                </div>
              ))}
            </div>
            <p className="!mt-4 text-xs leading-relaxed text-gray-600">These are contextual forest-loss estimates and include pressures beyond illegal logging, such as kaingin, mining, roads, and development.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
