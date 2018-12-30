var NavPage = function () {};

NavPage.prototype = Object.create( {}, {

    homeLnk: {get: function () { return element(by.css('#navbarSupportedContent > ul > li.nav-item.active > a')) }},
    heroFactsLnk: {get: function () { return element(by.id('navbarDropdown')) }},
    logoutLnk: {get: function () { return element(by.linkText('Logout')) }},
    wolverineOption: {get: function () { return element(by.linkText('Wolverine')) }},
    spidermanOption: {get: function () { return element(by.linkText('Spider-Man')) }},

    wolverineModelTitle: {get: function () { return element(by.id('wolverineModelLabel')) }},
    wolverineModelBody: {get: function () { return element(by.css('#wolverineModel > div > div > div.modal-body')) }},
    wolverineModelCloseBtn: {get: function () { return element(by.xpath('//*[@id="wolverineModel"]/div/div/div[3]/button')) }},
    wolverineModelXBtn: {get: function () { return element(by.css('#wolverineModel > div > div > div.modal-header > button > span')) }},


    spidermanModelTitle: {get: function () { return element(by.id('spidermanModelLabel')) }},
    spidermanModelBody: {get: function () { return element(by.css('#spidermanModel > div > div > div.modal-body')) }},
    spidermanModelCloseBtn: {get: function () { return element(by.xpath('//*[@id="spidermanModel"]/div/div/div[3]/button')) }},
    spidermanModelXBtn: {get: function () { return element(by.xpath('//*[@id="spidermanModel"]/div/div/div[1]/button/span')) }},

    searchFld: {get: function () { return element(by.id('search-box')) }},
    searchBtn: {get: function () { return element(by.buttonText('Search')) }},

    /*
sample: {get: function () { return element(by.id('')) }},
*/

});

module.exports = NavPage;