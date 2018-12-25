var TestPage = function () {}

TestPage.prototype = Object.create({}, {
    emailFld: {get: function () { return element(by.id('loginEmail')) } },
    passFld: {get: function () { return element(by.id('loginPassword')) } },
    loginTitleTxt: {get: function () { return element(by.id('login-title')) } },



    byCss: {get: function () { return element(by.css('#form-login > div:nth-child(1) > label')) } },
    submitBtn: {get: function () { return element(by.buttonText('Submit')) } },
    partialBtnTxt: {get: function () { return element(by.partialButtonText('Sub')) } },
    linkTxt: {get: function () { return element(by.linkText('Link')) } },
    partialLinkTxt: {get: function () { return element(by.partialLinkText('Lin')) } },

  

})

module.exports = TestPage