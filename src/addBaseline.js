// trying to generate anything with spectrum-generator

'use strict';

const debug = require('debug')('addBaseline');

var data = { x: [1, 2, 3], y: [0, 0, 0] };

addBaseline(data, (x) => x ** 2);

debug(data);

function addBaseline(data, baseline) {
  var xs = data.x;
  var ys = data.y;
  for (let i = 0; i < xs.length; i++) {
    ys[i] += baseline(xs[i]);
    debug(xs[i], baseline(xs[i]));
  }
}

module.exports = addBaseline;
