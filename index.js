'use strict';

var assert = require('assert');

/**
 * An entirely unknown date.
 * @type {SLK581.Date}
 */
var UNKNOWN_DATE = {
    year: 1900,
    month: 1,
    day: 1,
    accuracy: {
        year: 'U',
        month: 'U',
        day: 'U',
    },
};

/**
 * Make an SLK-581 indicator.
 * @param {SLK581.Inputs} inputs
 * @returns {string} an SLK-581 code
 */
function makeIndicator(inputs) {
    assert(!!inputs && typeof inputs === 'object');
    assert(!(inputs instanceof Array));

    var born = inputs.born || UNKNOWN_DATE;
    var accuracy = born.accuracy || {};

    var parts = [];
    parts.push(indicateFamilyName(inputs.familyName));
    parts.push(indicateGivenName(inputs.givenName));

    parts.push(indicateDatePart(born.year, UNKNOWN_DATE.year, 4));
    parts.push(indicateDatePart(born.month, UNKNOWN_DATE.month, 2));
    parts.push(indicateDatePart(born.day, UNKNOWN_DATE.day, 2));

    parts.push(indicateSex(inputs.sex));

    parts.push(indicateDateAccuracyPart(born.year, accuracy.year));
    parts.push(indicateDateAccuracyPart(born.month, accuracy.month));
    parts.push(indicateDateAccuracyPart(born.day, accuracy.day));

    return parts.join('');
}

/**
 * Make an SLK-581 family name indicator.
 * @param {string} familyName
 * @returns {string}
 */
function indicateFamilyName(familyName) {
    familyName = familyName || '';
    var parts = [];
    parts.push(familyName.slice(1, 2) || '2');
    parts.push(familyName.slice(2, 3) || '2');
    parts.push(familyName.slice(4, 5) || '2');
    return parts.join('').toUpperCase();
}

/**
 * Make an SLK-581 given name indicator.
 * @param {string} givenName
 * @returns {string}
 */
function indicateGivenName(givenName) {
    givenName = givenName || '';
    var parts = [];
    parts.push(givenName.slice(1, 2) || '2');
    parts.push(givenName.slice(2, 3) || '2');
    return parts.join('').toUpperCase();
}

/**
 * Make an SLK-581 date part.
 * @param {number} part
 * @param {number} _default
 * @param {number} digits
 * @param {SLK581.DateAccuracyIndicator} accuracy
 * @returns {string}
 */
function indicateDatePart(part, _default, digits) {
    part = part || _default;
    assert.equal(typeof part, 'number');
    assert(part > 0);
    var repr = part.toString();
    assert(repr.length <= digits);
    while (repr.length < digits) {
        repr = '0' + repr;
    }
    return repr;
}

/**
 * Make an SLK-581 date accuracy indicator.
 * Assumes accuracy unless !part or accuracy given.
 * @param {number} part
 * @param {SLK581.DateAccuracyIndicator} accuracy
 * @returns {SLK581.DateAccuracyIndicator}
 */
function indicateDateAccuracyPart(part, accuracy) {
    if (!part) {
        return 'U';
    } else if (accuracy === undefined) {
        return 'A';
    } else {
        assert.notEqual('AUE'.indexOf(accuracy), -1);
        return accuracy;
    }
}

/**
 * Make an SLK-581 given name indicator.
 * @param {SLK581.SexIndicator} sex
 * @returns {string}
 */
function indicateSex(sex) {
    switch (sex) {
        case 1:
        case 2:
        case 3:
            return sex;
        case undefined:
            return 9;
        default:
            throw new Error('invalid sex indicator: ' + sex);
    }
}

module.exports.makeIndicator = makeIndicator;
