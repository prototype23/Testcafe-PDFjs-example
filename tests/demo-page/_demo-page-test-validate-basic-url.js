
import {ClientFunction} from 'testcafe';

// My Helpers.
import getPageUrl_function from '../utils/client-functions/_get-page-url.js';

import Page from './demo-page-model.js';

const getPageUrl = ClientFunction(getPageUrl_function);

export default async t => {
  const page = new Page();
  // ===========================================================================
  //  Validate the page url
  // ===========================================================================
  await t
    .expect(getPageUrl()).contains(page.demo.index, {timeout: 10000});
};
