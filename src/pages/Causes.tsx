
import { FaUserCog, FaExclamationTriangle, FaTree, FaShieldAlt, FaMapMarkerAlt, FaCubes} from "react-icons/fa";
import { useState } from "react";
import timberDemand from '../assets/images/causes/timbers.png'
import livelihood from '../assets/images/causes/poverty.png'
import kaingin from '../assets/images/causes/kaingin.png'
import enforcement from '../assets/images/causes/weak-enforcement.png'

function Causes() {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const illegalLoggingCauses = [
      {
        value: "01",
        title: "Demand for Timber",
        problemRefer: "Cause",
        icon: FaTree,
        problem:
          "High demand for wood and timber products can encourage illegal cutting when forest products are harvested without proper permits or authorization.",
        description:
          "Timber is used for construction, furniture, and other products. When demand is supplied through unauthorized harvesting, it contributes to illegal logging.",
      },
      {
        value: "02",
        title: "Timber Poaching",
        problemRefer: "Cause",
        icon: FaCubes,
        problem:
          "Timber poaching involves cutting or collecting trees and forest products from protected or regulated forest areas without legal authorization.",
        description:
          "Unauthorized extraction of timber damages natural forests and can reduce forest resources, wildlife habitats, and biodiversity.",
      },
      {
        value: "03",
        title: "Agricultural Expansion",
        problemRefer: "Cause",
        icon: FaMapMarkerAlt,
        problem:
          "Forested areas may be cleared to create additional land for farming, settlements, or other agricultural activities.",
        description:
          "Forest conversion for agriculture can contribute to deforestation, especially when trees are removed without proper authorization or land-use controls.",
      },
      {
        value: "04",
        title: "Weak Law Enforcement",
        problemRefer: "Cause",
        icon: FaShieldAlt,
        problem:
          "Limited monitoring and enforcement can allow unauthorized tree cutting, transportation, and selling of forest products to continue.",
        description:
          "Effective forest protection requires regular monitoring, enforcement operations, and coordination among government agencies and local communities.",
      },
  ];

  const researchQuestions = [
    {
      question: "Why does demand for timber lead to illegal logging? How does market demand encourage cutting without permits, and why does that cause forest loss?",
      why: "Buyers create income from timber; unauthorized cutting supplies some of that demand. The DENR analysis identifies demand as an underlying driver and illegal logging and timber poaching as direct drivers of forest degradation.",
    },
    {
      question: "Why can limited livelihood options put pressure on forests? How can reliance on forest products lead to unauthorized extraction, and why does that degrade forests?",
      why: "Few income alternatives can increase reliance on timber, fuelwood, and charcoal. The DENR analysis lists poverty among underlying drivers of forest loss; the narrative explains how extraction can become a direct pressure without assuming every forest-dependent household logs illegally.",
    },
    {
      question: "Why is more land cleared for farming? How do kaingin and agricultural expansion remove trees, and why does that result in forest loss?",
      why: "Creating fields and settlements removes existing vegetation. The DENR analysis identifies kaingin and forest conversion for agriculture as direct drivers of deforestation.",
    },
    {
      question: "Why can illegal logging continue under weak enforcement? How do gaps in monitoring allow timber cutting and transport, and why does that increase forest degradation?",
      why: "Limited monitoring makes unauthorized extraction harder to detect and stop. The DENR analysis identifies weak governance as an underlying driver, while the narrative connects it to continuing timber poaching.",
    },
  ];
    const SelectedStatusIcon = illegalLoggingCauses[selectedStatus].icon;
  
    const detailsCauses = [
    {
      value: "01",
      title: "High Demand for Timber and Forest Products",
      image: timberDemand,
      imageAlt: "Timber and forest products from Philippine forests",
      photoSource: "DENR",
      description:
        "Demand for timber and other forest products creates an economic incentive for unauthorized harvesting and timber poaching.",
      details: [
        `One underlying cause of illegal logging is the demand for timber and other forest products. Wood is used for construction, furniture, fuel, and other products. When there is a market willing to buy timber, harvesting trees can provide income to loggers, traders, and other people involved in the timber supply chain.`,

        `The problem occurs when timber is harvested outside legal permits, approved areas, or forest-management rules. Instead of obtaining forest products only from authorized sources, some individuals may engage in timber poaching or unauthorized cutting to supply market demand. This creates a direct connection between economic demand and illegal forest extraction.`,

        `DENR's analysis of the drivers of deforestation and forest degradation identifies economic and market factors, including high demand for wood and forest products, as underlying drivers. The same study identifies legal and illegal logging and timber poaching under forest-product extraction as direct drivers of forest degradation. This makes timber demand an important economic reason behind continued illegal forest extraction.`,
      ],
      reference:
        "DENR — REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },

    {
      value: "02",
      title: "Poverty and Limited Livelihood Opportunities",
      image: livelihood,
      imageAlt: "Forest-dependent community in the Philippines",
      photoSource: "DENR",
      description:
        "Limited sources of income can increase dependence on forests for timber, fuelwood, charcoal, and other products.",
      details: [
        `Poverty and limited livelihood opportunities are underlying factors that can contribute to illegal forest activities. Some communities living near forest areas depend on natural resources for subsistence or additional income. Forest products can provide materials for household use or products that can be sold for cash.`,

        `This becomes a cause of forest degradation when people have few alternative sources of livelihood and turn to activities such as unauthorized timber harvesting, fuelwood gathering, or charcoal production. The economic need does not automatically mean that forest-dependent communities engage in illegal logging, but limited livelihood options can increase pressure on forest resources.`,

        `DENR's analysis identifies poverty, landlessness, and population pressure among the socio-demographic factors underlying deforestation and forest degradation. A separate assessment in Eastern Samar and Davao Oriental also identifies poverty and limited livelihood opportunities among factors associated with activities such as timber poaching and forest-product extraction.`,
      ],
      reference:
        "DENR — REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },

    {
      value: "03",
      title: "Agricultural Expansion and Kaingin",
      image: kaingin,
      imageAlt: "Forest clearing for agricultural land",
      photoSource: "DENR",
      description:
        "Forests may be cleared to create farmland, settlements, plantations, or areas for agricultural production.",
      details: [
        `Agricultural expansion is another major cause of forest loss in the Philippines. Forest areas may be cleared to create space for crops, settlements, plantations, and other agricultural activities. Kaingin, or slash-and-burn cultivation, is one form of agricultural expansion identified in Philippine forest studies.`,

        `The process directly removes forest vegetation. Trees and other plants are cut, and in some cases the remaining vegetation is burned so the land can be cultivated. When farmers need additional land because existing plots have become less productive or are insufficient for their needs, clearing can expand into other forest areas.`,

        `DENR's study identified kaingin as an important direct driver of deforestation. Its assessment describes agricultural expansion as including kaingin, shifting cultivation, and conversion of forestlands into settlements and plantations. Therefore, agricultural expansion contributes to forest loss because creating new agricultural land can require removing existing forest cover.`,
      ],
      reference:
        "DENR — REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },

    {
      value: "04",
      title: "Weak Forest Governance and Enforcement",
      image: enforcement,
      imageAlt: "Forest monitoring and law enforcement operation",
      photoSource: "DENR",
      description:
        "Gaps in forest governance, monitoring, and enforcement can make unauthorized forest activities more difficult to prevent.",
      details: [
        `Illegal logging can continue when forest governance and enforcement are insufficient to prevent unauthorized activities. Philippine forests cover large and sometimes remote areas, making regular monitoring and protection important for detecting illegal tree cutting and timber transportation.`,

        `When monitoring is inadequate or rules are poorly enforced, people involved in unauthorized logging may have more opportunities to cut, transport, or trade timber without being immediately detected. Governance problems can therefore enable direct causes such as timber poaching and illegal forest-product extraction to continue.`,

        `DENR's analysis identifies weak policies and governance among the underlying causes of deforestation and forest degradation. Studies of Philippine REDD+ sites also recommend stronger forest law enforcement, increased capacity for forest guards, and stricter implementation of forest protection laws. This shows that governance and enforcement affect how effectively illegal forest activities can be prevented and controlled.`,
      ],
      reference:
        "DENR — REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },
  ];

  return (
    <section id="status-illegal-logging" className="w-full border-t-[1px] text-teal-8">
        <div className="flex w-full items-center gap-4 !px-6 !pt-8 !pb-2">
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
          <div className="text-center">
            <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
              <FaUserCog aria-hidden="true" className="shrink-0" />
                Main Human Activities That Cause Forest Loss
            </h1>
            <p className="!mt-1 text-xs text-gray-600">Documented forest cases in Palawan and Caraga</p>
          </div>
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-3 !px-6 !py-6 sm:grid-cols-2 lg:grid-cols-4">
            {illegalLoggingCauses.map((status, index) => (
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
                    `}>
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
              <img src={detailsCauses[selectedStatus].image} alt={detailsCauses[selectedStatus].imageAlt || detailsCauses[selectedStatus].title} className="aspect-[3/2] w-full rounded-md object-cover" />
                {detailsCauses[selectedStatus].photoSource && (
                  <span className="text-xs text-gray-600">{detailsCauses[selectedStatus].photoSource}</span>
              )}
            </div>
            
            <div className="min-w-0 !space-y-3">
              <div className="flex items-center gap-3">
                <SelectedStatusIcon aria-hidden="true" className="mt-0.5 shrink-0 text-xl" />
                <div className="min-w-0">
                    <h2 className="text-base !text-xl font-bold leading-tight !mb-0 !text-teal-8">
                      {detailsCauses[selectedStatus].title}
                    </h2>
                    <p className="!mt-1 text-xs leading-snug text-gray-600">
                      {detailsCauses[selectedStatus].description}
                    </p>
                </div>
              </div>
              <div className="border-y border-gray-200 !py-3">
                <h3 className="text-sm font-semibold text-teal-8">{researchQuestions[selectedStatus].question}</h3>
                <p className="!mt-1 text-sm leading-relaxed text-gray-700">
                  Evidence: {researchQuestions[selectedStatus].why}
                </p>
              </div>
                {detailsCauses[selectedStatus].details.map((detail, index) => (
                  <p key={index} className="text-sm  leading-relaxed text-gray-700 !mt-5">
                    {detail.trim()}
                  </p>
                ))}
                <a
                  href={detailsCauses[selectedStatus].referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block break-words text-sm text-teal-8 underline underline-offset-2 hover:text-teal-700"
                >
                  {detailsCauses[selectedStatus].reference}
                </a>
              </div>
            </div>
        </div>    
     
      </section>
  )
}

export default Causes
