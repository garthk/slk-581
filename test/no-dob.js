var expect = require('code').expect;
var lab = require('lab').script();
module.exports.lab = lab;

var makeIndicator = require('../').makeIndicator;

lab.experiment('slk-581', function () {
    lab.test('no date of birth', function (done) {
        var indicator = makeIndicator({
            givenName: 'Jane',
            familyName: 'Citizen',
            sex: 2,
        });
        expect(indicator).to.be.a.string();
        expect(indicator).to.equal('ITZAN010119002UUU')
        done();
    });
});
