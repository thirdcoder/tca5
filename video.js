'use strict';

const {TRITS_PER_TRYTE, T_TO_TRITS_PER_TRYTE, TRYTES_PER_WORD, MAX_ADDRESS, MIN_ADDRESS} = require('cpu3502/arch');
const Triterm = require('tritmapped-terminal');
const raf = require('raf');

// 4 trits in each dimension, xxxx and yyyy
const VIDEO_TRYTE_COUNT = 4;

// '00xxx xyyyy' address -> 'xxxxx' tritmap value
const T_TO_VIDEO_TRYTE_COUNT = Math.pow(3,VIDEO_TRYTE_COUNT);
const VIDEO_ADDRESS_SIZE = Math.pow((T_TO_VIDEO_TRYTE_COUNT * TRITS_PER_TRYTE), TRYTES_PER_WORD) / TRITS_PER_TRYTE;

const VIDEO_ADDRESS_OFFSET = MAX_ADDRESS - VIDEO_ADDRESS_SIZE; // -3281
if (VIDEO_ADDRESS_SIZE + VIDEO_ADDRESS_OFFSET !== MAX_ADDRESS) throw new Error('wrong video address size');

const CHARGEN_ADDRESS = -3282; // 0i111 11110
const CURSOR_ROW_ADDRESS = -3283;
const CURSOR_COL_ADDRESS = -3284;

const INT_INPUT = -1;

// Create the video terminal hardware display (on the main thread), listen for worker
function createVideoHardware(worker) {
  const term = Triterm({
    addressTryteSize: VIDEO_TRYTE_COUNT,
    //tritmap: cpu.memory.subarray(VIDEO_ADDRESS_OFFSET, VIDEO_ADDRESS_SIZE + VIDEO_ADDRESS_OFFSET), // no direct access
    handleInput: (tt, ev) => {
      if (Number.isInteger(tt)) {
        //cpu.interrupt(INT_INPUT, tt);
        worker.postMessage({cmd:'interrupt', args:[INT_INPUT, tt]});
      }
    },
  });

  worker.addEventListener('message', (ev) => {
    if (ev.data.cmd === 'video write') {
      term.tc.tritmap[ev.data.address] = ev.data.value;
    } else if (ev.data.cmd === 'video term setTTChar')  {
      let row = ev.data.row;
      let col = ev.data.col;

      // wrap-around if row/col out of terminal range
      row %= term.rowCount; if (row < 0) row += term.rowCount;
      col %= term.colCount; if (col < 0) col += term.colCount;

      console.log('COLROW',col,row);

      term.setTTChar(ev.data.value, col, row);
    }
  });

  raf(function tick() {
    term.refresh();
    raf(tick);
  });
};

// Install the video hardware on the CPU in the worker (send messages back to main)
function installVideoHardware(cpu) {
  cpu.memory.addMemoryMap('video', {
    start: VIDEO_ADDRESS_OFFSET,                      // -3281      %0i111 11111   $wdddd
    end: VIDEO_ADDRESS_SIZE + VIDEO_ADDRESS_OFFSET,   // 29524, end %11111 11111   $ddddd
    write: (address, value) => {
      self.postMessage({cmd:'video write', address:address - VIDEO_ADDRESS_OFFSET, value});
      //term.tc.tritmap[address - VIDEO_ADDRESS_OFFSET] = value;
      console.log('video write:',address,value);
    },
    read: (address) => {
      console.log('video read:',address);
      throw new Error('video read unsupported'); // TODO?
      //return term.tc.tritmap[address - VIDEO_ADDDRESS_OFFSET];
    },
  });

  cpu.memory.addMemoryMap('chargen', {
    start: CHARGEN_ADDRESS,
    end: CHARGEN_ADDRESS,
    write: (address, value) => {
      console.log('chargen',value);

      let row = cpu.memory.read(CURSOR_ROW_ADDRESS);
      let col = cpu.memory.read(CURSOR_COL_ADDRESS);

      //term.setTTChar(value, col, row);
      self.postMessage({cmd:'video term setTTChar', value, col, row});
    },
  });
}

module.exports = {
  create: createVideoHardware,
  install: installVideoHardware,
};
