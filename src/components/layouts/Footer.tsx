import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUser,
  FaCode,
} from "react-icons/fa";

import bantayGubatLogo from "../../assets/logo/bantay-gubat.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Causes", to: "/causes" },
  { label: "Effects", to: "/effects" },
  { label: "About", to: "/about" },
];

const focusAreas = [
  "Forest protection",
  "Community reporting",
  "Illegal logging awareness",
  "Indigenous communities",
];

function Footer() {
  return (
    <footer className="w-full bg-teal-8 text-white">
      {/* Main Footer */}
      <div className="flex flex-col items-center justify-center">
        <div
          className="
            mx-auto grid w-[90%] grid-cols-1 gap-10 !py-10
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.7fr_1fr_1fr]
          "
        >
          {/* Bantay Gubat Information */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <img
                src={bantayGubatLogo}
                className="h-14 w-14 rounded-full bg-white/95 p-1"
                alt="Bantay Gubat logo"
              />

              <div>
                <h2 className="!text-xl font-bold !text-white">
                  Bantay Gubat
                </h2>

                <p className="text-sm font-medium text-green-100">
                  Guarding Philippine forests through awareness and action.
                </p>
              </div>
            </div>

            <p className="!mt-5 max-w-md text-sm leading-6 text-green-50">
              Illegal logging harms watersheds, wildlife, and forest
              communities. This platform shares verified context and
              encourages citizens to help protect the country's remaining
              forests.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="!mb-4 text-sm font-bold uppercase tracking-wide text-green-100">
              Explore
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="
                      text-sm font-medium !text-white
                      transition-colors duration-200
                      hover:!text-green-200
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="!mb-4 text-sm font-bold uppercase tracking-wide text-green-100">
              Our Focus
            </h3>

            <ul className="grid gap-3 text-sm text-green-50">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <FaShieldAlt className="shrink-0 text-green-200" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Information */}
          <div>
            <h3 className="!mb-4 text-sm font-bold uppercase tracking-wide text-green-100">
              Developed By
            </h3>

            <div className="flex items-center gap-3">
              <div
                className="
                  grid h-10 w-10 shrink-0 place-items-center
                  rounded-full bg-white/10
                "
              >
                <FaUser className="text-green-200" />
              </div>

              <div>
                <p className="font-semibold !text-white">
                  Reynan S. Delizo
                </p>

                <p className="text-sm text-green-100">
                  Website Developer
                </p>
              </div>
            </div>

            <p className="!mt-4 max-w-xs text-sm leading-6 text-green-50">
              Bantay Gubat is an educational advocacy website developed
              to raise awareness about the impact of illegal logging and
              the importance of protecting Philippine forests.
            </p>

            <div className="!mt-4 flex items-center gap-2 text-sm text-green-100">
              <FaCode className="text-green-200" />
              <span>Developed for educational purposes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-center border-t border-white/15 !px-7">
        <div
          className="
            mx-auto flex w-[90%] flex-col gap-4 !py-5
            text-sm text-green-100
            md:flex-row md:items-center md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Bantay Gubat. Developed by{" "}
            <span className="font-semibold !text-white">
              Reynan S. Delizo
            </span>{" "}
            for educational purposes.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Location */}
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-200" />
              Philippines
            </span>

            {/* DENR Email */}
            <a
              href="mailto:aksyonkalikasan@denr.gov.ph"
              className="
                inline-flex items-center gap-2
                !text-green-100 transition
                hover:!text-white
              "
            >
              <FaEnvelope className="text-green-200" />
              aksyonkalikasan@denr.gov.ph
            </a>

            {/* DENR Facebook */}
            <a
              href="https://www.facebook.com/DENROfficial"
              target="_blank"
              rel="noreferrer"
              className="
                grid h-9 w-9 place-items-center rounded-full
                border border-white/30 !text-white
                transition hover:bg-white hover:!text-teal-8
              "
              aria-label="DENR Facebook page"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;