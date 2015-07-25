'use strict';

const webworkify = require('webworkify');
const worker = webworkify(require('./worker.js'));

const {createVideoHardware} = require('./video.js');

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);
});

createVideoHardware(worker);

worker.postMessage({cmd:'boot'});


