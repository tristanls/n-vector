/*

sketch.js - visual sanity tests

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

var v1 = NVector.fromLatLon(31.565665, -96.811523);
console.log('v1', v1.x, v1.y, v1.z);
var v2 = NVector.fromLatLon(31.465952, -97.026443);
console.log('v2', v2.x, v2.y, v2.z);
console.log('v1 and v2', NVector.distance(v1, v2));

var v3 = NVector.fromLatLon(28.204280, -99.283447);
console.log('v3', v3.x, v3.y, v3.z);
console.log('v1 and v3', NVector.distance(v1, v3));
console.log('v2 and v3', NVector.distance(v2, v3));
console.log('v3 and v3', NVector.distance(v3, v3));

var v4 = NVector.fromLatLon(39.492384, -123.178711);
console.log('v4', v4.x, v4.y, v4.z);
console.log('v1 and v4', NVector.distance(v1, v4));
console.log('v2 and v4', NVector.distance(v2, v4));
console.log('v3 and v4', NVector.distance(v3, v4));

var v5 = NVector.fromLatLon(-0.381772, -179.736328);
var v6 = NVector.fromLatLon(0.381772, 179.736328);
console.log('v5', v5.x, v5.y, v5.z);
console.log('v6', v6.x, v6.y, v6.z);
console.log('v5 and v6', NVector.distance(v5, v6));

var v7 = NVector.fromLatLon(0, 0);
var v8 = NVector.fromLatLon(0, 180);
console.log('v7', v7.x, v7.y, v7.z);
console.log('v8', v8.x, v8.y, v8.z);
console.log('0,0 and 0,180', NVector.distance(v7, v8));

var v9 = NVector.fromLatLon(90, 0);
console.log('v9', v9.x, v9.y, v9.z);
console.log('0,0 and 90,0', NVector.distance(v7, v9));
var v10 = NVector.fromLatLon(90, 180);
console.log('v10', v10.x, v10.y, v10.z);
console.log('0,0 and 90,180', NVector.distance(v7, v10));

var v11 = NVector.fromLatLon(50.474987, 20.214844);
var v12 = NVector.fromLatLon(50.474982, 20.213621);
console.log('very close', NVector.distance(v11, v12));

var v13 = NVector.fromLatLon(-90, 0);
console.log('90, 0 and -90, 0', NVector.distance(v9, v13));
var v14 = NVector.fromLatLon(90, -1);
console.log('90, 0 and 90, -1', NVector.distance(v9, v14));

var v15 = NVector.fromLatLon(0, 33);
console.log('0, 33', v15.x, v15.y, v15.z);

var v16 = NVector.fromLatLon(0, -180);
console.log('0,180 and 0,-180', NVector.distance(v8, v16));