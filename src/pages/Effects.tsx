import { FaArrowDown, FaBookOpen, FaExternalLinkAlt, FaLeaf } from "react-icons/fa";

const references = [
  { title: "Climate Change Commission. Sierra Madre: Mountain Range for Resilience (2024)", url: "https://www.climate.gov.ph/news/934", description: "The range's biodiversity, carbon storage, forest cover, and role in climate resilience." },
  { title: "Forest Foundation Philippines. Sierra Madre Mountain Range: Landscape Profile (2022)", url: "https://forestfoundation.ph/wp-content/uploads/2022/04/Sierra-Madre-Mountain-Range_Landscape-Profile.pdf", description: "Watersheds, wildlife, communities, and pressures on the landscape." },
  { title: "Forest Foundation Philippines. Sierra Madre Landscape", url: "https://www.forestfoundation.ph/landscapes/", description: "Landscape background, protected areas, and conservation context." },
  { title: "van der Ploeg, J., van Weerd, M., Masipiqueña, A. B., & Persoon, G. A. Illegal Logging in the Northern Sierra Madre Natural Park, the Philippines (2011)", url: "https://www.jstor.org/stable/26393043", description: "Conservation & Society study of illegal logging, biodiversity, rural livelihoods, and timber extraction." },
  { title: "Indiana University Digital Library. Illegal Logging in the Northern Sierra Madre Natural Park", url: "https://dlc.dlib.indiana.edu/dlc/items/638ea25b-93a3-44d6-9ed1-f6b176420396", description: "Alternative access to the 2011 study by van der Ploeg and colleagues." },
  { title: "Barit, J. B., Choi, K., & Ko, D. W. Modeling the risk of illegal forest activity and its distribution in the southeastern region of the Sierra Madre Mountain Range, Philippines (2022)", url: "https://iforest.sisef.org/contents/?id=ifor3937-014", description: "iForest research on illegal forest activity, biodiversity, and protected areas." },
  { title: "Forest Foundation Philippines. Sierra Madre Landscape Journey 2018–2020", url: "https://www.forestfoundation.ph/publications/sierra-madre-landscape-journey-2018-2020/", description: "Landscape governance, conservation, and stakeholder perspectives." },
  { title: "GMA News. Why are the Sierra Madre and nature-based solutions important vs floods? (2026)", url: "https://www.gmanetwork.com/news/lifestyle/content/1001970/explainer-why-are-the-sierra-madre-and-nature-based-solutions-important-vs-floods/story/", description: "Forest-loss estimates attributed to Haribon Foundation and the relationship between forests and flooding." },
  { title: "Forest Foundation Philippines. Deforestation and Forest Degradation Analysis of Southern Sierra Madre, Philippines", url: "https://www.forestfoundation.ph/publications/deforestation-and-forest-degradation-analysis-of-southern-sierra-madre-philippines-using-google-earth-engine-and-community-mapping/", description: "Evidence from General Nakar, Quezon, and Rodriguez, Rizal, using Google Earth Engine and community mapping." },
  { title: "Community Forestry International. Upland Philippine Communities, Part 4", url: "https://www.communityforestryinternational.org/publications/research_reports/upland_philippine_communities/PART4/", description: "Watershed research on runoff, erosion, landslides, sedimentation, and lowland flooding." },
];

