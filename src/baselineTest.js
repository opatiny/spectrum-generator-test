// trying to generate anything with spectrum-generator

'use strict';


var data = { x: [1, 2, 3], y: [0, 1, 0] };


addBaseline(data, (x) => 2 * x);

console.log(data);

function addBaseline(data, baseline) {
  let xs = data.x;
  let ys = data.y;
  for (let i = 0; i < xs.length; i++) {
    ys[i] += baseline(xs[i]);
  }
}
