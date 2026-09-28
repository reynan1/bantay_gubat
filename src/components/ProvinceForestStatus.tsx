import { useState } from "react";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaChevronDown, FaSearchPlus, FaTimes } from "react-icons/fa";
import provinceMaps from "../data/provinceMaps.json";

type StatusCategory = "recent" | "historical" | "monitoring";
type ZoomedImage = {
  name: string;
  src: string;
  alt: string;
  source: string;
  credit: string;
  license: string;
};

const categories: Record<StatusCategory, { label: string; badge: string; dot: string }> = {
  recent: { label: "Recent documented logging or timber cases", badge: "border-red-200 bg-red-50 text-red-800", dot: "bg-red-600" },
  historical: { label: "Older logging evidence or different current pressures", badge: "border-orange-200 bg-orange-50 text-orange-800", dot: "bg-orange-500" },
  monitoring: { label: "Monitoring / insufficient recent local evidence", badge: "border-yellow-300 bg-yellow-50 text-yellow-900", dot: "bg-yellow-500" },
};

const provinces: { name: string; region: string; category: StatusCategory; status: string; date: string; evidence: string; source: string; url: string }[] = [
  { name: "Cagayan", region: "Cagayan Valley", category: "recent", status: "Active illegal logging", date: "2026",
    evidence: "Authorities found 27 freshly cut tree stumps and 107 board feet of illegally processed Gmelina in Claveria. The report also records continuing illegal logging in other Cagayan municipalities.",
    source: "Philstar", url: "https://www.philstar.com/pilipino-star-ngayon/probinsiya/2026/07/09/2540833/kagubatan-sa-cagayan-kinalbo-ng-illegal-loggers/amp/" },
  { name: "Isabela", region: "Cagayan Valley", category: "recent", status: "Recent illegal cutting documented", date: "2026",
    evidence: "Two people were arrested in Cordon for allegedly cutting trees without permits. Authorities seized 5 round logs and 4 Gmelina flitches totaling about 200 board feet, along with an unregistered chainsaw.",
    source: "Daily Tribune", url: "https://tribune.net.ph/2026/06/28/two-arrested-in-isabela-for-alleged-illegal-logging" },
  { name: "Nueva Vizcaya", region: "Cagayan Valley", category: "recent", status: "Active undocumented timber transport", date: "2025",
    evidence: "Police reported 32 operations and 57 people arrested or charged from January 1 to October 15 for Forestry Code violations. Separate October seizures involved about 3,247.74 and 2,655 board feet of undocumented forest products. Transport cases do not establish that the timber was cut within Nueva Vizcaya's Sierra Madre forests.",
    source: "Philippine Information Agency", url: "https://pia.gov.ph/news/luzon/cv/nueva-vizcaya-steps-up-campaign-vs-undocumented-forest-products/" },
  { name: "Quirino", region: "Cagayan Valley", category: "recent", status: "Active illegal-logging pressure", date: "2025",
    evidence: "Diffun and Nagtipunan recorded 13 incidents from January to April, involving more than 19,600 board feet of seized forest products. Later reporting documented 4 incidents in Diffun and 12 in Nagtipunan.",
    source: "Philippine Information Agency", url: "https://pia.gov.ph/features/echoing-call-for-stronger-action-against-illegal-logging/" },
  { name: "Aurora", region: "Central Luzon", category: "recent", status: "Active illegal logging", date: "2025",
    evidence: "Aurora police reported 19 anti-illegal-logging operations, 31 arrests, and 2,974.67 board feet of sawn lumber seized, valued at about PHP 512,880.",
    source: "Philippine News Agency", url: "https://www.pna.gov.ph/articles/1266440" },
  { name: "Nueva Ecija", region: "Central Luzon", category: "historical", status: "Illegal logging documented; older evidence", date: "Historical reports, including 2022",
    evidence: "DENR documented about 6,000 board feet of illegally sourced yakal, lauan, and molave reportedly originating from remaining Sierra Madre natural forest. A 2022 operation also intercepted more than 13,000 board feet in General Tinio.",
    source: "DENR Region 5", url: "https://r5.denr.gov.ph/news-events/denr-seizes-illegally-cut-lumber-in-n-ecija/" },
  { name: "Bulacan", region: "Central Luzon", category: "historical", status: "Historical illegal timber cases", date: "Historical seizures; 2026 pressure context",
    evidence: "DENR previously documented seizures of 22,000 board feet of illegal lumber in Baliuag and 56,000 board feet in a separate operation. The prominent 2026 Angat case concerns illegal quarrying and does not establish current illegal logging.",
    source: "DENR Region 7", url: "https://r7.denr.gov.ph/news-events/hot-lumber-seized-in-bulacan/" },
  { name: "Rizal", region: "CALABARZON", category: "historical", status: "Illegal logging documented; newer threats broader", date: "Historical seizure; 2025–2026 pressure context",
    evidence: "DENR previously confiscated more than 350 board feet of lumber, 104 sacks of charcoal, and illegal-logging equipment. More recent enforcement reports emphasize quarrying, mining, and protected-area concerns; recent evidence for illegal logging itself is weaker.",
    source: "DENR CALABARZON", url: "https://calabarzon.denr.gov.ph/news-events/illegal-loggers-in-rizal-province-apprehended-by-denr-calabarzon/" },
  { name: "Laguna", region: "CALABARZON", category: "monitoring", status: "Monitoring; insufficient recent local logging evidence", date: "2025",
    evidence: "DENR's cited monitoring recorded no illegal transport or forest-related violations, although tree cutting in Luisiana and Cavinti was referred for investigation. A separate Alaminos seizure involved 12,685.34 board feet allegedly originating in Mindanao, so it does not establish illegal cutting in Laguna.",
    source: "DENR CALABARZON", url: "https://calabarzon.denr.gov.ph/news-events/penro-laguna-sustains-environmental-vigilance-through-task-force-undas-2025/" },
  { name: "Quezon", region: "CALABARZON", category: "recent", status: "Active illegal logging", date: "2025–2026",
    evidence: "DENR repeatedly confiscated illegally cut forest products in Infanta and General Nakar. January 2026 operations in General Nakar recovered 40 pieces totaling about 827.46 board feet from three locations.",
    source: "DENR CALABARZON", url: "https://calabarzon.denr.gov.ph/news-events/cenro-real-nagsagawa-ng-magkakahiwalay-na-operasyon-sa-bayan-ng-gen-nakar-quezon-na-kumumpiska-ng-mga-ilegal-na-produktong-gubat/" },
];
const regions = ["All provinces", "Cagayan Valley", "Central Luzon", "CALABARZON"];
const provinceGroups = [
  { title: "Monitoring / older evidence", names: ["Laguna", "Bulacan", "Rizal"] },
  { title: "Documented pressure", names: ["Nueva Ecija", "Isabela", "Nueva Vizcaya"] },
  { title: "Strong Recent Evidence of Illegal-Logging Activity", names: ["Cagayan", "Aurora", "Quezon", "Quirino"] },
];
const shortStatuses: Record<string, string> = {
  Laguna: "Monitoring", Bulacan: "Historical cases", Rizal: "Documented cases",
  "Nueva Ecija": "Logging documented", Isabela: "Recent case", "Nueva Vizcaya": "Recent violations",
  Cagayan: "Recent activity", Aurora: "Recent operations", Quezon: "Recent operations", Quirino: "Active pressure",
};
// Illustrative corridor segments, not surveyed provincial or forest boundaries.
/* const corridorSegments: Record<string, string> = {
  Cagayan: "M579 208 L583 250 L586 260",
  Isabela: "M586 260 L594 290 L596 318 L583 340",
  Quirino: "M583 340 L574 354 L564 370",
  "Nueva Vizcaya": "M564 370 L551 390",
  Aurora: "M574 354 L551 390 L531 426",
  "Nueva Ecija": "M551 390 L536 417",
  Bulacan: "M536 417 L531 426 L533 450",
  Rizal: "M533 450 L534 465 L540 482",
  Laguna: "M540 482 L549 505",
  Quezon: "M534 465 L540 482 L549 505",
}; */

