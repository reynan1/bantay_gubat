import {
  FaBookOpen,
  FaBuilding,
  FaCubes,
  FaExternalLinkAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaNewspaper,
  FaSearch,
  FaShieldAlt,
  FaTree,
  FaUsers,
} from "react-icons/fa";

const stakeholders = [
  {
    "title": "Local Farmers / Rural Transporters",
    "description": "Individuals like the four men caught in Aglipay, Quirino, are often small-scale farmers who cut or haul timber for extra income rather than as part of an organized syndicate. They are usually the ones actually arrested, even though they're low in the supply chain."
  },
  {
    "title": "DENR (Department of Environment and Natural Resources)",
    "description": "The lead government agency mandated under Executive Order No. 23 to chair the National Anti-Illegal Logging Task Force, issue logging permits, and record confiscations (e.g., the 148 reported apprehensions in Caraga)."
  },
  {
    "title": "PNP (Philippine National Police)",
    "description": "Runs checkpoints, similar to the one in Palacian village that caught the Quirino suspects, and conducts raids. Nationally, PNP recorded 6,710 anti-illegal-logging operations and over 3,300 arrests from Jan–Oct 2020 alone."
  },
  {
    "title": "AFP (Armed Forces of the Philippines) / Military",
    "description": "A task force member since forest rangers and DENR personnel have been killed in the line of duty; the DENR has at times asked the military to take the lead role in high-risk logging hotspots like Caraga and Davao."
  },
  {
    "title": "Local Government Units (LGUs) & Barangay Officials",
    "description": "Coordinate with DENR's PENRO/CENRO offices, help set up monitoring stations, and are often the first to receive citizen tips (as happened in the Nueva Ecija case where a \"concerned citizen\" reported the activity)."
  },
  {
    "title": "NBI (National Bureau of Investigation)",
    "description": "Partners with DENR on raids of illegal wood-processing operations, such as a 2022 joint operation with DENR-CENRO Lipa that seized ₱11 million worth of undocumented lumber and equipment from a wood factory in Malvar, Batangas."
  },
  {
    "title": "Wood/Timber Industry",
    "description": "Licensed loggers and wood processors who argue that logging bans and moratoria unfairly restrict their legal business while illegal operators keep supplying the market anyway, creating tension between conservation policy and industry livelihoods. The wood-processing sector alone reportedly employs hundreds of thousands of workers."
  },
  {
    "title": "NDRRMC (National Disaster Risk Reduction and Management Council)",
    "description": "The national disaster-response body that tracks casualties and damage from the floods/landslides that illegal logging worsens — e.g., reporting over 2 million people affected across 190 towns during the January 2011 floods, and coordinating emergency response after Typhoons Molave, Goni, and Vamco in 2020."
  },
  {
    "title": "Investigative Journalists",
    "description": "Reporters covering illegal logging on the ground have faced real risk for their coverage. One local reporter covering the Ormoc disaster received death threats and had to withhold his name, illustrating how press scrutiny of logging syndicates carries direct personal danger."
  }
];

