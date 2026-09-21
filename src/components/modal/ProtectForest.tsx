import { useCallback, useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";
import { FaCheck, FaTimes, FaTrashAlt } from "react-icons/fa";

const emailJsConfig = {
  serviceId: "service_1yj7lcd",
  templateId: "template_ntmgy05",
  publicKey: "zHlPWdeEDkK05iM7i",
};
type ProtectForestProps = {
  isOpen: boolean;
  onClose: () => void;
};

const inputClass =
  "!mt-2 w-full !font-normal rounded-md border border-gray-300 bg-white !px-3 !py-2.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15";

function ProtectForest({ isOpen, onClose }: ProtectForestProps) {
  const [supported, setSupported] = useState(false);
  const [hasDrawnSignature, setHasDrawnSignature] = useState(false);
  const [signatureError, setSignatureError] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const signatureRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);

  const handleClose = useCallback(() => {
    setSupported(false);
    setHasDrawnSignature(false);
    setSignatureError(false);
    setSending(false);
    setSendError("");
    setEmailSent(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    if (!hasDrawnSignature) {
      setSignatureError(true);
      signatureRef.current?.focus();
      return;
    }

    const formData = new FormData(event.currentTarget);
    const toEmail = String(formData.get("email") ?? "").trim();
    const firstName = String(formData.get("firstName") ?? "").trim();
    const signature = signatureRef.current?.toDataURL("image/png");
    if (!signature) {
      setSendError("Could not read your signature. Please try again.");
      return;
    }
    setSending(true);
    setSendError("");

    try {
      const archiveResponse = await fetch("/api/petition", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          surname: String(formData.get("surname") ?? "").trim(),
          firstName,
          middleName: String(formData.get("middleName") ?? "").trim(),
          email: toEmail,
          address: String(formData.get("address") ?? "").trim(),
          reason: String(formData.get("reason") ?? "").trim(),
          signature,
          submittedAt: new Date().toISOString(),
          supportsProtection: formData.has("supportsProtection"),
          understandsEducationalProject: formData.has("understandsEducationalProject"),
        }),
      });
      if (!archiveResponse.ok) throw new Error("Could not save the petition. Please try again.");
      const archiveResult: { ok?: boolean } = await archiveResponse.json();
      if (archiveResult.ok !== true) throw new Error("Could not save the petition. Please try again.");

      setSupported(true);
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: { to_email: toEmail, first_name: firstName },
        }),
      });
      if (!response.ok) {
        throw new Error("Your petition was saved, but the confirmation email could not be sent.");
      }
      setEmailSent(true);
    } catch (error) {
      setSendError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setSending(false);
    }
  };

  const getPoint = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const bounds = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - bounds.left) / bounds.width) * canvas.width,
      y: ((event.clientY - bounds.top) / bounds.height) * canvas.height,
    };
  };

  const startDrawing = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.setPointerCapture(event.pointerId);
    drawingRef.current = true;
    const point = getPoint(event);
    context.strokeStyle = "#000000";
    context.fillStyle = "#000000";
    context.lineWidth = 2.5;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.arc(point.x, point.y, 1.25, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(point.x, point.y);
    setHasDrawnSignature(true);
    setSignatureError(false);
  };

  const continueDrawing = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;
    const context = event.currentTarget.getContext("2d");
    if (!context) return;
    const point = getPoint(event);
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const stopDrawing = () => {
    drawingRef.current = false;
  };

  const clearSignature = () => {
    const canvas = signatureRef.current;
    canvas?.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawnSignature(false);
    drawingRef.current = false;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="petition-title"
        className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-lg bg-gray-50 shadow-2xl"
      >
        <header className="flex shrink-0 items-start justify-between bg-teal-8 !px-5 !py-4 text-white sm:px-7">
          <div>
            <h2 id="petition-title" className="!mb-0 !text-xl !text-white">
              Bantay Gubat Petition
            </h2>
            <p className="!mt-1 text-sm text-teal-50">Support the protection of Philippine forests.</p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close petition"
            title="Close petition"
            className="ml-3 grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-md text-white transition hover:bg-white/15"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {supported ? (
            <div className="grid min-h-72 place-items-center !px-6 !py-12 text-center">
              <div>
                <span className="mx-auto !mb-5 grid h-14 w-14 place-items-center rounded-full bg-teal-100 text-xl text-teal-8">
                  <FaCheck aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-gray-900">Thank you for your support</h3>
                <p className="mx-auto !mt-2 max-w-sm text-sm text-gray-600">
                  Your signed petition was saved as a PDF in Bantay Gubat's Google Drive. {emailSent ? "Check your inbox and spam folder for a confirmation email." : sendError || "Sending your confirmation email..."}
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="!mt-6 cursor-pointer rounded-md bg-teal-8 !px-6 !py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
          <> 
            <form id="forest-petition" onSubmit={handleSubmit} className="!space-y-5 !px-5 !py-6 !sm:px-7">
              <div className="grid gap-5 sm:grid-cols-3">
                <label className="block text-sm font-medium text-gray-800">
                  Surname <span className="text-red-600">*</span>
                  <input
                    type="text"
                    name="surname"
                    autoComplete="family-name"
                    required
                    placeholder="Dela Cruz"
                    className={inputClass}
                  />
                </label>
                <label className="block text-sm font-medium text-gray-800">
                  First name <span className="text-red-600">*</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="Juan"
                    className={inputClass}
                  />
                </label>
                <label className="block text-sm font-medium text-gray-800">
                  Middle name <span className="text-xs font-normal text-gray-500">(optional)</span>
                  <input
                    type="text"
                    name="middleName"
                    autoComplete="additional-name"
                    placeholder="Santos"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-gray-800">
                Email <span className="text-red-600">*</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="juan@example.com"
                  className={inputClass}
                />
              </label>

              <label className="block text-sm font-medium text-gray-800">
                Complete address <span className="text-red-600">*</span>
                <textarea
                  name="address"
                  autoComplete="street-address"
                  required
                  rows={2}
                  placeholder="House/Street, Barangay, City/Municipality, Province, Postal Code"
                  className={`${inputClass} resize-y`}
                />
              </label>

              <label className="block text-sm font-medium text-gray-800">
                Reason for supporting <span className="text-red-600">*</span>
                <textarea
                  name="reason"
                  required
                  rows={3}
                  placeholder="Share why forest protection matters to you"
                  className={`${inputClass} resize-y`}
                />
              </label>

              <fieldset className="!space-y-3 border-t border-gray-200 !pt-5">
                <legend className="text-sm font-medium text-gray-800">
                  Electronic signature <span className="text-red-600">*</span>
                </legend>
                <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
                  <canvas
                    ref={signatureRef}
                    width={640}
                    height={160}
                    tabIndex={-1}
                    aria-label="Draw your signature"
                    onPointerDown={startDrawing}
                    onPointerMove={continueDrawing}
                    onPointerUp={stopDrawing}
                    onPointerCancel={stopDrawing}
                    className="block h-40 w-full cursor-crosshair touch-none"
                  />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-gray-500">Draw your signature above.</p>
                  <button
                    type="button"
                    onClick={clearSignature}
                    disabled={!hasDrawnSignature}
                    title="Clear drawn signature"
                    aria-label="Clear drawn signature"
                    className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-md text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FaTrashAlt aria-hidden="true" />
                  </button>
                </div>
                {signatureError && (
                  <p role="alert" className="text-sm text-red-700">Please draw your signature.</p>
                )}
              </fieldset>

              <div className="!space-y-3 border-t border-gray-200 !pt-5">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-800">
                  <input type="checkbox" name="supportsProtection" required className="mt-1 shrink-0 accent-teal-700" />
                  <span>I support the protection of Philippine forests against illegal logging.</span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-800">
                  <input type="checkbox" name="understandsEducationalProject" required className="mt-1 shrink-0 accent-teal-700" />
                  <span>I understand that this is an educational advocacy project.</span>
                </label>
              </div>

              <p className="text-xs text-gray-500">Your petition details and signature will be saved as a PDF in Bantay Gubat's Google Drive. Your first name and email are sent to EmailJS for confirmation.</p>
            </form>
            <div className="
                      sticky
                      w-full
                      bottom-0
                      z-20
                      flex
                      flex-col-reverse
                      gap-3
                      border-t
                      border-teal-200
                      bg-white
                      px-5
                      !py-4
                      shadow-[0_-4px_10px_rgba(0,0,0,0.05)]
                      sm:flex-row
                      sm:justify-end
                      sm:!px-7">
                {sendError && (
                  <p role="alert" className="self-center break-words text-sm text-red-700 sm:mr-auto">
                    {sendError}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleClose}
                  className="cursor-pointer rounded-md border border-gray-300 bg-white !px-5 !py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="forest-petition"
                  disabled={sending}
                  className="cursor-pointer rounded-md bg-teal-8 !px-6 !py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Submitting..." : "Support the Petition"}
                </button>
            </div>
          </> 
          )}
        </div>
      </section>
    </div>
  );
}

export default ProtectForest;
