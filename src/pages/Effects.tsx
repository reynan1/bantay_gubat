import { useState } from "react";
import { GiAxeInStump } from "react-icons/gi";
import {
  FaBookOpen,
  FaChartBar,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGlobeAsia,
  FaUsers,
  FaLeaf,
  FaMapMarkerAlt,
  FaSearch,
  FaTree,
  FaWater,
  FaArrowRight,
} from "react-icons/fa";
import forestImpact1 from "../assets/images/effect-forest-1.png";
import forestImpact2 from "../assets/images/effect-forest-2.png";
import forestImpact3 from "../assets/images/effect-forest-3.png";
import forestImpact4 from "../assets/images/effect-forest-4.png";
import forestImpact5 from "../assets/images/effect-forest-5.png";
import habitatImpact1 from "../assets/images/effect-habitat-1.png";
import habitatImpact2 from "../assets/images/effect-habitat-2.png";
import habitatImpact3 from "../assets/images/effect-habitat-3.png";
import habitatImpact4 from "../assets/images/effect-habitat-4.png";
import habitatImpact5 from "../assets/images/effect-habitat-5.png";
import waterImpact1 from "../assets/images/effect-water-1.png";
import waterImpact2 from "../assets/images/effect-water-2.png";
import waterImpact3 from "../assets/images/effect-water-3.png";
import waterImpact4 from "../assets/images/effect-water-4.png";
import waterImpact5 from "../assets/images/effect-water-5.png";
import climateImpact1 from "../assets/images/effect-climate-1.png";
import climateImpact2 from "../assets/images/effect-climate-2.png";
import climateImpact3 from "../assets/images/effect-climate-3.png";
import climateImpact4 from "../assets/images/effect-climate-4.png";
import climateImpact5 from "../assets/images/effect-climate-5.png";
import communityImpact1 from "../assets/images/effect-community-1.png";
import communityImpact2 from "../assets/images/effect-community-2.png";
import communityImpact3 from "../assets/images/effect-community-3.png";
import communityImpact4 from "../assets/images/effect-community-4.png";
import communityImpact5 from "../assets/images/effect-community-5.png";

