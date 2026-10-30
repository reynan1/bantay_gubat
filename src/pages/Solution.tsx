import { useState, type KeyboardEvent } from "react";
import {
  FaArrowRight,
  FaBinoculars,
  FaBookOpen,
  FaChartLine,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaHandsHelping,
  FaLeaf,
  FaMapMarkerAlt,
  FaSeedling,
  FaShieldAlt,
  FaUsers,
  FaWater,
} from "react-icons/fa";

import communityImage from "../assets/images/gallery-palawan-community.jpg";
import lawinPatrolImage from "../assets/images/solutions/lawin-patrol.jpg";
import lawinRecoveryImage from "../assets/images/solutions/lawin-recovery.jpg";
import masungiAfterImage from "../assets/images/solutions/masungi-after.jpg";
import masungiBeforeImage from "../assets/images/solutions/masungi-before.jpg";

type Source = {
  label: string;
  title: string;
  description: string;
  url: string;
};

type Evidence = {
  heading: string;
  body: string;
};

const detailPanels = [
  { id: "strategy", label: "The approach" },
  { id: "actions", label: "Action checklist" },
  { id: "evidence", label: "Evidence & limits" },
] as const;

type DetailPanel = (typeof detailPanels)[number]["id"];

type SolutionItem = {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  kind: string;
  status: string;
  location: string;
  summary: string;
  preview: string;
  icon: typeof FaLeaf;
  statistics: { value: string; label: string }[];
  steps: string[];
  indicators: string[];
  evidence: Evidence[];
  caveat: string;
  sources: Source[];
};

const sources: Source[] = [
  {
    label: "[2] DENR",
    title: "Administrative Order 2018-21: LAWIN framework",
    description: "The national policy framework for forest and biodiversity protection.",
    url: "https://lpr.adb.org/sites/default/files/2024-05/philippines-dao-2018-21.pdf",
  },
  {
    label: "[3] iForest",
    title: "Barit, Choi, and Ko (2022), Sierra Madre patrol risk mapping",
    description: "Peer-reviewed analysis of 2017-2019 patrol observations in southeastern Sierra Madre.",
    url: "https://doi.org/10.3832/ifor3937-014",
  },
  {
    label: "[4] Forest Foundation",
    title: "Empowering communities to protect Sierra Madre forests",
    description: "Project brief on community forestry work in Quirino from 2017 to 2021.",
    url: "https://www.forestfoundation.ph/wp-content/uploads/2024/02/1_Empowering-Communities-to-Protect-and-Sustainably-Manage-Sierra-Madres-Forests.pdf",
  },
  {
    label: "[5] Forest Foundation",
    title: "2021 Sierra Madre partnership and landscape consultation",
    description: "Documents coordination among community groups, government, researchers, and livelihood partners.",
    url: "https://www.forestfoundation.ph/news/2021-partners-meeting-and-landscape-consultation-for-sierra-madre-growing-futures-sustainable-landscapes-empowered-communities/",
  },
  {
    label: "[E1] Inquirer",
    title: "DENR taps drone to fight loggers in Sierra Madre",
    description: "2019 field report on CENRO Real's drone-supported timber recovery.",
    url: "https://newsinfo.inquirer.net/?p=1176312",
  },
  {
    label: "[E2] Inquirer",
    title: "Forest guards risk lives for Sierra Madre",
    description: "Report on ranger patrols and the safety risks of forest protection work.",
    url: "https://newsinfo.inquirer.net/844245/forest-guards-risk-lives-for-sierra-madre",
  },
  {
    label: "[E3] The Philippine Star",
    title: "Sierra Madre restoration: helping nature heal itself",
    description: "2021 report on Masungi restoration and assisted natural regeneration.",
    url: "https://www.philstar.com/headlines/2021/03/09/2083055/conservation-initiative-helps-nature-heal-itself-sierra-madre-reforestation",
  },
  {
    label: "[E4] Masungi Georeserve",
    title: "Conservation and restoration work",
    description: "The Foundation's current project information and organization-reported indicators.",
    url: "https://www.masungigeoreserve.com/",
  },
];

