import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaClipboardList, FaTimes, FaTree } from "react-icons/fa";
import bantayGubatLogo from "../../assets/logo/bantay-gubat.png";
import JoinSurvey from "../modal/JoinSurvey";
import ProtectForest from "../modal/ProtectForest";

const navigationLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Causes", to: "/causes" },
  { label: "Effects", to: "/effects" },
  { label: "Stakeholders", to: "/stakeholders" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

function Header() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [isPetitionOpen, setIsPetitionOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="grid w-full place-items-center bg-white">
        <div className="flex min-h-16 w-[92%] max-w-[1600px] items-center justify-between gap-3 py-2 xl:w-[86%]">
          <div className="flex min-w-0 items-center justify-center">
            <img src={bantayGubatLogo} className="h-11 w-11 shrink-0 sm:h-13 sm:w-13" alt="Bantay Gubat logo" />
            <div className="!ml-2 flex flex-col justify-center gap-4 ">
              <h1 className="whitespace-nowrap !text-lg font-bold !text-teal-8 sm:!text-xl leading-1">Bantay Gubat</h1>
              <span className="font-semibold text-sm leading-0">Sierra Madre Chapter</span>
            </div>
          </div>

          <div className="hidden items-center gap-3 py-2 md:flex lg:gap-5">
            <button type="button" onClick={() => setIsSurveyOpen(true)} className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-teal-8 !px-4 !py-2.5 text-sm font-semibold text-teal-8 transition hover:bg-teal-8 hover:text-white lg:!px-5">
              <FaClipboardList aria-hidden="true" /> Join the Survey
            </button>
            <button type="button" onClick={() => setIsPetitionOpen(true)} className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-teal-8 !px-4 !py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 lg:!px-5">
              <FaTree aria-hidden="true" /> Protect Our Forests
            </button>
          </div>

          <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-md text-xl text-teal-8 md:hidden" aria-expanded={isMenuOpen} aria-controls="primary-navigation" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}>
            {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>

        <nav id="primary-navigation" className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col bg-teal-8 md:flex md:h-13 md:flex-row md:items-center md:justify-center`}>
          <ul className="flex w-full flex-col md:w-auto md:flex-row md:items-center md:justify-center md:gap-5">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${isActive ? "bg-white/10 font-bold md:bg-transparent" : "font-normal"} block border-t border-white/10 !px-5 !py-3 !text-white transition-colors hover:bg-white/10 hover:!text-green-200 md:border-0 md:!px-0 md:!py-2 md:hover:bg-transparent`}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 border-t border-white/10 !p-3 md:hidden">
            <button type="button" onClick={() => { setIsSurveyOpen(true); setIsMenuOpen(false); }} className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-white !px-3 !py-2 text-xs font-semibold text-white">
              <FaClipboardList aria-hidden="true" /> Join Survey
            </button>
            <button type="button" onClick={() => { setIsPetitionOpen(true); setIsMenuOpen(false); }} className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-white !px-3 !py-2 text-xs font-semibold text-teal-8">
              <FaTree aria-hidden="true" /> Protect Forests
            </button>
          </div>
        </nav>
      </header>
      <JoinSurvey isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} />
      <ProtectForest isOpen={isPetitionOpen} onClose={() => setIsPetitionOpen(false)} />
    </>
  );
}

export default Header;
