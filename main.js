'use strict';

const webworkify = require('webworkify');

const worker = webworkify(require('./worker.js'));

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);
});

worker.postMessage('boot');


