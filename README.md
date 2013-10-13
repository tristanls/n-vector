# n-vector

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

[![NPM version](https://badge.fury.io/js/n-vector.png)](http://npmjs.org/package/n-vector)

Normal vector and a distance function to determine central angle between normal vectors.

## Contributors

[@tristanls](https://github.com/tristanls), [@mikedeboer](https://github.com/mikedeboer)

## Installation

    npm install n-vector

## Tests

    npm test

### Visual test

    npm run sketch

## Usage

```javascript
var NVector = require('n-vector');

var position1 = NVector.fromLatLon(31.565665, -96.811523);
var position2 = NVector.fromLatLon(31.465952, -97.026443);
var centralAngle = NVector.distance(position1, position2);
// 0.0036406600953623955
var greatCircleDistanceInKm = centralAngle * 6371; // Earth radius ~6371km
// 23.194645467553823 km
var greatCircleDistanceInMi = centralAngle * 3959; // Earth radius ~3959mi
// 14.413373317539724 mi
```

## Overview

>The normal vector to the Earth ellipsoid (called n-vector) is a non-singular position representation that turns out to be very convenient for practical position calculations.

*source: [A Non-singular Horizontal Position Representation](http://www.navlab.net/Publications/A_Nonsingular_Horizontal_Position_Representation.pdf)*

The _non-singular_ aspect of n-vector makes the calculations required simple and without special cases to consider that are present when dealing with crossing prime meridian and at the Earth poles. For a deeper and more precise explanation see [A Non-singular Horizontal Position Representation](http://www.navlab.net/Publications/A_Nonsingular_Horizontal_Position_Representation.pdf).

## Documentation

### NVector

**Public API**

  * [NVector.DEGREES_TO_RADIANS](#nvectordegrees_to_radians)
  * [NVector.distance(a, b)](#nvectordistancea-b)
  * [NVector.fromLatLon(latitude, longitude)](#nvectorfromlatlonlatitude-longitude)
  * [new NVector(x, y, z)](#new-nvectorx-y-z)

#### NVector.DEGREES_TO_RADIANS

  * `DEGREES_TO_RADIANS`: _Number_ 0.0174532925, multiplier to convert decimal degrees into radians.

#### NVector.distance(a, b)

  * `a`: _NVector_ First normal vector.
  * `b`: _NVector_ Second normal vector.
  * Return: _Number_ Central angle between `a` and `b` (multiply by sphere radius to determine the great circle distance).

Returns a central angle between two instances of `NVector`. To get actual distance, multiply the central angle by the estimate of Earth's radius (if it was a perfect sphere), 6371km or 3959mi.

#### NVector.fromLatLon(latitude, longitude)

  * `latitude`: _Number_ Latitude in decimal degrees (ex: 31.565665).
  * `longitude`: _Number_ Longitude in decimal degrees (ex: -96.811523).
  * Return: _NVector_ Normal vector corresponding to given latitude and longitude.

Creates a new `NVector` instance from given latitude and longitude.

#### new NVector(x, y, z)

  * `x`: _Number_ NVector "x" component.
  * `y`: _Number_ NVector "y" component.
  * `z`: _Number_ NVector "z" component.
  * Return: _NVector_ Normal vector with `x`, `y`, and `z` components.

Creates a new `NVector` instance.

## Sources

The implementation has been sourced from:

  - [A Non-singular Horizontal Position Representation](http://www.navlab.net/Publications/A_Nonsingular_Horizontal_Position_Representation.pdf)