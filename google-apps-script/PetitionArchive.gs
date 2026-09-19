// Set the PETITION_FOLDER_ID script property before deploying this web app.
function doPost(e) {
  try {
    const folderId = PropertiesService.getScriptProperties().getProperty('PETITION_FOLDER_ID');
    if (!folderId) throw new Error('Petition folder is not configured');

    const petition = JSON.parse(e.postData.contents);
    const fields = ['surname', 'firstName', 'email', 'address', 'reason', 'signature', 'submittedAt'];
    if (fields.some((field) => typeof petition[field] !== 'string' || !petition[field].trim())) {
      throw new Error('Missing petition information');
    }
    if (petition.supportsProtection !== true || petition.understandsEducationalProject !== true) {
      throw new Error('Consent is required');
    }
    const signatureMatch = /^data:image\/png;base64,([A-Za-z0-9+/=]+)$/.exec(petition.signature);
    if (!signatureMatch || signatureMatch[1].length > 1000000) {
      throw new Error('Invalid signature image');
    }

    const submittedAt = new Date(petition.submittedAt);
    if (isNaN(submittedAt.getTime())) throw new Error('Invalid submission date');
    const folder = DriveApp.getFolderById(folderId);
    const name = [petition.firstName, petition.middleName || '', petition.surname].filter(Boolean).join(' ');
    const document = DocumentApp.create('Petition draft');
    const documentFile = DriveApp.getFileById(document.getId());
    try {
      const body = document.getBody();
      body.appendParagraph('Bantay Gubat Petition').setHeading(DocumentApp.ParagraphHeading.HEADING1);
      body.appendParagraph('Support for the protection of Philippine forests against illegal logging');
      body.appendParagraph('Submitted: ' + submittedAt.toISOString());
      body.appendParagraph('Name: ' + name);
      body.appendParagraph('Email: ' + petition.email);
      body.appendParagraph('Address: ' + petition.address);
      body.appendParagraph('Reason for supporting:');
      body.appendParagraph(petition.reason);
      body.appendParagraph('I support the protection of Philippine forests against illegal logging.');
      body.appendParagraph('I understand that this is an educational advocacy project.');
      body.appendParagraph('Electronic signature:');
      const signatureBlob = Utilities.newBlob(Utilities.base64Decode(signatureMatch[1]), 'image/png', 'signature.png');
      body.appendImage(signatureBlob).setWidth(320).setHeight(80);
      document.saveAndClose();

      const fileName = 'Petition_' + submittedAt.toISOString().replace(/[:.]/g, '-') + '_' +
        name.replace(/[^A-Za-z0-9 -]/g, '').trim().replace(/\s+/g, '_').slice(0, 60) + '.pdf';
      folder.createFile(documentFile.getAs(MimeType.PDF).setName(fileName));
    } finally {
      documentFile.setTrashed(true);
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput(JSON.stringify({ ok: false }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
