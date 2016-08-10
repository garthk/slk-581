var expect = require('code').expect;
var lab = require('lab').script();
module.exports.lab = lab;

var assert = require('assert');
var makeIndicator = require('../').makeIndicator;

lab.experiment('slk-581', function () {
    lab.experiment('thrown assertions', function () {
        lab.test('falsey argument', function (done) {
            assert.throws(falseyArgument);
            done();
            function falseyArgument() {
                makeIndicator(null);
            }
        });

        lab.test('non-object argument', function (done) {
            assert.throws(notObjectArgument);
            done();
            function notObjectArgument() {
                makeIndicator('not an object');
            }
        });

        lab.test('array argument', function (done) {
            assert.throws(arrayArgument);
            done();
            function arrayArgument() {
                makeIndicator([]);
            }
        });

        lab.test('non-numeric date part', function (done) {
            assert.throws(nonNumericDatePart);
            done();
            function nonNumericDatePart() {
                makeIndicator({
                    born: {
                        year: []
                    }
                })
            }
        });

        lab.test('negative date part', function (done) {
            assert.throws(nonNumericDatePart);
            done();
            function nonNumericDatePart() {
                makeIndicator({
                    born: {
                        year: -1900
                    }
                })
            }
        });

        lab.test('invalid date accuracy indicator', function (done) {
            assert.throws(invalidDateAccuracyIndicator);
            done();
            function invalidDateAccuracyIndicator() {
                makeIndicator({
                    born: {
                        year: 1970,
                        accuracy: {
                            year: '?'
                        }
                    }
                });
            }
        });

        lab.test('invalid sex indicator', function (done) {
            assert.throws(invalidSexIndicator);
            done();
            function invalidSexIndicator() {
                makeIndicator({
                    sex: 4,
                });
            }
        });
    });
});
