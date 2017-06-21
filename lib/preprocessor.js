/**
 * Create Preprocessor factory function
 */
'use strict';

var istanbulLibInstrument = require('istanbul-lib-instrument');
var path = require('path');

function createPreprocessor(logger) {
  var log = logger.create('preprocessor.coverageIstanbulEs5')

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
  'logger'
];

module.exports = createPreprocessor;
