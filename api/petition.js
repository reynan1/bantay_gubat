const MAX_REQUEST_BYTES = 1_500_000;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const uploadUrl =
    process.env.PETITION_UPLOAD_URL || process.env.VITE_PETITION_UPLOAD_URL;
  if (!uploadUrl) {
    return response.status(503).json({
      ok: false,
      error: "Petition storage is not configured",
    });
  }

  const payload =
    typeof request.body === "string"
      ? request.body
      : JSON.stringify(request.body ?? {});

  if (Buffer.byteLength(payload, "utf8") > MAX_REQUEST_BYTES) {
    return response.status(413).json({ ok: false, error: "Petition is too large" });
  }

  try {
    const archiveResponse = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: payload,
      redirect: "follow",
    });

    const archiveText = await archiveResponse.text();
    let archiveResult;
    try {
      archiveResult = JSON.parse(archiveText);
    } catch {
      archiveResult = null;
    }

    if (!archiveResponse.ok || archiveResult?.ok !== true) {
      console.error("Petition archive rejected the request:", archiveResult);
      return response.status(502).json({
        ok: false,
        error: archiveResult?.error || "Google Drive could not save the petition",
      });
    }

    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({
      ok: false,
      error: "The petition archive service is unavailable",
    });
  }
}
