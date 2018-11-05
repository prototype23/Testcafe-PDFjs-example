import {default as pdf} from '../widgets/_pdfjs.js';

export default async t => {
  // Do some validation on html content.
  await t
    .expect(pdf.inline.iframe.element.exists).ok('Pdf Viewer not found.', { timeout: 10000 });
};

