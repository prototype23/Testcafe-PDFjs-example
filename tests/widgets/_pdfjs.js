// ============================
// Pdf viewer (for pdf_init.js)
// ============================
import {Selector} from 'testcafe';

export default {
  inline: {
    iframe: {
      element: Selector('.pdf-viewer').nth(0).filterVisible(),
    }
  },
  inModal: {
    iframe: {
      element: Selector('#modal-for-pdf .pdf-viewer').nth(0).filterVisible(),
    },
    initialized: Selector('#modal-for-pdf .pdf-viewer[data-iframe-ready="true"]').nth(0).filterVisible(),
    pageRendered: Selector('#modal-for-pdf .pdf-viewer[data-page-rendered="true"]').nth(0).filterVisible()
  }
};




