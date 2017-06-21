/**
 * Create Preprocessor factory function
 */
'use strict';

var istanbulLibInstrument = require('istanbul-lib-instrument');
var path = require('path');

function createPreprocessor(logger, config) {
  var log = logger.create('preprocessor.coverageIstanbulEs5')

  // if we are not checking for code coverage then there is no reason to instrument the code
  if (!config.codeCoverage) {
    return function(content, file, done) {
      done(content);
    }
  }

  return function preprocess(content, file, done) {
    var instrumenter = istanbulLibInstrument.createInstrumenter();
    var jsPath = path.resolve(file.originalPath);

    instrumenter.instrument(content, jsPath, function(err, instrumentedCode) {
      log.debug('Processing "%s".', jsPath);

      done(instrumentedCode);
    });
  }
}

createPreprocessor.$inject = [
  'logger',
  'config'
];

module.exports = createPreprocessor;
