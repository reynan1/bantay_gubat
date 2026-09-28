import { useState } from "react";
import { FaTree, FaExternalLinkAlt } from "react-icons/fa";

const provinces = [
  { name: "Cagayan", region: "Cagayan Valley", status: "Restoration documented", date: "2010 project report", area: "Peñablanca",
    condition: "Restoration in Peñablanca addressed degraded land and pressure from unregulated tree cutting. This historical report does not establish today's forest cover across Cagayan.",
    response: "Reforestation, fruit-tree livelihoods, and fuelwood planting were introduced to reduce pressure on natural forests.",
    source: "Toyota / DENR–CI partnership", url: "https://global.toyota/en/detail/330062" },
  { name: "Isabela", region: "Cagayan Valley", status: "Natural forest stronghold", date: "2006 protected-area profile", area: "Northern Sierra Madre Natural Park / Palanan",
    condition: "UNESCO's tentative-list profile describes extensive prime forest and important wildlife habitat. Protected status alone does not confirm that all forest remains intact today.",
    response: "The park provides a framework for forest and biodiversity protection. The profile does not supply a current province-wide condition assessment.",
    source: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/tentativelists/5037" },
  { name: "Nueva Vizcaya", region: "Cagayan Valley", status: "Watershed rehabilitation", date: "2023 project review", area: "Upper Magat and Cagayan watershed landscape",
    condition: "DENR reports rehabilitation of degraded forestlands in the Upper Magat and Cagayan basin. Basin findings include areas outside the province's Sierra Madre portion.",
    response: "A provincial watershed management committee supports coordination and rehabilitation across watersheds.",
    source: "DENR Forestland Management Project", url: "https://faspselib.denr.gov.ph/Materials/Detail/09211f77-fb89-4db4-9cff-9bcc3a720773" },
  { name: "Quirino", region: "Cagayan Valley", status: "Forest loss reported", date: "July 2021 report", area: "Provincial watersheds in the Sierra Madre corridor",
    condition: "A 2021 report records provincial concern about substantial forest-cover loss. It provides neither a current loss rate nor a separate measurement for the Sierra Madre portion.",
    response: "The QPoWERS program was launched to involve communities in protecting watersheds, ecosystems, and rivers.",
    source: "DENR news archive", url: "https://denr.gov.ph/wp-content/uploads/2023/07/DENR_News_Alerts_03_July_2021_Saturday.pdf" },
  { name: "Aurora", region: "Central Luzon", status: "Timber poaching documented", date: "September 2019 operation", area: "Dipaculao, Dinalungan, Casiguran, and Dilasag",
    condition: "DENR recovered 21,332.11 board feet of illegally cut lumber from four Sierra Madre towns. This seizure documents local logging pressure, not a province-wide forest-loss total.",
    response: "Forest enforcement and timber seizures address unauthorized harvesting.",
    source: "Philstar, citing DENR", url: "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed" },
  { name: "Nueva Ecija", region: "Central Luzon", status: "Reforestation documented", date: "2019 activity report", area: "General Tinio, Sierra Madre foothills",
    condition: "DENR reported tree planting in response to dwindling Sierra Madre forest cover. The report does not establish plantation survival or the present condition of all provincial forests.",
    response: "DENR and local stakeholders carried out planting to help restore forest and watershed functions.",
    source: "DENR tree-planting report", url: "https://r7.denr.gov.ph/news-events/denr-stakeholders-hold-tree-planting-activities-in-sierra-madre/" },
  { name: "Bulacan", region: "Central Luzon", status: "Degraded sites under restoration", date: "2023 watershed report", area: "Angat Watershed Forest Reservation",
    condition: "National Power Corporation identifies open and denuded upland areas and streambanks for rehabilitation within Angat watershed. This describes specific sites, not every forest in Bulacan.",
    response: "Watershed rehabilitation targets degraded sites to support forest cover and water catchment protection.",
    source: "National Power Corporation", url: "https://www.napocor.gov.ph/wp-content/uploads/Corporate_Governance/2023/2023_Watershed_Management_Activities.pdf" },
  { name: "Rizal", region: "CALABARZON", status: "Development pressure reported", date: "November 12, 2025 report", area: "Sierra Madre forest areas in Rizal",
    condition: "Haribon reported that development projects in Rizal and Quezon contribute to deforestation. The report describes pressures without measuring the condition of every forest parcel.",
    response: "Haribon called for stronger protection, warning that restoration cannot keep pace with continued destructive development.",
    source: "Philstar, citing Haribon", url: "https://www.philstar.com/headlines/climate-and-environment/2025/11/12/2486728/sierra-madre-losing-9000-hectares-forest-cover-each-year-haribon" },
  { name: "Laguna", region: "CALABARZON", status: "Localized forest fire reported", date: "April 21, 2026 incident", area: "Kalayaan, Sierra Madre portion of Laguna",
    condition: "A forest fire was reported in Kalayaan and brought under control that evening. This localized incident does not mean that all Sierra Madre forests in Laguna burned.",
    response: "The report confirms fire control but does not establish subsequent ecological recovery or a province-wide forest condition.",
    source: "GMA News", url: "https://www.gmanetwork.com/news/topstories/regions/984848/fire-engulfs-portion-of-sierra-madre-in-kalayaan-laguna/story/" },
  { name: "Quezon", region: "CALABARZON", status: "Illegal lumber intercepted", date: "February 2025 operations", area: "Infanta / CENRO Real jurisdiction",
    condition: "DENR reported operations intercepting illegal lumber, including an operation in Infanta on February 13, 2025. These records indicate timber enforcement concerns, not a measured forest-loss rate.",
    response: "CENRO Real conducted enforcement operations and DENR encouraged public reporting of illegal forest activities.",
    source: "DENR CALABARZON", url: "https://calabarzon.denr.gov.ph/news-events/cenro-real-apprehends-illegal-lumber-in-back-to-back-operation/" },
];
const regions = ["All provinces", "Cagayan Valley", "Central Luzon", "CALABARZON"];

export default function ProvinceForestStatus() {
  const [region, setRegion] = useState("All provinces");
  const visible = provinces.filter((p) => region === "All provinces" || p.region === region);
  return (
    <section id="province-forest-status" aria-labelledby="province-status-heading" className="border-t border-teal-100 !px-3 !py-8 sm:!px-6 sm:!py-10">
      <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Across the Sierra Madre</p>
      <h2 id="province-status-heading" className="!mt-2 !mb-2 !text-2xl font-bold !text-teal-900">Forest conditions by province</h2>
      <p className="max-w-4xl text-sm leading-relaxed text-gray-600">Explore documented forest conditions, pressures, and conservation work across the 10 provinces of the Sierra Madre corridor, from Cagayan to Quezon.</p>
      <p className="!mt-3 max-w-4xl text-xs leading-relaxed text-gray-600">Sources reviewed September 28, 2026. These dated, site-specific summaries are not live alerts or official province-wide health ratings. Older reports provide historical context; the sources reviewed do not provide a comparable current assessment for all 10 provinces.</p>
      <div className="!mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter provinces by region">
        {regions.map((item) => <button key={item} type="button" aria-pressed={region === item} onClick={() => setRegion(item)} className={`cursor-pointer rounded-full border !px-4 !py-2 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${region === item ? "border-teal-700 bg-teal-700 text-white" : "border-teal-200 bg-white text-teal-800 hover:bg-teal-50"}`}>{item}</button>)}
      </div>
      <p className="!mt-4 text-xs text-gray-600" aria-live="polite">Showing {visible.length} of 10 provinces</p>
      <div className="!mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((p) => <article key={p.name} className="flex min-w-0 flex-col rounded-xl border border-teal-100 bg-white !p-5 shadow-sm">
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700"><FaTree aria-hidden="true" /></span><div><h3 className="text-lg font-bold text-teal-900">{p.name}</h3><p className="text-xs text-gray-500">{p.region}</p></div></div>
          <span className="!mt-4 self-start rounded-full bg-teal-50 !px-3 !py-1 text-xs font-semibold text-teal-800">{p.status}</span>
          <p className="!mt-3 text-xs font-medium leading-relaxed text-teal-800">{p.area}</p>
          <p className="!mt-3 text-sm leading-relaxed text-gray-700">{p.condition}</p>
          <div className="!mt-4 border-t border-gray-100 !pt-3"><h4 className="text-xs font-bold text-teal-900">Protection and response</h4><p className="!mt-1 text-xs leading-relaxed text-gray-600">{p.response}</p></div>
          <div className="!mt-auto !pt-4"><p className="text-xs text-gray-500">Evidence: {p.date}</p><a href={p.url} target="_blank" rel="noopener noreferrer" className="!mt-2 inline-flex items-center gap-2 text-xs font-medium text-teal-700 underline underline-offset-2">{p.source}<FaExternalLinkAlt className="shrink-0" aria-hidden="true" /></a></div>
        </article>)}
      </div>
    </section>
  );
}
