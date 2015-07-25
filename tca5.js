'use strict';

const webworkify = require('webworkify');

const worker = webworkify(require('./worker.js'));

worker.addEventListener('message', (ev) => {
  console.log('got worker event',ev);
  debugger;
});

worker.postMessage(4);

const CPU = require('cpu3502');

const installVideoHardware = require('./video.js');
const installAudioHardware = require('./audio.js');
const installTimerHardware = require('./timer.js');

const cpu = CPU();

installVideoHardware(cpu);
installAudioHardware(cpu);
installTimerHardware(cpu);

global.cpu = cpu;

const fs = require('fs');
cpu.assemble_bootcode(fs.readFileSync('os.asm', 'utf8'));
cpu.boot();
