/**
 * karma-coverage-istanbul-es5-preprocessor
 *
 * plugin: karma-coverage-istanbul-es5-preprocessor
 * preprocessor: coverage-istanbul-es5
 * config: coverageIstanbulEs5
 */

'use strict';

module.exports = {
  'preprocessor:coverage-istanbul-es5': ['factory', require('./preprocessor')]
};
