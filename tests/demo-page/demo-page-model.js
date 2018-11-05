import {Selector} from 'testcafe';

export default class Page {
  constructor() {
    this.demo = {
      dialogsHistory: null,
      index: '/index.html',
      advanced: '/advanced.html',
      assets: {
        // Selectors that we trigger the click in order to open the player.
        open: {
          pdf: Selector('#load-pdf'),
        }
      },
      modals: {
        pdf: {
          element: Selector('#modal-for-pdf'),
          closeButton: Selector('#modal-for-pdf .close').filterVisible(),
        },
      },
    };
  } // constructor end
}

