/*

test.js - sanity tests

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var NVector = require('../index.js');

var test = module.exports = {};

test['n-vector x component is sin(latitude[in radians])'] = function (test) {
    test.expect(1);
    var v = NVector.fromLatLon(31.565665, -96.811523);
    test.equal(v.x, Math.sin(31.565665 * NVector.DEGREES_TO_RADIANS));
    test.done();
};

test['n-vector y component is sin(longitude[in radians]) * cos(latitude[in radians])'] = function (test) {
    test.expect(1);
    var v = NVector.fromLatLon(31.565665, -96.811523);
    test.equal(
        v.y, 
        Math.sin(-96.811523 * NVector.DEGREES_TO_RADIANS) * Math.cos(31.565665 * NVector.DEGREES_TO_RADIANS));
    test.done();
};

test['n-vector z component is -1 * cos(longitude[in radians]) * cos(latitude[in radians])'] = function (test) {
    test.expect(1);
    var v = NVector.fromLatLon(31.565665, -96.811523);
    test.equal(
        v.z, 
        -1 * Math.cos(-96.811523 * NVector.DEGREES_TO_RADIANS) * Math.cos(31.565665 * NVector.DEGREES_TO_RADIANS));
    test.done();
};

test['distance between 0,0 and 0,180 is PI to 7 decimal places (3.1415926)'] = function (test) {
    test.expect(1);
    var v1 = NVector.fromLatLon(0, 0);
    var v2 = NVector.fromLatLon(0, 180);
    test.equal(3.1415926, NVector.distance(v1, v2).toString().slice(0, 9));
    test.done();
};

test['distance between 0,0 and 90,0 is PI/2 to 7 decimal places (1.5707963)'] = function (test) {
    test.expect(1);
    var v1 = NVector.fromLatLon(0, 0);
    var v2 = NVector.fromLatLon(90, 0);
    test.equal(1.5707963, NVector.distance(v1, v2).toString().slice(0, 9));
    test.done();
};

test['distance between 0,1 and 0,1 is 0 to 7 decimal places'] = function (test) {
    test.expect(1);
    var v1 = NVector.fromLatLon(0, 1);
    var v2 = NVector.fromLatLon(0, 1);
    test.equal(0, NVector.distance(v1, v2).toString().slice(0, 9));
    test.done();    
};

test['distance between 0,180 and 0,-180 is 0'] = function (test) {
    test.expect(1);
    var v1 = NVector.fromLatLon(0, 180);
    var v2 = NVector.fromLatLon(0, -180);
    test.equal(0, Math.round(NVector.distance(v1, v2)));
    test.done(); 
};