const effects = [
  { title: "Loss of biodiversity and wildlife habitat", summary: "Illegal logging destroys and fragments wildlife habitats, reducing the ability of native and endemic species to survive and reproduce.", detail: "Sierra Madre forests support species found only in the Philippines. Cutting trees removes nesting sites, food, shelter, and breeding areas. Isolated populations have fewer routes between suitable habitats. Studies in the northern and southeastern Sierra Madre connect illegal logging, slash-and-burn farming, and agricultural expansion with threats to biodiversity and conservation.", sources: [3, 5] },
  { title: "Increased soil erosion", summary: "Removing trees exposes mountain soil to heavy rainfall, increasing erosion and degrading slopes.", detail: "Roots help stabilize soil, while forest canopies soften the direct impact of rainfall. Clearing vegetation leaves topsoil more easily washed away, especially on the Sierra Madre's steep terrain. Lost soil also makes it harder for vegetation to recover.", sources: [1, 9] },
  { title: "Higher risk of landslides", summary: "Deforestation can increase slope instability during heavy rainfall and typhoons.", detail: "Vegetation holds soil together and supports water absorption. Its removal can accelerate surface runoff and destabilize exposed slopes. Steep, logged-over or denuded areas are particularly vulnerable during intense rainfall; forest loss is one of several factors that influence landslide risk.", sources: [9] },
  { title: "Increased flooding in downstream communities", summary: "Forest loss reduces the landscape's ability to regulate rainfall runoff, potentially increasing downstream flooding.", detail: "Forest vegetation and soils absorb and temporarily retain rainfall. When forests are cleared, water can move downhill more quickly, raising river levels and carrying sediment. Sierra Madre watershed research describes how runoff, erosion, sedimentation, and converging tributaries can contribute to lowland flooding.", sources: [7, 9] },
  { title: "Degradation of watersheds and water supplies", summary: "Erosion and sedimentation damage watersheds and disrupt the natural regulation of water.", detail: "The Sierra Madre's watersheds supply communities, agriculture, and industry. Forest degradation can fill rivers and reservoirs with sediment and make water flows less stable. Research in the southeastern Sierra Madre identifies protected forests as important freshwater sources for irrigation, industrial use, and hydroelectric power generation.", sources: [1, 5] },
  { title: "Reduced protection against typhoons", summary: "Degraded forests provide less protection against the rainfall-related impacts of severe storms.", detail: "The Sierra Madre lies along eastern Luzon, where many tropical cyclones encounter land. Its terrain interacts with storms, while intact forests protect soil and watersheds from rainfall and runoff. Mountains do not simply stop typhoons. Forest degradation can increase vulnerability to flooding, erosion, and landslides associated with intense rain.", sources: [0, 7] },
  { title: "Increased sedimentation of rivers", summary: "Soil washed from deforested slopes enters rivers and degrades freshwater ecosystems.", detail: "Excess sediment can make waterways shallower, affect aquatic habitats, and reduce the storage capacity of rivers and reservoirs. Sierra Madre watershed studies connect forest degradation with heavy soil erosion and sedimentation of riverbeds.", sources: [9] },
  { title: "Loss of carbon storage and increased climate impacts", summary: "Deforestation reduces carbon storage and weakens the forest's contribution to climate regulation.", detail: "Trees, roots, vegetation, and soils store carbon. Intact forests absorb carbon dioxide through photosynthesis. Cutting trees reduces that capacity, and burning or decomposing forest biomass can release stored carbon. The Climate Change Commission's 2024 report describes the Sierra Madre as an important carbon sink and cites approximately 1.4 million hectares of forested area.", sources: [0] },
  { title: "Damage to agriculture and rural livelihoods", summary: "Forest degradation threatens the natural resources and ecosystem services on which rural communities depend.", detail: "Communities rely on surrounding forests for water, agriculture, forest products, and income. Damage to these systems can undermine livelihoods beyond the logging site. Research in the Northern Sierra Madre Natural Park also links illegal logging with distorted local markets and obstacles to sustainable rural development.", sources: [3, 4] },
  { title: "Loss of ecosystem services", summary: "Several benefits of a healthy forest can decline at the same time.", detail: "These benefits include water regulation, carbon storage, soil stabilization, flood regulation, wildlife habitat, climate regulation, pollination, and forest resources for communities. Their loss makes illegal logging a water, agricultural, economic, and disaster-risk issue as well as an environmental one.", sources: [0, 1, 2] },
  { title: "Forest fragmentation makes recovery more difficult", summary: "Logging breaks continuous forests into smaller, isolated patches that are more vulnerable to degradation.", detail: "A forest need not disappear entirely to lose ecological function. Fragmented patches have more exposed edges and fewer connected habitats, interrupting wildlife movement and exposing remaining forests to additional human disturbance. Protecting remaining forest areas helps limit continuing land-use pressure.", sources: [1, 3] },
  { title: "Illegal logging can reinforce other environmental degradation", summary: "Logging access routes can make further extraction and land conversion easier.", detail: "Roads and trails can open previously inaccessible forest to agricultural expansion, hunting, charcoal production, mining, and further timber extraction. Southern Sierra Madre research identifies kaingin, infrastructure expansion, timber poaching, small-scale mining, charcoal making, and natural hazards as pressures associated with degradation. Illegal logging can become part of a wider cycle of forest loss.", sources: [8] },
];

/* const keyFacts = [
  { icon: "🌳", issue: "Forest loss", effect: "Reduces forest cover and ecosystem services" },
  { icon: "🐾", issue: "Biodiversity", effect: "Destroys and fragments wildlife habitat" },
  { icon: "🌧", issue: "Heavy rainfall", effect: "Increases runoff from degraded slopes" },
  { icon: "⛰", issue: "Landslides", effect: "Greater vulnerability on exposed, steep slopes" },
  { icon: "🌊", issue: "Flooding", effect: "Increased runoff can contribute to downstream flooding" },
  { icon: "💧", issue: "Watersheds", effect: "Increased erosion and sedimentation degrade water systems" },
  { icon: "🌱", issue: "Soil", effect: "Loss of vegetation increases soil erosion" },
  { icon: "🌪", issue: "Typhoons", effect: "Degraded ecosystems provide less protection against storm impacts" },
  { icon: "🌎", issue: "Climate", effect: "Reduced carbon-storage capacity" },
  { icon: "👨‍🌾", issue: "Communities", effect: "Threatens natural resources and rural livelihoods" },
  { icon: "⛏", issue: "Other activities", effect: "Can facilitate agricultural expansion, mining, hunting, and further forest degradation" },
];
 */
