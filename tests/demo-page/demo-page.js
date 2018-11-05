// My Helpers.
import {default as getProcessArg_function} from '../utils/_get-process-arguments.js';

// Import our tests, we splitted them for easier maintenance.
import {default as test_validate_basic_url} from './_demo-page-test-validate-basic-url.js';
import {default as test_validate_advanced_url} from './_demo-page-test-validate-advanced-url.js';
import {default as test_basic} from './_demo-page-test-basic.js';
import {default as test_advanced} from './_demo-page-test-advanced.js';

// Import our page model
import Page from './demo-page-model.js';

// =============================================================================
// Init. Define Data, Selectors
// =============================================================================
const fixtureBaseUrl = getProcessArg_function('--fixture-base-url') || 'http://testserver:8080';
const page = new Page();


// =============================================================================
// Tests
// =============================================================================

fixture('PDFjs Basic demo.')
  .page(fixtureBaseUrl + page.demo.index);

test('Basic > Validate the page url', test_validate_basic_url);

test('Basic> Test pdfjs', test_basic);


fixture('PDFjs Advanced demo.')
  .page(fixtureBaseUrl + page.demo.advanced);

test('Advanced > Validate the page url', test_validate_advanced_url);

test('Advanced > Test pdfjs', test_advanced);

