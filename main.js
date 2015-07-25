'use strict';

const webworkify = require('webworkify');
const worker = webworkify(require('./worker.js'));

const {createVideoHardware} = require('./video.js');
const {createAudioHardware} = require('./audio.js');

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);
});

createVideoHardware(worker);
createAudioHardware(worker);

worker.postMessage({cmd:'boot'});


