import { useState } from "react";
import {
  FaBookOpen,
  FaChartBar,
  FaCubes,
  FaExternalLinkAlt,
  FaFileAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaSearch,
  FaShieldAlt,
  FaTree,
  FaUsers,
} from "react-icons/fa";
import denrImage from "../assets/images/DENR.jpg";
import timberImage from "../assets/images/causes/timbers.png";

const sierraMadrePanorama =
  "https://pais.bmb.gov.ph/pas/bmb_assets2/uploads/pa_profile_pic/Screenshot_2025-06-30_130905.png";
const sierraMadreRainforest =
  "https://martinsandiego.ph/assets/uploads/2022/08/0001-Photojournalist-Martin-San-Diego-Philippine-Hawk-Eagle-Aurora-Dumagat-7MS04498-scaled.jpg";

function StakeHolders() {
  const [selectedStakeholder, setSelectedStakeholder] = useState(0);

  const stakeholders = [
    {
      value: "01",
      title: "Indigenous and Forest Communities",
      role: "Most affected",
      icon: FaUsers,
      image: sierraMadreRainforest,
      imageAlt: "Sierra Madre rainforest connected to Dumagat ancestral domain",
      photoSource: "Sierra Madre rainforest in Dumagat ancestral domain",
      description:
        "Communities living near forest areas depend on forest resources, water, food, medicine, and culturally important places.",
      whyTheyMatter:
        "They are often the first to notice forest changes and the first to feel the effects when resources become harder to access.",
      needs:
        "Protection of ancestral and community lands, respectful consultation, livelihood support, and inclusion in monitoring and restoration decisions.",
      contribution:
        "Local knowledge can help identify forest damage, document impacts, guide restoration priorities, and strengthen community-based protection.",
      risk:
        "Forest loss can reduce access to water, food, medicinal plants, livelihood resources, and culturally important areas.",
      reference:
        "Limits to Indigenous Participation: The Agta and the Northern Sierra Madre Natural Park",
      referenceUrl:
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC4194021/",
    },
    {
      value: "02",
      title: "DENR and Law Enforcement",
      role: "Forest protection",
      icon: FaShieldAlt,
      image: denrImage,
      imageAlt: "DENR forest protection and enforcement activity",
      photoSource: "DENR forest protection and monitoring work",
      description:
        "Government agencies are responsible for forest protection, permits, monitoring, apprehensions, and legal enforcement.",
      whyTheyMatter:
        "Illegal logging cannot be reduced without active field monitoring, inter-agency coordination, and consistent follow-through on cases.",
      needs:
        "Reliable reports, patrol capacity, evidence handling, coordination with police and LGUs, and public trust in enforcement action.",
      contribution:
        "DENR and partner agencies can verify reports, conduct patrols, seize undocumented forest products, and support prosecution.",
      risk:
        "Weak coordination or limited field presence can allow unauthorized cutting, transport, and trading to continue.",
      reference:
        "Philstar - hot logs seized in Sierra Madre watershed",
      referenceUrl:
        "https://www.philstar.com/nation/2019/09/21/1953552/p17-million-hot-logs-seized-sierra-madre-watershed",
    },
    {
      value: "03",
      title: "LGUs and Barangays",
      role: "Local response",
      icon: FaMapMarkerAlt,
      image: sierraMadrePanorama,
      imageAlt: "Northern Sierra Madre forest landscape",
      photoSource: "Northern Sierra Madre forest landscape and local monitoring area",
      description:
        "Local governments and barangays connect national forest rules with local reporting, land-use planning, and community action.",
      whyTheyMatter:
        "They are closest to the communities, roads, checkpoints, and local decisions that can either prevent or enable forest loss.",
      needs:
        "Clear reporting channels, land-use information, community cooperation, and coordination with DENR, police, and protected-area managers.",
      contribution:
        "LGUs can help organize patrol support, local ordinances, awareness work, livelihood programs, and quick response to reports.",
      risk:
        "If local monitoring is weak, illegal transport routes and small-scale cutting can be missed until the damage grows.",
      reference:
        "DENR-BMB PAIS - Northern Sierra Madre Natural Park",
      referenceUrl:
        "https://pais.bmb.gov.ph/home/info/WXTHTRUGGBP",
    },
    {
      value: "04",
      title: "Researchers and Civil Society",
      role: "Evidence and advocacy",
      icon: FaSearch,
      image: "/images/forest-field-survey.jpg",
      imageAlt: "Forest field survey",
      photoSource: "Forest field survey and documentation",
      description:
        "Researchers, NGOs, schools, and media help document forest conditions, explain impacts, and make evidence easier for the public to understand.",
      whyTheyMatter:
        "Public action is stronger when claims are supported by field evidence, satellite data, community testimony, and transparent reporting.",
      needs:
        "Access to reliable data, community consent, clear methodology, and careful language that avoids unsupported blame.",
      contribution:
        "They can publish research, verify patterns, educate communities, and support campaigns for stronger forest protection.",
      risk:
        "Without good evidence, the issue may be misunderstood, ignored, or reduced to claims that are difficult to act on.",
      reference:
        "Climate Change Commission - Save Sierra Madre Day statement",
      referenceUrl:
        "https://www.climate.gov.ph/news/934",
    },
    {
      value: "05",
      title: "Timber Sector and Consumers",
      role: "Market pressure",
      icon: FaCubes,
      image: timberImage,
      imageAlt: "Timber products and wood supply",
      photoSource: "Timber and forest products supply chain",
      description:
        "Buyers, transporters, builders, and sellers shape demand for wood and influence whether timber is sourced legally.",
      whyTheyMatter:
        "Illegal logging is partly sustained by markets that accept undocumented forest products or fail to check legal sourcing.",
      needs:
        "Traceable supply, permit checking, responsible procurement, and awareness that cheap undocumented wood can carry forest costs.",
      contribution:
        "Responsible buyers and businesses can reduce illegal demand by refusing undocumented lumber and supporting legal wood supply.",
      risk:
        "Unchecked demand can reward illegal cutting, transport, and sale even when enforcement improves in hotspot areas.",
      reference:
        "GMA News - Sierra Madre and nature-based solutions against floods",
      referenceUrl:
        "https://www.gmanetwork.com/news/lifestyle/content/1001970/explainer-why-are-the-sierra-madre-and-nature-based-solutions-important-vs-floods/story/",
    },
  ];

  const selected = stakeholders[selectedStakeholder];
  const SelectedIcon = selected.icon;

  return (
    <section id="stakeholders-illegal-logging" className="w-full border-t-[1px] text-teal-8">
      <div className="flex w-full items-center gap-3 !px-3 !pt-7 !pb-2 sm:gap-4 sm:!px-6 sm:!pt-8">
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
            <FaHandshake aria-hidden="true" className="shrink-0" />
            Stakeholders in Forest Protection
          </h1>
          <p className="!mt-1 text-xs text-gray-600">
            People and institutions connected to Sierra Madre forest protection
          </p>
        </div>
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
      </div>

      <div className="flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto !px-3 !py-5 sm:!px-6 sm:!py-6">
        {stakeholders.map((stakeholder, index) => (
          <button
            key={stakeholder.title}
            type="button"
            onClick={() => setSelectedStakeholder(index)}
            aria-pressed={selectedStakeholder === index}
            aria-controls="stakeholder-detail"
            className="forest-selector-card group flex min-w-[82vw] snap-start flex-1 cursor-pointer flex-col rounded-md border text-left text-teal-8 shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:min-w-[280px] lg:min-w-0"
          >
            <div className="flex min-h-20 w-full items-start gap-3 !px-2 !py-3">
              <span className="forest-icon-badge grid h-12 w-12 shrink-0 place-items-center rounded-full text-xl">
                <stakeholder.icon aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block text-2xl font-bold leading-tight">{stakeholder.value}</span>
                <span className="!mt-1 block text-xs font-semibold leading-snug">{stakeholder.title}</span>
              </div>
            </div>
            <div className="forest-selector-panel !mt-2 w-full flex-1 rounded-b-md !px-4 !py-3 transition-colors">
              <span className="flex items-center gap-2 text-xs font-bold text-teal-8">
                <FaHandshake aria-hidden="true" /> Role
              </span>
              <span className="!mt-1 block text-xs font-semibold text-teal-700">{stakeholder.role}</span>
              <p className="!mt-2 text-xs leading-relaxed text-gray-700">
                {stakeholder.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div id="stakeholder-detail" className="!mt-5 w-full border-t border-gray-200 !px-3 !py-8 text-teal-8 sm:!px-6 sm:!py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
          <div className="flex min-w-0 flex-col gap-2">
            <img
              src={selected.image}
              alt={selected.imageAlt}
              className="aspect-[3/2] w-full rounded-md object-cover"
            />
            <span className="text-xs text-gray-600">{selected.photoSource}</span>
          </div>

          <div className="min-w-0 !space-y-3">
            <div className="flex items-center gap-3">
              <SelectedIcon aria-hidden="true" className="mt-0.5 shrink-0 text-xl" />
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase text-gray-500">
                  {selected.role}
                </span>
                <h2 className="text-base !text-xl font-bold leading-tight !mb-0 !text-teal-8">
                  {selected.title}
                </h2>
                <p className="!mt-1 text-xs leading-snug text-gray-600">
                  {selected.description}
                </p>
              </div>
            </div>

            <div className="border-y border-gray-200 !py-4">
              <h3 className="flex items-center gap-2 text-sm font-bold text-teal-8">
                <FaTree aria-hidden="true" />
                Why this stakeholder matters
              </h3>
              <p className="!mt-2 text-sm leading-relaxed text-gray-700">
                {selected.whyTheyMatter}
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="forest-soft-panel rounded-md border !p-4">
                <h3 className="text-sm font-bold text-teal-8">What they need</h3>
                <p className="!mt-2 text-xs leading-relaxed text-gray-700">{selected.needs}</p>
              </div>
              <div className="forest-info-card rounded-md border !p-4">
                <h3 className="text-sm font-bold text-teal-8">What they contribute</h3>
                <p className="!mt-2 text-xs leading-relaxed text-gray-700">{selected.contribution}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="!mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Stakeholder risk", content: selected.risk, icon: FaChartBar },
            { title: "Shared action", content: "The strongest response combines local reporting, verified evidence, enforcement, responsible markets, and restoration work.", icon: FaHandshake },
            { title: "Information needed", content: "Useful evidence includes community reports, permit records, seizure data, maps, photos, site visits, and livelihood impacts.", icon: FaSearch },
          ].map(({ title, content, icon: Icon }) => (
            <div key={title} className="forest-info-card group min-w-0 cursor-pointer rounded-md border !p-4 transition-all duration-200 hover:shadow-md">
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
            <FaBookOpen aria-hidden="true" className="text-xl" /> Reference
          </h3>
          <div className="!mt-2 flex min-w-0 items-start gap-3 text-xs leading-relaxed">
            <FaFileAlt aria-hidden="true" className="mt-0.5 shrink-0 text-teal-8" />
            <div className="min-w-0">
              <p className="font-medium text-gray-800">{selected.reference}</p>
              <a href={selected.referenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center gap-1 text-blue-700 hover:underline">
                <span className="min-w-0 break-all">{selected.referenceUrl}</span>
                <FaExternalLinkAlt aria-hidden="true" className="shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default StakeHolders;
