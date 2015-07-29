'use strict';

const CPU = require('cpu3502');

module.exports = (self) => {

  self.addEventListener('message', (ev) => {
    console.log('worker got',ev.data);

    if (ev.data.cmd === 'boot') {
      const cpu = CPU();
      global.cpu = cpu;
      console.log('cpu=',cpu);

      require('./video.js').install(cpu);
      require('./audio.js').install(cpu);
      require('./timer.js').install(cpu);
      require('./floppy.js').install(cpu);

      const fs = require('fs');
      cpu.assemble_bootcode(fs.readFileSync('os.asm', 'utf8'));
      cpu.boot();
      self.postMessage('booted');
    }
  });
};