export default function ProvinceForestStatus() {
  const [region, setRegion] = useState("All provinces");
  const [expandedProvince, setExpandedProvince] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<ZoomedImage | null>(null);
  const visible = provinces.filter((p) => region === "All provinces" || p.region === region);

  useEffect(() => {
    if (!zoomedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedImage]);

  return (
    <>
    <section id="province-forest-status" aria-labelledby="province-status-heading" className="border-t border-teal-100 !px-3 !py-8 sm:!px-6 sm:!py-10">
      <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Across the Sierra Madre</p>
      <h2 id="province-status-heading" className="!mt-2 !mb-2 !text-2xl font-bold !text-teal-900">Illegal Logging Status Across the Sierra Madre Provinces</h2>
      <p className="max-w-4xl text-sm leading-relaxed text-gray-600">Documented illegal logging and forest-product activity across the 10 provinces, from Cagayan to Quezon.</p>
      <ul className="!mt-4 flex list-none flex-wrap gap-3" aria-label="Status categories">
        {Object.entries(categories).map(([key, category]) => (
          <li key={key} className={`inline-flex items-center gap-2 rounded-lg border !px-3 !py-2 text-xs font-semibold ${category.badge}`}>
            <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full ${category.dot}`} />{category.label}
          </li>
        ))}
      </ul>
      <p className="!mt-3 max-w-4xl text-xs leading-relaxed text-gray-600">Red indicates recent documented illegal logging or illegal forest-product activity, not severe deforestation across an entire province. These statuses reflect the dated reports below, not live alerts or province-wide forest-health ratings.</p>
      <div className="!mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter provinces by region">
        {regions.map((item) => <button key={item} type="button" aria-pressed={region === item} onClick={() => setRegion(item)} className={`cursor-pointer rounded-full border !px-4 !py-2 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${region === item ? "border-teal-700 bg-teal-700 text-white" : "border-teal-200 bg-white text-teal-800 hover:bg-teal-50"}`}>{item}</button>)}
      </div>
      <p className="!mt-4 text-xs text-gray-600" aria-live="polite">Showing {visible.length} of {provinces.length} provinces</p>
      <p className="!mt-2 text-xs text-gray-600">Select a province to view its evidence. Groups reflect the available reports, not a worst-to-best ranking: incidents, seizures, arrests, and reporting periods differ.</p>
      <div className="!mt-6 space-y-8">
        {provinceGroups.map((group) => {
          const groupedProvinces = group.names.flatMap((name) => visible.filter((p) => p.name === name));
          if (!groupedProvinces.length) return null;
          return <section key={group.title} aria-label={group.title}>
          <h3 className="!mb-3 text-base font-bold text-teal-900">{group.title}</h3>
          <div className="grid items-start gap-4 md:grid-cols-3">
        {groupedProvinces.map((p) => {
          const expanded = expandedProvince === p.name;
          const locationMap = provinceMaps[p.name as keyof typeof provinceMaps];
          const id = `province-${p.name.toLowerCase().replaceAll(" ", "-")}`;
          return <article key={p.name} className={`min-w-0 overflow-hidden rounded-xl border shadow-sm transition-colors motion-reduce:transition-none ${expanded ? categories[p.category].badge : "border-teal-100 bg-white text-teal-900"} ${p.name === "Quirino" && region === "All provinces" ? "md:col-start-2" : ""}`}>
          <figure className="!p-3 !pb-0">
            <button
              type="button"
              onClick={() => setZoomedImage({ name: p.name, ...locationMap })}
              className="group relative block aspect-[3/2] w-full cursor-zoom-in overflow-hidden rounded-lg border border-teal-100 bg-[#c7edfc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              aria-label={`Zoom ${p.name} province image`}
            >
              <img
                src={locationMap.src}
                alt={locationMap.alt}
                className={`h-full w-full transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${p.name === "Laguna" ? "object-cover" : "object-contain !p-3"}`}
              />
              <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-md bg-teal-950/75 text-sm text-white opacity-90 transition-opacity group-hover:opacity-100">
                <FaSearchPlus aria-hidden="true" />
              </span>
            </button>
            <figcaption className="!px-1 !py-2 text-[10px] leading-relaxed text-gray-600">
              {p.name} province reference image. Laguna uses the scenario-style Sierra Madre image; other provinces use the available fitted province locator maps.<br />
              <a href={locationMap.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{locationMap.credit} · {locationMap.license}</a>
            </figcaption>
          </figure>
          <h4>
            <button type="button" id={`${id}-toggle`} aria-expanded={expanded} aria-controls={`${id}-status`} onClick={() => setExpandedProvince(expanded ? null : p.name)} className={`flex min-h-32 w-full cursor-pointer items-start gap-3 !p-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-teal-700 ${expanded ? "" : "hover:bg-teal-50"}`}>
              <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 text-base font-bold uppercase tracking-wide">
                <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full ${categories[p.category].dot}`} />
                {p.name}
              </span>
              <span className="!mt-2 block text-sm font-semibold">{shortStatuses[p.name]}</span>
              <span className="!mt-1 block text-xs font-normal text-gray-600">{p.region}</span>
              {p.name === "Quirino" && <span className="!mt-3 block text-sm font-normal leading-relaxed">13 incidents<br />19,600+ board feet<span className="block text-xs">January–April 2025</span></span>}
              </span>
              <FaChevronDown aria-hidden="true" className={`shrink-0 text-teal-700 transition-transform motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`} />
            </button>
          </h4>
          <div id={`${id}-status`} role="region" aria-labelledby={`${id}-toggle`} hidden={!expanded} className="border-t border-teal-100 !px-5 !pb-5">
          <p className="!mt-4 text-sm font-semibold">{p.status}</p>
          <p className="!mt-3 text-sm leading-relaxed text-gray-700">{p.evidence}</p>
          <div className="!mt-auto !pt-4"><p className="text-xs text-gray-500">Evidence: {p.date}</p><a href={p.url} target="_blank" rel="noopener noreferrer" className="!mt-2 inline-flex items-center gap-2 text-xs font-medium text-teal-700 underline underline-offset-2">{p.source}<FaExternalLinkAlt className="shrink-0" aria-hidden="true" /></a></div>
          </div>
        </article>;
        })}
          </div>
          </section>;
        })}
      </div>
    </section>
    {zoomedImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 !p-3 sm:!p-6"
        role="presentation"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setZoomedImage(null);
        }}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="province-image-zoom-title"
          className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
        >
          <header className="flex shrink-0 items-center justify-between bg-teal-900 !px-4 !py-3 text-white sm:!px-5">
            <div className="min-w-0">
              <h2 id="province-image-zoom-title" className="!mb-0 truncate text-base font-bold !text-white">
                {zoomedImage.name} Province Image
              </h2>
              <p className="!mt-1 text-xs text-teal-50">{zoomedImage.credit} · {zoomedImage.license}</p>
            </div>
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              aria-label="Close zoomed province image"
              title="Close image"
              className="ml-3 grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-md text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </header>
          <div className="min-h-0 overflow-auto bg-slate-100 !p-3 sm:!p-4">
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="mx-auto max-h-[72vh] w-auto max-w-full rounded-md bg-[#c7edfc] object-contain shadow"
            />
          </div>
          <footer className="shrink-0 border-t border-gray-200 !px-4 !py-3 text-xs text-gray-600 sm:!px-5">
            <a href={zoomedImage.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-700 underline underline-offset-2">
              Image source <FaExternalLinkAlt aria-hidden="true" className="shrink-0" />
            </a>
          </footer>
        </section>
      </div>
    )}
    </>
  );
}
