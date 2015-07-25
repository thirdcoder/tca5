'use strict';

const CPU = require('cpu3502');

const {installVideoHardware} = require('./video.js');
const installAudioHardware = require('./audio.js');
const installTimerHardware = require('./timer.js');

module.exports = (self) => {

  self.addEventListener('message', (ev) => {
    console.log('worker got',ev.data);

    if (ev.data.cmd === 'boot') {
      const cpu = CPU();
      global.cpu = cpu;
      console.log('cpu=',cpu);

      installVideoHardware(cpu);
      //installAudioHardware(cpu); // TODO
      installTimerHardware(cpu);

      const fs = require('fs');
      cpu.assemble_bootcode(fs.readFileSync('os.asm', 'utf8'));
      cpu.boot();
      self.postMessage('booted');
    } else if (ev.data.cmd === 'interrupt') {
      console.log('worker received interrupt');
      global.cpu.interrupt(ev.data.args[0], ev.data.args[1]);
    }
  });
};
