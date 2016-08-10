var expect = require('code').expect;
var lab = require('lab').script();
module.exports.lab = lab;

var makeIndicator = require('../').makeIndicator;

lab.experiment('slk-581', function () {
    lab.test('mononym', function (done) {
        var indicator = makeIndicator({
            givenName: 'mononym',
        });
        expect(indicator).to.be.a.string();
        expect(indicator.slice(0, 3)).to.equal('222');
        expect(indicator.slice(3, 5)).to.equal('ON');
        done();
    });
});
