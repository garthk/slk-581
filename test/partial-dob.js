var expect = require('code').expect;
var lab = require('lab').script();
module.exports.lab = lab;

var makeIndicator = require('../').makeIndicator;

lab.experiment('slk-581', function () {
    lab.test('partial date of birth', function (done) {
        var indicator = makeIndicator({
            givenName: 'Jane',
            familyName: 'Citizen',
            born: {
                year: 1970,
            },
            sex: 2,
        });
        expect(indicator).to.be.a.string();
        expect(indicator.slice(5, 13)).to.equal('19700101');
        expect(indicator.slice(14, 18)).to.equal('AUU');
        done();
    });
});