const solutions: SolutionItem[] = [
  {
    id: "lawin-drone",
    number: "01",
    shortTitle: "Patrol & detect",
    title: "Target high-risk forest areas with LAWIN patrols",
    kind: "Enforcement + monitoring",
    status: "National DENR framework · adopted in 2018",
    location: "Southeastern Sierra Madre · Real and Infanta, Quezon",
    summary:
      "LAWIN links conservation planning, field patrols, data management, and threat response. Patrol records and mobile tools help teams choose where to look and what to follow up.",
    preview: "Use field data and aerial checks to direct safer, better-targeted patrols.",
    icon: FaBinoculars,
    statistics: [
      { value: "3,554", label: "patrol observations recorded in 2017-2019" },
      { value: "7 km", label: "reported drone flight range" },
      { value: "30 min", label: "reported flight time" },
    ],
    steps: [
      "Plan regular patrols around repeat cutting, clearing, and forest-product extraction risks. Record conditions with GPS and mobile tools.",
      "Where trained staff and safety procedures are in place, use drones to survey remote sites before sending rangers in on foot.",
      "Coordinate safe community reporting with barangays, and fund ranger protection, equipment upkeep, and follow-up by authorized officers.",
    ],
    indicators: [
      "Priority-area patrol coverage and the time from report to response",
      "Cases followed through to resolution, not just detections or seizures",
      "Forest-cover change, interpreted alongside patrol effort",
    ],
    evidence: [
      {
        heading: "What patrol data can show",
        body: "LAWIN is documented in the Baliuag Conservation Area in Bulacan and the southeastern Sierra Madre. There, rangers logged 3,554 observations from 2017 to 2019; researchers used the records to map risks linked to agricultural expansion, infrastructure expansion, and forest-product extraction. The study demonstrates a way to target monitoring; it does not measure how much illegal logging LAWIN prevented.",
      },
      {
        heading: "Aerial checks can change what a team sees",
        body: "CENRO Real began using a drone in 2019 to look for hidden timber. In one early operation, an aerial survey located submerged lumber in an Infanta mangrove area; ground patrols confirmed and recovered at least 8,000 board feet of sawn hardwood. The reported aircraft had optical and digital zoom, about a 7-kilometer range, and roughly 30 minutes of flight time.",
      },
      {
        heading: "Ranger safety is part of the method",
        body: "The source brief describes six rangers conducting week-long foot patrols with basic field equipment and no firearms. Rangers reported threats, and the DENR had honored workers killed while on duty. Remote sensing can help teams assess a site before approaching, but it does not remove the risks of enforcement work.",
      },
    ],
    caveat:
      "More observations can mean better monitoring rather than more logging. Patrol counts, drone sightings, and seized timber are activity measures; they are not proof of a measured decline in illegal logging, flood risk, or forest loss.",
    sources: [sources[0], sources[1], sources[4], sources[5]],
  },
  {
    id: "community-forestry",
    number: "02",
    shortTitle: "Back communities",
    title: "Pair community forest care with sustainable livelihoods",
    kind: "Community stewardship",
    status: "Documented project · 2017-2021",
    location: "Quirino · Sierra Madre landscape",
    summary:
      "The Community Forestry Foundation of Quirino project combined forest guards and monitoring with restoration work and support for community cooperatives.",
    preview: "Make forest protection a shared, paid, and durable part of local livelihoods.",
    icon: FaHandsHelping,
    statistics: [
      { value: "157 ha", label: "of degraded forestland included in restoration" },
      { value: "2017-21", label: "documented project period" },
      { value: "3", label: "linked aims: protect, restore, support" },
    ],
    steps: [
      "Agree on restoration boundaries, land-use rights, and community roles before work begins, with genuine Indigenous and local participation.",
      "Assess natural regrowth and suitable native species, then organize paid nursery, planting, and site-maintenance work.",
      "Protect recovering sites from fire and renewed clearing. Keep livelihood production within already permitted areas.",
    ],
    indicators: [
      "Native seedling survival after one, three, and five years",
      "Natural regrowth, repeat clearing, and site maintenance",
      "Transparent payments, participation, and household income over time",
    ],
    evidence: [
      {
        heading: "What the Quirino project documented",
        body: "The 2017-2021 effort supported forest guards and community monitoring, restored 157 hectares of degraded forestland, and assisted community cooperatives. Forest Foundation Philippines also recorded broader coordination among community groups, DENR, local governments, academics, and livelihood agencies. Its 2021 landscape consultation corroborates the partnership approach, but does not establish ecological recovery.",
      },
      {
        heading: "A pathway to sustain local forest care",
        body: "The approach links local participation and income alternatives with forest protection and recovery. For replication, the brief recommends agreeing on rights and responsibilities first, then funding multi-year maintenance and livelihood activities that do not encourage new forest conversion.",
      },
      {
        heading: "Track outcomes beyond planting day",
        body: "The project brief does not quantify reductions in flooding or landslides, prove that mature forest has recovered, or compare long-term household incomes. It is a useful project record, not an independent impact evaluation. Those outcomes need follow-up monitoring.",
      },
    ],
    caveat:
      "This is a documented past project, not evidence that the same grant remains active today. Hectares treated alone do not establish mature forest recovery or a causal decline in illegal logging. Continue support based on survival, natural regrowth, repeat clearing, and livelihood outcomes.",
    sources: [sources[2], sources[3]],
  },
  {
    id: "masungi-restoration",
    number: "03",
    shortTitle: "Restore & regrow",
    title: "Restore degraded forests and give native species room to return",
    kind: "Landscape restoration",
    status: "Long-running restoration · expanded in 2017",
    location: "Baras, Rizal · Upper Marikina River Basin",
    summary:
      "The Masungi Geopark Project combines forest protection, assisted natural regeneration, native tree care, and community-linked conservation funding on the western foothills of the Sierra Madre.",
    preview: "Protect seed sources, maintain recovering sites, and track the forest as it regrows.",
    icon: FaSeedling,
    statistics: [
      { value: "2,700 ha", label: "landscape restoration target" },
      { value: "40,000+", label: "native trees planted and nurtured, Foundation-reported" },
      { value: "100+", label: "locals engaged in geotourism and conservation" },
    ],
    steps: [
      "Protect remaining seed sources and remove barriers such as grazing where the site can support natural regrowth.",
      "Pair restoration with ranger presence, local jobs, dependable maintenance funding, and clear land-use agreements.",
      "Monitor native regrowth and resolve competing land claims before counting planted or regenerating hectares as recovered forest.",
    ],
    indicators: [
      "Area with active protection and agreed land-use safeguards",
      "Native regeneration and planted-tree survival over time",
      "Ranger coverage, local employment, and unresolved land claims",
    ],
    evidence: [
      {
        heading: "A long-term landscape effort",
        body: "The site was declared a strict nature reserve and wildlife sanctuary in 1993. The restoration effort began in 1996; in 2017, a DENR agreement expanded the project target to nearly 2,700 hectares in the 26,000-hectare Upper Marikina River Basin Protected Landscape, near the Kaliwa Watershed. A 2021 report described about 1,700 hectares primed for reforestation and roughly 60,000 native trees, including narra and yakal. The Foundation's current project page reports 40,000+ native trees planted and nurtured. These are publisher-reported figures from different dates and should not be read as an independent impact evaluation.",
      },
      {
        heading: "Restoration needs people and long-term support",
        body: "The site opened to visitors in 2016 as a low-volume ecotourism destination, with visitor fees helping finance conservation. The supplied brief describes about 100 park rangers, most drawn from nearby upland communities; the Foundation currently reports more than 100 locals engaged in geotourism and conservation. Assisted natural regeneration removes barriers such as grazing and slash-and-burn farming so native species can recover.",
      },
      {
        heading: "Land claims and terrain affect results",
        body: "The brief records competing land claims in 2020, including one reported 500-hectare area fenced off within the restoration site and a separate claim later that year. Forest-management experts caution that assisted natural regeneration works best where some forest cover and seed sources remain; it is not a default method for every terrain. A trustee's estimate that the site took 20 years to reach its then-current state and may need another decade of accelerated planting and protection is an organization projection, not an independent measurement.",
      },
    ],
    caveat:
      "Tree totals and hectares under restoration are not the same as recovered forest. Assisted natural regeneration can take decades and depends on site conditions, protection, and maintenance. Reported progress should be paired with independent ecological follow-up.",
    sources: [sources[4], sources[6], sources[7]],
  },
];

