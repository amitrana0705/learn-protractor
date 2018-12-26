// login_pageObj file import
var LoginPage = require('../page-objects/login_pageObj');

// vote_pageObj file imp
var VotePage = require('../page-objects/vote_pageObj');

describe('Vote Page', function () {

    var loginPage;
    var votePage;
    beforeEach(function () {

        loginPage = new LoginPage();
        votePage = new VotePage();

        browser.ignoreSynchronization = true;
        browser.get('file:///C:/NKP%20Automation/protractor/learn-protractor-jason/project-superheroWebsiteTest/superheros-wesite/index.html');
        browser.manage().window().maximize();

    });

    afterEach(function () {


    });

    it('should display all the roster element ', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();
    });




});