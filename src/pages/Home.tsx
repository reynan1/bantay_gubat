import { useState } from "react";
import { FaBullhorn, FaCubes, FaExclamationTriangle, FaFileAlt, FaHistory, FaLeaf, FaMapMarkerAlt, FaShieldAlt, FaTree, FaUsers } from "react-icons/fa";
import philippines from '../assets/images/indegenous/philippines.png'
import indegenous from '../assets/images/indegenous/indegenous_final.png'
import caraigaImg from '../assets/images/indegenous/caraiga_img.png'
import illegalLumber from '../assets/images/indegenous/illegal_lumber4.png'
import palawanTimeline from '../assets/images/indegenous/palawan-timeline.png'

function Home() {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const illegalLoggingStatus = [
    {
      value: "5,149",
      title: "Illegal Tree Cutting in Mount Domadoway",
      problemRefer: "Current Status",
      icon: FaTree,
      problem: "Unauthorized tree cutting can harm natural forests, destroy wildlife habitats, and reduce forest resources that people and wildlife depend on.",
      description:
        "Illegal tree cutting was documented within the 5,149-hectare mining contract area near Mount Domadoway in southern Palawan.",
    },
    {
      value: "2,500",
      title: "Indigenous Pala’wan People",
      problemRefer: "Affected Community",
      icon: FaUsers,
      problem: "Forest destruction can affect Pala’wan communities by reducing the food, water, medicinal plants, and culturally important places they depend on.",
      description:
        "Around 2,500 Indigenous Pala’wan people from 12 rurunganen (villages) live around Mount Domadoway.",
    },
    {
      value: "6",
      title: "Illegal Logging Hotspots",
      problemRefer: "Ongoing Concern",
      icon: FaMapMarkerAlt,
      problem: "Illegal logging remains a problem in parts of Caraga. Even though the number of hotspots has decreased, illegal forest activities are still occurring in some areas.",
      description:
        "DENR Caraga reported progress in reducing areas identified as illegal logging hotspots. At the height of the implementation of Executive Order No. 23, the region had 17 identified illegal logging hotspots.",
    },
    {
      value: "364,904",
      title: "Board Feet of Illegal Lumber",
      problemRefer: "Board Feet of Illegal Lumber",
      icon: FaCubes,
      problem: "Illegal cutting and transportation of forest products continue to threaten Caraga's forests, requiring regular monitoring and enforcement operations.",
      description:
        "Despite the reduction in hotspots, DENR Caraga continued to record substantial enforcement activity in 2025.",
    },
  ];

  const detailsStatus = [
    {
        value: "5,149",
        title: "Illegal Tree Cutting Reported in Mount Domadoway",
        image: philippines,
        imageAlt: "",
        photoSource: "Palawan and its surrounding islands are among the most forested and biodiverse parts of the Philippines / Credit: Mongabay via Mapbox.",
        description:
          "Unauthorized tree cutting damages natural forests and threatens protected forest resources.",
        details:[
          `Illegal tree cutting has been documented near Mount Domadoway in southern Palawan. The affected location is within a 5,149-hectare mining contract area held by Pyramid Hill Mining and Industrial Corporation. The Mines and Geosciences Bureau (MGB) confirmed that illegal tree cutting occurred within this area and stated that the forestland clearing was not approved by the government.`,
          `According to the MGB, its field office first reported the illegal tree cutting as early as November 2020. The situation shows that unauthorized forest clearing was occurring despite Palawan's environmental protections. Under the Strategic Environmental Plan for Palawan (SEP), commercial logging is prohibited across the province, while natural forests and other ecologically important areas can receive maximum protection.`,
          `The case remains important because continued unauthorized tree cutting can contribute to forest degradation and threaten forest resources. However, while the illegal cutting occurred within Pyramid Hill's contract area, the report clearly states that there was no evidence linking the deforestation to Pyramid Hill. The MGB also formally reminded the company of its responsibility to monitor its concession area.`
          ],
        reference:
          "Fabro, K. A. S. (2021). Illegal logging in Philippines’ Palawan stokes fears of a mining resurgence.",
        referenceUrl:
          "https://earthjournalism.net/stories/illegal-logging-in-philippines-palawan-stokes-fears-of-a-mining-resurgence",
    },
    {
      value: "12",
      title: "Pala’wan Villages",
      image: indegenous,
      imageAlt: "",
      photoSource: "Indegenous people in palawan around Mount Domadoway",
      description:
        "Twelve Pala’wan villages are located around Mount Domadoway.",
      details:[
       `Around Mount Domadoway in Palawan, approximately 2,500 Indigenous Pala’wan people live across 12 villages. These communities have a close relationship with the surrounding forest, which provides important resources such as food and water. The forest is also connected to their cultural traditions and way of life, making it more than just a source of natural resources.`,
       `Illegal tree cutting can place these forest-dependent communities at risk by damaging the environment they rely on. Continued forest loss can reduce the availability of natural resources and disturb areas that have cultural importance to the Pala’wan people. Because multiple villages surround Mount Domadoway, environmental damage in the area has the potential to affect many community members rather than only the location where trees are cut.`,
       `The presence of 12 Pala’wan villages also shows why Indigenous communities are important stakeholders in forest protection. Protecting Mount Domadoway helps conserve its forest ecosystem while safeguarding resources and culturally significant areas used by surrounding communities. Their connection to the land makes their experiences and concerns important when addressing illegal logging and other activities that may threaten the forest.`,
      ],
      reference: "Fabro, K. A. S. (2021). Illegal logging in Philippines’ Palawan stokes fears of a mining resurgence.",
      referenceUrl:
              "https://earthjournalism.net/stories/illegal-logging-in-philippines-palawan-stokes-fears-of-a-mining-resurgence",
    },
    {
      value: "5,149",
      title: "Illegal Logging Hotspots Reduced to Six",
      image: caraigaImg,
      imageAlt: "",
      photoSource: "DENR Caraga reported that identified illegal logging hotspots images",
      description:
        "DENR Caraga reported that identified illegal logging hotspots fell from 17 to six by 2024.",
      details:[
        `
        DENR Caraga reported progress in reducing areas identified as illegal logging hotspots. At the height of the implementation of Executive Order No. 23, the region had 17 identified illegal logging hotspots. Through enforcement operations, surveillance, and legal action, DENR Caraga reported that this number had fallen to six hotspots in 2024. These remaining hotspots included areas in Loreto, Talacogon, La Paz, and Esperanza in Agusan del Sur, as well as Lianga and Lingig in Surigao del Sur.`,

        `The reduction from 17 to six hotspots indicates progress in enforcement, but it also shows that illegal logging had not been completely eliminated from Caraga. This remains particularly important because about 70% of Caraga's land area is classified as timberland, with more than 700,000 hectares of forest. Continued monitoring and enforcement are therefore important in the remaining hotspot areas.`
        ],
      reference:
        "Philippine Information Agency — DENR anti-illegal logging operations in Caraga, 2025",
      referenceUrl:
        "https://pia.gov.ph/news/denr-slashes-number-of-illegal-logging-hotspots-across-caraga/",
    },
    {
      value: "2020",
      title: "Hundreds of Illegal Logging Apprehensions and Large Lumber Seizures",
      image: illegalLumber,
      imageAlt: "",
      photoSource: "Enforcement operations in Caraga seized 364,904 board feet of illegal lumber in 2025 images",
      description:
        "Enforcement operations in Caraga seized 364,904 board feet of illegal lumber in 2025.",
      details:[
        "Despite the reduction in hotspots, DENR Caraga continued to record substantial enforcement activity in 2025. From January to May 2025, the agency recorded 148 anti-illegal logging apprehensions and confiscated more than 310,000 board feet of undocumented forest products, along with 30 conveyances used to illegally transport lumber.",
        "During the same period, DENR also reported 132 additional cases that resulted in the confiscation of 364,904 board feet of illegal lumber and another 42 conveyances. These figures show that illegal forest-product activities continued to require significant enforcement action even as the number of identified hotspots declined. DENR worked with the Philippine Army, Philippine National Police, Department of Justice, and local government units to conduct forest patrols and strengthen surveillance.",
        "Key Status: 148 apprehensions, 310,000+ board feet confiscated, plus 132 additional cases involving 364,904 board feet of illegal lumber, from January–May 2025.",
      ],
      reference:
        "Philippine Information Agency — DENR anti-illegal logging operations in Caraga, 2025",
      referenceUrl:
        "https://pia.gov.ph/news/denr-slashes-number-of-illegal-logging-hotspots-across-caraga/",
    }
  ]
  const SelectedStatusIcon = illegalLoggingStatus[selectedStatus].icon;
  const researchQuestions = [
    {
      question: "Where was unauthorized cutting documented?",
      why: "This establishes that the issue occurred and identifies the place to examine.",
    },
    {
      question: "Who depends on the affected forest?",
      why: "This shows whose resources and culturally important places could be affected.",
    },
    {
      question: "Is the problem becoming less widespread?",
      why: "Comparing hotspot counts helps distinguish progress from the end of the problem.",
    },
    {
      question: "What are enforcement operations still finding?",
      why: "Seizure records show continuing illegal forest-product activity despite fewer hotspots.",
    },
  ];
  const palawanReportUrl = "https://news.mongabay.com/2021/06/illegal-logging-in-philippines-palawan-stokes-fears-of-a-mining-resurgence/";
  const denrStudyUrl = "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709";
  const denrStudyPdfUrl = "https://faspselib.denr.gov.ph/uploads/materials/d3aad246-e7c5-4579-8eda-88c1b1b5e709/55f6c391-6f48-4843-b8a9-957b722c9261.pdf";
  const timelineEvents = [
    {
      date: "1934",
      title: "Philippine Forest Cover Baseline",
      icon: FaTree,
      metric: "17.8 million hectares / about 60% of land area",
      description: "A DENR-hosted study estimates Philippine forest cover at 17.8 million hectares in 1934. By 2011, it had declined to about 7.168 million hectares.",
      why: "Provides a national baseline for understanding long-term forest loss.",
      supports: "Definition + Current Status",
      conclusion: "This measures overall forest-cover change, not forest loss caused only by illegal logging.",
      source: "DENR FASPS E-Library",
      sourceUrl: denrStudyUrl,
    },
    {
      date: "1970-1992",
      title: "Major Forest Decline in Palawan",
      icon: FaTree,
      metric: "1.3 million to 789,488 hectares",
      description: "Palawan's forest cover fell from about 1.3 million hectares in 1970 to 789,488 hectares in 1992. The report also cites a loss rate of about 19,000 hectares per year from 1979 to 1984.",
      why: "Narrows the national issue to Palawan, where Mount Domadoway is located.",
      supports: "Current Status + Effects",
      conclusion: "Palawan experienced substantial historical forest loss; the entire decline cannot be attributed to illegal logging.",
      source: "Fabro, Mongabay (2021)",
      sourceUrl: palawanReportUrl,
    },
    {
      date: "1992",
      title: "Palawan Strengthens Forest Protection",
      icon: FaShieldAlt,
      metric: "Strategic Environmental Plan for Palawan",
      description: "The SEP established stronger forest protection, including a commercial logging ban and maximum-protection zones for natural forests, endangered-species habitats, and other ecologically important areas.",
      why: "Shows what protections existed before the later unauthorized cutting.",
      supports: "Definition + Current Status",
      conclusion: "Stronger protection responded to environmental pressure but did not eliminate illegal forest activity.",
      source: "Fabro, Mongabay (2021)",
      sourceUrl: palawanReportUrl,
    },
    {
      date: "1992-2010",
      title: "Forest Loss Continued at a Lower Rate",
      icon: FaTree,
      metric: "About 5,500 hectares per year",
      description: "The Mount Domadoway report says Palawan's annual deforestation rate declined to about 5,500 hectares after the SEP through 2010, but timber poaching did not stop.",
      why: "Shows that legal protection alone did not end forest degradation.",
      supports: "Current Status + Causes",
      conclusion: "The reported rate was lower than the 1979-1984 rate, but not all remaining loss was caused by illegal logging.",
      source: "Fabro, Mongabay (2021)",
      sourceUrl: palawanReportUrl,
    },
    {
      date: "2011",
      title: "Philippine Forest Cover",
      icon: FaTree,
      metric: "7.168 million hectares / 23.89% of land area",
      description: "The DENR-hosted study reports about 7.168 million hectares of Philippine forest cover in 2011, compared with 17.8 million hectares in 1934.",
      why: "Quantifies the national scale of long-term forest-cover change.",
      supports: "Current Status",
      conclusion: "Forest decline extends beyond Palawan, but this national figure does not isolate illegal logging.",
      source: "DENR FASPS E-Library",
      sourceUrl: denrStudyUrl,
    },
    {
      date: "2013 study",
      title: "Major Drivers Identified",
      icon: FaFileAlt,
      metric: "40.58% cited logging and timber poaching",
      description: "Key informants cited legal or illegal logging and poaching (40.58%), kaingin (16.98%), biophysical factors (12.73%), mining (8.49%), and charcoal making (8.15%).",
      why: "Provides research evidence for discussing the causes of forest degradation.",
      supports: "Causes",
      conclusion: "These are shares of informant responses, not percentages of Philippine forest loss caused by each activity.",
      source: "DENR-hosted REDD+ drivers study",
      sourceUrl: denrStudyPdfUrl,
    },
    {
      date: "2015",
      title: "Remaining Palawan Forest Cover",
      icon: FaTree,
      metric: "About 694,000 hectares",
      description: "The Mount Domadoway report cites approximately 694,000 hectares of remaining forest cover in Palawan as of 2015, the latest official figure available to that report.",
      why: "Provides another measurable indicator of Palawan's forest condition.",
      supports: "Current Status + Effects",
      conclusion: "The remaining forest is an important environmental resource requiring continued protection.",
      source: "Fabro, Mongabay (2021)",
      sourceUrl: palawanReportUrl,
    },
    {
      date: "2020 context",
      title: "5,149-Hectare Contract Area",
      icon: FaFileAlt,
      metric: "Mining contract area, not logged area",
      description: "Pyramid Hill's mineral production sharing agreement covered 5,149 hectares. Illegal tree cutting was documented within that area.",
      why: "Identifies where the reported cutting occurred without overstating its extent.",
      supports: "Current Status",
      conclusion: "5,149 hectares is not the amount of forest illegally logged. The report found no evidence linking the deforestation to Pyramid Hill.",
      source: "Fabro, Mongabay (2021)",
      sourceUrl: palawanReportUrl,
    },
    {
      date: "November 2020",
      title: "Illegal Tree Cutting Documented",
      icon: FaBullhorn,
      metric: "Government-confirmed case",
      description: "The Mines and Geosciences Bureau said its field office first reported illegal cutting within the Mount Domadoway contract area as early as November 2020. The clearing was not government approved.",
      why: "Moves the research from broad trends to a documented case of unauthorized cutting.",
      supports: "Definition + Current Status",
      conclusion: "Unauthorized tree cutting was documented within the contract area.",
      source: "Fabro, Mongabay (2021)",
      sourceUrl: palawanReportUrl,
    },
    {
      date: "2021",
      title: "Effects on Indigenous Pala'wan Communities",
      icon: FaUsers,
      metric: "About 2,500 people across 12 villages",
      description: "The surrounding forest provides wild food, medicinal herbs, water, land for subsistence crops, and culturally important places to nearby Pala'wan communities.",
      why: "Identifies who may be affected and which resources are at risk.",
      supports: "Effects",
      conclusion: "Continued degradation could affect resources and places relied upon by these communities.",
      source: "Fabro, Mongabay (2021)",
      sourceUrl: palawanReportUrl,
    },
  ];
  return (
    <>
    <section id="status-illegal-logging" className="w-full border-t-[1px] text-teal-8">
        <div className="flex w-full items-center gap-4 !px-6 !pt-8 !pb-2">
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
          <div className="text-center">
            <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
              <FaLeaf aria-hidden="true" className="shrink-0" />
              Definition and Current Status
            </h1>
            <p className="!mt-1 text-xs text-gray-600">Documented forest cases in Palawan and Caraga</p>
          </div>
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 gap-3 !px-6 !py-6 sm:grid-cols-2 lg:grid-cols-4">
            {illegalLoggingStatus.map((status, index) => (
            <button key={status.title}
                  type="button"
                  onClick={() => setSelectedStatus(index)}
                  aria-pressed={selectedStatus === index}
                  aria-controls="detailStatus"
                  className={`
                    group flex h-full min-w-0 cursor-pointer flex-col rounded-md border p-3 text-left shadow-sm
                    transition-colors duration-200 hover:border-teal-700 hover:bg-teal-8 hover:text-white
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700
                    ${selectedStatus === index ? "border-teal-8 !rounded-md text-teal-8 bg-teal-8 text-white" : "border-gray-200 bg-white text-teal-8"}
                `}
              >
                <div className="flex min-h-20 w-full items-start gap-3 !py-3 !px-2">
                  <span className={`grid h-12 w-12 !shrink-0 place-items-center rounded-full text-xl ${selectedStatus === index ? "bg-white text-teal-8" : "bg-green-50 text-teal-8"}`}>
                    <status.icon aria-hidden="true" />
                  </span>
                  <div className="!min-w-0">
                    <span className="block text-2xl font-bold leading-tight">{status.value}</span>
                    <span className="!mt-1 block text-xs font-semibold leading-snug">{status.title}</span>
                  </div>
                </div>
                <div className={`!mt-2 w-full flex-1 rounded-bl-md rounded-br-md  !py-3 !px-4 transition-colors ${selectedStatus === index ? "bg-green-50 " : "bg-green-50 group-hover:border-teal-8 "}`}>
                  <span className="flex items-center gap-2 text-xs font-bold text-teal-8">
                     <FaExclamationTriangle aria-hidden="true" /> { status.problemRefer }
                  </span>
                  <span className={`!mt-2 block text-xs leading-relaxed  ${selectedStatus === index ? "text-gray-700" : "text-gray-700 "}`}>
                    {status.problem}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div id="detailStatus" className="w-full border-t border-gray-200 !mt-5 !px-6 !py-10 text-teal-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
              <div className="flex min-w-0 flex-col gap-2">
                <img src={detailsStatus[selectedStatus].image} alt={detailsStatus[selectedStatus].imageAlt || detailsStatus[selectedStatus].title} className="aspect-[3/2] w-full rounded-md object-cover" />
                {detailsStatus[selectedStatus].photoSource && (
                  <span className="text-xs text-gray-600">{detailsStatus[selectedStatus].photoSource}</span>
                )}
              </div>
              <div className="min-w-0 !space-y-3">
                <div className="flex items-center gap-3">
                  <SelectedStatusIcon aria-hidden="true" className="mt-0.5 shrink-0 text-xl" />
                  <div className="min-w-0">
                    <h2 className="text-base !text-xl font-bold leading-tight !mb-0 !text-teal-8">
                      {detailsStatus[selectedStatus].title}
                    </h2>
                    <p className="!mt-1 text-xs leading-snug text-gray-600">
                      {detailsStatus[selectedStatus].description}
                    </p>
                  </div>
                </div>
                <div className="border-y border-gray-200 !py-3">
                  <h3 className="text-sm font-semibold text-teal-8">{researchQuestions[selectedStatus].question}</h3>
                  <p className="!mt-1 text-sm leading-relaxed text-gray-700">
                    Why this information matters: {researchQuestions[selectedStatus].why}
                  </p>
                </div>
                {detailsStatus[selectedStatus].details.map((detail, index) => (
                  <p key={index} className="text-sm  leading-relaxed text-gray-700 !mt-5">
                    {detail.trim()}
                  </p>
                ))}
                {selectedStatus === 0 && (
                  <p className="text-xs leading-relaxed text-gray-600">
                    The 5,149 hectares describe the mining contract area, not the area logged.
                  </p>
                )}
                {selectedStatus === 3 && (
                  <p className="text-xs leading-relaxed text-gray-600">
                    The 364,904 board feet are seized lumber, not a measure of all illegal lumber in Caraga.
                  </p>
                )}
                <a
                  href={detailsStatus[selectedStatus].referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block break-words text-sm text-teal-8 underline underline-offset-2 hover:text-teal-700"
                >
                  {detailsStatus[selectedStatus].reference}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="timeline-events" className="border-t border-gray-200 !w-full !px-6 !py-10 text-gray-800">
          
          <div className="text-center">
            <h2 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
              <FaHistory aria-hidden="true" className="shrink-0" />
              Timeline of Key Events
            </h2>
            <p className="!mt-1 text-sm text-gray-600">From national forest trends to the Mount Domadoway case</p>
          </div>
          <ol className="relative !mx-auto !mt-9 max-w-5xl before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-teal-300 md:before:left-1/2">
            {timelineEvents.map((event, index) => (
              <li key={event.date} className={`relative flex !pb-10 last:!pb-0 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                <span className="absolute left-5 top-0 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-teal-200 bg-green-50 text-base text-teal-8 shadow-sm md:left-1/2" aria-hidden="true">
                  <event.icon />
                </span>
                <div className={`min-w-0 w-full !pl-14 md:w-[calc(50%-2.5rem)] md:!pl-0 ${index % 2 === 0 ? "md:pr-4 md:text-right" : ""}`}>
                  <p className="text-sm font-bold text-gray-900">{event.date}</p>
                  <h3 className="!mt-1 text-base font-semibold leading-snug text-teal-8">{event.title}</h3>
                  <p className="!mt-1 text-sm font-semibold text-gray-900">{event.metric}</p>
                  <p className="!mt-2 text-sm leading-relaxed text-gray-700">{event.description}</p>
                  <p className="!mt-2 text-xs leading-relaxed text-gray-700"><span className="font-semibold">Why needed:</span> {event.why}</p>
                  <p className="!mt-1 text-xs leading-relaxed text-gray-700"><span className="font-semibold">Supports:</span> {event.supports}</p>
                  <p className="!mt-1 text-xs leading-relaxed text-gray-700"><span className="font-semibold">Conclusion:</span> {event.conclusion}</p>
                  <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="!mt-2 inline-block text-xs font-medium text-teal-8 underline underline-offset-2 hover:text-teal-700">
                    {event.source}
                  </a>
                </div>
              </li>
            ))}
          </ol>
          <div className="!mx-auto w-full !mt-10 max-w-3xl border-t border-gray-200 !pt-6">
            <div className="">
              <h3 className="text-base font-semibold text-teal-8">What the evidence shows?</h3>
              <p className="!mt-2 text-sm leading-relaxed text-gray-700">
                Illegal logging is part of a broader pattern of deforestation and forest degradation in the Philippines. Historical forest-cover figures show long-term decline, while DENR research identifies logging, agriculture, mining, charcoal production, and other drivers. At Mount Domadoway, unauthorized tree cutting was documented within a 5,149-hectare contract area as early as November 2020. The surrounding forest supports about 2,500 Indigenous Pala'wan people across 12 villages, so continued degradation could affect both ecosystems and forest-dependent communities.
              </p>
            </div>
          </div>
        </section>
      </>
  )
}

export default Home