const fieldPhotos = [
  {
    src: lawinRecoveryImage,
    width: 1747,
    height: 1403,
    alt: "Field team recovering sawn timber from a mangrove area",
    caption: "Aerial checks can locate hidden timber before a ground team approaches.",
  },
  {
    src: lawinPatrolImage,
    width: 1920,
    height: 794,
    alt: "Recovered timber being loaded for removal",
    caption: "Recovered timber is documented and loaded for removal.",
  },
];

const sharedPrinciples = [
  {
    icon: FaUsers,
    title: "Share decisions locally",
    copy: "Agree on roles, land rights, and safe reporting with communities and Indigenous groups.",
  },
  {
    icon: FaShieldAlt,
    title: "Fund protection over time",
    copy: "Budget for patrol safety, equipment, ranger jobs, site care, and multi-year maintenance.",
  },
  {
    icon: FaChartLine,
    title: "Measure what changes",
    copy: "Track forest cover, regeneration, repeat clearing, and household outcomes alongside activity counts.",
  },
];

const goals = [
  {
    id: "enforcement",
    label: "Detect threats",
    description: "Patrols, reporting, and safer aerial checks",
    solutionId: "lawin-drone",
    icon: FaBinoculars,
  },
  {
    id: "livelihoods",
    label: "Support communities",
    description: "Forest care, jobs, and local stewardship",
    solutionId: "community-forestry",
    icon: FaUsers,
  },
  {
    id: "restoration",
    label: "Restore habitat",
    description: "Native regrowth and landscape recovery",
    solutionId: "masungi-restoration",
    icon: FaSeedling,
  },
] as const;

