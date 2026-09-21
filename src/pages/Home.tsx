import { useState } from "react";
import { FaBullhorn, FaBookOpen, FaChartBar, FaCubes, FaExclamationTriangle, FaExternalLinkAlt, FaFileAlt, FaHistory, FaLeaf, FaMapMarkerAlt, FaSearch, FaShieldAlt, FaTree, FaUsers } from "react-icons/fa";
import philippines from '../assets/images/indegenous/philippines.png'
import indegenous from '../assets/images/indegenous/indegenous_final.png'
import caraigaImg from '../assets/images/indegenous/caraiga_img.png'
import illegalLumber from '../assets/images/indegenous/illegal_lumber4.png'


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
          `Illegal tree cutting was documented near Mount Domadoway in southern Palawan, within a 5,149-hectare mining contract area held by Pyramid Hill Mining and Industrial Corporation. According to the Mines and Geosciences Bureau (MGB), its field office first reported the unauthorized cutting in November 2020, and the forest clearing had not been approved by the government. The incident provides documented evidence of unauthorized forest clearing in Palawan despite provincial environmental protections, including the Strategic Environmental Plan for Palawan (SEP), which restricts commercial logging and provides protection for natural forests and ecologically important areas.`,
          `The incident highlights how unauthorized tree cutting can contribute to forest degradation and the loss of valuable forest resources if it continues. However, the location of the clearing should not be interpreted as evidence that the mining company caused it. The report found no evidence linking Pyramid Hill Mining to the deforestation, although the MGB reminded the company of its responsibility to monitor activities within its concession area. This distinction is important because it presents the documented environmental issue while avoiding an unsupported conclusion about who was responsible.`,
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
       `Around Mount Domadoway in southern Palawan, approximately 2,500 Indigenous Pala’wan people live in 12 surrounding villages. These communities depend on the forest for essential resources, including food and water, while the area also holds cultural importance connected to their traditions and way of life. These figures show the potential scale of the human impact: forest degradation in Mount Domadoway could affect not only the ecosystem but also thousands of people whose daily needs and cultural practices are closely connected to the surrounding forest.`,
       `Continued illegal tree cutting and forest loss could reduce access to natural resources, damage habitats, and disturb culturally significant areas used by Pala’wan communities. The presence of 12 villages and about 2,500 residents therefore makes Indigenous communities important stakeholders in protecting Mount Domadoway. Conserving the forest helps preserve biodiversity and forest resources while also protecting the livelihoods, well-being, and cultural connections of communities that depend on the land.`,
      ],
      reference: "Fabro, K. A. S. (2021). Illegal logging in Philippines’ Palawan stokes fears of a mining resurgence.",
      referenceUrl:
              "https://earthjournalism.net/stories/illegal-logging-in-philippines-palawan-stokes-fears-of-a-mining-resurgence",
    },
    {
      value: "6",
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
      value: "364,904",
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
      needed: "The location, date, government finding, and area actually cleared are needed to verify the incident without overstating its size or assigning blame.",
      answer: "The Mines and Geosciences Bureau confirmed unauthorized tree cutting within the Mount Domadoway contract area in southern Palawan, first reported by its field office in November 2020. The 5,149 hectares describe the mining contract area, not the area logged.",
      conclusion: "This is a documented cutting case, but the report gives no measured area of loss and found no evidence linking the cutting to Pyramid Hill.",
    },
    {
      question: "Who depends on the affected forest?",
      needed: "The number of nearby residents, the communities' forest uses, and their own accounts are needed to judge who could be affected.",
      answer: "The Mount Domadoway report identifies about 2,500 Indigenous Pala'wan people in 12 surrounding villages. It describes the forest as a source of wild food, medicinal plants, water, and culturally important places.",
      conclusion: "Forest degradation could put these resources and places at risk. The population figure describes nearby communities; it is not a count of people already harmed.",
    },
    {
      question: "Is the problem becoming less widespread?",
      needed: "Comparable hotspot counts and their dates are needed to test the reported trend, while the remaining locations show whether the problem persists.",
      answer: "DENR Caraga reported 17 identified illegal logging hotspots at the height of Executive Order No. 23 implementation and six remaining in 2024, a decrease of 11 identified hotspots. The six were in parts of Agusan del Sur and Surigao del Sur.",
      conclusion: "The reported count shows fewer identified hotspots, not the end of illegal logging or a measured 11-site reduction in forest loss.",
    },
    {
      question: "What are enforcement operations still finding?",
      needed: "The reporting period, number of cases, amount of lumber seized, and whether figures describe separate operations are needed to interpret enforcement records accurately.",
      answer: "For January to May 2025, DENR Caraga reported 148 apprehensions and more than 310,000 board feet of undocumented forest products seized. It also reported 132 additional cases involving 364,904 board feet of illegal lumber.",
      conclusion: "These records show continuing enforcement activity despite fewer hotspots. Seized volume is not an estimate of all illegally cut or traded lumber in Caraga.",
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
        <div className="flex w-full items-center gap-3 !px-3 !pt-7 !pb-2 sm:gap-4 sm:!px-6 sm:!pt-8">
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

        <div className="!mx-3 !mt-5 border-l-4 border-teal-700 bg-green-50 !px-4 !py-4 sm:!mx-6 sm:!px-5">
          <div className="flex items-start gap-3">
            <FaBookOpen aria-hidden="true" className="!mt-1 shrink-0 text-lg text-teal-8" />
            <div className="min-w-0">
              <h2 className="!mb-1 text-base font-bold text-teal-8">What is illegal logging?</h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Illegal logging is the cutting, harvesting, transporting, or selling of trees and forest products without the permits or government approval required by law. It can include removing trees from protected or restricted forest areas.
              </p>
              <p className="!mt-2 text-xs leading-relaxed text-gray-600">
                The status figures below connect this definition to documented cases in Palawan and Caraga. They describe a contract area, nearby communities, remaining hotspots, and confiscated lumber; they do not represent one total measurement of forest illegally logged.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3 !px-3 !py-5 sm:grid-cols-2 sm:!px-6 sm:!py-6 lg:grid-cols-4">
            {illegalLoggingStatus.map((status, index) => (
            <button key={status.title}
                  type="button"
                  onClick={() => {
                    setSelectedStatus(index);
                  }}
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
        
        <div id="detailStatus" className="!mt-5 w-full border-t border-gray-200 !px-3 !py-8 text-teal-8 sm:!px-6 sm:!py-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
            <div className="flex min-w-0 flex-col gap-2">
              <div className={`relative aspect-[3/2] w-full overflow-hidden rounded-md lg:aspect-auto lg:min-h-0 lg:flex-1 ${selectedStatus === 0 ? "border border-teal-100 bg-green-50" : "bg-green-50"}`}>
                {selectedStatus === 0 && (
                  <div className="absolute inset-x-0 top-0 z-10 flex h-10 items-center gap-2 border-b border-teal-100 bg-white !px-4 text-xs font-semibold text-teal-8">
                    <FaMapMarkerAlt aria-hidden="true" /> Palawan, Philippines
                  </div>
                )}
                <img
                  src={detailsStatus[selectedStatus].image}
                  alt={detailsStatus[selectedStatus].imageAlt || detailsStatus[selectedStatus].title}
                  className={selectedStatus === 0
                    ? "absolute inset-x-3 bottom-3 top-13 h-[calc(100%-4rem)] w-[calc(100%-1.5rem)] rounded border border-teal-100 bg-white object-contain shadow-sm"
                    : "absolute inset-0 h-full w-full object-cover"}
                />
              </div>
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
              <h3 className="border-y border-gray-200 !py-3 text-sm font-semibold text-teal-8">
                {researchQuestions[selectedStatus].question}
              </h3>
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
              </div>
            </div>
            <div className="!mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Information needed", content: researchQuestions[selectedStatus].needed, icon: FaSearch },
                { title: "Evidence", content: researchQuestions[selectedStatus].answer, icon: FaFileAlt },
                { title: "Conclusion and limit", content: researchQuestions[selectedStatus].conclusion, icon: FaChartBar },
              ].map(({ title, content, icon: Icon }) => (
                <div key={title} className="group min-w-0 cursor-pointer rounded-md border border-teal-100 bg-white !p-4 transition-all duration-200 hover:border-teal-700 hover:bg-green-50 hover:shadow-md">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-teal-8">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-50 text-lg text-teal-8 transition-colors duration-200 group-hover:bg-white"><Icon aria-hidden="true" /></span>
                    {title}
                  </h3>
                  <p className="!mt-3 text-xs leading-relaxed text-gray-700">{content}</p>
                </div>
              ))}
            </div>
            <div className="!mt-5">
              <h3 className="flex items-center gap-2 text-base font-bold text-teal-8">
                <FaBookOpen aria-hidden="true" className="text-xl" /> References
              </h3>
              <div className="!mt-2 flex min-w-0 items-start gap-3 text-xs leading-relaxed">
                <FaFileAlt aria-hidden="true" className="mt-0.5 shrink-0 text-teal-8" />
                <div className="min-w-0">
                  <p className="font-medium text-gray-800">{detailsStatus[selectedStatus].reference}</p>
                  <a href={detailsStatus[selectedStatus].referenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center gap-1 text-blue-700 hover:underline">
                    <span className="min-w-0 break-all">{detailsStatus[selectedStatus].referenceUrl}</span>
                    <FaExternalLinkAlt aria-hidden="true" className="shrink-0" />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section id="timeline-events" className="w-full border-t border-gray-200 !px-3 !py-8 text-gray-800 sm:!px-6 sm:!py-10">
          
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
