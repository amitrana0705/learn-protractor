// login_pageObj file import
var LoginPage = require('../page-objects/login_pageObj');

// header_pageObj file import
var HeaderPage = require('../page-objects/header_pageObj');

describe('Header Page', () => {

    var headerPage;
    var loginPage;

    beforeEach(() => {

        headerPage = new HeaderPage();
        loginPage = new LoginPage();

        browser.ignoreSynchronization = true;

          // Open browser
          browser.get('file:///C:/NKP%20Automation/protractor/superhero-website-test/superheros-wesite/index.html');
          browser.manage().window().maximize();
        
    });

    afterEach(() => {
        
    });

    it('should contain all Header elements', () => {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        expect(headerPage.headerTitle.isDisplayed()).toBe(true);
        expect(headerPage.headerTitle.getText()).toEqual('Superhero Roster');

        expect(headerPage.headerImage.isDisplayed()).toBe(true);
     
        expect(headerPage.headerBody.isDisplayed()).toBe(true);
        expect(headerPage.headerBody.getText()).toEqual('Imagine that you are tasked with building a team of superheroes to save the world. We have have given you a few heros to start with. Add as many heroes as you would like to round out you team.');


        
    });
    
});