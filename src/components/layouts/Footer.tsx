
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
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
    <footer className="w-full  bg-teal-8 text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="mx-auto grid justify-items-center w-[90%] grid-cols-1 gap-10 !py-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <img
                src={bantayGubatLogo}
                className="h-14 w-14 rounded-full bg-white/95 p-1"
                alt="bantay-gubat-logo"
              />
              <div>
                <h2 className="!text-xl font-bold !text-white">Bantay Gubat</h2>
                <p className="text-sm font-medium text-green-100">
                  Guarding Philippine forests through awareness and action.
                </p>
              </div>
            </div>

            <p className="!mt-5 !px-3 max-w-md text-sm leading-6 text-green-50">
              Illegal logging harms watersheds, wildlife, and forest communities.
              This platform shares verified context and encourages citizens to
              help protect the country's remaining forests.
            </p>
          </div>

          <div>
            <h3 className="!mb-4 text-sm font-bold uppercase tracking-wide text-green-100">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium !text-white transition-colors duration-200 hover:!text-green-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="!mb-4 text-sm font-bold uppercase tracking-wide text-green-100">
              Contact Information
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
        </div>
      </div>
     

      <div className="border-t border-white/15 flex !px-7 justify-center">
        <div className="mx-auto flex w-[85%] flex-col gap-4 !py-5 text-sm text-green-100 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Bantay Gubat. Protect our forests,
            protect our future.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-200" />
              Philippines
            </span>
            <a
              href="mailto:aksyonkalikasan@denr.gov.ph"
              className="inline-flex items-center gap-2 !text-green-100 transition hover:!text-white"
            >
              <FaEnvelope className="text-green-200" />
              aksyonkalikasan@denr.gov.ph
            </a>
            <a
              href="https://www.facebook.com/DENROfficial"
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/30 !text-white transition hover:bg-white hover:!text-teal-8"
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
