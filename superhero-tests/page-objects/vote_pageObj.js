var VotePage = function () {};

VotePage.prototype = Object.create({}, {

voteTitleTxt: {get: function () { return element(by.css('body > div.row > div.container-fluid > div:nth-child(6) > div > h4')) }},

xmenChioceRad: {get: function () { return element(by.id('heroMovieRadio1')) }},
xmenChioceRadLbl: {get: function () { return element(by.css('#vote-form > div:nth-child(1) > label')) }},

avengersChioceRad: {get: function () { return element(by.id('heroMovieRadio2')) }},
avengersChioceRadLbl: {get: function () { return element(by.css('#vote-form > div:nth-child(2) > label')) }},

deadpoolChioceRad: {get: function () { return element(by.id('heroMovieRadio3')) }},
deadpoolChioceRadLbl: {get: function () { return element(by.css('#vote-form > div:nth-child(3) > label')) }},

spidermanChioceRad: {get: function () { return element(by.id('heroMovieRadio4')) }},
spidermanChioceRadLbl: {get: function () { return element(by.css('#vote-form > div:nth-child(4) > label')) }},

ironmanChioceRad: {get: function () { return element(by.id('heroMovieRadio5')) }},
ironmanChioceRadLbl: {get: function () { return element(by.css('#vote-form > div:nth-child(5) > label')) }},


voteSubmitBtn: {get: function () { return element(by.css('#vote-form > button')) }},
voteMsgTxt: {get: function () { return element(by.id('vote-alert')) }},

voteFormSection: {get: function () { return element(by.id('vote-form')) }},


movieLbl: {get: function () { return element(by.css('body > div.row > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)')) }},
votesLbl: {get: function () { return element(by.css('body > div.row > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)')) }},
xmenLbl: {get: function () { return element(by.id('movieName1')) }},
xmenVal: {get: function () { return element(by.id('movieVotes1')) }},
avengersLbl: {get: function () { return element(by.id('movieName2')) }},
avengersVal: {get: function () { return element(by.id('movieVotes2')) }},
deadpoolLbl: {get: function () { return element(by.id('movieName3')) }},
deadpoolVal: {get: function () { return element(by.id('movieVotes3')) }},
spidermanLbl: {get: function () { return element(by.id('movieName4')) }},
spidermanVal: {get: function () { return element(by.id('movieVotes4')) }},
ironmanLbl: {get: function () { return element(by.id('movieName5')) }},
ironmanVal: {get: function () { return element(by.id('movieVotes5')) }},

/*
sample: {get: function () { return element(by.id('')) }},
*/


});

module.exports = VotePage;