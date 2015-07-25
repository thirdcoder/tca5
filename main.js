'use strict';

const webworkify = require('webworkify');
const worker = webworkify(require('./worker.js'));

const createVideoHardware = require('./video.js').create;
const createAudioHardware = require('./audio.js').create;
const createTimerHardware = require('./timer.js').create;

let handlers = {};

function addHandler(hardware) {
  handlers[hardware.name] = hardware.handler;
}

addHandler(createVideoHardware(worker));
addHandler(createAudioHardware(worker));
addHandler(createTimerHardware(worker));

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);

  if (ev.data.hardware) {
    // send message to respective hardware
    handlers[ev.data.hardware](ev);
  }
});

worker.postMessage({cmd:'boot'});