const references = [
  {
    "title": "Batas Natin. (n.d.). Executive Order No. 23, s. 2011.",
    "url": "https://batasnatin.com/laws/eo-23-3"
  },
  {
    "title": "Bicarme, T. C. (2011). Philippines: DENR 2 organizes anti-illegal logging task force. Indigenous Peoples Issues & Resources.",
    "url": "https://did.isuma.tv/indigenous-peoples-issues-and-resources/philippines-denr-2-organizes-anti-illegal-logging-task-force"
  },
  {
    "title": "Bulatlat. (2011, February 2). Environmental activist group to Aquino: Impose commercial log ban now. Bulatlat.",
    "url": "https://www.bulatlat.com/2011/02/02/environmental-activist-group-to-aquino-impose-commercial-log-ban-now/"
  },
  {
    "title": "Christian Science Monitor. (1991, November 12). Illegal logging blamed for Philippine flood toll. The Christian Science Monitor.",
    "url": "https://proof.csmonitor.com/1991/1112/12061.html"
  },
  {
    "title": "DENR CALABARZON. (n.d.). DENR CENRO Lipa, NBI partnered in the confiscation of ₱11-M worth of undocumented forest products in Malvar, Batangas. Department of Environment and Natural Resources Region IV-A CALABARZON.",
    "url": "https://calabarzon.denr.gov.ph/index.php/news-events/photo-releases/2752-denr-cenro-lipa-nbi-partnered-in-the-confiscation-of-11-m-worth-of-undocumented-forest-products-in-malvar-batangas"
  },
  {
    "title": "DENR Region 3. (n.d.). Authorities nab 5 suspected illegal loggers in Nueva Ecija. Department of Environment and Natural Resources Region III.",
    "url": "https://r3.denr.gov.ph/index.php/news-events/press-releases/1354-authorities-nab-5-suspected-illegal-loggers-in-nueva-ecija"
  },
  {
    "title": "Eco-Business. (n.d.). Philippines: Ban on logging in natural forests. Eco-Business.",
    "url": "https://www.eco-business.com/id/news/philippines-ban-logging-natural-forests/"
  },
  {
    "title": "Gascon, M. (2018, March 2). 4 farmers nabbed for illegal logging in Quirino. Inquirer News.",
    "url": "https://newsinfo.inquirer.net/972512/4-farmers-nabbed-for-illegal-logging-in-quirino"
  },
  {
    "title": "Jarina, D. (2012, July 28). DENR asks military to lead fight vs illegal loggers. Inquirer News.",
    "url": "https://newsinfo.inquirer.net/238105/denr-asks-military-to-lead-fight-vs-illegal-loggers"
  },
  {
    "title": "Philstar.com. (2012, September 29). Wood producers seek review of logging moratorium. The Philippine Star.",
    "url": "https://www.philstar.com/business/2012/09/29/854000/wood-producers-seek-review-logging-moratorium/amp/"
  },
  {
    "title": "Press Reader / Arab News. (2020, November 17). Duterte urged to act after typhoon wreaks havoc. Arab News, via PressReader.",
    "url": "https://www.pressreader.com/saudi-arabia/arab-news/20201117/281887300846008"
  }
];

const stakeholderIcons = [FaUsers, FaTree, FaShieldAlt, FaShieldAlt, FaMapMarkerAlt, FaSearch, FaCubes, FaBuilding, FaNewspaper];

function StakeHolders() {
  return (
    <section id="stakeholders-illegal-logging" className="w-full border-t border-gray-200 text-teal-8">
      <header className="flex w-full items-center gap-3 !px-3 !pt-8 !pb-5 sm:gap-5 sm:!px-6 sm:!pt-10">
        <span className="h-px min-w-0 flex-1 bg-gray-200" aria-hidden="true" />
        <div className="min-w-0 max-w-[85%] text-center">
          <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !leading-snug !text-teal-8 sm:!text-2xl">
            <FaHandshake aria-hidden="true" className="shrink-0" />
            Stakeholders in Illegal Logging and Forest Protection
          </h1>
          <p className="!mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">People, institutions, and industries connected to forest protection in the Philippines</p>
        </div>
        <span className="h-px min-w-0 flex-1 bg-gray-200" aria-hidden="true" />
      </header>

      <div className="grid items-stretch gap-4 !px-3 !py-6 sm:!px-6 md:grid-cols-2 xl:grid-cols-3">
        {stakeholders.map((stakeholder, index) => {
          const Icon = stakeholderIcons[index];
          return (
            <article key={stakeholder.title} className="min-w-0 rounded-lg border border-teal-100 bg-white !p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal-50 text-xl text-teal-800">
                  <Icon aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-teal-600">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="!mt-4 !mb-0 !text-lg font-bold !leading-snug !text-teal-8">{stakeholder.title}</h2>
              <p className="!mt-3 text-sm leading-relaxed text-gray-700">{stakeholder.description}</p>
            </article>
          );
        })}
      </div>

      <section aria-labelledby="stakeholder-references-heading" className="!mt-3 border-t border-gray-200 !px-3 !py-8 sm:!px-6">
        <h2 id="stakeholder-references-heading" className="flex items-center gap-2 !text-2xl font-bold !text-teal-8">
          <FaBookOpen aria-hidden="true" /> References
        </h2>
        <ol className="!mt-5 grid list-none gap-4 !p-0 md:grid-cols-2">
          {references.map((reference, index) => (
            <li key={reference.url} className="min-w-0 rounded-lg border border-gray-200 !p-4">
              <p className="text-sm leading-relaxed text-gray-700">{index + 1}. {reference.title}</p>
              <a href={reference.url} target="_blank" rel="noopener noreferrer" className="!mt-3 inline-flex max-w-full items-start gap-2 text-xs leading-relaxed text-teal-700 hover:underline">
                <span className="min-w-0 break-all">{reference.url}</span>
                <FaExternalLinkAlt aria-label="Opens in a new tab" className="!mt-1 shrink-0" />
              </a>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}

export default StakeHolders;
