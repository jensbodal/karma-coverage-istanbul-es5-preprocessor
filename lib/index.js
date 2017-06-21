/**
 * karma-coverage-istanbul-es5-preprocessor
 * inspired by karma-coverage [https://github.com/karma-runner/karma-coverage]
 *
 * plugin: karma-coverage-istanbul-es5-preprocessor
 * preprocessor: coverage-istanbul-es5
 * config: coverageIstanbulEs5
 */

'use strict';

module.exports = {
  'preprocessor:coverage-istanbul-es5': ['factory', require('./preprocessor')]
};
