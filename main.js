'use strict';

const webworkify = require('webworkify');
const worker = webworkify(require('./worker.js'));

const createVideoHardware = require('./video.js').create;
const createAudioHardware = require('./audio.js').create;
const createTimerHardware = require('./timer.js').create;

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);
});

createVideoHardware(worker);
createAudioHardware(worker);
createTimerHardware(worker);

worker.postMessage({cmd:'boot'});


