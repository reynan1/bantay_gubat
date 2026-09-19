import bantayGubatLogo from "../../assets/logo/bantay-gubat.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import JoinSurvey from "../modal/JoinSurvey";
import ProtectForest from "../modal/ProtectForest";

function Header() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [isPetitionOpen, setIsPetitionOpen] = useState(false);

  return (
    <>
    <header className="w-full grid place-items-center">
      
      {/* Top Header */}
      <div className="flex w-[85%] justify-between h-17">
        <div className="flex items-center">
          <img
            src={bantayGubatLogo}
            className="w-13 h-13"
            alt="bantay-gubat-logo"
          />

          <h1 className="!text-xl font-bold !text-teal-8">
            Bantay Gubat
          </h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 !py-3">
          
          {/* Survey Button */}
          <button
            type="button"
            onClick={() => setIsSurveyOpen(true)}
            className="
              rounded-lg
              border-2 border-teal-8
              !px-5 !py-2.5
              text-sm font-semibold text-teal-8
              transition-all duration-300
              hover:bg-teal-8
              hover:text-white
              cursor-pointer
            "
          >
            Join the Survey
          </button>

          {/* Protect Forest Button */}
          <button
            type="button"
            onClick={() => setIsPetitionOpen(true)}
            className="
              rounded-lg
              bg-teal-8
              !px-5 !py-3
              text-sm font-semibold text-white
              shadow-sm
              transition-all duration-300
              hover:opacity-90
              hover:shadow-md
              active:scale-95
              cursor-pointer
            "
          >
            Protect Our Forests
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full !py-2 bg-teal-8 flex items-center justify-center !h-13">
        <ul className="flex items-center justify-center gap-5">
          
          <li>
            <Link
              to="/"
              className="
                font-medium
                !text-white
                transition-colors duration-200
                hover:!text-green-200
              "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/causes"
              className="
                font-normal
                !text-white
                transition-colors duration-200
                hover:!text-green-200
              "
            >
              Causes
            </Link>
          </li>

          <li>
            <Link
              to="/effects"
              className="
                font-normal
                !text-white
                transition-colors duration-200
                hover:!text-green-200
              "
            >
              Effects
            </Link>
          </li>

          <li>
            <Link
              to="/effects"
              className="
                font-normal
                !text-white
                transition-colors duration-200
                hover:!text-green-200
              "
            >
              Stakeholders
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              className="
                font-normal
                !text-white
                transition-colors duration-200
                hover:!text-green-200
              "
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="
                font-normal
                !text-white
                transition-colors duration-200
                hover:!text-green-200
              "
            >
              About
            </Link>
          </li>

        </ul>
      </nav>
    </header>
    <JoinSurvey isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} />
    <ProtectForest isOpen={isPetitionOpen} onClose={() => setIsPetitionOpen(false)} />
    </>
  );
}

export default Header;
