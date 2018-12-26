exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    specs: [
        './test/starterTest_spec.js'
    ],

    jasmineNodeOpts: {
        showColors: true
    }
}