const comparisonRows = [
  {
    label: "Primary job",
    values: ["Find and respond to threats", "Make forest care viable locally", "Protect and recover degraded land"],
  },
  {
    label: "Best starting signal",
    values: ["Repeat cutting, clearing, or extraction", "A community ready to co-manage", "Remaining seed sources and regrowth"],
  },
  {
    label: "Track over time",
    values: ["Response time, cases, and forest cover", "Survival, repeat clearing, and income", "Regeneration, protection, and land claims"],
  },
  {
    label: "Main caution",
    values: ["More reports can mean better monitoring", "Past project activity is not impact proof", "Tree totals are not recovered forest"],
  },
] as const;

function handleHorizontalTabKeys(
  event: KeyboardEvent<HTMLButtonElement>,
  ids: readonly string[],
  activeId: string,
  buttonIdPrefix: string,
  onSelect: (id: string) => void,
) {
  let nextIndex: number | null = null;
  const activeIndex = ids.indexOf(activeId);

  if (event.key === "ArrowRight") nextIndex = (activeIndex + 1) % ids.length;
  if (event.key === "ArrowLeft") nextIndex = (activeIndex - 1 + ids.length) % ids.length;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = ids.length - 1;

  if (nextIndex === null) return;

  event.preventDefault();
  const nextId = ids[nextIndex];
  onSelect(nextId);
  window.requestAnimationFrame(() => document.getElementById(`${buttonIdPrefix}-${nextId}`)?.focus());
}

