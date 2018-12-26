
// import the test_page file
var TestPage = require('../page-objects/test_page');


describe('Super Hero Page', function () {

    var testPage;

    // before each test case do something    
    beforeEach(function () {

        testPage = new TestPage();

        // it reuired if site is not anguler
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

        // open the browser and url
        browser.get('file:///C:/NKP%20Automation/protractor/learn-protractor-jason/project-superheroWebsiteTest/superheros-wesite/index.html');
   
        
    })

    // after each test case do something    
    afterEach(function () {


    })

    // it is a test case.
    it('should load the correct URL', function () {
     
   
        // enter text into fields of login overlay
        testPage.emailFld.sendKeys('test@gmail.com');
        testPage.passFld.sendKeys('password');

        // verify login field text
        expect(testPage.loginTitleTxt.getText()).toEqual('Welcome. Please login.');   // getText()).toContain('Welcome')
        expect(testPage.emailFld.getAttribute('value')).toEqual('test@gmail.com')


        // wait browser 
        browser.sleep(5000);    
    })


})