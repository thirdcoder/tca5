'use strict';

const BEEPER_ADDRESS = -3286;

// scanner beep from http://freesound.org/people/kalisemorrison/sounds/202530/ (CC-0)
const beepURL = 'data:audio/mp3;base64,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';

function installAudioHardware(cpu) {
  const beep = new Audio(beepURL);

  cpu.memory.addMemoryMap('beeper', {
    start: BEEPER_ADDRESS,
    end: BEEPER_ADDRESS,
    write: (address, value) => {
      console.log('beep',address,value);
      beep.play();
      // TODO: more sophisticated sound effects, synthesizer?
    },
  });
};

module.exports = installAudioHardware;
