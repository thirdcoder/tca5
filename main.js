'use strict';

const webworkify = require('webworkify');
const worker = webworkify(require('./worker.js'));

worker.hardwareHandlers = {};

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);

  if (ev.data.hardware) {
    worker.hardwareHandlers[ev.data.hardware](ev);
  }
});

require('./video.js').create(worker);
require('./audio.js').create(worker);
require('./timer.js').create(worker);
require('./floppy.js').create(worker);

worker.postMessage({cmd:'boot'});


