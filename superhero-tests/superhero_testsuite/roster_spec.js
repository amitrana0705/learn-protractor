// login_pageObj file import
var LoginPage = require('../page-objects/login_pageObj');

// roster_pageObj file imp
var RosterPage = require('../page-objects/roster_pageObj');

describe('Roster Page', function () {

    var loginPage;
    var rosterPage;
    beforeEach(function() {

        loginPage = new LoginPage();
        rosterPage = new RosterPage();

        browser.ignoreSynchronization = true;
        browser.get('file:///C:/NKP%20Automation/protractor/superhero-website-test/superheros-wesite/index.html');
        browser.manage().window().maximize();

    });

    afterEach(function() {


    });

    it('should display all the roster element ',function ()  {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        expect(rosterPage.rosterTitleTxt.isDisplayed()).toBe(true);
        expect(rosterPage.rosterTitleTxt.getText()).toEqual('Build Your Superhero Roster:');

        expect(rosterPage.wolverineItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.wolverineItemTxt.getText()).toEqual('Wolverine');

        expect(rosterPage.ironmanItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.ironmanItemTxt.getText()).toEqual('Iron Man');

        expect(rosterPage.deadpoolItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.deadpoolItemTxt.getText()).toEqual('Deadpool');

        expect(rosterPage.thorItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.thorItemTxt.getText()).toEqual('Thor');

        expect(rosterPage.spidermanItemTxt.isDisplayed()).toBe(true);
        expect(rosterPage.spidermanItemTxt.getText()).toEqual('Spider-Man');

        expect(rosterPage.rosterFldTxt.isDisplayed()).toBe(true);
        expect(rosterPage.rosterFldTxt.getText()).toEqual('ADD A SUPERHERO');

        expect(rosterPage.rosterFld.isDisplayed()).toBe(true);
        expect(rosterPage.rosterFld.getText()).toEqual('');

        expect(rosterPage.submitBtn.isDisplayed()).toBe(true);
        
    });

    it('should add a hero on submit',function ()  {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        rosterPage.rosterFld.sendKeys('Ms Marvel');
        rosterPage.submitBtn.click();

        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true);
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Ms Marvel');
        
    });
   

});