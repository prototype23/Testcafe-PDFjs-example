/**
  * Retrieves a process Argument.Argument goes in pairs. eg --arg1 value1.
  * If your test started with this command line:
  * ```shell
  *   testcafe firefox tests/ --screenshots ./screenshots --screenshots-on-fails --fixture-base-url http://testserver:8080
  * ```
  *
  * Then you should import the helper like this
  * ```js
  *  import {default as getProcessArg_function} from '../utils/_get-process-arguments.js';
  * ```
  *
  * And use it like this:
  * ```js
  *   const fixtureBaseUrl = getProcessArg_function('--fixture-base-url');
  *   // fixtureBaseUrl will be 'http://testserver:8080'
  * ```
  *
  * @param {String}   arg The Argument to read.
  * @returns {String}     Returns the argument value.
  * @example
  *   Command line:
  *
  *
  *   Source code:
  *
  *   ..
  *
  */
export default function getProcessArg_function(arg = 'Yo') {
  let match = -1,
    result = '';

  if (process.argv instanceof Array && process.argv.length > 0) {
    match = process.argv.indexOf(arg);
  }

  // console.log('argv', process.argv);
  // console.log('match', match);

  if (match > -1 && match <= process.argv.length) {
    result = process.argv[match + 1];
  }

  return result;
}
