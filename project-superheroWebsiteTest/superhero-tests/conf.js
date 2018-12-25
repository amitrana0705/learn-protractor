exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    specs: [
        './superhero_testsuite/login_spec.js',
        './superhero_testsuite/roster_spec.js',
    ],

    jasmineNodeOpts: {
        showColors: true
    }
}