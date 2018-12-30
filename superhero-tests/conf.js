// Console test execution report from Jasmine Spec Reporter from npm package
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// HTML report generator from Jasmine HTML screenshot reporter from npm package
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: '../superhero-test-execution-reports',
    filename: 'superhero-test-execution-report.html',
    reportTitle: "Superhero Website Test Execution Summary ",
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true
});


// Jasmine conf file
exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    specs: [

        './superhero_testsuite/*_spec.js',
        /*
        './superhero_testsuite/login_spec.js',
        './superhero_testsuite/roster_spec.js',
        './superhero_testsuite/vote_spec.js',
        './superhero_testsuite/header_spec.js',
        './superhero_testsuite/nav_spec.js',

        */
    ],

    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    },

    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },


    logLevel: 'WARN',

    // Assign the test reporter to each running instance
    onPrepare: function () {

        // configuration for html screenshot reporter
        jasmine.getEnv().addReporter(reporter);

        // configuration for console spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: false      // stack trace are disabled see jasmine spec reporter configuration.ts
            },
            summary: {
                displayDuration: false
            }
        }));
    }
}