import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaBookOpen,
  FaClipboardList,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebookF,
  FaMapMarkerAlt,
  FaTree,
} from "react-icons/fa";

import bantayGubatLogo from "../../assets/logo/bantay-gubat.png";
import JoinSurvey from "../modal/JoinSurvey";
import ProtectForest from "../modal/ProtectForest";

const researchLinks = [
  { label: "Home", to: "/" },
  { label: "Causes", to: "/causes" },
  { label: "Effects", to: "/effects" },
  { label: "Stakeholders", to: "/stakeholders" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

function Footer() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [isPetitionOpen, setIsPetitionOpen] = useState(false);

  return (
    <>
    <footer className="w-full bg-teal-8 text-white">
      <div className="!mx-auto w-[86%] !py-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap lg:flex-nowrap">
          <section
            aria-labelledby="footer-brand-title"
            className="w-full sm:w-[calc(50%-1.25rem)] lg:w-auto lg:flex-[1.45_1_0]"
          >
            <div className="flex items-center gap-4">
              <img
                src={bantayGubatLogo}
                className="!h-16 !w-16 shrink-0 rounded-full bg-white object-contain !p-1"
                alt="Bantay Gubat logo"
              />
              <div>
                <h2 id="footer-brand-title" className="!text-xl font-bold !text-white">
                  Bantay Gubat
                </h2>
                <p className="!mt-1 text-sm font-medium leading-5 text-green-100">
                  Evidence, awareness, and action for Philippine forests.
                </p>
              </div>
            </div>
            <p className="!mt-5 !max-w-md text-sm leading-6 text-green-50">
              A digital advocacy project examining illegal logging through
              documented cases, research, and community perspectives.
            </p>
          </section>

          <nav
            aria-label="Footer research navigation"
            className="w-full sm:w-[calc(50%-1.25rem)] lg:w-auto lg:flex-[0.8_1_0]"
          >
            <h3 className="!mb-4 text-sm font-bold uppercase text-green-100">
              Explore the Research
            </h3>
            <ul className="space-y-3">
              {researchLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `text-sm !text-white transition-colors hover:!text-green-200 ${
                        isActive ? "font-bold" : "font-medium"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-labelledby="footer-action-title"
            className="w-full sm:w-[calc(50%-1.25rem)] lg:w-auto lg:flex-[0.95_1_0]"
          >
            <h3 id="footer-action-title" className="!mb-4 text-sm font-bold uppercase text-green-100">
              Take Action
            </h3>
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setIsSurveyOpen(true)}
                className="flex cursor-pointer items-center gap-3 text-left text-sm font-semibold text-white transition-colors hover:text-green-200"
              >
                <FaClipboardList className="shrink-0 text-lg text-green-200" aria-hidden="true" />
                <span>Join the Survey</span>
              </button>
              <button
                type="button"
                onClick={() => setIsPetitionOpen(true)}
                className="flex cursor-pointer items-center gap-3 text-left text-sm font-semibold text-white transition-colors hover:text-green-200"
              >
                <FaTree className="shrink-0 text-lg text-green-200" aria-hidden="true" />
                <span>Protect Our Forests</span>
              </button>
            </div>
            <p className="!mt-5 max-w-xs text-sm leading-6 text-green-50">
              Learn responsibly. Report concerns through official channels.
            </p>
          </section>

          <section
            aria-labelledby="footer-contact-title"
            className="w-full sm:w-[calc(50%-1.25rem)] lg:w-auto lg:flex-[1.1_1_0]"
          >
            <h3 id="footer-contact-title" className="!mb-4 text-sm font-bold uppercase text-green-100">
              Official Contact
            </h3>
            <ul className="space-y-4 text-sm text-green-50">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0 text-green-200" aria-hidden="true" />
                <span>Philippines</span>
              </li>
              <li>
                <a
                  href="mailto:bantaygubatorg@gmail.com"
                  className="flex min-w-0 items-center gap-3 !text-green-50 transition-colors hover:!text-white"
                >
                  <FaEnvelope className="shrink-0 text-green-200" aria-hidden="true" />
                  <span className="min-w-0 break-all">bantaygubatorg@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/DENROfficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 !text-green-50 transition-colors hover:!text-white"
                >
                  <FaFacebookF className="shrink-0 text-green-200" aria-hidden="true" />
                  <span>DENR Official</span>
                  <FaExternalLinkAlt className="text-xs text-green-200" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="!mt-10 flex flex-col gap-4 border-t border-white/20 !pt-5 text-sm text-green-100 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Bantay Gubat. Educational advocacy
            project by <span className="font-semibold text-white">Reynan S. Delizo</span>.
          </p>
          <p className="flex items-center gap-2">
            <FaBookOpen className="shrink-0 text-green-200" aria-hidden="true" />
            <span>Sources are cited on each research page.</span>
          </p>
        </div>
      </div>
    </footer>
    <JoinSurvey isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} />
    <ProtectForest isOpen={isPetitionOpen} onClose={() => setIsPetitionOpen(false)} />
    </>
  );
}

export default Footer;
