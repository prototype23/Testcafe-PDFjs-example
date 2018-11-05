// Import our page model
import Page from './demo-page-model.js';

import {default as pdf} from '../widgets/_pdfjs.js';

export default async t => {
  const page = new Page();

  // Open the asset and wait the modal to open
  await t
    .click(page.demo.assets.open.pdf)
    .expect(page.demo.modals.pdf.element.filterVisible().exists).ok('Pdf modal did not open.');

  // Do some validation on html content.
  await t
    .expect(pdf.inModal.iframe.element.exists).ok('Modal does not have a pdf viewer.', { timeout: 10000 });

  // At this point pdf should be loading.

  // Check if the PDFjs is initialized.
  await t
    .expect(pdf.inModal.initialized.exists).ok('Failed to init Pdfjs.', { timeout: 10000 });

  // Check if PDFjs has rendered the 1st page.
  await t
    .expect(pdf.inModal.pageRendered.exists).ok('Pdfjs failed to render 1st page.', { timeout: 10000 });

  // We wait a little.
  await t
    .wait(2000);

  // Close the modal.
  await t
    .click(page.demo.modals.pdf.closeButton);
};

