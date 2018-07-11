// trying to generate anything with spectrum-generator

'use strict';
const fs = require('fs');

const debug = require('debug')('main');
const generateSpectrum = require('spectrum-generator').generateSpectrum;

const addBaseline = require('../addBaseline');
const addNoise = require('../addNoise');

const options = { start: 0, end: 100, pointsPerUnit: 1 };
const peaks = [[4, 10], [20, 30], [23, 10], [60, 35], [90, 20]];
// const peaks = [];
const spectrum = generateSpectrum(peaks, options);

addBaseline(spectrum, (x) => 0.001 * x ** 2);
addNoise(spectrum, 5);

debug(spectrum);

fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(spectrum), 'utf8');

// for (var i = 0; i < options.end; i++) {
//   var result = `${JSON.stringify(spectrum.x[i])}  ${JSON.stringify(spectrum.y[i])}`;
//   console.log(result);
// }
