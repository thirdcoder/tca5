'use strict';

const webworkify = require('webworkify');
const worker = webworkify(require('./worker.js'));

const createVideoHardware = require('./video.js').create;
const createAudioHardware = require('./audio.js').create;
const createTimerHardware = require('./timer.js').create;

worker.hardwareHandlers = {};

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);

  if (ev.data.hardware) {
    worker.hardwareHandlers[ev.data.hardware](ev);
  }
});

createVideoHardware(worker);
createAudioHardware(worker);
createTimerHardware(worker);

worker.postMessage({cmd:'boot'});


