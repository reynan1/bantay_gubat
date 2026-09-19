import { useState } from "react";
import { FaCubes, FaExclamationTriangle, FaMapMarkerAlt, FaTree, FaUsers } from "react-icons/fa";
import indegenous from '../assets/images/indegenous/indegenous_final.png'

function Home() {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const illegalLoggingStatus = [
    {
      value: "5,149",
      title: "Illegal Tree Cutting in Mount Domadoway",
      icon: FaTree,
      problem: "Unauthorized tree cutting can harm natural forests, destroy wildlife habitats, and reduce forest resources that people and wildlife depend on.",
      description:
        "Illegal tree cutting was documented within the 5,149-hectare mining contract area near Mount Domadoway in southern Palawan.",
    },
    {
      value: "2,500",
      title: "Indigenous Pala’wan People",
      icon: FaUsers,
      problem: "Forest destruction can affect Pala’wan communities by reducing the food, water, medicinal plants, and culturally important places they depend on.",
      description:
        "Around 2,500 Indigenous Pala’wan people from 12 rurunganen (villages) live around Mount Domadoway.",
    },
    {
      value: "6",
      title: "Illegal Logging Hotspots",
      icon: FaMapMarkerAlt,
      problem: "Illegal logging remains a problem in parts of Caraga. Even though the number of hotspots has decreased, illegal forest activities are still occurring in some areas.",
      description:
        "DENR Caraga reported progress in reducing areas identified as illegal logging hotspots. At the height of the implementation of Executive Order No. 23, the region had 17 identified illegal logging hotspots.",
    },
    {
      value: "364,904",
      title: "Board Feet of Illegal Lumber",
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
        image: indegenous,
        imageAlt: "",
        photoSource: "Images of Indigenous Pala’wan people living",
        description:
          "Unauthorized tree cutting damages natural forests and threatens protected forest resources.",
        details:[
          `Illegal logging refers to the unauthorized cutting or clearing of trees and forest resources without the required government approval. In the Mount Domadoway case, the Mines and Geosciences Bureau (MGB) confirmed that tree cutting occurred within a mining contract area and described the forestland clearing as not government approved.`,
          `In Palawan, natural forests and other ecologically important areas receive legal protection. The Strategic Environmental Plan for Palawan (SEP) established a province-wide commercial logging ban and identifies natural forests, high-elevation areas, endangered-species habitats, and other ecologically important locations as protected areas where most activities are restricted.`,
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
      photoSource: "",
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
      image: indegenous,
      imageAlt: "",
      photoSource: "",
      description:
        "The mining contract covers 5,149 hectares where illegal tree cutting was reported within the concession.",
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
      image: indegenous,
      imageAlt: "",
      photoSource: "",
      description:
        "The MGB said illegal tree cutting in the contract area was first reported in November 2020.",
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
  return (
    <>
    <section id="status-illegal-logging" className="w-full border-t-[1px] text-teal-8">
        <div className="grid grid-cols-1 gap-3 !px-6 !py-5 sm:grid-cols-2 lg:grid-cols-4">
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
                    <FaExclamationTriangle aria-hidden="true" /> Problem
                  </span>
                  <span className={`!mt-2 block text-xs leading-relaxed  ${selectedStatus === index ? "text-gray-700" : "text-gray-700 "}`}>
                    {status.problem}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div id="detailStatus" className="w-full border-t border-gray-200 !px-6 !py-8 text-teal-8">
            <div className="flex justify-between">
              <div className="!space-y-3 w-[100%]">
                <h2 className="text-lg font-semibold">{detailsStatus[selectedStatus].title}</h2>
                {detailsStatus[selectedStatus].details.map((detail, index) => (
                  <p key={index} className="text-sm leading-relaxed text-gray-700">
                    {detail.trim()}
                  </p>
                ))}
                <a
                  href={detailsStatus[selectedStatus].referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block break-words text-sm text-teal-8 underline underline-offset-2 hover:text-teal-700"
                >
                  {detailsStatus[selectedStatus].reference}
                </a>
              </div>
    {/*           <div className="w-45% flex flex-col gap-3">
                  <img src={detailsStatus[selectedStatus].image} alt={`image of ${detailsStatus[selectedStatus].title}`} className='w-90 h-68 rounded-md'/>
                  <span className="text-sm text-center text-gray-900"> {detailsStatus[selectedStatus].photoSource}</span>
              </div> */}
            </div>
          </div>
        </section>
        <section id="status-section">

        </section>
      </>
  )
}

export default Home
