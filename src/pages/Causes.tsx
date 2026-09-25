
import { FaUserCog, FaExclamationTriangle, FaTree, FaShieldAlt, FaMapMarkerAlt, FaCubes, FaChevronDown, FaBullseye, FaSearch, FaFileAlt, FaChartBar, FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import timberDemand from '../assets/images/causes/timbers.png'
import livelihood from '../assets/images/causes/poverty.png'
import kaingin from '../assets/images/causes/kaingin.png'
import enforcement from '../assets/images/causes/weak-enforcement.png'

function Causes() {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [openWhy, setOpenWhy] = useState<number | null>(null);
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
        title: "Limited Livelihoods",
        problemRefer: "Cause",
        icon: FaCubes,
        problem:
          "Poverty and limited livelihood options can increase reliance on forest products for household needs or income.",
        description:
          "This pressure can contribute to unauthorized extraction, though relying on a forest does not itself mean logging illegally.",
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

    const SelectedStatusIcon = illegalLoggingCauses[selectedStatus].icon;
  
    const detailsCauses = [
    {
      value: "01",
      title: "High Demand for Timber and Forest Products",
      image: timberDemand,
      imageAlt: "Timber and forest products linked to Sierra Madre forest pressure",
      photoSource: "DENR",
      description:
        "Demand for timber and other forest products creates an economic incentive for unauthorized harvesting and timber poaching.",
      fiveWhys: [
        { question: "Why are trees cut for timber?", answer: "Wood is used in construction, furniture, fuel, and other products. Supplying these uses requires harvesting trees, whether from legal sources or, in some cases, from forests where cutting is unauthorized." },
        { question: "Why does that demand encourage harvesting?", answer: "Buyers give timber a sale value. That value creates income for people who cut, move, process, or sell wood, so stronger demand can increase the incentive to extract forest products." },
        { question: "Why might some supply come from unauthorized cutting?", answer: "Demand does not make logging illegal by itself. The harm arises when suppliers cut trees without authorization or take timber from areas outside approved forest-management rules to meet that demand." },
        { question: "Why does unauthorized cutting damage forests?", answer: "Cutting removes trees and reduces the forest resources available for natural regeneration, habitat, and future use. DENR treats illegal logging and timber poaching as direct forms of forest-product extraction that degrade forests." },
        { question: "Why is timber demand considered an underlying cause?", answer: "DENR separates the immediate activity from the pressure behind it: illegal logging and timber poaching directly remove forest products, while high demand for wood helps explain why people may keep supplying them. The source identifies market demand as an underlying driver, not proof that every timber sale is illegal." },
      ],
      rootCause: "A strong market demand for wood creates an economic incentive for timber poaching and unauthorized harvesting when legal supply, monitoring, or compliance controls are weak.",
      informationNeeded: "Evidence of demand for wood, how timber is supplied, and whether extraction is authorized is needed to connect a market incentive to illegal forest removal.",
      evidence: "The DENR drivers analysis names high demand for wood as an underlying market factor and illegal logging and timber poaching as direct forest-product extraction. Sierra Madre enforcement reports also show that illegal timber can move from watershed forests into transport and market routes.",
      conclusion: "The two studies support a demand-to-extraction pathway. They do not measure how much Philippine forest loss is caused by demand alone, and legal timber sales should not be counted as illegal logging.",
      supportingReference: "Philstar - hot logs seized in Sierra Madre watershed",
      supportingUrl: "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed",
      reference:
        "DENR — REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },

    {
      value: "02",
      title: "Poverty and Limited Livelihood Opportunities",
      image: livelihood,
      imageAlt: "Forest-dependent community in the Sierra Madre",
      photoSource: "DENR",
      description:
        "Limited sources of income can increase dependence on forests for timber, fuelwood, charcoal, and other products.",
      fiveWhys: [
        { question: "Why do some households rely on forest products?", answer: "Nearby forests can supply fuelwood and other materials for daily use. Timber, charcoal, and other products may also be gathered or produced for cash income when households need to meet basic expenses." },
        { question: "Why can that reliance become stronger?", answer: "Poverty, landlessness, and limited work or farming opportunities can narrow the alternatives available to a household. DENR lists these social pressures among the underlying factors that can move people into forestlands for subsistence or income." },
        { question: "Why can this put pressure on forests?", answer: "When more needs are met through forest products, collection may intensify. Fuelwood gathering, charcoal making, and timber extraction are distinct activities, but DENR groups them as direct forms of forest-product extraction that can affect forest condition." },
        { question: "Why can some extraction become a cause of degradation?", answer: "Repeated removal of wood can reduce forest resources, especially when extraction exceeds what can recover. Unauthorized timber cutting adds a legal and management problem; using forest resources for subsistence does not mean every forest-dependent household logs illegally." },
        { question: "Why are livelihoods an underlying cause?", answer: "Poverty does not cut a tree on its own. It can increase dependence on forest products, which may lead to direct extraction when other income options are scarce. DENR therefore treats poverty and landlessness as underlying pressures rather than as proof of illegal activity by a particular community." },
      ],
      rootCause: "Poverty, landlessness, and few livelihood alternatives can push households toward forest-product extraction for basic needs or income, increasing pressure on forests.",
      informationNeeded: "Evidence about household income options, dependence on forest products, and the type of extraction is needed to distinguish livelihood pressure from an allegation of illegal logging.",
      evidence: "The DENR drivers analysis lists poverty and landlessness among underlying pressures. Research in the Northern Sierra Madre also shows why conservation work must consider Indigenous and local community participation, livelihoods, and access to forest resources.",
      conclusion: "These findings support a link between limited options and pressure on forests, but neither study shows that every forest-dependent household takes timber illegally.",
      supportingReference: "Limits to Indigenous Participation: The Agta and the Northern Sierra Madre Natural Park",
      supportingUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4194021/",
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
      fiveWhys: [
        { question: "Why are forest areas cleared?", answer: "Trees may be removed to make room for crops, settlements, or plantations. This changes land from forest cover to another use, so the clearing itself is a direct cause of deforestation." },
        { question: "Why does expansion move into forested land?", answer: "The DENR analysis links pressure on forestland to needs for subsistence and income, as well as to low farm productivity and landlessness. These pressures can make new land attractive when existing farmland is limited or less productive." },
        { question: "Why does kaingin remove forest cover?", answer: "Kaingin prepares a plot by cutting vegetation and, in slash-and-burn practice, burning what remains. The trees and other plants that formed the original forest cover are removed before crops are planted." },
        { question: "Why can clearing continue across more land?", answer: "Shifting cultivation can move cultivation to another plot, while settlements or plantations can convert forestland for longer-term use. Each new clearing extends the area from which forest vegetation has been removed." },
        { question: "Why is agriculture a documented cause of forest loss?", answer: "DENR identifies kaingin, shifting cultivation, and conversion to settlements or plantations as direct agricultural drivers. Its study reports that informants ranked kaingin as a major driver of deforestation; that finding concerns the study sites and should not be read as a measured share of all Philippine forest loss." },
      ],
      rootCause: "Need for land, income, and food production can drive forest conversion when existing farmland is limited, unproductive, or poorly controlled by land-use planning.",
      informationNeeded: "Land-use changes, where clearing occurred, and whether forest cover was replaced by farms or settlements are needed to establish agricultural expansion as a direct cause.",
      evidence: "The DENR drivers analysis identifies kaingin, shifting cultivation, and conversion to settlements or plantations. In the Sierra Madre, these pressures matter because clearing on slopes can affect habitat, watersheds, and downstream communities.",
      conclusion: "Both studies connect clearing for cultivation with forest loss. Their site findings cannot be used as a national percentage of deforestation caused by agriculture.",
      supportingReference: "GMA News - Sierra Madre and nature-based solutions against floods",
      supportingUrl: "https://www.gmanetwork.com/news/lifestyle/content/1001970/explainer-why-are-the-sierra-madre-and-nature-based-solutions-important-vs-floods/story/",
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
      fiveWhys: [
        { question: "Why can unauthorized tree cutting continue?", answer: "Rules protect forests only when unauthorized cutting is detected and addressed. Weak enforcement can leave more opportunities for people to cut, transport, or sell timber without timely intervention." },
        { question: "Why is monitoring difficult?", answer: "Forest protection requires people, coordination, and reliable information across large areas. DENR also describes conflicting responsibilities among agencies and unstable forest policies as governance problems that can complicate consistent action." },
        { question: "Why do gaps in monitoring matter?", answer: "If cutting or transport is not noticed, authorities have less opportunity to stop the activity or check whether the timber was lawfully obtained. Inconsistent oversight can allow unauthorized forest-product extraction to continue." },
        { question: "Why can undetected activity degrade forests?", answer: "Repeated timber poaching takes wood from forests without the controls intended to manage extraction. DENR classifies illegal logging and timber poaching as direct drivers of forest degradation because they remove forest products." },
        { question: "Why is weak governance an underlying cause?", answer: "Weak policies or conflicting agency mandates do not directly remove trees. They can make it harder to prevent and respond to the activities that do. DENR identifies governance as an underlying driver and recommends clearer policy and stronger forest management to address it." },
      ],
      rootCause: "Insufficient monitoring capacity, unclear responsibilities, and inconsistent enforcement weaken forest governance and allow unauthorized extraction to continue.",
      informationNeeded: "Records of monitoring, apprehensions, and remaining hotspots are needed to judge whether enforcement gaps allow unauthorized extraction to persist.",
      evidence: "DENR identifies weak governance as an underlying cause. In the Sierra Madre watershed, reported seizures of hot logs show why field monitoring, checkpoints, case handling, and community reporting remain important.",
      conclusion: "The hotspot count suggests progress while the seizures show continued enforcement activity. These figures do not measure the total volume of illegal logging or prove that weak enforcement caused any particular seizure.",
      supportingReference: "Philstar - hot logs seized in Sierra Madre watershed",
      supportingUrl: "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed",
      reference:
        "DENR — REDD+ Analysis of Key Drivers of Deforestation and Forest Degradation in the Philippines",
      referenceUrl:
        "https://faspselib.denr.gov.ph/Materials/Detail/d3aad246-e7c5-4579-8eda-88c1b1b5e709",
    },
  ];

  return (
    <section id="status-illegal-logging" className="w-full border-t-[1px] text-teal-8">
        <div className="flex w-full items-center gap-3 !px-3 !pt-7 !pb-2 sm:gap-4 sm:!px-6 sm:!pt-8">
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
          <div className="text-center">
            <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
              <FaUserCog aria-hidden="true" className="shrink-0" />
                Main Human Activities That Cause Forest Loss
            </h1>
            <p className="!mt-1 text-xs text-gray-600">Research on direct and underlying drivers of Sierra Madre forest loss</p>
          </div>
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-3 !px-3 !py-5 sm:grid-cols-2 sm:!px-6 sm:!py-6 lg:grid-cols-4">
            {illegalLoggingCauses.map((status, index) => (
             <button key={status.title}
                      type="button"
                      onClick={() => {
                        setSelectedStatus(index);
                        setOpenWhy(null);
                      }}
                      aria-pressed={selectedStatus === index}
                      aria-controls="detailStatus"
                      className="forest-selector-card group flex h-full min-w-0 cursor-pointer flex-col rounded-md border p-3 text-left text-teal-8 shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
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
              <ol className="!mt-5 divide-y divide-gray-200 border-y border-gray-200">
                {detailsCauses[selectedStatus].fiveWhys.map((step, index) => (
                  <li key={step.question} className="text-sm leading-relaxed">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={openWhy === index}
                        aria-controls={`cause-why-${selectedStatus}-${index}`}
                        onClick={() => setOpenWhy(openWhy === index ? null : index)}
                        className="flex w-full cursor-pointer items-center justify-between gap-3 !py-3 text-left font-semibold text-teal-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                      >
                        <span>{index + 1}. {step.question}</span>
                        <FaChevronDown aria-hidden="true" className={`shrink-0 transition-transform ${openWhy === index ? "rotate-180" : ""}`} />
                      </button>
                    </h3>
                    <div id={`cause-why-${selectedStatus}-${index}`} hidden={openWhy !== index}>
                      <p className="!pb-3 text-gray-700">
                        {step.answer}{" "}
                 {/*        <a
                          href={detailsCauses[selectedStatus].referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-8 underline underline-offset-2 hover:text-teal-700"
                          aria-label={`Source for why ${index + 1}: ${step.question}`}
                        >
                          Source
                        </a> */}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              </div>
            </div>
            <div className="!mt-8 grid gap-2 sm:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1.35fr_1fr]">
              {[
                { title: "Root cause", content: detailsCauses[selectedStatus].rootCause, icon: FaBullseye },
                { title: "Information needed", content: detailsCauses[selectedStatus].informationNeeded, icon: FaSearch },
                { title: "Evidence", content: detailsCauses[selectedStatus].evidence, icon: FaFileAlt },
                { title: "Conclusion and limit", content: detailsCauses[selectedStatus].conclusion, icon: FaChartBar },
              ].map(({ title, content, icon: Icon }) => (
                <div key={title} className="forest-info-card group min-w-0 cursor-pointer rounded-md border !p-4 transition-all duration-200 hover:shadow-md">
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
              <div className="!mt-2 grid gap-4 sm:grid-cols-2">
                {[
                  { label: detailsCauses[selectedStatus].reference, url: detailsCauses[selectedStatus].referenceUrl },
                  { label: detailsCauses[selectedStatus].supportingReference, url: detailsCauses[selectedStatus].supportingUrl },
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
  )
}

export default Causes
