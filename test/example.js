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
                year: 1970, // bloody Gen-Xer
                month: 2,
                day: 1,
                accuracy: {
                    year: 'A', // accurate
                    month: 'E', // estimated
                    day: 'U', // unknown
                },
            },
            sex: 2, // 1: male; 2: female; 3: intersex/indeterminate; 9: unknown
        });
        expect(indicator).to.be.a.string();
        expect(indicator).to.equal('ITZAN010219702UEA')
        done();
    });
});

