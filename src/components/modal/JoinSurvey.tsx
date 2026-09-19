import { useEffect, useState, type FormEvent } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const emailJsConfig = {
  serviceId: "service_1yj7lcd",
  templateId: "template_tskocb9",
  publicKey: "zHlPWdeEDkK05iM7i",
};

type JoinSurveyProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ageRanges = ["Under 18", "18-24", "25-34", "35-44", "45+"];
const occupations = ["Student", "Employed", "Self-employed", "Unemployed", "Retired", "Other"];
const proximityOptions = ["Yes", "No", "Not sure"];
const awarenessOptions = ["Yes", "No", "Not sure"];
const seriousnessOptions = [
  "Not serious",
  "Slightly serious",
  "Moderately serious",
  "Very serious",
  "Extremely serious",
];
const informationSources = [
  "Social media",
  "News",
  "School",
  "Government information",
  "Community",
  "Other",
];

function RadioGroup({ legend, name, options }: { legend: string; name: string; options: string[] }) {
  return (
    <fieldset>
      <legend className="!mb-3 text-sm fontnormal text-gray-8">
        {legend} <span className="text-red-600">*</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white !px-3 !py-2 text-sm text-gray-700 transition hover:border-teal-700 has-[:checked]:border-teal-700 has-[:checked]:bg-teal-50 has-[:checked]:text-teal-900"
          >
            <input type="radio" name={name} value={option} required className="accent-teal-700" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function JoinSurvey({ isOpen, onClose }: JoinSurveyProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [thankYouStatus, setThankYouStatus] = useState<"none" | "sending" | "sent" | "failed">("none");
  const [thankYouError, setThankYouError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const formData = new FormData(event.currentTarget);
    const toEmail = String(formData.get("email") ?? "").trim();
    const firstName = String(formData.get("firstName") ?? "").trim();
    const surveyData = Object.fromEntries(formData.entries());
    surveyData.informationSources = formData.getAll("informationSources").join(", ");

    setSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/bantaygubatorg@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(surveyData),
      });
      const result: { success?: boolean | string; message?: string } = await response.json();
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error(result.message || `FormSubmit returned ${response.status}`);
      }
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);

    if (toEmail) {
      setThankYouError("");
      setThankYouStatus("sending");
      void fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: { to_email: toEmail, first_name: firstName },
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            const message = await response.text();
            throw new Error(`EmailJS ${response.status}: ${message || response.statusText}`);
          }
          setThankYouStatus("sent");
        })
        .catch((error: unknown) => {
          setThankYouError(error instanceof Error ? error.message : "Network request failed");
          setThankYouStatus("failed");
        });
    } else {
      setThankYouStatus("none");
      setThankYouError("");
    }

  };

  const handleClose = () => {
    setSubmitted(false);
    setSubmitting(false);
    setSubmissionError("");
    setThankYouStatus("none");
    setThankYouError("");
    onClose();
  };

  return (
<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
  role="presentation"
  onMouseDown={(event) =>
    event.target === event.currentTarget && handleClose()
  }
>
  <section
    role="dialog"
    aria-modal="true"
    aria-labelledby="survey-title"
    className="
      flex
      max-h-[90vh]
      w-full
      max-w-3xl
      flex-col
      overflow-hidden
      rounded-lg
      bg-gray-50
      shadow-2xl
    "
  >
    {/* ================= HEADER ================= */}
    <header
      className="
        z-10
        flex
        shrink-0
        items-start
        justify-between
        border-b
        border-teal-900/15
        bg-teal-8
        !px-5
        !py-4
        text-white
        !sm:px-7
      "
    >
      <div className="flex gap-3">
        <div>
          <h2
            id="survey-title"
            className="!mb-0 font-semibold !text-xl !text-white"
          >
            Bantay Gubat Awareness Survey
          </h2>

          <p className="mt-1 text-sm text-teal-50">
            Your response helps us understand public awareness.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClose}
        aria-label="Close survey"
        title="Close survey"
        className="
          !ml-3
          grid h-9 w-9
          shrink-0
          cursor-pointer
          place-items-center
          rounded-md
          text-white
          transition
          hover:bg-white/15
        "
      >
        <FaTimes aria-hidden="true" />
      </button>
    </header>

    {/* ================= SCROLLABLE AREA ================= */}
    <div
      className="
        min-h-0
        flex-1
        overflow-y-auto
        overscroll-contain

        w-full

      "
    >
      {submitted ? (
        /* ================= SUCCESS ================= */
        <div className="grid min-h-100 place-items-center !px-6 !py-12 text-center">
          <div>
            <span className="!mx-auto !mb-5 grid h-14 w-14 place-items-center rounded-full bg-teal-100 text-xl text-teal-8">
              <FaCheck aria-hidden="true" />
            </span>

            <h3 className="text-xl font-bold text-gray-900">
              Thank you for participating
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
              Your survey response was submitted successfully.
            </p>
            {thankYouStatus === "sending" && (
              <p className="mt-3 text-sm text-gray-600">Sending your thank-you email...</p>
            )}
            {thankYouStatus === "sent" && (
              <p className="mx-auto mt-3 max-w-md text-sm text-teal-800">
                Your thank-you email was requested. Check your Inbox and Spam folders.
                If it is in Spam, open it and select "Not spam" to help future Bantay Gubat emails reach your Inbox.
              </p>
            )}
            {thankYouStatus === "failed" && (
              <p role="alert" className="mx-auto mt-3 max-w-md break-words text-sm text-red-700">
                We could not send the thank-you email. {thankYouError}
              </p>
            )}

            <button
              type="button"
              onClick={handleClose}
              className="
                !mt-6
                cursor-pointer
                rounded-md
                bg-teal-8
                !px-6
                !py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-teal-900
              "
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        /* ================= FORM ================= */
      <>
        <form
          id="illegal-logging-survey"
          onSubmit={handleSubmit}
          className="!space-y-7 !px-5 !py-6 !sm:px-7"
        >
          <input type="hidden" name="_subject" value="New Bantay Gubat survey response" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          {/* ================= SECTION 1 ================= */}
          <section aria-labelledby="respondent-heading">
            <div className="!mb-5 flex items-center gap-3 border-b border-gray-200 !pb-3">
              <div>
                <h3
                  id="respondent-heading"
                  className="font-semibold text-gray-900 text-xl"
                >
                  Basic respondent information
                </h3>

                <p className="text-xs text-gray-500">
                  Middle name and email address are optional. No phone number is collected.
                </p>
              </div>
            </div>

            <div className="!space-y-5">
              <div className="grid gap-5 sm:grid-cols-3">
                <label className="text-sm font-normal text-gray-8">
                  Last name <span className="text-red-600">*</span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder="Dela Cruz"
                    className="!mt-2 w-full rounded-md border border-gray-300 bg-white !px-3 !py-3 font-normal text-gray-8 outline-none transition placeholder:text-gray-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
                  />
                </label>

                <label className="text-sm font-normal text-gray-8">
                  First name <span className="text-red-600">*</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="Juan"
                    className="!mt-2 w-full rounded-md border border-gray-300 bg-white !px-3 !py-3 font-normal text-gray-8 outline-none transition placeholder:text-gray-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
                  />
                </label>

                <label className="text-sm font-normal text-gray-8">
                  Middle name <span className="text-xs text-gray-500">(optional)</span>
                  <input
                    type="text"
                    name="middleName"
                    autoComplete="additional-name"
                    placeholder="Santos"
                    className="!mt-2 w-full rounded-md border border-gray-300 bg-white !px-3 !py-3 font-normal text-gray-8 outline-none transition placeholder:text-gray-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
                  />
                </label>
              </div>

              <label className="block text-sm font-normal text-gray-8 sm:max-w-[calc(66.666%-0.4rem)]">
                Email address <span className="text-xs text-gray-500">(optional)</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="juan@example.com"
                  className="!mt-2 w-full rounded-md border border-gray-300 bg-white !px-3 !py-3 font-normal text-gray-8 outline-none transition placeholder:text-gray-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
                />
              </label>

              <RadioGroup 
                legend="What is your age range?"
                name="ageRange"
                options={ageRanges}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-normal text-gray-8">
                  Province or region{" "}
                  <span className="text-red-600">*</span>

                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Palawan or Region IV-B"
                    className="
                      !mt-2
                      w-full
                      rounded-md
                      border
                      border-gray-300
                      bg-white
                      !px-3
                      !py-3
                      font-normal
                      text-gray-8
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-teal-700
                      focus:ring-2
                      focus:ring-teal-700/15
                    "
                  />
                </label>

                <label className="text-sm font-normal text-gray-8">
                  Current status{" "}
                  <span className="text-red-600">*</span>

                  <select
                    name="occupation"
                    required
                    defaultValue=""
                    className="
                      !mt-2
                      w-full
                      rounded-md
                      border
                      border-gray-300
                      bg-white
                      !px-3
                      !py-2.5
                      font-normal
                      text-gray-8
                      outline-none
                      focus:border-teal-700
                      focus:ring-2
                      focus:ring-teal-700/15
                    "
                  >
                    <option value="" disabled>
                      Select your status
                    </option>

                    {occupations.map((occupation) => (
                      <option
                        key={occupation}
                        value={occupation}
                      >
                        {occupation}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <RadioGroup
                legend="Do you live near a forest or mountainous area?"
                name="livesNearForest"
                options={proximityOptions}
              />
            </div>
          </section>

          {/* ================= SECTION 2 ================= */}
          <section aria-labelledby="awareness-heading">
            <div className="!mb-5 flex items-center gap-3 border-b border-gray-200 !pb-3">
              <h3
                id="awareness-heading"
                className="font-semibold text-gray-900 text-xl"
              >
                Awareness of illegal logging
              </h3>
            </div>

            <div className="!space-y-5">
              <RadioGroup
                legend="Have you heard about illegal logging in the Philippines?"
                name="awareOfIllegalLogging"
                options={awarenessOptions}
              />

              <RadioGroup
                legend="How serious do you think illegal logging is in the Philippines?"
                name="seriousness"
                options={seriousnessOptions}
              />

              <fieldset>
                <legend className="!mb-1 text-sm font-normal text-gray-8">
                  Where did you learn about illegal logging?
                </legend>

                <p className="!mb-3 text-xs text-gray-500">
                  Select all that apply.
                </p>

                <div className="grid gap-2 sm:grid-cols-2">
                  {informationSources.map((source) => (
                    <label
                      key={source}
                      className="
                        flex
                        cursor-pointer
                        items-center
                        gap-2
                        rounded-md
                        border
                        border-gray-200
                        bg-white
                        !px-3
                        !py-2
                        text-sm
                        text-gray-700
                        transition
                        hover:border-teal-700
                        has-[:checked]:border-teal-700
                        has-[:checked]:bg-teal-50
                      "
                    >
                      <input
                        type="checkbox"
                        name="informationSources"
                        value={source}
                        className="accent-teal-700"
                      />

                      {source}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </section>
        </form>
                {/* ================= ACTIONS ================= */}
         <div
            className="
              sticky
              w-full
              bottom-0
              z-20
              flex
              flex-col-reverse
              gap-3
              border-t
              border-gray-200
              bg-white
              px-5
              !py-4
              shadow-[0_-4px_10px_rgba(0,0,0,0.05)]
              sm:flex-row
              sm:justify-end
              sm:!px-7
            "
          >
            {submissionError && (
              <p role="alert" className="self-center break-words text-sm text-red-700 sm:mr-auto">
                Survey could not be submitted: {submissionError}
              </p>
            )}
            <button
              type="button"
              onClick={handleClose}
              className="
                cursor-pointer
                rounded-md
                border
                border-gray-300
                bg-white
                !px-5
                !py-2.5
                text-sm
                font-semibold
                text-gray-700
                transition
                hover:bg-gray-100
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              form="illegal-logging-survey"
              disabled={submitting}
              className="
                cursor-pointer
                disabled:cursor-not-allowed
                disabled:opacity-60
                rounded-md
                bg-teal-8
                !px-6
                !py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-teal-900
              "
            >
              {submitting ? "Submitting..." : "Submit survey"}
            </button>
          </div>
       </> 
      )}
    </div>
  </section>
</div>
  );
}

export default JoinSurvey;
