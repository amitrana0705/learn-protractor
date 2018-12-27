// test for login page

// login_pageObj file import

var LoginPage = require('../page-objects/login_pageObj');

describe('Login Page Test', function () {

    var loginPage;

    beforeEach(function () {

        loginPage = new LoginPage();

        // Since this is not an Angular site 
        browser.ignoreSynchronization = true;

        // Open browser
        browser.get('file:///C:/NKP%20Automation/protractor/superhero-website-test/superheros-wesite/index.html');
        browser.manage().window().maximize();

    });

    afterEach(function () {


    });

    //if we put 'x' before the 'it' then it skip the specific test.
    // if we put 'f' before the 'it' then it will run the specif test case.


    it('should display all login page elements', function () {

        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true);
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please login.');

        expect(loginPage.emailFldLbl.isDisplayed()).toBe(true);
        expect(loginPage.emailFld.isDisplayed()).toBe(true);
        expect(loginPage.emailFld.getText()).toEqual('');

        expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true);
        expect(loginPage.passwordFld.isDisplayed()).toBe(true);
        expect(loginPage.passwordFld.getText()).toEqual('');

        expect(loginPage.rememberChkLbl.isDisplayed()).toBe(true);
        expect(loginPage.rememberChk.isDisplayed()).toBe(true);
        expect(loginPage.rememberChk.isSelected()).toBe(false);

        expect(loginPage.submitBtn.isDisplayed()).toBe(true);

    });

    it('should display error message when no email and password entered', function () {
        // click first on submit button to get the error message.
        loginPage.submitBtn.click();

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true);
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password required!');

    });

    it('should display error message when no password entered', function () {

        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true);
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password required!');

    });

    it('should display error message when no email entered', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.submitBtn.click();

        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true);
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password required!');

    });

    it('should log user in', function () {
        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

    });




});