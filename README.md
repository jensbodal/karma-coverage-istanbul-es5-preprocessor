The use case for this came from trying to get coverage reports for an Angular/AngularJS hybrid application.  Angular uses the angular-cli
which uses the `karma-coverage-istanbul-reporter` under the hood.  Some guides would say to use `karma-coverage` and the report type of
`in-memory` to create a report in memory so that it can instrument your AngularJS code.  While this works fine for summary reports,
you were not able to drill down into html reports to see AngularJS code because `karma-coverage` does not use the `istanbul-lib-coverage`
from the `istanbul-api` but rather the Instrumenter direct from `istanbul`.  This is just a simple wrapper which calls that under the hood.

**karma.conf.js** (modified from an angular-cli generated app)

```
{
    plugins: [
        require('karma-coverage-istanbul-es5-preprocessor')
    ],
    preprocessors: {
        './src/**/*.js': ['coverage-istanbul-es5']
    },
    coverageIstanbulReporter: {
        dir: paths.results + '/coverage',
        reports: [
            'html',
            'text-summary'
        ],
        fixWebpackSourcePaths: true
    },
    reporters: [
        'progress',
        'coverage-istanbul'
    ],
}
```
