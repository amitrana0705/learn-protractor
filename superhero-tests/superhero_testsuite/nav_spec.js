var NavPage = require('../page-objects/nav_pageObj');
var LoginPage = require('../page-objects/login_pageObj');

describe('Navigation Page', () => {

    var navPage;
    var loginPage;

    beforeEach(() => {

        navPage = new NavPage();
        loginPage = new LoginPage();

        browser.ignoreSynchronization = true;
        

          // Open browser
          browser.get('file:///C:/Learn%20Automation/my-projects-js/learn-protractor-jason/superhero-website-test/superheros-wesite/index.html');
          browser.manage().window().maximize();
        
    });

    afterEach(() => {
        
    });

    it('should display all Nav elements', () => {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        expect(navPage.homeLnk.isDisplayed()).toBe(true);
        navPage.heroFactsLnk.click();
        expect(navPage.wolverineOption.isDisplayed()).toBe(true);
        expect(navPage.spidermanOption.isDisplayed()).toBe(true);

        
    });

    it('should display and close wolverine model', () => {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        navPage.heroFactsLnk.click();
        navPage.wolverineOption.click();
  
        browser.sleep(2000);

        expect(navPage.wolverineModelTitle.isDisplayed()).toBe(true);    
        expect(navPage.wolverineModelTitle.getText()).toEqual('Wolverine Fact');
 
        expect(navPage.wolverineModelBody.isDisplayed()).toBe(true);
        expect(navPage.wolverineModelBody.getText()).toEqual('Wolverine made his first comic book appearance in 1974');
        
        expect(navPage.wolverineModelCloseBtn.isDisplayed()).toBe(true);
        expect(navPage.wolverineModelXBtn.isDisplayed()).toBe(true);

        navPage.wolverineModelCloseBtn.click(); 

    });

    it('should display and close spider-man model', () => {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        navPage.heroFactsLnk.click();
        navPage.spidermanOption.click();
          
        browser.sleep(2000);

        expect(navPage.spidermanModelTitle.isDisplayed()).toBe(true);    
        expect(navPage.spidermanModelTitle.getText()).toEqual('Spider-Man Fact');
 
        expect(navPage.spidermanModelBody.isDisplayed()).toBe(true);
        expect(navPage.spidermanModelBody.getText()).toEqual('Spider-Man was created by Stan Lee and Steve Ditko and first appeared in 1962.');
        
        expect(navPage.spidermanModelCloseBtn.isDisplayed()).toBe(true);
        expect(navPage.spidermanModelXBtn.isDisplayed()).toBe(true);

        navPage.spidermanModelCloseBtn.click(); 
        
    });

    it('should display login page without email and pass', () => {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        navPage.logoutLnk.click();
        expect(loginPage.emailFld.getText()).toEqual('');
        expect(loginPage.passwordFld.getText()).toEqual('');
        
    });

    it('should display login page with email and pass', () => {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.rememberChk.click();
        loginPage.submitBtn.click();

        navPage.logoutLnk.click();
        expect(loginPage.emailFld.getAttribute('value')).toEqual('asdf@kjhg.com');
        expect(loginPage.passwordFld.getAttribute('value')).toEqual('asdf1234');
        expect(loginPage.rememberChk.isSelected()).toBe(true);
        
    });

    it('should display alert for not found', () => {
      
        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        navPage.searchFld.sendKeys('Bob');
        navPage.searchBtn.click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 3000);

        expect(browser.switchTo().alert().getText()).toEqual('Your search for Bob returned 0 results. Try something else.');
        browser.switchTo().alert().accept();

    });

    it('should display alert for found ', () => {
      
        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        navPage.searchFld.sendKeys('Wolverine');
        navPage.searchBtn.click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 3000);

        expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome');
        browser.switchTo().alert().accept();
       
    });
    
});