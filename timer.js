'use strict';

const TIMER_FREQUENCY_ADDRESS = -3285;

const INT_PULSE = 1;

function createTimerHardware(worker) {
  return {name:'timer', handler: () => {}};
  // nothing needed on main thread; this is entirely in web worker
}

function installTimerHardware(cpu) {
  let _timer;

  cpu.memory.addMemoryMap('timer', {
    start: TIMER_FREQUENCY_ADDRESS,
    end: TIMER_FREQUENCY_ADDRESS,
    write: (address, value) => {
      function fire() {
        let ms = cpu.memory.read(TIMER_FREQUENCY_ADDRESS) * 100;
        if (ms < 100) ms = 100;

        console.log(`TIMER FIRE, next=${ms} ms`);
        cpu.interrupt(INT_PULSE); // TODO: pass dt, time since previous fire?

        _timer = setTimeout(fire, ms);
      };

      if (_timer === undefined) fire();
    },
  });
}

module.exports = {
  create: createTimerHardware,
  install: installTimerHardware,
};
