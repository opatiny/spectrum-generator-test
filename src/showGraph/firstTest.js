// trying to generate anything with spectrum-generator

'use strict';
const fs = require('fs');

var generateSpectrum = require('spectrum-generator').generateSpectrum;

var options = { start: 0, end: 20, pointsPerUnit: 1 };
const peaks = [[4, 10], [20, 30], [236, 1], [569, 76]];
const spectrum = generateSpectrum(peaks, options);


fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(spectrum), 'utf8');

// console.log(spectrum);

// for (var i = 0; i < options.end; i++) {
//   var result = `${JSON.stringify(spectrum.x[i])}  ${JSON.stringify(spectrum.y[i])}`;
//   console.log(result);
// }
