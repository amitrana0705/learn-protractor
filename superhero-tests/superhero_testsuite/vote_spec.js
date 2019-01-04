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
        browser.get('file:///C:/Learn%20Automation/my-projects-js/learn-protractor-jason/superhero-website-test/superheros-wesite/index.html');
        browser.manage().window().maximize();

    });

    afterEach(function () {


    });

    it('should display all the element of voting section.', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true);
        expect(votePage.voteTitleTxt.getText()).toEqual('Vote for your favourite Superhero movie');

        
        expect(votePage.xmenChioceRad.isDisplayed()).toBe(true);
        expect(votePage.xmenChioceRad.isSelected()).toBe(true);
        expect(votePage.xmenChioceRadLbl.getText()).toEqual('X-Men');

        expect(votePage.avengersChioceRad.isDisplayed()).toBe(true);
        expect(votePage.avengersChioceRad.isSelected()).toBe(false);
        expect(votePage.avengersChioceRadLbl.getText()).toEqual('Avengers');

        expect(votePage.deadpoolChioceRad.isDisplayed()).toBe(true);
        expect(votePage.deadpoolChioceRad.isSelected()).toBe(false);
        expect(votePage.deadpoolChioceRadLbl.getText()).toEqual('Deadpool');  

        expect(votePage.spidermanChioceRad.isDisplayed()).toBe(true);
        expect(votePage.spidermanChioceRad.isSelected()).toBe(false);
        expect(votePage.spidermanChioceRadLbl.getText()).toEqual('Spider-Man Homecoming'); 

        expect(votePage.ironmanChioceRad.isDisplayed()).toBe(true);
        expect(votePage.ironmanChioceRad.isSelected()).toBe(false);
        expect(votePage.ironmanChioceRadLbl.getText()).toEqual('Iron Man'); 

        expect(votePage.voteSubmitBtn.isDisplayed()).toBe(true);
       

        expect(votePage.movieLbl.isDisplayed()).toBe(true);
        expect(votePage.movieLbl.getText()).toEqual('Movie'); 

        expect(votePage.votesLbl.isDisplayed()).toBe(true);
        expect(votePage.votesLbl.getText()).toEqual('Vote'); 

        expect(votePage.xmenLbl.isDisplayed()).toBe(true);
        expect(votePage.xmenLbl.getText()).toEqual('X-Men'); 

        expect(votePage.xmenVal.isDisplayed()).toBe(true);
        expect(votePage.xmenVal.getText()).toEqual('10'); 

        expect(votePage.avengersLbl.isDisplayed()).toBe(true);
        expect(votePage.avengersLbl.getText()).toEqual('Avengers'); 

        expect(votePage.avengersVal.isDisplayed()).toBe(true);
        expect(votePage.avengersVal.getText()).toEqual('5'); 

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true);
        expect(votePage.deadpoolLbl.getText()).toEqual('Deadpool'); 

        expect(votePage.deadpoolVal.isDisplayed()).toBe(true);
        expect(votePage.deadpoolVal.getText()).toEqual('22'); 

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true);
        expect(votePage.spidermanLbl.getText()).toEqual('Spider-Man Homecoming'); 

        expect(votePage.spidermanVal.isDisplayed()).toBe(true);
        expect(votePage.spidermanVal.getText()).toEqual('12'); 

        expect(votePage.ironmanLbl.isDisplayed()).toBe(true);
        expect(votePage.ironmanLbl.getText()).toEqual('Iron Man'); 

        expect(votePage.ironmanVal.isDisplayed()).toBe(true);
        expect(votePage.ironmanVal.getText()).toEqual('1'); 

        /*
        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true);
        expect(votePage.voteTitleTxt.getText()).toEqual(); 

        */


    });

    it('should add 1 to x-Men votes.', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        votePage.voteSubmitBtn.click();
        expect(votePage.voteMsgTxt.isDisplayed()).toBe(true);
        expect(votePage.voteMsgTxt.getText()).toEqual('Thanks for voting!'); 
        expect(votePage.voteFormSection.isDisplayed()).toBe(false);
        expect(votePage.xmenVal.getText()).toEqual('11'); 

    });
    
    it('should add 1 to Avengers votes.', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        votePage.avengersChioceRad.click();
        expect(votePage.avengersChioceRad.isSelected()).toBe(true);
        votePage.voteSubmitBtn.click();
        expect(votePage.voteMsgTxt.isDisplayed()).toBe(true);
        expect(votePage.voteMsgTxt.getText()).toEqual('Thanks for voting!'); 
        expect(votePage.voteFormSection.isDisplayed()).toBe(false);
        expect(votePage.avengersVal.getText()).toEqual('6'); 

    });

    it('should add 1 to Deadpool votes.', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        votePage.deadpoolChioceRad.click();
        expect(votePage.deadpoolChioceRad.isSelected()).toBe(true);
        votePage.voteSubmitBtn.click();
        expect(votePage.voteMsgTxt.isDisplayed()).toBe(true);
        expect(votePage.voteMsgTxt.getText()).toEqual('Thanks for voting!'); 
        expect(votePage.voteFormSection.isDisplayed()).toBe(false);
        expect(votePage.deadpoolVal.getText()).toEqual('23'); 

    });

    it('should add 1 to Spider-Man Homecoming votes.', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        votePage.spidermanChioceRad.click();
        expect(votePage.spidermanChioceRad.isSelected()).toBe(true);
        votePage.voteSubmitBtn.click();
        expect(votePage.voteMsgTxt.isDisplayed()).toBe(true);
        expect(votePage.voteMsgTxt.getText()).toEqual('Thanks for voting!');
        expect(votePage.voteFormSection.isDisplayed()).toBe(false); 
        expect(votePage.spidermanVal.getText()).toEqual('13'); 

    });

    it('should add 1 to Iron Man votes.', function () {

        loginPage.emailFld.sendKeys('asdf@kjhg.com');
        loginPage.passwordFld.sendKeys('asdf1234');
        loginPage.submitBtn.click();

        votePage.ironmanChioceRad.click();
        expect(votePage.ironmanChioceRad.isSelected()).toBe(true);
        votePage.voteSubmitBtn.click();
        expect(votePage.voteMsgTxt.isDisplayed()).toBe(true);
        expect(votePage.voteMsgTxt.getText()).toEqual('Thanks for voting!');
        expect(votePage.voteFormSection.isDisplayed()).toBe(false); 
        expect(votePage.ironmanVal.getText()).toEqual('2'); 

    });


});