const chains = [
  { title: "Soil, water, and communities", steps: ["Illegal logging", "Loss of trees and forest cover", "Habitat destruction and soil exposure", "Erosion and increased runoff", "Landslides, river sedimentation, and flooding", "Watershed degradation", "Damage to agriculture, infrastructure, wildlife, and communities"] },
  { title: "Carbon and climate", steps: ["Forest loss", "Less carbon storage", "Reduced climate-regulation capacity"] },
  { title: "Wildlife and recovery", steps: ["Forest fragmentation", "Loss of wildlife habitat", "Declining biodiversity", "Greater ecosystem vulnerability"] },
];

function Effects() {
  return (
    <section id="effects-illegal-logging" className="w-full border-t border-gray-200 text-teal-8">
      <header className="flex w-full items-center gap-3 !px-3 !pt-8 !pb-5 sm:gap-5 sm:!px-6 sm:!pt-10">
        <span className="h-px min-w-0 flex-1 bg-gray-200" aria-hidden="true" />
        <div className="min-w-0 max-w-[85%] text-center">
          <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !leading-snug !text-teal-8 sm:!text-2xl">
            <FaLeaf aria-hidden="true" className="shrink-0" />
            Sierra Madre: Effects of Illegal Logging and Deforestation
          </h1>
          <p className="!mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">Explore the effects on wildlife, watersheds, communities, and climate</p>
        </div>
        <span className="h-px min-w-0 flex-1 bg-gray-200" aria-hidden="true" />
      </header>

      <div className="!px-3 !pt-4 !pb-8 sm:!px-6">
        <p className="max-w-4xl text-sm leading-relaxed text-gray-700">Stretching roughly 540 kilometers across eastern Luzon, the Sierra Madre supports forests, watersheds, wildlife, and communities. Illegal logging and other forms of forest degradation threaten these connected systems, affecting water supplies, agriculture, disaster risk, climate regulation, and rural livelihoods.</p>
        <a href="#effects-references" className="!mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:underline"><FaBookOpen aria-hidden="true" /> Explore the references</a>
      </div>

      <section aria-labelledby="forest-loss-heading" className="forest-soft-panel !mx-3 rounded-lg border border-gray-200 !p-5 sm:!mx-6 sm:!p-6">
        <h2 id="forest-loss-heading" className="!text-xl font-bold !text-teal-8">Forest loss in context</h2>
        <div className="!mt-4 grid gap-5 sm:grid-cols-2">
          {[{ value: "9,000 hectares", label: "Estimated forest cover lost annually" }, { value: "130,000 hectares", label: "Estimated forest cover lost from 2003–2020" }].map((stat) => (
            <div key={stat.value}>
              <p className="text-2xl font-bold text-teal-800">{stat.value}</p>
              <p className="!mt-1 text-sm text-gray-700">{stat.label}</p>
              <a href={references[7].url} target="_blank" rel="noopener noreferrer" className="!mt-2 block text-xs leading-relaxed text-teal-700 hover:underline">Source: Haribon Foundation, as reported by GMA News (2026).</a>
            </div>
          ))}
        </div>
        <p className="!mt-5 text-sm leading-relaxed text-gray-700">These estimates cover multiple pressures, including illegal logging and timber poaching, mining, quarrying, kaingin, and development. They are not estimates of loss from illegal logging alone.</p>
      </section>

      <section aria-labelledby="twelve-effects-heading" className="!px-3 !py-8 sm:!px-6">
        <h2 id="twelve-effects-heading" className="flex items-center gap-2 !text-2xl font-bold !text-teal-8"><FaLeaf aria-hidden="true" /> How forest loss affects the Sierra Madre</h2>
        <div className="!mt-5 grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
          {effects.map((effect, index) => (
            <article key={effect.title} className="h-full rounded-lg border border-gray-200 bg-white !p-5 shadow-sm">
              <span className="text-sm font-bold text-teal-600">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="!mt-2 text-lg font-bold leading-snug text-teal-8">{effect.title}</h3>
              <p className="!mt-3 text-sm font-medium leading-relaxed text-teal-800">{effect.summary}</p>
              <p className="!mt-3 text-sm leading-relaxed text-gray-600">{effect.detail}</p>
              <div className="!mt-4 flex flex-wrap gap-3 text-xs font-semibold text-teal-700" aria-label="Supporting references">
                {effect.sources.map((source) => <a key={source} href={`#effect-reference-${source + 1}`} className="hover:underline">Reference {source + 1}</a>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="chain-heading" className="border-y border-gray-200 !px-3 !py-8 sm:!px-6">
        <h2 id="chain-heading" className="!text-2xl font-bold !text-teal-8">The chain reaction</h2>
        <p className="!mt-2 text-sm leading-relaxed text-gray-600">Forest loss can set several connected processes in motion. These pathways describe potential effects; not every flood or landslide is caused by illegal logging.</p>
        <div className="!mt-5 grid items-start gap-5 lg:grid-cols-3">
          {chains.map((chain) => (
            <div key={chain.title} className="forest-soft-panel rounded-lg border border-gray-200 !p-5">
              <h3 className="text-base font-bold text-teal-8">{chain.title}</h3>
              <ol className="!mt-4 list-none !p-0">
                {chain.steps.map((step, index) => (
                  <li key={step} className="text-sm leading-relaxed">
                    {index > 0 && <FaArrowDown aria-hidden="true" className="!mx-auto !my-2 text-teal-600" />}
                    <div className="rounded border border-teal-100 bg-white !px-3 !py-3 text-center text-gray-700">{step}</div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

{/*       <section aria-labelledby="key-facts-heading" className="border-b border-gray-200 !px-3 !py-8 sm:!px-6">
        <h2 id="key-facts-heading" className="!text-2xl font-bold !text-teal-8">Key facts</h2>
        <div className="!mt-5 overflow-hidden rounded-lg border border-teal-100">
          <table className="w-full border-collapse text-left text-sm leading-relaxed" aria-labelledby="key-facts-heading">
            <thead className="bg-teal-50 text-teal-900">
              <tr>
                <th scope="col" className="w-1/3 !px-3 !py-4 font-bold sm:!px-5">Issue</th>
                <th scope="col" className="!px-3 !py-4 font-bold sm:!px-5">Effect on Sierra Madre</th>
              </tr>
            </thead>
            <tbody>
              {keyFacts.map((fact) => (
                <tr key={fact.issue} className="border-t border-teal-100 odd:bg-white even:bg-green-50/40">
                  <th scope="row" className="!px-3 !py-4 align-top font-semibold text-teal-800 sm:!px-5">
                    <span className="flex items-start gap-2 sm:gap-3">
                      <span aria-hidden="true" className="shrink-0 text-lg">{fact.icon}</span>
                      <span>{fact.issue}</span>
                    </span>
                  </th>
                  <td className="!px-3 !py-4 align-top text-gray-700 sm:!px-5">{fact.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      <section id="effects-references" aria-labelledby="references-heading" className="!px-3 !py-8 sm:!px-6">
        <h2 id="references-heading" className="flex items-center gap-2 !text-2xl font-bold !text-teal-8"><FaBookOpen aria-hidden="true" /> References</h2>
        <p className="text-sm leading-relaxed text-gray-600">Government, academic, and environmental sources included in the supplied reading materials.</p>
        <ol className="!mt-5 grid list-none gap-4 !p-0 md:grid-cols-2">
          {references.map((reference, index) => (
            <li id={`effect-reference-${index + 1}`} key={reference.url} className="min-w-0 scroll-mt-24 rounded-lg border border-gray-200 !p-4">
              <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-relaxed text-teal-800 hover:underline">{index + 1}. {reference.title} <FaExternalLinkAlt aria-label="Opens in a new tab" className="inline text-xs" /></a>
              <p className="!mt-2 text-xs leading-relaxed text-gray-600">{reference.description}</p>
            </li>
          ))}
        </ol>
{/*         <div className="!mt-6 rounded-lg bg-green-50 !p-5">
          <h3 className="text-base font-bold text-teal-8">Source documents</h3>
          <div className="!mt-3 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
            <a href={`${import.meta.env.BASE_URL}documents/effects.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-teal-800 hover:underline"><FaFilePdf aria-hidden="true" /> Effects (PDF)</a>
            <a href={`${import.meta.env.BASE_URL}documents/sierra-madre-deforestation-effects-references.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-teal-800 hover:underline"><FaFilePdf aria-hidden="true" /> Sierra Madre Deforestation Effects References (PDF)</a>
          </div>
        </div> */}
      </section>
    </section>
  );
}

export default Effects;
