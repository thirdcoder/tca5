'use strict';

const {toUnicode, fromUnicode} = require('trit-text');

const FLOPPY_DATA_PTR = -3290;
const FLOPPY_NAME_PTR = -3292;
const FLOPPY_LENGTH_ADDRESS = -3294;
const FLOPPY_COMMAND_ADDRESS = -3296;

const FLOPPY_COMMAND_READ = -1;
const FLOPPY_COMMAND_WRITE = 0;

function createFloppyHardware(worker) {
}

function installFloppyHardware(cpu) {

  let floppies = {
    hi: 'hello from floppy',
    empty: '',
    smilies: '☺☺☺☻☻☻',
  };
  // TODO: store in webfs


  // read null-terminated filename string pointer
  function getFilename() {
    let namePtr = cpu.memory.readWord(FLOPPY_NAME_PTR);
    let filename = '';
    do {
      const tt = cpu.memory.read(namePtr);
      if (tt === 0) {
        break;
      }
      const u = toUnicode(tt);

      filename += u;
      ++namePtr;
    } while(filename.length < 12);
    return filename;
  }

  // write data into floppy
  function writeFile() {
    const filename = getFilename();
    console.log(`write fn=${filename}`);

    const length = cpu.memory.readWord(FLOPPY_LENGTH_ADDRESS);
    const dataPtr = cpu.memory.readWord(FLOPPY_DATA_PTR);

    let data = '';
    for (var i = 0; i < length; ++i) {
      const tt = cpu.memory.read(dataPtr + i);
      const u = toUnicode(tt);
      data += u;
    }
    console.log('wrote data',data);
    floppies[filename] = data;
  }

  // read data from floppy
  function readFile() {
    const filename = getFilename();
    console.log(`read fn=${filename}`);

    let data = floppies[filename];
    if (data === undefined) data = '';  // empty
    const length = data.length;
    let dataPtr = cpu.memory.readWord(FLOPPY_DATA_PTR);
    for (var i = 0; i < data.length; ++i) {
      const u = data.charAt(i);
      const tt = fromUnicode(u);
      cpu.memory.write(dataPtr, tt);
      ++dataPtr;
    }
    cpu.memory.writeWord(FLOPPY_LENGTH_ADDRESS, length);
  }

  cpu.memory.addMemoryMap('floppy', {
    start: FLOPPY_COMMAND_ADDRESS,
    end: FLOPPY_COMMAND_ADDRESS,
    write: (address, value) => {
      console.log('floppy',value);
      switch(value) {
        case FLOPPY_COMMAND_WRITE:
          writeFile();
          break;

        case FLOPPY_COMMAND_READ:
          readFile();
          break;

        default:
      }
    },
  });
}

module.exports = {
  create: createFloppyHardware,
  install: installFloppyHardware,
};
