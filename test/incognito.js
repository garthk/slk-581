var expect = require('code').expect;
var lab = require('lab').script();
module.exports.lab = lab;

var makeIndicator = require('../').makeIndicator;

lab.experiment('slk-581', function () {
    lab.test('no name at all (unlikely)', function (done) {
        var indicator = makeIndicator({
            sex: 1,
        });
        expect(indicator).to.be.a.string();
        expect(indicator.slice(0, 5)).to.equal('22222');
        done();
    });
});