function Effects() {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [selectedImpact, setSelectedImpact] = useState(0);

  const illegalLoggingEffects = [
    {
      value: "01",
      title: "Forest Loss and Degradation",
      problemRefer: "Effect",
      icon: FaTree,
      problem:
        "Tree removal reduces forest cover, weakens regeneration, and leaves remaining forest more fragmented.",
    },
    {
      value: "02",
      title: "Habitat Pressure",
      problemRefer: "Effect",
      icon: FaLeaf,
      problem:
        "Forest-dependent wildlife lose nesting, feeding, and movement areas when tree cover is cleared or broken apart.",
    },
    {
      value: "03",
      title: "Soil and Water Impacts",
      problemRefer: "Effect",
      icon: FaWater,
      problem:
        "Without tree roots and canopy cover, slopes become more exposed to erosion, runoff, flooding, and sedimentation.",
    },
    {
      value: "04",
      title: "Climate Impacts",
      problemRefer: "Effect",
      icon: FaGlobeAsia,
      problem:
        "Removing and degrading forests reduces stored carbon and the forest's capacity to absorb future emissions.",
    },
    {
      value: "05",
      title: "Community Livelihoods",
      problemRefer: "Effect",
      icon: FaUsers,
      problem:
        "Forest loss can reduce access to food, materials, and income for communities that rely on healthy forests.",
    },
  ];

  const SelectedStatusIcon = illegalLoggingEffects[selectedStatus].icon;
  const detailEffects = [
    {
      value: "01",
      title: "Forest Loss and Degradation",
      description:
        "Illegal logging removes trees faster than forests can naturally recover, causing direct forest loss and long-term degradation.",
      impactChain: [
        {
          question: "What happens after trees are removed?",
          image: forestImpact1,
          answer:
            "Forest cover becomes thinner or disappears entirely. The remaining forest is more fragmented, which makes it harder for seedlings, wildlife, and forest processes to recover.",
        },
        {
          question: "Why does degradation continue after cutting?",
          image: forestImpact2,
          answer:
            "Roads, trails, repeated timber removal, and exposed edges can keep disturbing the area even after the first trees are gone.",
        },
        {
          question: "Why does this matter for nearby communities?",
          image: forestImpact3,
          answer:
            "Degraded forests provide fewer resources, less shade, weaker slope protection, and less reliable water regulation for people living nearby.",
        },
        {
          question: "How does fragmentation affect recovery?",
          image: forestImpact4,
          answer:
            "Smaller, isolated patches have fewer seed sources and more exposed edges, making natural regeneration harder.",
        },
        {
          question: "What can happen after repeated cutting?",
          image: forestImpact5,
          answer:
            "Repeated disturbance can prevent young trees from maturing and leave the forest with less diverse vegetation.",
        },
      ],
      philippinesCase: "Nueva Ecija, Palawan, and Davao Oriental",
      informationNeeded:
        "Forest-cover maps, tree-cutting reports, permits, satellite images, and field validation are needed to separate illegal logging from other land-use changes.",
      evidence:
        "Philippine forest assessments and reported illegal tree-cutting cases show that unauthorized removal contributes to forest degradation, especially when enforcement and land-use controls are weak.",
      conclusion:
        "Forest loss is the first visible effect of illegal logging, but the deeper damage is the slower recovery of the whole forest system.",
      reference:
        "DENR - REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
      supportingReference:
        "Mongabay - Illegal logging in Philippines' Palawan stokes fears of a mining resurgence",
      supportingUrl:
        "https://news.mongabay.com/2021/06/illegal-logging-in-philippines-palawan-stokes-fears-of-a-mining-resurgence/",
    },
    {
      value: "02",
      title: "Habitat Pressure",
      description:
        "When forest cover is removed, animals and plants lose connected habitat and become more vulnerable to disturbance.",
      impactChain: [
        {
          question: "What happens to wildlife habitat?",
          image: habitatImpact1,
          answer:
            "Nesting trees, food sources, shade, and travel corridors are reduced. Wildlife may be pushed into smaller patches where competition and exposure increase.",
        },
        {
          question: "Why does fragmentation add pressure?",
          image: habitatImpact2,
          answer:
            "A forest broken into smaller pieces has more exposed edges and fewer continuous routes for wildlife movement, feeding, and reproduction.",
        },
        {
          question: "Why are sensitive areas at higher risk?",
          image: habitatImpact3,
          answer:
            "Places with high biodiversity or endangered species can lose ecological value quickly because many species depend on specific forest conditions.",
        },
        {
          question: "What happens when food sources disappear?",
          image: habitatImpact4,
          answer:
            "Animals may travel farther to feed or compete for fewer resources, increasing their exposure to disturbance.",
        },
        {
          question: "How can plant diversity change?",
          image: habitatImpact5,
          answer:
            "Species that need a shaded, stable forest floor may decline as canopy gaps alter light and moisture.",
        },
      ],
      philippinesCase: "El Nido, Palawan",
      informationNeeded:
        "Species records, habitat maps, forest-cover change data, and site inspections are needed to measure how tree removal affects biodiversity.",
      evidence:
        "Palawan reports connect forest disturbance with risks to ecological areas and communities that depend on intact forest systems.",
      conclusion:
        "Habitat pressure is not only about losing trees; it is about breaking the living space that forest species need to survive.",
      reference:
        "Mongabay - Illegal logging in Philippines' Palawan stokes fears of a mining resurgence",
      referenceUrl:
        "https://news.mongabay.com/2021/06/illegal-logging-in-philippines-palawan-stokes-fears-of-a-mining-resurgence/",
      supportingReference:
        "DENR - REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      supportingUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },
    {
      value: "03",
      title: "Soil and Water Impacts",
      description:
        "Tree removal exposes soil and weakens the natural systems that slow runoff, hold slopes together, and filter water.",
      impactChain: [
        {
          question: "What happens to soil after trees are removed?",
          image: waterImpact1,
          answer:
            "Soil loses root support and canopy protection. Rain can strike the ground harder, loosen topsoil, and carry sediment downhill.",
        },
        {
          question: "How does this affect rivers and settlements?",
          image: waterImpact2,
          answer:
            "More runoff and sediment can raise flood risk, muddy waterways, reduce water quality, and damage farms or homes downstream.",
        },
        {
          question: "Why are mountain forests important?",
          image: waterImpact3,
          answer:
            "Mountain forests help regulate watersheds. When slopes are degraded, heavy rain can move faster through the landscape.",
        },
        {
          question: "What happens to topsoil?",
          image: waterImpact4,
          answer:
            "Rain can wash away nutrient-rich topsoil, making it harder for new plants to establish on exposed ground.",
        },
        {
          question: "How does sediment affect waterways?",
          image: waterImpact5,
          answer:
            "Sediment can cloud rivers and accumulate downstream, affecting aquatic habitats and the use of water by communities.",
        },
      ],
      philippinesCase: "Aurora and the Sierra Madre",
      informationNeeded:
        "Rainfall records, slope maps, erosion observations, river sediment data, and forest-cover change data are needed to connect logging to water impacts.",
      evidence:
        "Forest degradation is widely linked to erosion, sedimentation, and higher flood vulnerability, especially in steep watershed areas.",
      conclusion:
        "Soil and water impacts often appear downstream, so the harm from illegal logging can reach far beyond the cutting site.",
      reference:
        "DENR - REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
      supportingReference:
        "Philippine Information Agency - DENR anti-illegal logging operations in Caraga, 2025",
      supportingUrl:
        "https://pia.gov.ph/news/denr-slashes-number-of-illegal-logging-hotspots-across-caraga/",
    },
    {
      value: "04",
      title: "Climate Impacts",
      description:
        "Illegal logging degrades forests that store carbon and help absorb carbon dioxide from the atmosphere.",
      impactChain: [
        {
          question: "What happens to carbon stored in trees?",
          image: climateImpact1,
          answer:
            "Cutting removes living carbon stores. Some of that carbon can return to the atmosphere as wood and debris decay or burn.",
        },
        {
          question: "Why does recovery matter?",
          image: climateImpact2,
          answer:
            "A degraded forest may take years to regain its carbon stocks, and repeated cutting can delay that recovery.",
        },
        {
          question: "How does this affect climate action?",
          image: climateImpact3,
          answer:
            "Protecting and restoring forests helps preserve carbon storage and supports efforts to limit emissions.",
        },
        {
          question: "What happens when cut wood decays or burns?",
          image: climateImpact4,
          answer:
            "Some of the carbon stored in harvested wood and debris returns to the atmosphere as carbon dioxide.",
        },
        {
          question: "Why does continued forest loss matter?",
          image: climateImpact5,
          answer:
            "Fewer mature trees mean less living biomass available to store carbon while the forest regrows.",
        },
      ],
      philippinesCase: "Philippine forest landscapes monitored under REDD+",
      informationNeeded:
        "Forest-cover maps, timber-removal records, and carbon-stock estimates are needed to measure emissions and lost carbon uptake at a site.",
      evidence:
        "DENR identifies forest degradation, including illegal logging, in its forest carbon accounting and climate mitigation work.",
      conclusion:
        "Illegal logging can weaken the climate benefits of forests long after the initial cutting.",
      reference:
        "DENR - REDD+ Conceptual Approach to Measurement, Reporting, and Verification in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/1782c8cb-0656-4e61-a5a7-2e2d156da59e",
      supportingReference:
        "DENR - REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      supportingUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },
    {
      value: "05",
      title: "Community Livelihoods",
      description:
        "Forest degradation can affect the resources and income of people who depend on forests and nearby watersheds.",
      impactChain: [
        {
          question: "What resources can communities lose?",
          image: communityImpact1,
          answer:
            "Forest damage can reduce access to non-timber products, clean water, and other resources used for food and income.",
        },
        {
          question: "Who feels these changes first?",
          image: communityImpact2,
          answer:
            "Forest-dependent households and Indigenous communities may face the effects directly when familiar sources of food, materials, or livelihood become less reliable.",
        },
        {
          question: "What happens beyond the forest?",
          image: communityImpact3,
          answer:
            "Erosion and changes to watersheds can also affect farms and settlements downstream.",
        },
        {
          question: "How can income be affected?",
          image: communityImpact4,
          answer:
            "When forest products become harder to collect, households may lose a source of food, materials, or income.",
        },
        {
          question: "Why does community participation matter?",
          image: communityImpact5,
          answer:
            "Local knowledge and participation help identify changes in forest resources and support restoration that meets community needs.",
        },
      ],
      philippinesCase: "Forest-dependent communities in Caraga",
      informationNeeded:
        "Community interviews, livelihood records, forest-use maps, and water-quality data are needed to identify local effects and distinguish them from other pressures.",
      evidence:
        "FAO reports that forest degradation in the Philippines threatens the livelihoods of forest-dependent communities, particularly Indigenous Peoples.",
      conclusion:
        "The effects of illegal logging extend to the people whose livelihoods rely on healthy forests.",
      reference:
        "FAO - The revival of a damaged Philippines watershed is helping improve nutrition and livelihoods of communities",
      referenceUrl:
        "https://www.fao.org/philippines/news/detail/fr/c/1651086/",
      supportingReference:
        "FAO - Filipino timber producers gain new skills to enhance legal timber production and livelihood generation",
      supportingUrl:
        "https://www.fao.org/in-action/legal-sustainable-wood-assurance-programme/fao-eu-flegt-programme-2008-2022/news-events/news-details/en/c/1513564/",
    },
  ];

  return (
    <section id="effects-illegal-logging" className="w-full border-t-[1px] text-teal-8">
      <div className="flex w-full items-center gap-3 !px-3 !pt-7 !pb-2 sm:gap-4 sm:!px-6 sm:!pt-8">
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
            <GiAxeInStump aria-hidden="true" className="shrink-0" />
            Effects of Illegal Logging
          </h1>
          <p className="!mt-1 text-xs text-gray-600">
            What happens after trees are removed?
          </p>
        </div>
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
      </div>

      <div className="flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto !px-3 !py-5 sm:!px-6 sm:!py-6">
        {illegalLoggingEffects.map((status, index) => (
          <button
            key={status.title}
            type="button"
            onClick={() => {
              setSelectedStatus(index);
              setSelectedImpact(0);
            }}
            aria-pressed={selectedStatus === index}
            aria-controls="detailEffects"
            className={`
              group flex min-w-[82vw] snap-start flex-1 cursor-pointer flex-col rounded-md border p-3 text-left shadow-sm sm:min-w-[280px] lg:min-w-0
              transition-colors duration-200 hover:border-teal-700 hover:bg-teal-8 hover:text-white
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700
              ${selectedStatus === index ? "border-teal-8 !rounded-md bg-teal-8 text-white" : "border-gray-200 bg-white text-teal-8"}
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
            <div className="!mt-2 w-full flex-1 rounded-bl-md rounded-br-md bg-green-50 !py-3 !px-4 transition-colors">
              <span className="flex items-center gap-2 text-xs font-bold text-teal-8">
                <FaExclamationTriangle aria-hidden="true" /> {status.problemRefer}
              </span>
              <span className="!mt-2 block text-xs leading-relaxed text-gray-700">
                {status.problem}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div id="detailEffects" className="!mt-5 w-full border-t border-gray-200 !px-3 !py-8 text-teal-8 sm:!px-6 sm:!py-10">
        <div className="min-w-0 !space-y-3">
            <div className="flex items-center gap-3">
              <SelectedStatusIcon aria-hidden="true" className="mt-0.5 shrink-0 text-xl" />
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Impact Chain
                </span>
                <h2 className="text-base !text-xl font-bold leading-tight !mb-0 !text-teal-8">
                  {detailEffects[selectedStatus].title}
                </h2>
                <p className="!mt-1 text-xs leading-snug text-gray-600">
                  {detailEffects[selectedStatus].description}
                </p>
              </div>
            </div>

            <ol className="!mt-6 flex gap-4 overflow-x-auto !pb-4 lg:overflow-visible">
              {detailEffects[selectedStatus].impactChain.map((step, index) => {
                return (
                  <li key={step.question} className="relative min-w-[170px] flex-1 lg:min-w-0">
                    <button
                      type="button"
                      onClick={() => setSelectedImpact(index)}
                      aria-pressed={selectedImpact === index}
                      aria-controls="selected-impact-detail"
                      className={`flex h-full w-full cursor-pointer flex-col items-start border-b-2 !px-1 !pb-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${selectedImpact === index ? "border-teal-700" : "border-transparent hover:border-teal-300"}`}
                    >
                      <img src={step.image} alt="" className="block aspect-[4/3] w-full object-contain" />
                      <span className="!mt-2 text-xs font-bold leading-snug text-teal-8">{index + 1}. {step.question}</span>
                      <span className="!mt-1 line-clamp-3 text-xs leading-relaxed text-gray-600">{step.answer}</span>
                    </button>
                    {index < 4 && <FaArrowRight aria-hidden="true" className="absolute top-12 -right-3 z-10 text-xl text-[#3f9977]" />}
                  </li>
                );
              })}
            </ol>
            <div id="selected-impact-detail" className="!mt-5 border-l-4 border-teal-700 bg-green-50 !px-5 !py-4" aria-live="polite">
              <span className="text-xs font-bold uppercase text-teal-700">Impact {selectedImpact + 1} of 5</span>
              <h3 className="!mt-1 text-base font-bold text-teal-8">{detailEffects[selectedStatus].impactChain[selectedImpact].question}</h3>
              <p className="!mt-2 text-sm leading-relaxed text-gray-700">{detailEffects[selectedStatus].impactChain[selectedImpact].answer}</p>
            </div>
        </div>

        <div className="!mt-8 grid gap-2 sm:grid-cols-2 xl:grid-cols-[1.15fr_1.35fr_1.35fr_1fr]">
          {[
            { title: "Philippine case", content: detailEffects[selectedStatus].philippinesCase, icon: FaMapMarkerAlt },
            { title: "Information needed", content: detailEffects[selectedStatus].informationNeeded, icon: FaSearch },
            { title: "Evidence", content: detailEffects[selectedStatus].evidence, icon: FaFileAlt },
            { title: "Conclusion", content: detailEffects[selectedStatus].conclusion, icon: FaChartBar },
          ].map(({ title, content, icon: Icon }) => (
            <div key={title} className="group min-w-0 cursor-pointer rounded-md border border-teal-100 bg-white !p-4 transition-all duration-200 hover:border-teal-700 hover:bg-green-50 hover:shadow-md">
              <h3 className="flex items-center gap-2 text-sm font-bold text-teal-8">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-50 text-lg text-teal-8 transition-colors duration-200 group-hover:bg-white">
                  <Icon aria-hidden="true" />
                </span>
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
          <div className="!mt-2 grid gap-4 sm:grid-cols-2">
            {[
              { label: detailEffects[selectedStatus].reference, url: detailEffects[selectedStatus].referenceUrl },
              { label: detailEffects[selectedStatus].supportingReference, url: detailEffects[selectedStatus].supportingUrl },
            ].map(({ label, url }) => (
              <div key={url} className="flex min-w-0 items-start gap-3 text-xs leading-relaxed">
                <FaFileAlt aria-hidden="true" className="mt-0.5 shrink-0 text-teal-8" />
                <div className="min-w-0">
                  <p className="font-medium text-gray-800">{label}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center gap-1 text-blue-700 hover:underline">
                    <span className="min-w-0 break-all">{url}</span>
                    <FaExternalLinkAlt aria-hidden="true" className="shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Effects;
