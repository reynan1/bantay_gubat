
import {
  FaCode,
  FaLeaf,
  FaLightbulb,
  FaNetworkWired,
  FaSearch,
  FaShieldAlt,
  FaTree,
  FaUsers,
} from "react-icons/fa";
import aboutLogo from "../assets/logo/bantay-gubat-full.png";

const teamMembers = [
  {
    initials: "RD",
    name: "Reynan Delizo",
    program: "BSIT, Major in Software Development",
    icon: FaCode,
    roles: ["Web development", "Interface design", "Analysis", "Research and development"],
    contributionUrl: "/",
  },
  {
    initials: "JR",
    name: "John Rick Ramos",
    program: "BSIT, AI-Powered Product Development",
    icon: FaLightbulb,
    roles: ["Research on the effects of illegal logging"],
    contributionUrl: "/effects",
  },
  {
    initials: "JD",
    name: "John Linnard Dumdum",
    program: "BSIT, Network and Cybersecurity",
    icon: FaNetworkWired,
    roles: ["Research on the causes of illegal logging"],
    contributionUrl: "/causes",
  },
  {
    initials: "ED",
    name: "Elijah Constantine Dela Cruz",
    program: "Bachelor of Science in Information Technology",
    icon: FaUsers,
    roles: ["Research on stakeholders"],
    contributionUrl: "/stakeholders",
  },
];

const researchFeatures = [
  {
    icon: FaSearch,
    title: "Evidence-based research",
    description: "The project organizes documented cases, government reports, and published studies into clear research questions and findings.",
  },
  {
    icon: FaTree,
    title: "Cause and effect analysis",
    description: "The Causes page uses 5 Whys to examine underlying drivers, while the Effects page traces how forest removal affects ecosystems and people.",
  },
  {
    icon: FaShieldAlt,
    title: "Careful interpretation",
    description: "Evidence is presented with conclusions and limitations so reported figures are not confused with estimates of total forest loss.",
  },
];

function About() {
  return (
    <section className="w-full border-t border-gray-200 !pb-12 text-teal-8">
      <div className="flex w-full items-center gap-3 !px-3 !pt-7 !pb-2 sm:gap-4 sm:!px-6 sm:!pt-8">
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
            <FaLeaf aria-hidden="true" /> About the Project
          </h1>
          <p className="!mt-1 text-xs text-gray-600">Research, evidence, and public awareness about illegal logging in the Philippines</p>
        </div>
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
      </div>

      <div className="!mt-7 grid gap-7 !px-3 sm:!px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-normal text-teal-8">About Bantay Gubat</p>
          <h2 className="!mt-2 max-w-xl text-2xl font-bold leading-tight text-teal-8">Understanding the forest is the first step toward protecting it.</h2>
          <div className="!mt-5 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              Bantay Gubat is a digital advocacy project that explores the impact of illegal logging in the Philippines. It brings together documented cases, data, and reliable sources to help visitors understand how unauthorized tree cutting affects forests, wildlife, natural resources, and forest-dependent communities.
            </p>
            <p>
              Through this website, visitors can explore the causes and effects of illegal logging, learn about the people and organizations involved in forest protection, and discover why protecting Philippine forests is important for both present and future generations.
            </p>
            <p>
              Bantay Gubat aims to turn information into awareness and awareness into responsible action toward forest conservation.
            </p>
          </div>
        </div>
        <figure className="flex min-h-72 items-center justify-center overflow-hidden rounded-md border border-teal-100 bg-green-50 !p-5 lg:min-h-0">
          <img src={aboutLogo} alt="Bantay Gubat: People, Forests, Brighter Tomorrows" className="h-full max-h-[28rem] w-full object-contain" />
        </figure>
      </div>

      <div className="!px-3 !py-8 sm:!px-6 sm:!py-10">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-teal-200" aria-hidden="true" />
          <div className="text-center">
            <h2 className="text-xl font-bold text-teal-8">How the Research Is Presented</h2>
            <p className="!mx-auto !mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">A consistent research structure helps visitors separate documented facts, interpretation, and uncertainty.</p>
          </div>
          <span className="h-px flex-1 bg-teal-200" aria-hidden="true" />
        </div>
        <div className="!mt-6 grid gap-4 md:grid-cols-3">
          {researchFeatures.map((feature) => (
            <article key={feature.title} className="group flex min-w-0 items-start gap-4 rounded-md border border-teal-100 bg-white !p-5 transition-all duration-200 hover:border-teal-700 hover:bg-green-50 hover:shadow-md">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-green-50 text-lg text-teal-8 transition-colors group-hover:bg-white"><feature.icon aria-hidden="true" /></span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-teal-8">{feature.title}</h3>
                <p className="!mt-2 text-xs leading-relaxed text-gray-700">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-y border-teal-100 bg-green-50 !px-3 !py-8 sm:!px-6 sm:!py-10">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-teal-200" aria-hidden="true" />
          <div className="text-center">
            <h2 className="flex items-center justify-center gap-2 text-xl font-bold text-teal-8"><FaUsers aria-hidden="true" /> Barangay Gubat Team</h2>
            <p className="!mt-2 text-sm text-gray-600">The students behind the website, analysis, and research</p>
          </div>
          <span className="h-px flex-1 bg-teal-200" aria-hidden="true" />
        </div>
        <div className="!mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="group flex min-w-0 flex-col rounded-md border border-teal-100 bg-white !p-5 shadow-sm transition-all duration-200 hover:border-teal-700 hover:shadow-md">
              <div className="flex min-h-20 items-start gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-teal-8 text-base font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-105">{member.initials}</div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-tight text-teal-8">{member.name}</h3>
                  <p className="!mt-1 flex items-start gap-2 text-xs font-medium leading-relaxed text-gray-600"><member.icon aria-hidden="true" className="mt-0.5 shrink-0 text-teal-8" /> {member.program}</p>
                </div>
              </div>
              <div className="!my-4 h-1 w-full rounded bg-gradient-to-r from-teal-8 via-teal-600 to-green-400" aria-hidden="true" />
              <div className="flex flex-1 flex-col">
                <p className="text-[11px] font-bold uppercase text-gray-500">Contribution</p>
                <div className="flex">
                  <p className="!mt-2 flex-1 text-sm leading-relaxed text-gray-700">{member.roles.join(", ")}.</p>
                </div>

{/*                 <Link to={member.contributionUrl} className="!mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-teal-8 !px-3 !py-2.5 text-xs font-semibold text-teal-8 transition-colors hover:bg-teal-8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
                  <FaExternalLinkAlt aria-hidden="true" /> View contribution
                </Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
