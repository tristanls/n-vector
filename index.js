/*

index.js - "n-vector": Normal vector and distance for a sphere.

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

/*
  * `x`: _Number_ NVector "x" component.
  * `y`: _Number_ NVector "y" component.
  * `z`: _Number_ NVector "z" component.
  * Return: _NVector_ Normal vector with `x`, `y`, and `z` components.
*/
var NVector = module.exports = function NVector (x, y, z) {
    var self = this;

    self.x = x;
    self.y = y;
    self.z = z;
};

NVector.DEGREES_TO_RADIANS = 0.0174532925;

/*
  * `a`: _NVector_ First normal vector.
  * `b`: _NVector_ Second normal vector.
  * Return: _Number_ Central angle between `a` and `b` (multiply by sphere 
          radius to determine the great circle distance).
*/
NVector.distance = function distance (a, b) {
    // calculate magnitude of a x b (cross product)
    var crossProduct = new NVector(
                           a.y * b.z - a.z * b.y,
                           a.z * b.x - a.x * b.z,
                           a.x * b.y - a.y * b.x);

    var magnitude = Math.sqrt(
                        Math.pow(crossProduct.x, 2) +
                        Math.pow(crossProduct.y, 2) +
                        Math.pow(crossProduct.z, 2));

    // calculate dot product
    var dotProduct = a.x * b.x + a.y * b.y + a.z * b.z;

    // central angle
    return Math.atan2(magnitude, dotProduct);
};

/*
  * `latitude`: _Number_ Latitude in decimal degrees (ex: 31.565665).
  * `longitude`: _Number_ Longitude in decimal degrees (ex: -96.811523).
  * Return: _NVector_ Normal vector corresponding to given latitude and longitude.
*/
NVector.fromLatLon = function fromLatLon (latitude, longitude) {
    latitude = latitude * NVector.DEGREES_TO_RADIANS;
    longitude = longitude * NVector.DEGREES_TO_RADIANS;
    return new NVector(
        Math.sin(latitude),
        Math.sin(longitude) * Math.cos(latitude),
        -1 * Math.cos(longitude) * Math.cos(latitude));
};