var expect = require('code').expect;
var lab = require('lab').script();
module.exports.lab = lab;

var makeIndicator = require('../').makeIndicator;

lab.experiment('slk-581', function () {
    lab.test('happy path', function (done) {
        var indicator = makeIndicator({
            givenName: 'Jane',
            familyName: 'Citizen',
            born: {
                year: 1973, // bloody Gen-Xer
                month: 2,
                day: 1,
            },
            sex: 2,
        });
        expect(indicator).to.be.a.string();
        expect(indicator).to.equal('ITZAN010219732AAA')
        done();
    });
});