function SourceLinks({ items }: { items: Source[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((source) => (
        <a
          key={source.label}
          href={source.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${source.label}: ${source.title}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-3 py-2 text-sm font-semibold text-emerald-900 transition hover:border-emerald-500 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          {source.label}
          <FaExternalLinkAlt aria-hidden="true" className="text-[10px]" />
        </a>
      ))}
    </div>
  );
}

function FieldPhotoGallery({
  photoIndex,
  onPrevious,
  onNext,
  onSelect,
}: {
  photoIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  const photo = fieldPhotos[photoIndex];

  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#10251e] shadow-sm">
      <img
        src={photo.src}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/5 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:p-7">
        <figcaption className="max-w-sm">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-lime-200">Field example · Quezon</span>
          <p className="mt-2 text-sm leading-relaxed text-white/90">{photo.caption}</p>
          <span className="mt-3 block text-xs font-semibold text-white/75">Photo {photoIndex + 1} of {fieldPhotos.length}</span>
          <span className="sr-only" aria-live="polite" aria-atomic="true">Showing photo {photoIndex + 1}: {photo.caption}</span>
        </figcaption>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Show previous field photo"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/45 bg-black/25 text-white transition hover:bg-white hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Show next field photo"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/45 bg-black/25 text-white transition hover:bg-white hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="absolute left-3 top-3 flex sm:left-5 sm:top-5" aria-label="Choose field photo">
        {fieldPhotos.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show field photo ${index + 1}`}
            aria-pressed={photoIndex === index}
            className="group grid h-11 w-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
          >
            <span className={`h-2.5 rounded-full transition ${photoIndex === index ? "w-7 bg-white" : "w-2.5 bg-white/60 group-hover:bg-white"}`} aria-hidden="true" />
          </button>
        ))}
      </div>
    </figure>
  );
}

function BeforeAfterComparison({
  reveal,
  onReveal,
}: {
  reveal: number;
  onReveal: (value: number) => void;
}) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#10251e] sm:aspect-[7/3]">
        <img
          src={masungiAfterImage}
          width="1329"
          height="568"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt="Forest cover at the Masungi restoration site in a later project photo"
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}>
          <img
            src={masungiBeforeImage}
            width="1293"
            height="569"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt="Earlier view of degraded land at the Masungi restoration site"
            className="h-full w-full object-contain"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur">1996 · Earlier</span>
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur">Later view</span>
        <span className="pointer-events-none absolute bottom-0 top-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ left: `${reveal}%` }} aria-hidden="true" />
      </div>
      <div className="px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between gap-3 text-xs font-semibold text-emerald-950">
          <label htmlFor="restoration-reveal">Drag to compare the supplied project photos</label>
          <output htmlFor="restoration-reveal" className="tabular-nums text-emerald-700">{reveal}%</output>
        </div>
        <input
          id="restoration-reveal"
          type="range"
          min="0"
          max="100"
          value={reveal}
          onChange={(event) => onReveal(Number(event.target.value))}
          aria-label="Reveal the earlier Masungi restoration photo"
          className="mt-3 h-2 w-full cursor-ew-resize accent-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        />
        <figcaption className="mt-2 text-xs leading-relaxed text-slate-500">Before-and-after images from the supplied research brief. Project imagery illustrates the site; it is not an independent measurement of forest recovery.</figcaption>
      </div>
    </figure>
  );
}

function Solution() {
  const [activeSolutionId, setActiveSolutionId] = useState(solutions[0].id);
  const [activePanel, setActivePanel] = useState<DetailPanel>("strategy");
  const [completedSteps, setCompletedSteps] = useState<Record<string, Set<number>>>(() =>
    Object.fromEntries(solutions.map((solution) => [solution.id, new Set<number>()])),
  );
  const [fieldPhotoIndex, setFieldPhotoIndex] = useState(0);
  const [restorationReveal, setRestorationReveal] = useState(52);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const activeSolution = solutions.find((solution) => solution.id === activeSolutionId) ?? solutions[0];
  const ActiveIcon = activeSolution.icon;
  const activeCompletedSteps = completedSteps[activeSolution.id] ?? new Set<number>();
  const activeGoal = goals.find((goal) => goal.solutionId === activeSolution.id) ?? goals[0];

  const selectSolution = (id: string, shouldScroll = false) => {
    setActiveSolutionId(id);
    setActivePanel("strategy");
    setFieldPhotoIndex(0);

    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        document.getElementById(`solution-panel-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const toggleStep = (index: number) => {
    setCompletedSteps((current) => {
      const nextForSolution = new Set(current[activeSolution.id] ?? []);
      if (nextForSolution.has(index)) nextForSolution.delete(index);
      else nextForSolution.add(index);

      return { ...current, [activeSolution.id]: nextForSolution };
    });
  };

  return (
    <section id="solutions-illegal-logging" className="w-full pb-12 text-slate-800 sm:pb-16">
      <header className="flex w-full items-center gap-3 px-3 pb-5 pt-8 sm:gap-5 sm:px-6 sm:pt-10">
        <span className="h-px min-w-0 flex-1 bg-gray-200" aria-hidden="true" />
        <div className="min-w-0 max-w-[85%] text-center">
          <h1 className="flex items-center justify-center gap-2 text-xl font-bold leading-snug text-teal-8 sm:text-2xl">
            <FaLeaf aria-hidden="true" className="shrink-0" />
            <span>Sierra Madre: Solutions to Illegal Logging and Deforestation</span>
          </h1>
          <p className="mt-1 text-xs leading-relaxed text-gray-700 sm:text-sm">Explore solutions through enforcement, community action, and forest restoration</p>
        </div>
        <span className="h-px min-w-0 flex-1 bg-gray-200" aria-hidden="true" />
      </header>

      <section className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-100 md:grid-cols-3" aria-label="Solution evidence at a glance">
        <div className="flex items-center gap-4 bg-[#f5f8f3] px-5 py-4 md:px-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-emerald-800 shadow-sm"><FaShieldAlt aria-hidden="true" /></span>
          <span><strong className="block text-2xl font-bold leading-none text-emerald-950">3</strong><span className="mt-1 block text-sm text-slate-600">complementary approaches</span></span>
        </div>
        <div className="flex items-center gap-4 bg-[#f5f8f3] px-5 py-4 md:px-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-emerald-800 shadow-sm"><FaBinoculars aria-hidden="true" /></span>
          <span><strong className="block text-2xl font-bold leading-none text-emerald-950">3,554</strong><span className="mt-1 block text-sm text-slate-600">patrol observations · 2017-2019</span></span>
        </div>
        <div className="flex items-center gap-4 bg-[#f5f8f3] px-5 py-4 md:px-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-emerald-800 shadow-sm"><FaSeedling aria-hidden="true" /></span>
          <span><strong className="block text-2xl font-bold leading-none text-emerald-950">157 ha</strong><span className="mt-1 block text-sm text-slate-600">included in Quirino restoration</span></span>
        </div>
      </section>
      <p className="mt-2 px-1 text-xs leading-relaxed text-slate-500">The figures describe documented monitoring and project activity. They do not measure an overall reduction in illegal logging.</p>

      <section className="mt-8 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="goal-picker-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Start with your goal</p>
            <h2 id="goal-picker-heading" className="mt-2 !mb-0 !text-2xl font-bold !leading-tight !text-emerald-950">What would you like to solve first?</h2>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-900">Pathway {goals.findIndex((goal) => goal.id === activeGoal.id) + 1} of {goals.length}</span>
        </div>
        <div className="mt-5 grid gap-2 md:grid-cols-3" role="group" aria-label="Choose a forest protection goal">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const selected = activeGoal.id === goal.id;

            return (
              <button
                key={goal.id}
                type="button"
                onClick={() => selectSolution(goal.solutionId, true)}
                aria-pressed={selected}
                className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${selected ? "border-emerald-700 bg-emerald-50" : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40"}`}
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${selected ? "bg-emerald-800 text-lime-200" : "bg-emerald-50 text-emerald-800"}`}><Icon aria-hidden="true" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-emerald-950">{goal.label}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-600">{goal.description}</span>
                </span>
                <FaArrowRight aria-hidden="true" className={`shrink-0 transition-transform group-hover:translate-x-1 ${selected ? "text-emerald-800" : "text-slate-400"}`} />
              </button>
            );
          })}
        </div>
        <div className="mt-5 flex items-center gap-3" aria-label={`Selected goal: ${activeGoal.label}`}>
          <span className="whitespace-nowrap text-xs font-semibold text-slate-500">Selected pathway</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-emerald-700 transition-[width] duration-500" style={{ width: `${((goals.findIndex((goal) => goal.id === activeGoal.id) + 1) / goals.length) * 100}%` }} />
          </div>
          <span className="whitespace-nowrap text-xs font-bold text-emerald-800">{activeGoal.label}</span>
        </div>
      </section>

      <div className="mt-5 grid gap-3 lg:grid-cols-3" role="tablist" aria-label="Choose a forest protection approach">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          const selected = activeSolution.id === solution.id;

          return (
            <button
              key={solution.id}
              id={`solution-tab-${solution.id}`}
              type="button"
              role="tab"
              onClick={() => selectSolution(solution.id)}
              onKeyDown={(event) =>
                handleHorizontalTabKeys(
                  event,
                  solutions.map((item) => item.id),
                  activeSolution.id,
                  "solution-tab",
                  selectSolution,
                )
              }
              aria-selected={selected}
              aria-controls={`solution-panel-${solution.id}`}
              tabIndex={selected ? 0 : -1}
              className={`group flex min-h-28 items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${selected ? "border-emerald-700 bg-emerald-950 text-white shadow-lg shadow-emerald-950/10" : "border-emerald-100 bg-white text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/60"}`}
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-lg ${selected ? "bg-white/10 text-lime-200" : "bg-emerald-50 text-emerald-800"}`}><Icon aria-hidden="true" /></span>
              <span className="min-w-0 flex-1">
                <span className={`block text-xs font-bold uppercase tracking-[0.16em] ${selected ? "text-lime-200" : "text-emerald-700"}`}>Approach {solution.number}</span>
                <span className="mt-1 block text-base font-bold">{solution.shortTitle}</span>
                <span className={`mt-1 block text-sm leading-relaxed ${selected ? "text-white/75" : "text-slate-600"}`}>{solution.preview}</span>
              </span>
              <FaArrowRight aria-hidden="true" className={`mt-1 shrink-0 transition-transform group-hover:translate-x-1 ${selected ? "text-lime-200" : "text-emerald-700"}`} />
            </button>
          );
        })}
      </div>

      <section
        key={`${activeSolution.id}-${activePanel}`}
        id={`solution-panel-${activeSolution.id}`}
        role="tabpanel"
        aria-labelledby={`solution-tab-${activeSolution.id}`}
        className="solution-reveal mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
      >
        <div className="min-w-0 self-start">
          {activeSolution.id === "lawin-drone" ? (
            <FieldPhotoGallery
              photoIndex={fieldPhotoIndex}
              onPrevious={() => setFieldPhotoIndex((current) => (current === 0 ? fieldPhotos.length - 1 : current - 1))}
              onNext={() => setFieldPhotoIndex((current) => (current + 1) % fieldPhotos.length)}
              onSelect={setFieldPhotoIndex}
            />
          ) : activeSolution.id === "masungi-restoration" ? (
            <BeforeAfterComparison reveal={restorationReveal} onReveal={setRestorationReveal} />
          ) : (
            <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#10251e] shadow-sm">
              <img src={communityImage} width="1280" height="853" loading="lazy" decoding="async" sizes="(min-width: 1024px) 50vw, 100vw" alt="Forest-dependent community in Palawan, Philippines" className="absolute inset-0 h-full w-full object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-lime-200">Context image · Palawan community</span>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">The documented Quirino project combined forest guards, community cooperatives, restoration work, and livelihood support. This image is contextual and is not presented as a Quirino project photograph.</p>
              </figcaption>
            </figure>
          )}

          <div className="mt-3 flex flex-wrap gap-2" aria-label="Challenges these approaches address">
            {["Weak enforcement", "Limited livelihood options", "Forest conversion"].map((challenge) => (
              <span key={challenge} className="rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-900">{challenge}</span>
            ))}
          </div>
        </div>

        <article className="min-w-0 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1.5 text-emerald-800"><ActiveIcon aria-hidden="true" /> {activeSolution.kind}</span>
            <span className="inline-flex items-center gap-1.5"><FaMapMarkerAlt aria-hidden="true" /> {activeSolution.location}</span>
          </div>
          <span className="mt-4 inline-flex rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-amber-900">{activeSolution.status}</span>
          <h2 className="mt-3 !mb-0 !text-2xl font-bold !leading-tight !text-emerald-950 sm:!text-3xl">{activeSolution.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{activeSolution.summary}</p>

          <div className="mt-5 grid gap-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {activeSolution.statistics.map((statistic) => (
              <div key={statistic.label} className="rounded-xl bg-[#f5f8f3] px-3 py-3">
                <strong className="block text-lg font-bold leading-tight text-emerald-900">{statistic.value}</strong>
                <span className="mt-1 block text-xs leading-relaxed text-slate-600">{statistic.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-b border-emerald-100 pb-3" role="tablist" aria-label="Approach details">
            {detailPanels.map(({ id, label }) => (
              <button
                key={id}
                id={`detail-tab-${id}`}
                type="button"
                role="tab"
                onClick={() => setActivePanel(id)}
                onKeyDown={(event) =>
                  handleHorizontalTabKeys(
                    event,
                    detailPanels.map((panel) => panel.id),
                    activePanel,
                    "detail-tab",
                    (nextId) => setActivePanel(nextId as DetailPanel),
                  )
                }
                aria-selected={activePanel === id}
                aria-controls={`solution-detail-${id}`}
                tabIndex={activePanel === id ? 0 : -1}
                className={`rounded-full px-4 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${activePanel === id ? "bg-emerald-800 text-white" : "bg-transparent text-slate-600 hover:bg-emerald-50 hover:text-emerald-900"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div id={`solution-detail-${activePanel}`} role="tabpanel" aria-labelledby={`detail-tab-${activePanel}`} className="pt-5">
            {activePanel === "strategy" && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-800">How the pathway works</h3>
                <ol className="mt-4 space-y-3">
                  {activeSolution.steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-800">{index + 1}</span>
                      <p className="pt-0.5 text-sm leading-relaxed text-slate-700">{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
                  <strong>Evidence boundary:</strong> {activeSolution.caveat}
                </div>
              </div>
            )}

            {activePanel === "actions" && (
              <div>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-800">Turn the approach into a plan</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">Mark steps as you review them. Your checklist stays in this page session.</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-900" aria-live="polite">{activeCompletedSteps.size} of {activeSolution.steps.length} reviewed</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {activeSolution.steps.map((step, index) => (
                    <li key={step}>
                      <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${activeCompletedSteps.has(index) ? "border-emerald-300 bg-emerald-50" : "border-slate-200 bg-white hover:border-emerald-300"}`}>
                        <input
                          type="checkbox"
                          checked={activeCompletedSteps.has(index)}
                          onChange={() => toggleStep(index)}
                          className="mt-1 h-4 w-4 shrink-0 accent-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                        />
                        <span className={`text-sm leading-relaxed ${activeCompletedSteps.has(index) ? "text-emerald-950" : "text-slate-700"}`}>{step}</span>
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl bg-[#f5f8f3] p-4">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-950"><FaChartLine aria-hidden="true" /> Track progress</h4>
                  <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                    {activeSolution.indicators.map((indicator) => <li key={indicator} className="flex gap-2 text-sm leading-relaxed text-slate-600"><FaCheckCircle aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-700" />{indicator}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {activePanel === "evidence" && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-800">What the sources say</h3>
                <div className="mt-4 space-y-4">
                  {activeSolution.evidence.map((item) => (
                    <section key={item.heading} className="border-l-2 border-emerald-200 pl-4">
                      <h4 className="text-sm font-bold text-emerald-950">{item.heading}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
                    </section>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
                  <strong>Read the results carefully:</strong> {activeSolution.caveat}
                </div>
                <div className="mt-4"><SourceLinks items={activeSolution.sources} /></div>
              </div>
            )}
          </div>
        </article>
      </section>

      <section className="mt-8 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="comparison-heading">
        <button
          type="button"
          onClick={() => setIsComparisonOpen((current) => !current)}
          aria-expanded={isComparisonOpen}
          aria-controls="approach-comparison"
          className="group flex w-full items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-800"><FaChartLine aria-hidden="true" /></span>
          <span className="min-w-0 flex-1">
            <strong id="comparison-heading" className="block text-base font-bold text-emerald-950 sm:text-lg">Compare the three pathways</strong>
            <span className="mt-1 block text-sm leading-relaxed text-slate-500">Use the same decision points to see which approach fits your starting conditions.</span>
          </span>
          <FaArrowRight aria-hidden="true" className={`shrink-0 text-emerald-700 transition-transform ${isComparisonOpen ? "rotate-90" : "group-hover:translate-x-1"}`} />
        </button>

        {isComparisonOpen && (
          <div id="approach-comparison" className="mt-5 overflow-x-auto border-t border-emerald-100 pt-5">
            <table className="min-w-[720px] w-full border-collapse text-left">
              <caption className="sr-only">Comparison of the three forest protection pathways</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-40 px-3 pb-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Decision point</th>
                  {solutions.map((solution) => {
                    const selected = activeSolution.id === solution.id;

                    return (
                      <th key={solution.id} scope="col" className="px-3 pb-3 align-top">
                        <button
                          type="button"
                          onClick={() => selectSolution(solution.id, true)}
                          aria-current={selected ? "true" : undefined}
                          className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${selected ? "border-emerald-700 bg-emerald-950 text-white" : "border-emerald-100 bg-emerald-50/50 text-emerald-950 hover:border-emerald-400"}`}
                        >
                          <span><span className={`block text-[10px] font-bold uppercase tracking-[0.14em] ${selected ? "text-lime-200" : "text-emerald-700"}`}>Approach {solution.number}</span><span className="mt-1 block text-sm font-bold">{solution.shortTitle}</span></span>
                          <FaArrowRight aria-hidden="true" className={`shrink-0 ${selected ? "text-lime-200" : "text-emerald-700"}`} />
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100 align-top">
                    <th scope="row" className="px-3 py-4 text-sm font-bold text-emerald-950">{row.label}</th>
                    {row.values.map((value, index) => (
                      <td key={value} className={`px-3 py-4 text-sm leading-relaxed ${activeSolution.id === solutions[index].id ? "bg-emerald-50/70 text-emerald-950" : "text-slate-600"}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-10 rounded-3xl bg-emerald-950 p-5 text-white sm:mt-12 sm:p-8" aria-labelledby="lasting-protection-heading">
        <div className="grid gap-6 lg:grid-cols-[minmax(15rem,0.68fr)_minmax(0,1.32fr)] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-200">What helps solutions last</p>
            <h2 id="lasting-protection-heading" className="mt-2 !mb-0 !text-2xl font-bold !leading-tight !text-white sm:!text-3xl">Good results take local trust and years of care.</h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">Use these shared safeguards across patrols, community projects, and restoration work.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sharedPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-lime-200"><Icon aria-hidden="true" /></span>
                  <h3 className="mt-3 text-sm font-bold text-white">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{principle.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 sm:p-6" aria-labelledby="solution-sources-heading">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-800"><FaBookOpen aria-hidden="true" /></span>
            <span className="flex-1">
              <strong id="solution-sources-heading" className="block text-sm font-bold text-emerald-950">Read the evidence</strong>
              <span className="mt-0.5 block text-sm text-slate-500">Government, academic, community, and project sources · {sources.length} links</span>
            </span>
            <FaArrowRight aria-hidden="true" className="text-emerald-700 transition-transform group-open:rotate-90" />
          </summary>
          <ol className="mt-5 grid gap-3 border-t border-emerald-100 pt-5 sm:grid-cols-2 xl:grid-cols-4">
            {sources.map((source) => (
              <li key={source.label} className="min-w-0 rounded-xl border border-slate-100 bg-[#fbfcfa] p-4">
                <a href={source.url} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-3 text-sm font-bold leading-snug text-emerald-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
                  <span><span className="mr-1 text-amber-700">{source.label}</span> {source.title}</span>
                  <FaExternalLinkAlt aria-label="Opens in a new tab" className="mt-1 shrink-0 text-[10px]" />
                </a>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{source.description}</p>
              </li>
            ))}
          </ol>
        </details>
      </section>

      <p className="mt-5 flex items-start gap-2 px-1 text-xs leading-relaxed text-slate-500"><FaWater aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-700" /> Watershed benefits such as lower erosion and flood risk should be monitored over time. The supplied project reports do not quantify those outcomes for these solutions.</p>
    </section>
  );
}

export default Solution;
