# Petition PDF storage

1. In the Bantay Gubat Google account, create a private Drive folder for petition PDFs. Copy its folder ID from the folder URL.
2. Create a Google Apps Script project and paste `google-apps-script/PetitionArchive.gs` into its editor.
3. Under **Project Settings > Script properties**, add `PETITION_FOLDER_ID` with the folder ID.
4. Deploy the script as a **Web app**. Set **Execute as** to your account and **Who has access** to **Anyone**. Authorize the Drive and Docs permissions when prompted. Copy the `/exec` URL.
5. Copy `.env.example` to `.env.local` and replace the example URL with the `/exec` URL. Restart the Vite server. For production, set `VITE_PETITION_UPLOAD_URL` in the hosting environment and rebuild.
6. Submit a test petition and confirm that a PDF with the submitted details and signature appears in the folder. Then delete the test PDF.

The web app accepts public submissions because visitors do not sign in with Google. Restrict folder access to the organization. For a public production launch, put rate limiting and abuse protection in front of this endpoint.
