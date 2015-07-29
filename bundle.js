(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var BEEPER_ADDRESS = -3286;

// scanner beep from http://freesound.org/people/kalisemorrison/sounds/202530/ (CC-0)
var beepURL = 'data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAANAAAN8QAQEBAQEBAQJiYmJiYmJiY3Nzc3Nzc3N1BQUFBQUFBpaWlpaWlpaYODg4ODg4ODnJycnJycnLGxsbGxsbGxwsLCwsLCwsLT09PT09PT5OTk5OTk5OT19fX19fX19f////////8AAAA5TEFNRTMuOThyAqUAAAAALCMAABRGJARAQgAARgAADfETryJ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tQxAAACeTTHEQEc4GLqqVk8wx4BApAjAYEE5bu6JSJln7nvpTogIgSBNfArj+NG5jwDfAjjg5swGMZKSf/67wICCs+kQFwfAhSCAIOOA+XKBkQF4nDE4f8h2cH1P8uHyGqpwBQiqw9JWjPOlVoBCErY9oL6m2Y1tNMoSank9pEWLrZI3ASU6dLNEOaMB89T2/7LVcECBtmZ/f6VTDGSkf0ylxDrkiZZTSUrrENGpt1Z2+ViLvv/WIcZl2yCAeHW3LUkpUh64AHoBGSHJBDaP/7YMQEggylVSQnmGuRnadlGPMMOeLYzaaYhOyI+UkGjm5oe2OmAMyFlZSe42lUhc8x2aIk0l9P2VUPaLIcbeDJaceOSFdp8OK+btl4vkQ8pxCtvw/M8YHy550pzci6Xt6BQ2t+dEM4DRka2YiSMAwN8lVpSXicBEkqDEihpMtz03NWeYvILKGS0oJHISHcktZELS5B+KjY6fFMTnq3mS9EoHUO5DCCdZT2rNtDMjd2FJLZbqVyzpE8+b9zmKTCPt5nksMKkke6xsdm8lmxDF92aDu55/5Dv8WFWVVw4VpiYG2DK+xuFBY5iEUJQSEDlFHdhoDmKiJ3cyS5CmG0nvYxLjk9iv/7UMQWAA0ZVShHjK3Jmadk1PMM8Ya6oznncphMBg6rHQrn0UqMmIXVx5jUY1WPR0u+bO6rHPmM9mJojsQjuyMy94gsH/avz/xm/VavaNH4sp2A3MXkAYT75GscNdB96bk9iFa5E6pu0jyL+uaKGZi6ZpBaJjDvKVwSK7uqankfajcIZGehAZsLda5ecLrWkfynle7L8VV+nl5oevmqsU8l6sw3aHCNOgSHP/+n2sTCXrp3cvVolF0qACAGThOw40MY3FD1uFBo+356uG8IOFX/+3DEC4ANaQsnFPMAAvS7JMcfQACXznxi8xDays2N7LU2tu7vXUzrxlNhsI625iT7u9nbzxIWuNQf7d93/3We8l++fs+OfX7d8f/F8plFR7AqZDjZyLuMkDzhg01ZhM8QNux12KrcTSPAEAIRKHadYH0pnFniYbT8ZF3TsVSnMCwBjBAC7E6cNy4UoHDMgd9qDcSBw+bsbH1hbwIXD8gsocsmht2MVAcIYBmWoGpAgakqHaTWpZuxun4sAXvDGgsAoUPeLazBZopjh43TNk4NiB9CCgsBFF1rZkUUTBaklKSSRZiLlsqG5QJxB1XSTdSaGaUHUjdFaDKc0RSRY6kbn0UFIsgpSaa3OJ61U1pJLanrSNVpqex9SnW9NaCv///3QUbf/vL1N89rAAAABtTMgLDtkZRaW1SL//twxAkAj+2hS7w6AAJsNKZgnjYwxuQ0ios0c0BY8GLy2T5wmkkElo+tReSJkcRLjKi4RmSAgYBUGojImJdJ4iyZdU6lGRkZmLus1OmJdNCHCOhFm5erZ//f0S3rTPJJP/XMjcqG7rY3U9aq0dJ6/RZ6s0TZVRitFd//8wPe3//6i+AugBB0qictNEvGMVZs5X4eHiEs5coiZhiQGKwYsKUBqNzd3CXa5q/2ihm9NQQ/8BR9y29iIwEjIteMsCBH9naci/msyqNUlqVQw7T9zta5P2o25VWhdF9TA4jJkZCrJgYk4uksUlKX6/qdIOgQxqpzFk2oPvbWdMUGdMYrtRv1bIX9fULI06kv6vrRVojnI1S1I2/+qpJNgqJaygiZAAAMBOGo4M3Xm8OXe935vRZXgtyjcN4ArP/7cMQNgJHVozMmcbGCHzRmIJ42MOAETGQFAXo5ZymvY/vty9rKxcnYpL3LVUgFnphNbG2gYu92xwCSq3XnNbrUl+7Yw5lczf2zKKzdQuYQ4q1vWdJU8ihV162Q1GKgFgt6ban36lmR9aj7LGEHVFSLr7a0v/j3KL3/6v/WFCbs7qr/V6/rBKGwC0AABUQm0C8cbjs3Yjv1tJ4dpIHbgDakaYBQoCCgPV6S3fqd3v61NXu1bmckeiB30eNkoQQg8stvJSUHRyQxyX5Vb2N7Oaz3ygm5TyU3GfiqNSrjlctLhuZF1EyZB9fU91oAag4E2RW6q+39G+MyH/6//WGE3Q9f+/1rqDkFrXV//6mUkFzINStdtgAAAA8xne1Yxscry7OlxxlE3PUUB49pJmjZQoaZU8AgstWMyyr/+3DEFACSRaNDrSy+gh40ZqCNHfjb3bqWNf//ncnI3LYuwx9W+YIYGGZ4mNB052TSyvSVZ/DO7fpMa9u5LK9nsQjrrlwWdSmfeg22S9lR//0yXEiQifq/5inxVbFS8kHSekXmh0QZrdxsl7E7NFXL/qgIDN/ox7f+JL///+ArBPqARAfnFpmiXcUyFSLqzdh9patJHsMWjARAQ48Ctar0t2lmrFmnuXaezOtfc99WEK1TigRriJ2yCwKtTGXVilV+rMtr2o3KICp5mHZdDUXoYMc53SUOnGyqbFYkEjxguaYjPNpvmjgOizt9tucysc5qmuKWqyW/f/0FT//tv+0df/3f2/cbOgEIAAAyRiMlI2Hyv9pqYeUw+gPvtUOC5KIJgoYktX9Xsv/SVaW5nlfuxiXdmZbDsdf1//tgxBkAkEGjLQfo8YHwLeWY/BcQaTYmcyEibC46KPtAcC2JFKYr+41NymclUtd2ZdmcldeHXCBAFUS7YQYPiYSDX6tr0yhAVFHall+79n9SL9tv1/9CP/5nb9AMda3717f6ic8rDID+R1WVmbYcfNIffV9seLWV0uzSlBRi9OvF30KlnGmJ9ssNuf3V07AEPNlX6jIieDVrzgx3685Vkd2vetXPxqa7K93q8huxIYJLofm4eFQwrKeh2Z0ZfDo92HiOjbkmRH3XM44H8rPpiFmt9lHO+vp6/ZMeKORtxumRCQJjIImUPHjWNzBXKXr7OU2KX4RtJxC+USy1vDLtnuW8d5Wu//tQxBIADXjTLKZhcQF9oOWYx4poXLm5PfjqmLhDiCe0ZiRBmaZOTKWy81NSS20iaTbtKSgE8SlZJ1mysci7+Pn2z9E4+oqoy9zcVtEQ8dTR7ZRWjR8lSKUW36xQVgAMgA0AJ2DatXzct2ss5zO+32NogPTC1w5ov1vX+r39s6gSJPUU/hZAaRcn6pZv/nNt33i1MxvG9dxiDoPtdhQBJcGl9LJZndkPo9U9k33yhDPnERc7Ndv7Wq7Hf/VVAgYAAGQNgFxFDkh6r9rc69lr1//7UMQJgAwc0y0mPG/BcpmlWMeuAPfMmny8PseUtPSmMZ3rPn380xaV/VugzG8zTyeu961v6mrNrW9b/3DLiR8G70OpkOftllJm9oYYJ1tLJQfkSShCOTXUzoiv33aa+rbq0AoUBgCABxGPuSwwoxfT3o6fF3+94baGyJ3HW82jM22Zm3ObNwm06PpkiTnL+jM/w++qmOoKgqBOmP31aUbG2/r2OtMQwgD4ycBQ1Wgwo59X7mO3KpdVJ2OwvffY9SAIIwApgDvHUYkinqHodS7/+1DECAAMKaMqxYxeQXwXZVjzLHjGxW5dVqMDyEz9Oc+bh9W1n1F8OYcULAudVPPS4i72S3uN1Pe+BSOc9cUCHSJD/5zywsiMi7nTm/pp2lr9VbW3TfmZv62fvtl2+mt6GSteruDEQp0oCOpBRvQNAimBl6Q0m4W1YtHFwVQ5Rrc997v2b4ZXM7HBUNTYOLpPVXjS12277dt0DxpoOY4wbcpH2rQJygulY0WBo8h4lEM2u9pr2iqPG0IFdqqlvrZvsW5FZtUBAFJCxilNAHoW//tQxAUACrC3MaelB8FaHeWw8yA4sF6qnlpXT2PbazGZzarzxMMHTyOdpRR5VHSlTX8cSBwbmTrcWGcWNcTXf/19CGIr1MwRVoc48LE3IcRONcLQRNvPRmTosWMY31/+gAEkxBUI6CSKRg+DEUhUFkvR4ILBiJMgfCZYmuVS8y4laOpUiOa+gODb2WrXr3pN3/pH4lXlLjLT3mK5+U2pRkdZvG/c46pstofySBa6/Ps9P7kVaNGXgBaHQDl5jFbYKnJiYrVq9aw7DCg1b+VRof/7IMQMg0qMoRwmDQyQcYBPxAGMAWua6hlWtigVAuOVahr9WFha1NVf/aRU0TBQKhIGgVO1nSwNA0HfZrO+ocHYdEX4aLHZYGn8qHVP1fDtRKqqlgYlVETA1VQYiqqiLkqqlgYlVETEqqhyvKlMQU1FMy45OC40VVVVVVVVVVVVVVU=';

function createAudioHardware(worker) {
  var beep = new Audio(beepURL);

  worker.hardwareHandlers.audio = function (ev) {
    if (ev.data.cmd === 'beep') {
      beep.play();
      // TODO: more sophisticated sound effects, synthesizer?
    }
  };
}

function installAudioHardware(cpu) {

  cpu.memory.addMemoryMap('beeper', {
    start: BEEPER_ADDRESS,
    end: BEEPER_ADDRESS,
    write: function write(address, value) {
      console.log('beep', address, value);
      self.postMessage({ hardware: 'audio', cmd: 'beep' });
    }
  });
};

module.exports = {
  create: createAudioHardware,
  install: installAudioHardware
};

},{}],2:[function(require,module,exports){
'use strict';

var _require = require('trit-text');

var toUnicode = _require.toUnicode;
var fromUnicode = _require.fromUnicode;

var FLOPPY_DATA_PTR = -3290;
var FLOPPY_NAME_PTR = -3292;
var FLOPPY_LENGTH_ADDRESS = -3294;
var FLOPPY_COMMAND_ADDRESS = -3296;

var FLOPPY_COMMAND_READ = -1;
var FLOPPY_COMMAND_WRITE = 0;

function createFloppyHardware(worker) {}

function installFloppyHardware(cpu) {

  var floppies = {
    hi: 'hello from floppy',
    empty: '',
    smilies: '☺☺☺☻☻☻'
  };
  // TODO: store in webfs

  // read null-terminated filename string pointer
  function getFilename() {
    var namePtr = cpu.memory.readWord(FLOPPY_NAME_PTR);
    var filename = '';
    do {
      var tt = cpu.memory.read(namePtr);
      if (tt === 0) {
        break;
      }
      var u = toUnicode(tt);

      filename += u;
      ++namePtr;
    } while (filename.length < 12);
    return filename;
  }

  // write data into floppy
  function writeFile() {
    var filename = getFilename();
    console.log('write fn=' + filename);

    var length = cpu.memory.readWord(FLOPPY_LENGTH_ADDRESS);
    var dataPtr = cpu.memory.readWord(FLOPPY_DATA_PTR);

    var data = '';
    for (var i = 0; i < length; ++i) {
      var tt = cpu.memory.read(dataPtr + i);
      var u = toUnicode(tt);
      data += u;
    }
    console.log('wrote data', data);
    floppies[filename] = data;
  }

  // read data from floppy
  function readFile() {
    var filename = getFilename();
    console.log('read fn=' + filename);

    var data = floppies[filename];
    if (data === undefined) data = ''; // empty
    var length = data.length;
    var dataPtr = cpu.memory.readWord(FLOPPY_DATA_PTR);
    for (var i = 0; i < data.length; ++i) {
      var u = data.charAt(i);
      var tt = fromUnicode(u);
      cpu.memory.write(dataPtr, tt);
      ++dataPtr;
    }
    cpu.memory.writeWord(FLOPPY_LENGTH_ADDRESS, length);
  }

  cpu.memory.addMemoryMap('floppy', {
    start: FLOPPY_COMMAND_ADDRESS,
    end: FLOPPY_COMMAND_ADDRESS,
    write: function write(address, value) {
      console.log('floppy', value);
      switch (value) {
        case FLOPPY_COMMAND_WRITE:
          writeFile();
          break;

        case FLOPPY_COMMAND_READ:
          readFile();
          break;

        default:
      }
    }
  });
}

module.exports = {
  create: createFloppyHardware,
  install: installFloppyHardware
};

},{"trit-text":38}],3:[function(require,module,exports){
'use strict';

var webworkify = require('webworkify');
var worker = webworkify(require('./worker.js'));

worker.hardwareHandlers = {};

worker.addEventListener('message', function (ev) {
  console.log('got worker event', ev);

  if (ev.data.hardware) {
    worker.hardwareHandlers[ev.data.hardware](ev);
  }
});

require('./video.js').create(worker);
require('./audio.js').create(worker);
require('./timer.js').create(worker);
require('./floppy.js').create(worker);

worker.postMessage({ cmd: 'boot' });

},{"./audio.js":1,"./floppy.js":2,"./timer.js":52,"./video.js":53,"./worker.js":54,"webworkify":51}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _require = require('balanced-ternary');

var bts2n = _require.bts2n;
var n2bts = _require.n2bts;
var N_TO_BT_DIGIT = _require.N_TO_BT_DIGIT;
var BT_DIGIT_TO_N = _require.BT_DIGIT_TO_N;

var _require2 = require('trit-getset');

var get_trit = _require2.get_trit;
var set_trit = _require2.set_trit;
var slice_trits = _require2.slice_trits;

var _require3 = require('./word.js');

var high_tryte = _require3.high_tryte;
var low_tryte = _require3.low_tryte;

var ttToUnicode = require('trit-text').toUnicode;

var _require4 = require('./arch');

var TRITS_PER_TRYTE = _require4.TRITS_PER_TRYTE;
var TRYTES_PER_WORD = _require4.TRYTES_PER_WORD;
var TRITS_PER_WORD = _require4.TRITS_PER_WORD;
var MAX_TRYTE = _require4.MAX_TRYTE;
var MIN_TRYTE = _require4.MIN_TRYTE;
var MEMORY_SIZE = _require4.MEMORY_SIZE;

var _require5 = require('./opcodes');

var OP = _require5.OP;
var ADDR_MODE = _require5.ADDR_MODE;
var XOP = _require5.XOP;
var XOP_TO_ALU_OP = _require5.XOP_TO_ALU_OP;

var _require6 = require('./instr_decode');

var decode_instruction = _require6.decode_instruction;
var decode_operand = _require6.decode_operand;
var disasm1 = _require6.disasm1;

var ALU = require('./alu');
var Memory = require('./memory');
var Flags = require('./flags');
var execute_xop_instruction = require('./xop');
var Stack = require('./stack');

var Assembler = require('./as').Assembler;

var INT_START = 0;

var CPU = (function () {
  function CPU() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, CPU);

    this.memory = opts.memory || Memory({
      tryteCount: MEMORY_SIZE,
      map: opts.memoryMap || {}
    });
    this.pc = 0;
    this.accum = 0;
    this.index = 0;
    this.yindex = 0;
    this.flags = Flags();
    this.stack = Stack(this.memory);
    this.alu = ALU(this);
    this.dnop_throws_enabled = true;

    this.flags.I = -1; // by default only allow int 0, non-maskable NMI/start

    console.log('initial flags=', n2bts(this.flags));
  }

  _createClass(CPU, [{
    key: 'assemble_bootcode',

    // Assemble assembly for booting, write and setup boot interrupt vector
    value: function assemble_bootcode(lines) {
      var CODE_START_ADDRESS = this.code_start_address();

      var a = new Assembler();
      a.origin = CODE_START_ADDRESS;

      var machine_code = a.assemble(lines);
      this.memory.writeArray(CODE_START_ADDRESS, machine_code);
      this.write_int_vector(INT_START, CODE_START_ADDRESS);

      return machine_code;
    }
  }, {
    key: 'boot',
    value: function boot() {
      this.interrupt(INT_START);
    }
  }, {
    key: 'state_snapshot',
    value: function state_snapshot() {
      return {
        pc: this.pc,
        accum: this.accum,
        index: this.index,
        yindex: this.yindex,
        stackptr: this.stack.stackptr,
        flags: this.flags
      };
    }
  }, {
    key: 'state_restore',
    value: function state_restore(state) {
      this.pc = state.pc;
      this.accum = state.accum;
      this.index = state.index;
      this.yindex = state.yindex;
      this.stack.stackptr = state.stackptr;
      this.flags = state.flags;
    }
  }, {
    key: 'write_int_vector',
    value: function write_int_vector(intnum, value) {
      cpu.memory.writeWord(this.vector_address(intnum), value);
    }
  }, {
    key: 'vector_address',

    // Get interrupt vector table address at negative-most memory, word addresses pointers (with 10-trit memory):
    // iiiii iiiii -29524 int -1
    // iiiii iiii0 -29523
    //
    // iiiii iiii1 -29522 int 0
    // iiiii iii0i -29521
    //
    // iiiii iii00 -29520 int +1
    // iiiii iii01 -29519
    value: function vector_address(intnum) {
      return this.memory.minAddress + (intnum + 1) * TRYTES_PER_WORD;
    }
  }, {
    key: 'code_start_address',

    // Bootcode starts in low memory right after the three interrupt vectors
    value: function code_start_address() {
      var ints = 3; // -1,0,1
      return this.memory.minAddress + ints * TRYTES_PER_WORD;
    }
  }, {
    key: 'read_int_vector',
    value: function read_int_vector(intnum) {
      return this.memory.readWord(this.vector_address(intnum));
    }
  }, {
    key: 'is_interrupt_allowed',
    value: function is_interrupt_allowed(intnum) {
      switch (this.flags.I) {
        case -1:
          // I=-1 allow only nonmaskable NMI interrupt 0 (start) (SEIN) (default)
          return intnum === 0;

        case 0:
          // I=0 allow all interrupts (CLI)
          return true;

        case 1:
          // I=1 allow interrupts -1 and 0, but mask 1 (SEIP)
          return intnum !== 1;
      }
    }
  }, {
    key: 'interrupt',
    value: function interrupt(intnum, value) {
      console.log('interrupt', intnum, value);
      if (!this.is_interrupt_allowed(intnum)) {
        console.log('interrupt ' + intnum + ' masked by I=' + this.flags.I);
        return;
      }

      var before = this.state_snapshot();

      var address = this.read_int_vector(intnum);
      console.log('interrupt vector address', address);

      if (address === 0) {
        // probably wrong
        debugger;
        throw new Error('unset interrupt vector for ' + intnum);
      }

      // Set accumulator to passed in value, used to send data from I/O
      // TODO: other registers? index, yindex, flags; optional. Or at least clear
      if (value !== undefined) this.accum = value;

      // Execute interrupt handler
      this.pc = address;
      this.run();

      // Restore previous state, except NMI/start interrupt, since it can set flags for other interrupt handlers
      if (intnum !== 0) this.state_restore(before);
    }
  }, {
    key: 'execute_branch_instruction',
    value: function execute_branch_instruction(flag, compare, direction, rel_address) {
      console.log('compare flag=' + flag + ', direction=' + direction + ', compare=' + compare);

      // compare (b) trit to compare flag with
      var flag_value = this.flags.get_flag(flag);

      // direction (c)
      // i less than (flag < trit)
      // 0 equal (flag = trit)
      // 1 not equal (flag != trit)
      var branch_taken = false;
      if (direction === -1) {
        branch_taken = flag_value < compare;
      } else if (direction === 0) {
        branch_taken = flag_value === compare;
      } else if (direction === 1) {
        branch_taken = flag_value !== compare;
      }

      console.log('flag flag_value=' + flag_value + ', branch_taken=' + branch_taken + ', rel_address=' + rel_address);

      // if matches, relative branch (+/- 121)
      if (branch_taken) {
        console.log('taking branch from', this.pc, 'to', this.pc + rel_address);
        this.pc += rel_address;
      } else {
        console.log('not taking branch from', this.pc, 'to', this.pc + rel_address);
      }
    }
  }, {
    key: 'read_alu_operand',

    // Read instruction operand from decoded instruction, return read/write accessors
    value: function read_alu_operand(di) {
      var _this = this;

      var read_arg = undefined,
          write_arg = undefined,
          address_of_arg = undefined;

      var decoded_operand = decode_operand(di, this.memory.subarray(this.pc), 0);

      this.pc += decoded_operand.consumed * this.flags.R;

      switch (decoded_operand.addressing_mode) {
        case ADDR_MODE.ABSOLUTE:
          // absolute, 2-tryte address
          console.log('absolute', decoded_operand.value);

          read_arg = function () {
            return _this.memory.read(decoded_operand.value);
          };
          write_arg = function (value) {
            return _this.memory.write(decoded_operand.value, value);
          };
          address_of_arg = function () {
            return decoded_operand.value;
          };

          break;

        case ADDR_MODE.ABSOLUTE_X:
          console.log('absolute,x', decoded_operand.value);

          read_arg = function () {
            return _this.memory.read(decoded_operand.value + _this.index);
          };
          write_arg = function (value) {
            return _this.memory.write(decoded_operand.value + _this.index, value);
          };
          address_of_arg = function () {
            return decoded_operand.value + _this.index;
          };

          break;

        case ADDR_MODE.ABSOLUTE_Y:
          console.log('absolute,y', decoded_operand.value);

          read_arg = function () {
            return _this.memory.read(decoded_operand.value + _this.yindex);
          };
          write_arg = function (value) {
            return _this.memory.write(decoded_operand.value + _this.yindex, value);
          };
          address_of_arg = function () {
            return decoded_operand.value + _this.yindex;
          };

          break;

        case ADDR_MODE.ACCUMULATOR:
          // accumulator, register, no arguments
          read_arg = function () {
            return _this.accum;
          };
          write_arg = function (value) {
            return _this.accum = value;
          };
          address_of_arg = function () {
            throw new Error('cannot take address of accumulator, in instruction ' + JSON.stringify(di) + ' at pc=' + _this.pc);
          };

          console.log('accum');

          break;

        case ADDR_MODE.IMMEDIATE:
          // immediate, 1-tryte literal
          console.log('immediate', decoded_operand.value);

          read_arg = function () {
            return decoded_operand.value;
          };
          write_arg = function () {
            throw new Error('cannot write to immediate: ' + decoded_operand.value + ', in instruction ' + JSON.stringify(di) + ' at pc=' + _this.pc);
          };
          address_of_arg = function () {
            throw new Error('cannot take address of immediate operand, in instruction ' + JSON.stringify(di) + ' at pc=' + _this.pc);
          }; // actually, maybe can (code_offset)

          break;

        case ADDR_MODE.INDIRECT_INDEXED_Y:
          console.log('indirect_indexed', decoded_operand.value);

          address_of_arg = function () {
            // (indirect),Y
            var ptr = _this.memory.readWord(decoded_operand.value);
            ptr += _this.yindex;
            return ptr;
          };

          read_arg = function () {
            return _this.memory.read(address_of_arg());
          };
          write_arg = function (value) {
            return _this.memory.write(address_of_arg(), value);
          };

          break;

        case ADDR_MODE.INDIRECT:
          console.log('indirect', decoded_operand.value);

          // (indirect)
          address_of_arg = function () {
            return _this.memory.readWord(decoded_operand.value);
          };
          read_arg = function () {
            return _this.memory.read(address_of_arg());
          };
          write_arg = function (value) {
            return _this.memory.write(address_of_arg(), value);
          };

          break;

        default:
          read_arg = write_arg = address_of_arg = function () {
            throw new Error('unimplemented addressing mode ' + decoded_operand.addressing_mode + ', in decoded=operand' + JSON.stringify(di));
          };

      }

      return { read_arg: read_arg, write_arg: write_arg, address_of_arg: address_of_arg };
    }
  }, {
    key: 'step',
    value: function step() {
      var opcode = this.memory.read(this.pc);
      console.log('\npc=', this.pc, ' opcode=', opcode, 'disasm=', disasm1(this.memory.subarray(this.pc)).asm);

      if (opcode === undefined) {
        // increase MEMORY_SIZE if running out too often
        throw new Error('program counter ' + this.pc + ' out of range into undefined memory');
      }
      if (opcode > MAX_TRYTE || opcode < MIN_TRYTE) {
        // indicates internal error in simulator, backing store shouldn't be written out of this range
        throw new Error('memory at pc=' + this.pc + ' value=' + opcode + ' out of 5-trit range');
      }

      var di = decode_instruction(opcode);

      if (di.family === 0) {
        var _read_alu_operand = this.read_alu_operand(di);

        var read_arg = _read_alu_operand.read_arg;
        var write_arg = _read_alu_operand.write_arg;
        var address_of_arg = _read_alu_operand.address_of_arg;

        this.alu.execute_alu_instruction(di.operation, read_arg, write_arg);
      } else if (di.family === 1) {
        var rel_address = this.memory.read(this.pc += this.flags.R);

        this.execute_branch_instruction(di.flag, di.compare, di.direction, rel_address);
      } else if (di.family === -1) {
        var _read_alu_operand2 = this.read_alu_operand(di);

        var read_arg = _read_alu_operand2.read_arg;
        var write_arg = _read_alu_operand2.write_arg;
        var address_of_arg = _read_alu_operand2.address_of_arg;

        if (XOP_TO_ALU_OP[di.operation] !== undefined) {
          // alu operation, extended addressing mode in xop namespace
          var alu_op = XOP_TO_ALU_OP[di.operation];
          this.alu.execute_alu_instruction(alu_op, read_arg, write_arg);
        } else {
          execute_xop_instruction(this, di.operation, read_arg, write_arg, address_of_arg);
        }
      }

      console.log('flags:', 'RHUVSDCIL');
      console.log('flags:', n2bts(this.flags.value), 'A=' + this.accum + '(' + ttToUnicode(this.accum) + '), X=' + this.index + ', Y=' + this.yindex);
      this.pc += this.flags.R;
    }
  }, {
    key: 'run',
    value: function run() {
      this.flags.R = 1; // running: 1, program counter increments by; -1 runs backwards, 0 halts
      do {
        this.step();
      } while (this.flags.R !== 0);
      console.log('Halted with status', this.flags.H);
    }
  }]);

  return CPU;
})();

module.exports = function (opts) {
  return new CPU(opts);
};

},{"./alu":5,"./arch":6,"./as":8,"./flags":9,"./instr_decode":10,"./memory":11,"./opcodes":30,"./stack":31,"./word.js":32,"./xop":33,"balanced-ternary":12,"trit-getset":19,"trit-text":24}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _require = require('trit-getset');

var get_trit = _require.get_trit;
var set_trit = _require.set_trit;
var slice_trits = _require.slice_trits;

var _require2 = require('./opcodes');

var OP = _require2.OP;

var _require3 = require('balanced-ternary');

var bts2n = _require3.bts2n;
var n2bts = _require3.n2bts;

var _require4 = require('./arch');

var TRITS_PER_TRYTE = _require4.TRITS_PER_TRYTE;
var TRYTES_PER_WORD = _require4.TRYTES_PER_WORD;
var TRITS_PER_WORD = _require4.TRITS_PER_WORD;
var MAX_TRYTE = _require4.MAX_TRYTE;
var MIN_TRYTE = _require4.MIN_TRYTE;
var MEMORY_SIZE = _require4.MEMORY_SIZE;

var _require5 = require('tritwise');

var NTI = _require5.NTI;
var STI = _require5.STI;
var PTI = _require5.PTI;
var FD = _require5.FD;
var RD = _require5.RD;
var TOR = _require5.TOR;
var TAND = _require5.TAND;
var BUT = _require5.BUT;

var _require6 = require('./arithmetic');

var add = _require6.add;
var inc = _require6.inc;
var dec = _require6.dec;

var _require7 = require('trit-shift');

var shl = _require7.shl;
var shr = _require7.shr;

var lst = require('least-significant-trit');

var ALU = (function () {
  function ALU(cpu) {
    _classCallCheck(this, ALU);

    this.cpu = cpu;
  }

  _createClass(ALU, [{
    key: 'update_flags_from',
    value: function update_flags_from(value) {
      this.cpu.flags.L = lst(value); // L = least significant trit of A (also get_trit(value, 0))

      // set to most significant nonzero trit, or zero
      var sign = undefined;
      if (value < 0) sign = -1;else if (value === 0) sign = 0;else sign = 1;
      /*
      for (let i = TRITS_PER_TRYTE; i; --i) {
        sign = get_trit(value, i);
        if (sign !== 0) break;
      }
      */
      this.cpu.flags.S = sign;
    }
  }, {
    key: 'execute_alu_instruction',
    value: function execute_alu_instruction(operation, read_arg, write_arg) {
      console.log('alu', n2bts(operation));
      // operation (aaa)
      // addressing mode

      switch (operation) {
        case OP.DNOP:
          console.log('debug nop');
          debugger; // break for debugging in JavaScript debugger
          if (this.cpu.dnop_throws_enabled) {
            throw new Error('hit debug nop: ' + read_arg() + ', at pc=' + this.cpu.pc);
          }
          break;

        case OP.STA:
          // M = A
          write_arg(this.cpu.accum);
          break;

        case OP.STX:
          // M = X
          write_arg(this.cpu.index);
          break;

        case OP.STY:
          // M = Y
          write_arg(this.cpu.yindex);
          break;

        case OP.LDA:
          // A = M
          this.cpu.accum = read_arg();
          this.update_flags_from(this.cpu.accum);
          break;

        case OP.LDX:
          // X = M
          this.cpu.index = read_arg();
          this.update_flags_from(this.cpu.index);
          break;

        case OP.LDY:
          // Y = M
          this.cpu.yindex = read_arg();
          this.update_flags_from(this.cpu.yindex);
          break;

        // unary tritwise functions TODO: how should these set flags?
        case OP.NTI:
          write_arg(NTI(read_arg()));break;
        case OP.STI:
          write_arg(STI(read_arg()));break;
        case OP.PTI:
          write_arg(PTI(read_arg()));break;
        case OP.FD:
          write_arg(FD(read_arg()));break;
        case OP.RD:
          write_arg(RD(read_arg()));break;

        // dyadic tritwise functions
        case OP.AND:
          this.cpu.accum = TAND(this.cpu.accum, read_arg());break;
        case OP.ORA:
          this.cpu.accum = TOR(this.cpu.accum, read_arg());break;
        case OP.BUT:
          this.cpu.accum = BUT(this.cpu.accum, read_arg());break;

        // arithmetic
        case OP.ADC:
          {
            // A = A+M+C
            var result = add(this.cpu.accum, read_arg(), this.cpu.flags.C);

            this.cpu.accum = result.result;
            this.update_flags_from(this.cpu.accum);
            this.cpu.flags.C = result.carryOut;
            this.cpu.flags.V = result.overflow;
            break;
          }

        case OP.INC:
          // M = M+1
          this.update_flags_from(write_arg(inc(read_arg())));
          break;

        case OP.DEC:
          // M = M-1
          this.update_flags_from(write_arg(dec(read_arg())));
          break;

        case OP.CMP:
          //     A-M
          this.update_flags_from(this.cpu.accum - read_arg());
          break;

        case OP.CPX:
          //     X-M
          this.update_flags_from(this.cpu.index - read_arg());
          break;

        case OP.CPY:
          //     Y-M
          this.update_flags_from(this.cpu.yindex - read_arg());
          break;

        // shifts
        case OP.SHL:
          {
            // C <-- arg <-- D     M = M<<<1 + D
            var value = read_arg();
            this.update_flags_from(write_arg(shl(value, this.cpu.flags.D)));
            this.cpu.flags.C = get_trit(value, TRITS_PER_TRYTE - 1); // shifted-out trit, from left
            break;
          }

        case OP.SHR:
          {
            // C --> arg --> D     M = (C <<< 5) + M>>>1
            var value = read_arg();
            this.update_flags_from(write_arg(shr(value, TRITS_PER_TRYTE, this.cpu.flags.C)));
            this.cpu.flags.D = lst(value); // shifted-out trit, from right
            break;
          }

        default:
          throw new Error('unimplemented alu instruction: ' + operation);
      }

      console.log('A=', n2bts(this.cpu.accum));
    }
  }]);

  return ALU;
})();

module.exports = function (cpu) {
  return new ALU(cpu);
};

},{"./arch":6,"./arithmetic":7,"./opcodes":30,"balanced-ternary":12,"least-significant-trit":16,"trit-getset":19,"trit-shift":21,"tritwise":29}],6:[function(require,module,exports){
'use strict';

// architectural defines: tryte (~byte) size, word size, memory size

var TRITS_PER_TRYTE = 5;
var T_TO_TRITS_PER_TRYTE = Math.pow(3, TRITS_PER_TRYTE);
var TRYTES_PER_WORD = 2;
var TRITS_PER_WORD = TRITS_PER_TRYTE * TRYTES_PER_WORD;
var MAX_TRYTE = +(T_TO_TRITS_PER_TRYTE - 1) / 2;
var MIN_TRYTE = -(T_TO_TRITS_PER_TRYTE - 1) / 2;

var T_TO_TRITS_PER_WORD = Math.pow(3, TRITS_PER_WORD);
var MEMORY_SIZE = T_TO_TRITS_PER_WORD;

var MAX_ADDRESS = (T_TO_TRITS_PER_WORD - 1) / 2;
var MIN_ADDRESS = -MAX_ADDRESS;

module.exports = {
  TRITS_PER_TRYTE: TRITS_PER_TRYTE,
  T_TO_TRITS_PER_TRYTE: T_TO_TRITS_PER_TRYTE,
  TRYTES_PER_WORD: TRYTES_PER_WORD,
  TRITS_PER_WORD: TRITS_PER_WORD,
  T_TO_TRITS_PER_WORD: T_TO_TRITS_PER_WORD,
  MAX_TRYTE: MAX_TRYTE,
  MIN_TRYTE: MIN_TRYTE,
  MAX_ADDRESS: MAX_ADDRESS,
  MIN_ADDRESS: MIN_ADDRESS,
  MEMORY_SIZE: MEMORY_SIZE
};

},{}],7:[function(require,module,exports){
'use strict';

var _require = require('./arch');

var MAX_TRYTE = _require.MAX_TRYTE;
var MIN_TRYTE = _require.MIN_TRYTE;

// Add two trytes with optional carry, returning result and overflow
function add(a, b) {
  var carryIn = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  var result = a + b + carryIn;
  var fullResult = result;
  var carryOut = 0;

  // carryOut is 6th trit, truncate result to 5 trits
  if (result > MAX_TRYTE) {
    carryOut = 1;
    result -= MAX_TRYTE * 2 + 1;
  } else if (result < MIN_TRYTE) {
    carryOut = -1; // underflow
    result += MAX_TRYTE * 2 + 1;
  }

  // overflow is set if sign is incorrect
  var overflow = undefined;
  if (Math.sign(fullResult) === Math.sign(result)) {
    overflow = 0;
  } else {
    overflow = Math.sign(fullResult) || Math.sign(result);
  }
  // note: for 5-trit + 5-trit + 1-trit will always V = C, but the logic above is generic
  if (overflow !== carryOut) throw new Error('unexpected overflow calculation: ' + overflow + ' !== ' + carryOut);

  return { result: result, carryOut: carryOut, fullResult: fullResult, overflow: overflow };
}

// Increment and decrement - no carry/overflow/underflow
// (similar to http://www.obelisk.demon.co.uk/6502/reference.html#INC - C, V not affected)
function inc(a) {
  return add(a, 1).result;
}

function dec(a) {
  return add(a, -1).result;
}

module.exports = {
  add: add,
  inc: inc,
  dec: dec
};

},{"./arch":6}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _require = require('./opcodes');

var OP = _require.OP;
var ADDR_MODE = _require.ADDR_MODE;
var FLAGS = _require.FLAGS;
var BRANCH_INSTRUCTION_SHORTHANDS = _require.BRANCH_INSTRUCTION_SHORTHANDS;
var XOP = _require.XOP;
var OP_ADDR_MODE_TO_XOP = _require.OP_ADDR_MODE_TO_XOP;

var _require2 = require('balanced-ternary');

var bts2n = _require2.bts2n;
var n2bts = _require2.n2bts;
var N_TO_BT_DIGIT = _require2.N_TO_BT_DIGIT;
var BT_DIGIT_TO_N = _require2.BT_DIGIT_TO_N;

var _require3 = require('nonary');

var nonary2bts = _require3.nonary2bts;

var _require4 = require('base27');

var sv2bts = _require4.sv2bts;

var _require5 = require('trit-getset');

var get_trit = _require5.get_trit;

var _require6 = require('./word');

var high_tryte = _require6.high_tryte;
var low_tryte = _require6.low_tryte;

var ttFromUnicode = require('trit-text').fromUnicode;

// assembler
// TODO: port to run on cpu (self-hosting)

// syntax
// opcode operands
//
// operands
// # = immediate mode
// % = trits, 0i1, base 3                    iiiii 5
// no prefix = decimal, base 10
// $ = nonary, base 9, each digit two trits aabbcc 3
// & = base 27, each digit three trits       aabbb 2

var Assembler = (function () {
  function Assembler() {
    _classCallCheck(this, Assembler);

    this.symbols = new Map();
    this.unresolved_symbols = [];
    this.code_offset = 0;
    this.origin = 0;
    this.output = [];
    this.current_line = undefined;
  }

  _createClass(Assembler, [{
    key: 'add_symbol',
    value: function add_symbol(name, value) {
      if (this.symbols.has(name)) {
        throw new Error('symbol redefinition: ' + name + ', in line=' + this.current_line); // TODO: store and log original symbol location
      }

      this.symbols.set(name, value);
      // also add low and high trytes (5-trit), useful for immediate mode, registers
      this.symbols.set('<' + name, low_tryte(value));
      this.symbols.set('>' + name, high_tryte(value));
      this.symbols.set(name + '+1', value + 1);
      // TODO: also support arbitrary (but constant-foldable) expressions on symbols, generalize name+1
    }
  }, {
    key: 'emit',
    value: function emit(tryte) {
      if (Number.isNaN(tryte) || n2bts(tryte) === undefined) throw new Error('internal assembler error: tried to emit undefined: ' + tryte);
      console.log('emit', n2bts(tryte));
      this.output.push(tryte);
      ++this.code_offset;
    }
  }, {
    key: 'emit_operand',
    value: function emit_operand(operand_value, addressing_mode) {
      switch (addressing_mode) {
        case ADDR_MODE.ACCUMULATOR:
          // nothing to emit
          break;

        case ADDR_MODE.IMMEDIATE:
          if (!Number.isInteger(operand_value)) {
            throw new Error('opcode (immediate) requires operand: ' + operand_value + ', in line: ' + this.current_line);
          }

          this.emit(operand_value);
          break;

        case ADDR_MODE.ABSOLUTE:
        case ADDR_MODE.ABSOLUTE_X:
        case ADDR_MODE.ABSOLUTE_Y:
        case ADDR_MODE.INDEXED_X_INDIRECT:
        case ADDR_MODE.INDIRECT_INDEXED_Y:
        case ADDR_MODE.INDIRECT:
          if (!Number.isInteger(operand_value)) {
            throw new Error('opcode (2-tryte) requires operand: ' + operand_value + ', in line: ' + this.current_line);
          }

          // TODO: endian?
          this.emit(low_tryte(operand_value));
          this.emit(high_tryte(operand_value));
          break;

        default:
          // TODO: more addressing modes
          throw new Error('opcode unsupported addressing mode ' + addressing_mode + ' for operand ' + operand_value + ', in line: ' + this.current_line);
      }
    }
  }, {
    key: 'assemble_line',
    value: function assemble_line(line) {
      this.current_line = line;

      if (line.length === 0) {
        return;
      }

      if (line.startsWith(';')) {
        // comment
        return;
      }

      var comment_match = line.match(/^(.*?)\s+;.*$/);
      if (comment_match) {
        // strip whitespace up to comment line, and comment itself
        // TODO: .data "literals" versus comments, better parsing here
        line = comment_match[1];
      }

      if (line.endsWith(':')) {
        // labels TODO: support other instructions on line
        var label = line.substring(0, line.length - 1);
        this.add_symbol(label, this.origin + this.code_offset);
        return;
      }

      // 'opcode' is first token, 'rest' is everything after
      var opcode = undefined,
          rest = undefined;
      if (line.indexOf(' ') !== -1) {
        opcode = line.substr(0, line.indexOf(' '));
        rest = line.substr(line.indexOf(' ') + 1);
      } else {
        opcode = line;
      }

      // TODO: comments, ; to end-of-line

      // Branch instruction shorthands
      // ex: branch, beq (s=0), bne (s!=0) br s>0, s=0, s<0 brsen brgz brlp
      if (BRANCH_INSTRUCTION_SHORTHANDS[opcode]) opcode = BRANCH_INSTRUCTION_SHORTHANDS[opcode];

      var addressing_mode = undefined,
          extra = undefined,
          operand_unresolved_at = undefined,
          operand_value = undefined;

      if (opcode.charAt(0) === '.') {
        // assembler directives
        opcode = opcode.substring(1);

        if (opcode === 'equ') {
          // .equ value name
          // TODO: reverse
          var _name = undefined;
          var operand = undefined;
          if (rest.indexOf(' ') !== -1) {
            _name = rest.substr(rest.indexOf(' ') + 1);
            operand = rest.substr(0, rest.indexOf(' '));
          } else {
            operand = rest;
          }

          var _parse_operand = this.parse_operand(operand);

          addressing_mode = _parse_operand.addressing_mode;
          operand_value = _parse_operand.operand_value;
          operand_unresolved_at = _parse_operand.operand_unresolved_at;

          this.add_symbol(_name, operand_value);
          console.log('assigned symbol ' + _name + ' to ' + operand);
        } else if (opcode === 'org') {
          var _parse_operand2 = this.parse_operand(rest);

          addressing_mode = _parse_operand2.addressing_mode;
          operand_value = _parse_operand2.operand_value;
          operand_unresolved_at = _parse_operand2.operand_unresolved_at;

          // TODO: do not allow unresolved symbols in .org?

          if (operand_value === undefined) throw new Error('.org directive requires operand, in line: ' + line);
          this.origin = operand_value;
        } else if (opcode === 'word') {
          var _parse_operand3 = this.parse_operand(rest, 0);

          addressing_mode = _parse_operand3.addressing_mode;
          operand_value = _parse_operand3.operand_value;
          operand_unresolved_at = _parse_operand3.operand_unresolved_at;
          // 'opcode' size is 0

          if (operand_value === undefined) throw new Error('.word directive requires operand, in line: ' + line);
          this.validate_operand_range(operand_value, ADDR_MODE.ABSOLUTE);
          this.emit(low_tryte(operand_value));
          this.emit(high_tryte(operand_value));
        } else if (opcode === 'tryte') {
          var _parse_operand4 = this.parse_operand(rest, 0);

          addressing_mode = _parse_operand4.addressing_mode;
          operand_value = _parse_operand4.operand_value;
          operand_unresolved_at = _parse_operand4.operand_unresolved_at;
          // 'opcode' size is 0

          if (operand_value === undefined) throw new Error('.tryte directive requires operand, in line: ' + line);
          this.validate_operand_range(operand_value, ADDR_MODE.IMMEDIATE);
          this.emit(operand_value);
        } else if (opcode === 'data') {
          // only string literals for now, TODO
          if (!rest.startsWith('"') || !rest.endsWith('"')) throw new Error('.data directive requires double-quoted string, in line=' + line);
          var text = rest.substring(1, rest.length - 1);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var char = _step.value;

              // TODO: support escape codes, same as character literals below
              // TODO: and maybe raw digits "foobar",0, with any kind of literals. like '.db', but not data bytes; rather, trytes. it's all .data
              var tt = ttFromUnicode(char);
              if (tt === null || tt === undefined) throw new Error('invalid trit-text character «' + char + '» in string literal, in line=' + line);
              this.emit(tt);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return;
        } else {
          throw new Error('unrecognized assembler directive ' + opcode + ', in line=' + line);
        }
      } else if (OP[opcode] !== undefined) {
        // alu

        if (rest === undefined) {
          throw new Error('alu opcode ' + opcode + ' requires operand, in line=' + line);
        }

        var tryte = undefined;

        var _parse_operand5 = this.parse_operand(rest);

        addressing_mode = _parse_operand5.addressing_mode;
        operand_value = _parse_operand5.operand_value;
        operand_unresolved_at = _parse_operand5.operand_unresolved_at;

        if ([ADDR_MODE.ABSOLUTE, ADDR_MODE.IMMEDIATE, ADDR_MODE.ACCUMULATOR].indexOf(addressing_mode) !== -1) {
          // the alu instruction encoding format supports these three modes
          var opcode_value = OP[opcode]; // aaab0 3-trits

          tryte = opcode_value * Math.pow(3, 2) + addressing_mode * Math.pow(3, 1) + 0;
        } else {
          // xops to support additional addressing modes

          if (OP_ADDR_MODE_TO_XOP[opcode] === undefined) {
            throw new Error('alu opcode ' + opcode + ' operand unexpected addressing mode, requires absolute/immediate/accumulator, in line=' + line);
          }

          if (OP_ADDR_MODE_TO_XOP[opcode][addressing_mode] === undefined) {
            throw new Error('alu opcode ' + opcode + ' operand unsupported addressing mode, in line=' + line);
          }

          var opcode_value = OP_ADDR_MODE_TO_XOP[opcode][addressing_mode];
          tryte = opcode_value * Math.pow(3, 1) + -1;
        }

        this.emit(tryte);
        this.emit_operand(operand_value, addressing_mode);
      } else if (OP_ADDR_MODE_TO_XOP[opcode] !== undefined) {
        // xop with operand addressing mode
        var allowed_addressing_modes = OP_ADDR_MODE_TO_XOP[opcode];
        if (rest === undefined) {
          throw new Error('xop opcode ' + opcode + ' requires operand, in line=' + ine);
        }

        var _parse_operand6 = this.parse_operand(rest);

        addressing_mode = _parse_operand6.addressing_mode;
        operand_value = _parse_operand6.operand_value;
        operand_unresolved_at = _parse_operand6.operand_unresolved_at;

        if (allowed_addressing_modes[addressing_mode] === undefined) {
          console.log('allowed_addressing_modes=', allowed_addressing_modes);
          throw new Error('xop opcode unexpected addressing mode, want ' + JSON.stringify(allowed_addressing_modes) + ' but given ' + addressing_mode + ', in line=' + this.current_line);
        }

        var opcode_value = allowed_addressing_modes[addressing_mode];
        var tryte = opcode_value * Math.pow(3, 1) + -1;

        this.emit(tryte);
        this.emit_operand(operand_value, addressing_mode);
      } else if (XOP[opcode] !== undefined) {
        // xop with no operand
        var opcode_value = XOP[opcode]; // aaaai 4-trits

        var tryte = opcode_value * Math.pow(3, 1) + -1;

        if (rest !== undefined) {
          throw new Error('xop opcode unexpected operand ' + rest + ', in line=' + line);
        }
        this.emit(tryte);
      } else if (opcode.startsWith('BR') && opcode.length === 5) {
        var _parse_operand7 = this.parse_operand(rest);

        // BR branch instruction opcodes
        addressing_mode = _parse_operand7.addressing_mode;
        operand_value = _parse_operand7.operand_value;
        operand_unresolved_at = _parse_operand7.operand_unresolved_at;

        var flag = opcode.charAt(2);
        var direction = opcode.charAt(3);
        var compare = opcode.charAt(4);

        var flag_value = FLAGS[flag];
        if (flag_value === undefined) {
          throw new Error('invalid flag ' + flag + ' in branch instruction ' + opcode);
        }
        var direction_value = ({
          L: -1, '<': -1,
          E: 0, '=': 0,
          N: 1, '!': 1
        })[direction];
        if (direction_value === undefined) {
          throw new Error('invalid direction ' + direction + ' in branch instruction ' + opcode);
        }
        var compare_value = ({ N: -1, Z: 0, P: 1 })[compare];
        if (compare_value === undefined) {
          throw new Error('invalid comparison trit ' + compare_value + ' in branch instruction ' + opcode);
        }
        console.log('branch opcode=' + opcode + ', flag=' + flag_value + '/' + flag + ', direction=' + direction_value + '/' + direction + ' compare=' + compare_value + '/' + compare);;

        // aabc1 a=flag, b=direction, c=trit for comparison
        var tryte = flag_value * Math.pow(3, 3) + direction_value * Math.pow(3, 2) + compare_value * Math.pow(3, 1) + 1;

        var rel_address = undefined;
        switch (addressing_mode) {
          case ADDR_MODE.IMMEDIATE:
            // 'immediate mode' branch instructions, BEQ #+2, means encode relative offset directly
            rel_address = operand_value;
            break;

          case ADDR_MODE.ABSOLUTE:
            if (operand_unresolved_at !== undefined) {
              // use current code placeholder to satisfy range check (rel=0
              operand_value = this.code_offset + this.origin + 2;
              // patch relative address from resolved absolute address
              this.unresolved_symbols[operand_unresolved_at].addressing_mode = ADDR_MODE.BRANCH_RELATIVE;
            }

            // given absolute address, need to compute relative to current location for instruction encoding
            // -2 to account for size of the branch instruction (opcode+operand) itself
            rel_address = operand_value - (this.code_offset + this.origin) - 2;

            if (rel_address < -121 || rel_address > 121) {
              throw new Error('branch instruction to too-far absolute address: operand_value=' + operand_value + ' (unresolved? ' + operand_unresolved_at + '), code_offset=' + this.code_offset + ', rel_address=' + rel_address + ', in line=' + line);
            }

            break;

          default:
            throw new Error('invalid addressing mode for branch instruction: ' + addressing_mode + ', in line=' + line);
        }

        this.emit(tryte);
        this.emit(rel_address);
      } else {
        throw new Error('unrecognized opcode: ' + opcode + ', in line=' + line);
      }
    }
  }, {
    key: 'assemble',
    value: function assemble(asm_text) {
      if (Array.isArray(asm_text)) {
        return this.assemble_lines(asm_text);
      } else {
        return this.assemble_lines(asm_text.split('\n'));
      }
    }
  }, {
    key: 'assemble_lines',
    value: function assemble_lines(lines) {
      this.output = []; // TODO: allow appending?

      this.code_offset = 0;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = lines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var line = _step2.value;

          this.assemble_line(line);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.resolve_unresolved_symbols();

      console.log('assembled ' + lines.length + ' lines into ' + this.output.length + ' trytes');
      //console.log(output);
      return this.output;
    }
  }, {
    key: 'resolve_unresolved_symbols',
    value: function resolve_unresolved_symbols() {
      // Resolve unresolved symbols, writing their values in the machine code
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.unresolved_symbols[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var us = _step3.value;

          if (!this.symbols.has(us.symbol_name)) {
            throw new Error('unresolved symbol ' + us.symbol_name + ', in line=' + us.asm_line);
          }

          var resolved_value = this.symbols.get(us.symbol_name);
          this.validate_operand_range(resolved_value, us.addressing_mode, us.line);
          console.log('resolved symbol ' + us.symbol_name + ' to ' + resolved_value + ' (' + JSON.stringify(us) + ')');

          if (us.addressing_mode === ADDR_MODE.IMMEDIATE) {
            this.output[us.code_address] = resolved_value;
          } else if (us.addressing_mode === ADDR_MODE.BRANCH_RELATIVE) {
            // special case of immediate - stored resolved_value is absolute; convert to relative
            var rel_address = resolved_value - (us.code_address + this.origin) - 1; // -1 for instruction
            if (rel_address < -121 || rel_address > 121) {
              throw new Error('branch instruction to too-far absolute address: resolved_value=' + resolved_value + ', code_address=' + us.code_address + ', rel_address=' + rel_address + ', in line=' + us.asm_line);
            }
            this.output[us.code_address] = rel_address;
          } else if ([ADDR_MODE.ABSOLUTE, ADDR_MODE.ABSOLUTE_X, ADDR_MODE.ABSOLUTE_Y, ADDR_MODE.INDIRECT_INDEXED_Y, ADDR_MODE.INDIRECT].indexOf(us.addressing_mode) !== -1) {
            this.output[us.code_address] = low_tryte(resolved_value);
            this.output[us.code_address + 1] = high_tryte(resolved_value);
            console.log('\tpatched low  ' + us.code_address + ' = ' + this.output[us.code_address]);
            console.log('\tpatched high ' + (us.code_address + 1) + ' = ' + this.output[us.code_address + 1]);
          } else {
            throw new Error('unknown addressing mode ' + us.addressing_mode + ' resolving ' + us);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'parse_literal',
    value: function parse_literal(operand) {
      var operand_value = undefined;

      switch (operand.charAt(0)) {
        case '%':
          // base 3, trits (%iiiii to %11111)
          operand_value = bts2n(operand.substring(1));
          break;
        case '$':
          // base 9, nonary ($imm to $144)
          operand_value = bts2n(nonary2bts(operand.substring(1)));
          break;
        case '&':
          // base 27, septemvigesimal (&QZ to &DM)
          operand_value = bts2n(sv2bts(operand.substring(1)));
          break;
        case '\'':
          // trit-text character

          var unicode = operand.substring(1);

          // escapes for special characters
          if (unicode.substring(0, 1) === '\\') {
            switch (unicode.substring(1)) {
              case '\\':
                unicode = '\\';
                break;
              case 'n':
                unicode = '\n';
                break;
              case '0':
                unicode = '\u0000';
                break;
              case 's':
                unicode = ' ';
                break;
              case 'S':
                unicode = ';';
                break;
              default:
                throw new Error('invalid trit-text escape character «' + unicode + '», in line=' + this.current_line);
            }
          }

          operand_value = ttFromUnicode(unicode);
          if (operand_value === null || operand_value === undefined) {
            throw new Error('invalid trit-text character «' + unicode + '», in line=' + this.current_line + ')');
          }
          break;

        default:
          if (operand.match(/^[-+]?[0-9]+$/)) {
            // decimal
            operand_value = Number.parseInt(operand, 10);
          } else {
            // not a literal!
            return undefined;
          }
      }
      return operand_value;
    }
  }, {
    key: 'get_symbol',

    // Lookup a symbol from the symbol table and return value, or add as pending unresolved
    value: function get_symbol(operand, addressing_mode, opcode_size) {
      var operand_value = undefined,
          operand_unresolved_at = undefined;

      if (this.symbols.has(operand)) {
        operand_value = this.symbols.get(operand);
      } else {
        this.unresolved_symbols.push({
          code_address: this.code_offset + opcode_size, // write right after opcode
          symbol_name: operand,
          addressing_mode: addressing_mode,
          asm_line: this.current_line
        });
        console.log('saving unresolved symbol ' + operand + ' at ' + this.code_offset + ' (addressing_mode ' + addressing_mode + ', opcode_size ' + opcode_size + ', asm_line ' + this.current_line + ')');
        operand_value = 0; //61; // overwritten in second phase TODO: placebo?
        operand_unresolved_at = this.unresolved_symbols.length - 1; // index in unresolved_symbols
        //throw new Error('unresolved symbol reference: '+operand+', in line: '+this.current_line);
      }

      return { operand_value: operand_value, operand_unresolved_at: operand_unresolved_at };
    }
  }, {
    key: 'parse_operand',
    value: function parse_operand(operand) {
      var opcode_size = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

      var addressing_mode = undefined;
      var operand_unresolved_at = undefined;
      var operand_value = undefined;

      if (operand === 'A') {
        addressing_mode = ADDR_MODE.ACCUMULATOR;
      } else {
        if (operand.charAt(0) === '#') {
          addressing_mode = ADDR_MODE.IMMEDIATE;
          operand = operand.substring(1);
        } else if (operand.charAt(0) === '(') {
          if (operand.endsWith(',X)')) {
            addressing_mode = ADDR_MODE.INDEXED_X_INDIRECT;
            operand = operand.substring(1, operand.length - ',X)'.length);
          } else if (operand.endsWith(')')) {
            addressing_mode = ADDR_MODE.INDIRECT;
            operand = operand.substring(1, operand.length - ')'.length);
          } else if (operand.endsWith('),Y')) {
            addressing_mode = ADDR_MODE.INDIRECT_INDEXED_Y;
            operand = operand.substring(1, operand.length - '),Y'.length);
          } else {
            throw new Error('invalid indirect operand parsing ' + operand + ', in line=' + this.current_line);
          }
        } else {
          if (operand.endsWith(',X')) {
            addressing_mode = ADDR_MODE.ABSOLUTE_X;
            operand = operand.substring(0, operand.length - ',X'.length);
          } else if (operand.endsWith(',Y')) {
            addressing_mode = ADDR_MODE.ABSOLUTE_Y;
            operand = operand.substring(0, operand.length - ',Y'.length);
          } else {
            addressing_mode = ADDR_MODE.ABSOLUTE;
          }
        }

        operand_value = this.parse_literal(operand);

        if (operand_value === undefined) {
          var _get_symbol = this.get_symbol(operand, addressing_mode, opcode_size);

          operand_value = _get_symbol.operand_value;
          operand_unresolved_at = _get_symbol.operand_unresolved_at;
        }

        this.validate_operand_range(operand_value, addressing_mode);
      }

      return { addressing_mode: addressing_mode, operand_value: operand_value, operand_unresolved_at: operand_unresolved_at };
    }
  }, {
    key: 'validate_operand_range',
    value: function validate_operand_range(operand, addressing_mode) {
      if (addressing_mode === ADDR_MODE.IMMEDIATE) {
        if (operand < -121 || operand > 121) {
          throw new Error('immediate operand out of 5-trit range: ' + operand + ', in line: ' + this.current_line);
        }
      } else if (addressing_mode === ADDR_MODE.ABSOLUTE) {
        // %iiiiiiiiii to %1111111111
        // $mmmmm to $44444
        // &NZZZ to &AMMM
        if (operand < -29524 || operand > 29524) {
          throw new Error('absolute operand out of 10-trit range: ' + operand + ', in line: ' + this.current_line);
        }
      }
    }
  }]);

  return Assembler;
})();

function assemble(lines) {
  return new Assembler().assemble(lines);
}
assemble.Assembler = Assembler;

module.exports = assemble;

},{"./opcodes":30,"./word":32,"balanced-ternary":12,"base27":13,"nonary":18,"trit-getset":19,"trit-text":24}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _require = require('trit-getset');

var get_trit = _require.get_trit;
var set_trit = _require.set_trit;

var _require2 = require('./opcodes');

var FLAGS = _require2.FLAGS;

var Flags = (function () {
  function Flags() {
    _classCallCheck(this, Flags);

    this.value = 0;
  }

  _createClass(Flags, [{
    key: 'get_flag',
    value: function get_flag(flag) {
      var flag_index = flag + 4; // -4..4 to 0..8
      var flag_value = get_trit(this.value, flag_index);

      return flag_value;
    }
  }, {
    key: 'set_flag',
    value: function set_flag(flag, value) {
      var flag_index = flag + 4; // -4..4 to 0..8

      this.value = set_trit(this.value, flag_index, value);
    }
  }, {
    key: 'L',
    get: function get() {
      return this.get_flag(FLAGS.L);
    },
    set: function set(x) {
      this.set_flag(FLAGS.L, x);
    }
  }, {
    key: 'I',
    get: function get() {
      return this.get_flag(FLAGS.I);
    },
    set: function set(x) {
      this.set_flag(FLAGS.I, x);
    }
  }, {
    key: 'C',
    get: function get() {
      return this.get_flag(FLAGS.C);
    },
    set: function set(x) {
      this.set_flag(FLAGS.C, x);
    }
  }, {
    key: 'D',
    get: function get() {
      return this.get_flag(FLAGS.D);
    },
    set: function set(x) {
      this.set_flag(FLAGS.D, x);
    }
  }, {
    key: 'S',
    get: function get() {
      return this.get_flag(FLAGS.S);
    },
    set: function set(x) {
      this.set_flag(FLAGS.S, x);
    }
  }, {
    key: 'V',
    get: function get() {
      return this.get_flag(FLAGS.V);
    },
    set: function set(x) {
      this.set_flag(FLAGS.V, x);
    }
  }, {
    key: 'U',
    get: function get() {
      return this.get_flag(FLAGS.U);
    },
    set: function set(x) {
      this.set_flag(FLAGS.U, x);
    }
  }, {
    key: 'H',
    get: function get() {
      return this.get_flag(FLAGS.H);
    },
    set: function set(x) {
      this.set_flag(FLAGS.H, x);
    }
  }, {
    key: 'R',
    get: function get() {
      return this.get_flag(FLAGS.R);
    },
    set: function set(x) {
      this.set_flag(FLAGS.R, x);
    }
  }]);

  return Flags;
})();

;

module.exports = function (opts) {
  return new Flags(opts);
};

},{"./opcodes":30,"trit-getset":19}],10:[function(require,module,exports){
'use strict';

var _require = require('./arch');

var MAX_TRYTE = _require.MAX_TRYTE;
var MIN_TRYTE = _require.MIN_TRYTE;
var TRITS_PER_TRYTE = _require.TRITS_PER_TRYTE;
var T_TO_TRITS_PER_TRYTE = _require.T_TO_TRITS_PER_TRYTE;

var _require2 = require('./opcodes');

var OP = _require2.OP;
var ADDR_MODE = _require2.ADDR_MODE;
var FLAGS = _require2.FLAGS;
var XOP = _require2.XOP;
var XOP_TO_ADDR_MODE = _require2.XOP_TO_ADDR_MODE;
var XOP_TO_ALU_OP = _require2.XOP_TO_ALU_OP;
var OP_ADDR_MODE_TO_XOP = _require2.OP_ADDR_MODE_TO_XOP;
var BRANCH_INSTRUCTION_SHORTHANDS = _require2.BRANCH_INSTRUCTION_SHORTHANDS;

var _require3 = require('trit-getset');

var get_trit = _require3.get_trit;
var slice_trits = _require3.slice_trits;

var invertKv = require('invert-kv');

var _require4 = require('balanced-ternary');

var n2bts = _require4.n2bts;

function decode_instruction(opcode) {
  var family = get_trit(opcode, 0);
  //console.log('family',family,n2bts(opcode));

  // 5-trit trytes
  // 43210
  // aaab0 aa=operation, b=addressing mode
  // aabc1 aa=flag, b=direction(i<, 0=,1!=), c=trit to compare with
  // aaaai other instructions

  if (family === 0) {
    var operation = slice_trits(opcode, 2, 5);
    var addressing_mode = get_trit(opcode, 1);

    return { family: family, operation: operation, addressing_mode: addressing_mode };
  } else if (family === 1) {
    var flag = slice_trits(opcode, 3, 5);
    var direction = get_trit(opcode, 2);
    var compare = get_trit(opcode, 1);

    return { family: family, flag: flag, compare: compare, direction: direction };
  } else if (family === -1) {
    var operation = slice_trits(opcode, 1, 5);

    var addressing_mode = XOP_TO_ADDR_MODE[invertKv(XOP)[operation]];
    if (addressing_mode !== undefined) {
      return { family: family, operation: operation, addressing_mode: addressing_mode };
    }

    return { family: family, operation: operation };
  }

  throw new Error('unable to decode instruction: ' + op);
};

// Read operands from a decoded instruction start at machine_code[offset] (offset=opcode)
function decode_operand(di, machine_code) {
  var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  var addressing_mode = di.addressing_mode;
  var consumed = 0;
  var value = undefined;

  switch (di.addressing_mode) {
    // 2-tryte operands
    case ADDR_MODE.INDIRECT_INDEXED_Y:
    case ADDR_MODE.INDEXED_X_INDIRECT:
    case ADDR_MODE.ABSOLUTE:
    case ADDR_MODE.ABSOLUTE_X:
    case ADDR_MODE.ABSOLUTE_Y:
    case ADDR_MODE.INDIRECT:
      value = machine_code[offset + 1];
      value += T_TO_TRITS_PER_TRYTE * machine_code[offset + 2];
      consumed = 2;
      break;

    // accumulator, register, no arguments
    case ADDR_MODE.ACCUMULATOR:
      consumed = 0;
      break;

    // immediate, 1-tryte literal
    case ADDR_MODE.IMMEDIATE:
      value = machine_code[offset + 1];
      consumed = 1;
      break;
  }

  return { addressing_mode: addressing_mode, value: value, consumed: consumed };
}

function stringify_operand(decoded_operand) {
  var operand = undefined;

  switch (decoded_operand.addressing_mode) {
    case ADDR_MODE.ABSOLUTE:
      operand = decoded_operand.value.toString(); // decimal address
      //operand = '%' + n2bts(absolute); // base 3 trits TODO: what base to defalt to? 3, 9, 27, 10??
      break;

    case ADDR_MODE.ACCUMULATOR:
      operand = 'A';
      break;

    case ADDR_MODE.IMMEDIATE:
      operand = '#' + '%' + n2bts(decoded_operand.value); // TODO: again, what base?
      break;

    case ADDR_MODE.INDIRECT_INDEXED_Y:
      operand = '(' + decoded_operand.value.toString() + '),Y';
      break;

    case ADDR_MODE.INDEXED_X_INDIRECT:
      operand = '(' + decoded_operand.value.toString() + ',X)';
      break;

    case ADDR_MODE.ABSOLUTE_X:
      operand = decoded_operand.value.toString() + ',X';
      break;

    case ADDR_MODE.ABSOLUTE_Y:
      operand = decoded_operand.value.toString() + ',Y';
      break;

    case ADDR_MODE.INDIRECT:
      operand = '(' + decoded_operand.value.toString() + ')';
      break;

    default:
      operand = undefined;
  }

  return operand;
}

// convert raw xop with encoded addressing mode to assembly instruction name, ex: STZ_ABY -> STZ
// will return non-undefined if xop_operation is in XOP_TO_ADDR_MODE
// TODO: better data structure to avoid searching, essentially an inverted OP_ADDR_MODE_TO_XOP
function xop_operation_to_assembly_opcode_string(opcode) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(OP_ADDR_MODE_TO_XOP)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var instr = _step.value;

      var allowed_addressing_modes = OP_ADDR_MODE_TO_XOP[instr];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(allowed_addressing_modes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var addressing_mode = _step2.value;

          var this_xop_operation = allowed_addressing_modes[addressing_mode];

          if (XOP[opcode] === this_xop_operation) {
            return instr;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return undefined;
}

// Disassemble one instruction in machine_code
function disasm1(machine_code) {
  var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var di = decode_instruction(machine_code[offset]);

  var opcode = undefined,
      operand = undefined;
  var consumed = 1; // 1-tryte opcode, incremented later if operands

  if (di.family === 0) {
    opcode = invertKv(OP)[di.operation]; // inefficient lookup, but probably doesn't matter

    // note: some duplication with cpu read_alu_operand TODO: factor out
    // TODO: handle reading beyond end
    var decoded_operand = decode_operand(di, machine_code, offset);
    operand = stringify_operand(decoded_operand);
    consumed += decoded_operand.consumed;
  } else if (di.family === 1) {
    opcode = 'BR';
    opcode += invertKv(FLAGS)[di.flag];
    opcode += ({ '-1': 'L', 0: 'E', 1: 'N' })[di.direction];
    opcode += ({ '-1': 'N', 0: 'Z', 1: 'P' })[di.compare];

    if (invertKv(BRANCH_INSTRUCTION_SHORTHANDS)[opcode]) {
      // prefer the shorthand if there is one (BRSEZ -> BEQ)
      opcode = invertKv(BRANCH_INSTRUCTION_SHORTHANDS)[opcode];
    }

    var rel_address = machine_code[offset + 1];
    if (rel_address === undefined) {
      operand = '???';
    } else {
      if (rel_address > 0) {
        // always add +, since makes relativity clearer
        operand = '#+' + rel_address.toString();
      } else {
        operand = '#' + rel_address.toString();
      }
    }

    consumed += 1;
  } else if (di.family === -1) {
    opcode = invertKv(XOP)[di.operation];
    // TODO: undefined opcodes

    var decoded_operand = decode_operand(di, machine_code, offset);
    operand = stringify_operand(decoded_operand);
    consumed += decoded_operand.consumed;

    console.log('XOP di.operation', di.operation, XOP_TO_ADDR_MODE[di.operation]);
    if (XOP_TO_ADDR_MODE[opcode] !== undefined) {
      // some extended opcodes can disassemble to alu special addressing modes
      opcode = xop_operation_to_assembly_opcode_string(opcode);
    }
  }

  var asm = undefined;

  if (operand !== undefined) {
    asm = opcode + ' ' + operand;
  } else {
    asm = opcode;
  }

  return { asm: asm, consumed: consumed };
}

function disasm(machine_code) {
  var offset = 0;
  var asms = [];

  do {
    var _disasm1 = disasm1(machine_code, offset);

    var asm = _disasm1.asm;
    var consumed = _disasm1.consumed;

    asms.push(asm);
    offset += consumed;
  } while (offset < machine_code.length);

  return asms;
}

module.exports = {
  decode_instruction: decode_instruction,
  decode_operand: decode_operand,
  disasm1: disasm1,
  disasm: disasm
};

},{"./arch":6,"./opcodes":30,"balanced-ternary":12,"invert-kv":15,"trit-getset":19}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ARRAY_TYPE = Int8Array; // Int8Array is 8-bit signed -129 to +128, fits 5-trit -121 to +121
var TRITS_PER_TRYTE = 5;

var _require = require('./word');

var trytes2word = _require.trytes2word;
var low_tryte = _require.low_tryte;
var high_tryte = _require.high_tryte;

// Array of 5-trit tryte memory cells backed by an Int8Array

var Memory = (function () {
  function Memory() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Memory);

    this.tryteCount = opts.tryteCount;
    if (this.tryteCount === undefined) throw new Error('memory reqires tryteCount option');

    // Addresses are balanced ± TODO
    if (!Number.isInteger((this.tryteCount - 1) / 2)) throw new Error('memory (tryteCount-1)/2 must be integral: ' + tryteCount);
    this.maxAddress = (this.tryteCount - 1) / 2;
    this.midAddress = 0;
    this.minAddress = -this.maxAddress;

    this.bal2unbal = this.maxAddress;

    this._array = opts._array || new ARRAY_TYPE(new ArrayBuffer(this.tryteCount));
    this.map = opts.map || {};
  }

  _createClass(Memory, [{
    key: 'addMemoryMap',
    value: function addMemoryMap(name, info) {
      if (this.map[name] !== undefined) throw new Error('addMemoryMap(' + name + ') redefinining existing memory map name');

      this.map[name] = info;
      // TODO: check overlapping ranges?
    }
  }, {
    key: 'getTraps',
    value: function getTraps(address) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.map)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _name = _step.value;
          // TODO: switch map to ES6 Map
          var info = this.map[_name];

          if (address >= info.start && address <= info.end) {
            return { read: info.read, write: info.write };
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {};
    }
  }, {
    key: 'readNoTrap',
    value: function readNoTrap(address) {
      if (address < this.minAddress || address > this.maxAddress) throw new Error('out-of-range read: ' + address);
      //console.log('READ',address,address+this.bal2unbal,this._array[address+this.bal2unbal]);
      return this._array[address + this.bal2unbal];
    }
  }, {
    key: 'writeNoTrap',
    value: function writeNoTrap(address, value) {
      if (address < this.minAddress || address > this.maxAddress) throw new Error('out-of-range write: ' + address + ',' + value);
      //console.log('WRITE',address,value,address+this.bal2unbal);
      return this._array[address + this.bal2unbal] = value;
      //if (this._array[address + this.bal2unbal] !== value) {
      //  console.log('FAILED TO WRITE',this._array[address + this.bal2unbal],value,this._array.length);
      //}
    }
  }, {
    key: 'read',

    // Read one tryte
    value: function read(address) {
      var traps = this.getTraps(address);
      if (traps.read) {
        var value = traps.read(address);
        if (value !== undefined) {
          this.writeNoTrap(address, value);
        }
      }

      return this.readNoTrap(address);
    }
  }, {
    key: 'readWord',
    value: function readWord(address) {
      // 2-tryte word
      // TODO: endian?
      var low = this.read(address);
      var high = this.read(address + 1);
      return trytes2word(high, low);
    }
  }, {
    key: 'write',

    // Write one tryte
    value: function write(address, value) {
      this.writeNoTrap(address, value);

      var traps = this.getTraps(address);
      if (traps.write) {
        traps.write(address, this.readNoTrap(address));
      }

      return this.readNoTrap(address);
    }
  }, {
    key: 'writeWord',
    value: function writeWord(address, value) {
      this.write(address, low_tryte(value));
      this.write(address + 1, high_tryte(value));
    }
  }, {
    key: 'writeArray',

    // Write an array of trytes
    value: function writeArray(address, data) {
      var i = address;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tryte = _step2.value;

          this.write(i++, tryte);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'subarray',

    // Get a subarray view of memory starting at address, to end
    value: function subarray(address, end) {
      if (end !== undefined) {
        return this._array.subarray(address + this.bal2unbal, end + this.bal2unbal);
      } else {
        return this._array.subarray(address + this.bal2unbal);
      }
    }

    // TODO: write individual trits, tritmapped-canvas

  }]);

  return Memory;
})();

module.exports = function (opts) {
  return new Memory(opts);
};

},{"./word":32}],12:[function(require,module,exports){
'use strict';

var BT_DIGIT_TO_N = {
  i:-1,   '-':-1, 't':-1, 'T':-1,
  0:0,    '.':0,
  1:1,    '+':1
};

var N_TO_BT_DIGIT = {
  '-1':'i',
  0:'0',
  1:'1'
};

var pow = function(a,b) {
  // return a**b; // cleaner, but requires ES7 or babel-node --experimental
  return Math.pow(a,b)|0;
};
var pow3 = function(b) {
  return pow(3, b);
};

// parse balanced ternary string to signed integer
function bts2n(s) {
  var n = 0;
  for (var i = 0; i < s.length; ++i) {
    var ch = s.charAt(i);
    var digit = BT_DIGIT_TO_N[ch];
    if (digit === undefined) throw new Error('bts2n('+s+'): invalid digit character: '+ch);
    //console.log(i,digit,3**i,n,s,ch);
    n += pow3(s.length - i - 1) * digit;
  }
  return n;
}


// signed integer to balanced ternary string
function n2bts(n_) {
  var neg = n_ < 0;
  var n = Math.abs(n_);
  var s = '';
  do {
    var digit = n % 3;

    // balance the ternary http://stackoverflow.com/questions/26456597/how-to-convert-from-unbalanced-to-balanced-ternary
    if (digit === 2) {
      digit = -1;
      ++n;
    }

    //console.log('digit',digit,n,n_,s);

    // if number has negative sign, flip all digits
    if (neg) {
      digit = -digit;
    }

    s = N_TO_BT_DIGIT[digit] + s;
    n = ~~(n / 3);    // truncate, not floor! negatives

  } while(n);
  //console.log('n2bts',n_,s);
  return s;
}

module.exports = {
  bts2n: bts2n,
  n2bts: n2bts,
  BT_DIGIT_TO_N: BT_DIGIT_TO_N,
  N_TO_BT_DIGIT: N_TO_BT_DIGIT
};

},{}],13:[function(require,module,exports){
'use strict';

var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;

// balanced septemvigesimal (BSV)
// aka:
// "septemvigesimal" https://en.wikipedia.org/wiki/Ternary_numeral_system#Compact_ternary_representation:_base_9_and_27
// "heptavigesimal" https://en.wikipedia.org/wiki/List_of_numeral_systems#Standard_positional_numeral_systems
var SV_TO_N = {
  0: 0,  

  A: 1,     N: -1,
  B: 2,     O: -2,
  C: 3,     P: -3,
  D: 4,     Q: -4,
  E: 5,     R: -5,
  F: 6,     S: -6,
  G: 7,     T: -7,
  H: 8,     U: -8,
  I: 9,     V: -9,
  J: 10,    W: -10,
  K: 11,    X: -11,
  L: 12,    Y: -12,
  M: 13,    Z: -13,
};

// integer to group of 3 balanced ternary digits 
// (redundant with balanced-ternary module + padding, but convenient here)
var N_TO_BTS3 = {
  0: '000',
  1: '001',   '-1': '00i',
  2: '01i',   '-2': '0i1',
  3: '010',   '-3': '0i0',
  4: '011',   '-4': '0ii',
  5: '1ii',   '-5': 'i11',
  6: '1i0',   '-6': 'i10',
  7: '1i1',   '-7': 'i1i',
  8: '10i',   '-8': 'i01',
  9: '100',   '-9': 'i00',
  10: '101',  '-10': 'i0i',
  11: '11i',  '-11': 'ii1',
  12: '110',  '-12': 'ii0',
  13: '111',  '-13': 'iii',
};

var BTS_TO_SV = {
  '000': '0',
  '001': 'A', '00i': 'N',
  '01i': 'B', '0i1': 'O',
  '010': 'C', '0i0': 'P',
  '011': 'D', '0ii': 'Q',
  '1ii': 'E', 'i11': 'R',
  '1i0': 'F', 'i10': 'S',
  '1i1': 'G', 'i1i': 'T',
  '10i': 'H', 'i01': 'U',
  '100': 'I', 'i00': 'V',
  '101': 'J', 'i0i': 'W',
  '11i': 'K', 'ii1': 'X',
  '110': 'L', 'ii0': 'Y',
  '111': 'M', 'iii': 'Z',

};

function sv2bts(sv) {
  var bt = '';

  for (var i = 0; i < sv.length; ++i) {
    var c = sv.charAt(i);
    var n = SV_TO_N[c];

    if (n === undefined) throw new Error('sv2bts('+sv+'): invalid balanced septemvigismal digit: '+c);

    bt += N_TO_BTS3[n];
  }

  return bt;
}

function bts2sv(bt) {
  var i = bt.length;
  var sv = '';

  do
  {
    var c1 = bt.charAt(--i);
    var c2 = bt.charAt(--i);
    var c3 = bt.charAt(--i);
    if (c2 === '') c2 = '0';
    if (c3 === '') c3 = '0';

    var digit = BTS_TO_SV[c3 + c2 + c1];
    if (digit === undefined) throw new Error('bts2sv('+bt+'): invalid balanced ternary digit triplet: '+c3+c2+c1);

    sv = digit + sv;
  } while (i > 0);

  return sv;
}

function n2sv(n) {
  return bts2sv(n2bts(n));
}

function sv2n(sv) {
  return bts2n(sv2bts(sv));
}

module.exports = {
  sv2bts: sv2bts,
  bts2sv: bts2sv,
  n2sv: n2sv,
  sv2n: sv2n,
  SV_TO_N: SV_TO_N,
  N_TO_BTS3: N_TO_BTS3,
  BTS_TO_SV: BTS_TO_SV,
};

},{"balanced-ternary":14}],14:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],15:[function(require,module,exports){
'use strict';
module.exports = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	var ret = {};

	for (var key in obj) {
		var val = obj[key];
		ret[val] = key;
	}

	return ret;
};

},{}],16:[function(require,module,exports){
'use strict';

function lst(input) {
  switch(input % 3) {
    case 0: return 0;
    case 1: return 1;
    case 2: return -1;

    case -1: return -1;
    case -2: return 1;
    default: throw new Error('lst('+input+'): unable to determine least-significant trit: '+input % 3);
  }
}

module.exports = lst;

},{}],17:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],18:[function(require,module,exports){
'use strict';

var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;

//  ii -4   01 +1
//  i0 -3   1i +2
//  i1 -2   10 +3
//  0i -1   11 +4
//  00  0
var NONARY_TO_BTS = {
  // negative digits TODO: these are too wide in some fonts, alternatives? https://en.wikipedia.org/wiki/Numerals_in_Unicode
  z:'ii', m:'ii', '④':'ii', // U+2463 circled digit four
  y:'i0', k:'i0', '③':'i0', // U+2462 circled digit three
  x:'i1', j:'i1', '②':'i1', // U+2461 circled digit two
  w:'0i', i:'0i', '①':'0i', // U+2460 circled digit one

  0:'00',

  // TODO: should we use different digits for nonary to disambiguate
  // nonary strings from balanced ternary? i01 could be nonary (for: 0i 00 01) or not..
  //  (nonary_cli interprets as both, if maybe_bts)
  a:'01', 1:'01',
  b:'1i', 2:'1i',
  c:'10', 3:'10',
  d:'11', 4:'11',
};

var BTS_TO_NONARY = {
  // prefer non-ambiguous nonary digits
  'ii': 'z',
  'i0': 'y',
  'i1': 'x',
  '0i': 'w',
  '00': '0',
  '01': 'a',
  '1i': 'b',
  '10': 'c',
  '11': 'd',
};

function nonary2bts(ns, sep) {
  if (sep === undefined) sep = '';

  var bt = '';
  for (var i = 0; i < ns.length; ++i) {
    var c = ns.charAt(i);

    var bt_c = NONARY_TO_BTS[c];
    if (!bt_c) throw new Error('nonary2bts('+ns+'): invalid nonary digit: '+c);

    bt += bt_c;
    if (i !== ns.length - 1) bt += sep;
  }

  return bt;
}

function bts2nonary(bt) {
  var i = bt.length;
  var ns = '';
  do {
    var c1 = bt.charAt(--i);
    var c2 = bt.charAt(--i);
    if (c2 === '') c2 = '0'; // if incomplete digit pair, charAt out of range

    var digit = BTS_TO_NONARY[c2 + c1];
    if (digit === undefined) throw new Error('bts2nonary('+bt+'): invalid balanced ternary digit pair: '+c2+c1);

    ns = digit + ns;
  } while(i > 0);

  return ns;
}

function n2nonary(n) {
  return bts2nonary(n2bts(n));
}

function nonary2n(ns) {
  return bts2n(nonary2bts(ns));
}

module.exports = {
  nonary2bts: nonary2bts,
  bts2nonary: bts2nonary,
  n2nonary: n2nonary,
  nonary2n: nonary2n,
};


},{"balanced-ternary":17}],19:[function(require,module,exports){
'use strict';

var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;
var N_TO_BT_DIGIT = require('balanced-ternary').N_TO_BT_DIGIT;
var BT_DIGIT_TO_N = require('balanced-ternary').BT_DIGIT_TO_N;

// get trit value at ith index of n, i of 0=least significant
function get_trit(n,i) {
  // convert entire number to balanced ternary string then slice
  // would be nice to extract without converting everything, see extract_digit(), which
  // works for unbalanced ternary, but balanced converts 2 -> 1i, so individual digit extraction
  // is more difficult -- see https://en.wikipedia.org/wiki/Balanced_ternary#Conversion_from_ternary
  var s = n2bts(n);
  return ~~BT_DIGIT_TO_N[s.charAt(s.length - i - 1)];
}

// set ith trit (0=lst) of n to zero
function clear_trit(n,i) {
  var t0 = get_trit(n,i);
  var t_value = Math.pow(3,i) * t0;
  return n - t_value;
}

// set ith trit (0=lst) of n to trit t=-1, 0, or 1
function set_trit(n,i,t) {
  return clear_trit(n,i) + Math.pow(3,i) * t;
}

// extract trits of n from range a to b (0=lst)
function slice_trits(n,a,b) {
  var s = n2bts(n);
  var ss = s.substring(s.length - b, s.length - a);
  return bts2n(ss);
}
module.exports = {
  get_trit: get_trit,
  clear_trit: clear_trit,
  set_trit: set_trit,
  slice_trits: slice_trits
};

},{"balanced-ternary":20}],20:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],21:[function(require,module,exports){
'use strict';

function shl(input, carryIn) {
  return input * 3 + carryIn;
}

function shr(input, width, carryIn) {
  return Math.round(input / 3) + (carryIn * Math.pow(3, width - 1));
}

module.exports = {
  shl: shl,
  shr: shr,
};

},{}],22:[function(require,module,exports){
'use strict';

var vkey = require('vkey');
var fromUnicode = require('./utext').fromUnicode;

// map virtual key to Unicode corresponding to trit-text, with modifiers
var _keymap = {
  // vkey: normal, shifted, control, shift-control
  A: ['a', 'A', '☺', ''],
  B: ['b', 'B', '☻', ''],
  C: ['c', 'C', '♥', ''],
  D: ['d', 'D', '♦', ''],
  E: ['e', 'E', '•', ''],
  F: ['f', 'F', '◘', ''],
  G: ['g', 'G', '○', ''],
  H: ['h', 'H', '◙', ''],
  I: ['i', 'I', '♂', ''],
  J: ['j', 'J', '♀', ''],
  K: ['k', 'K', '☼', ''],
  L: ['l', 'L', '▒', ''],
  M: ['m', 'M', '←', ''],
  N: ['n', 'N', '→', ''],
  O: ['o', 'O', '↑', ''],
  P: ['p', 'P', '↓', ''],
  Q: ['q', 'Q', '', ''],
  R: ['r', 'R', '', ''],
  S: ['s', 'S', '', ''],
  T: ['t', 'T', '', ''],
  U: ['u', 'U', '', ''],
  V: ['v', 'V', '', ''],
  W: ['w', 'W', '', ''],
  X: ['x', 'X', '≈', ''],
  Y: ['y', 'Y', '', ''],
  Z: ['z', 'Z', '', ''],

  '`': ['`', '~', '', ''],
  1: ['1', '!', '', ''],
  2: ['2', '@', '', '\u0000'],
  3: ['3', '#', '', ''],
  4: ['4', '$', '', ''],
  5: ['5', '%', '', ''],
  6: ['6', '^', '', ''],
  7: ['7', '&', '', ''],
  8: ['8', '*', '', ''],
  9: ['9', '(', '', ''],
  0: ['0', ')', '', ''],
  '-': ['-', '_', '‾', ''],
  '=': ['=', '+', '±', '∓'],
  '[': ['[', '{', '', ''],
  ']': [']', '}', '', ''],
  '\\': ['\\', '|', '', ''],
  ';': [';', ':', '', ''],
  '\'': ['\\', '"', '', ''],
  ',': [',', '<', '«', ''],
  '.': ['.', '>', '»', ''],
  '/': ['/', '?', '', ''],

  '<backspace>': ['\u0000', '\u0000', '', ''], // null for now, seems reasonable TODO: shift/control backspace?
  '<escape>': ['⌂', '⌂', '', ''],
  '<enter>': ['\n', '\n', '', ''],
  '<space>': [' ', ' ', ' ', ' '],
};

function fromEvent(ev) {
  var vkeyChar = vkey[ev.keyCode];

  var flags = (ev.shiftKey ? 1 : 0) + (ev.ctrlKey ? 2 : 0); // TODO: metaKey(cmd)? altKey(opt)?

  var varChars = _keymap[vkeyChar];
  if (!varChars) return null;

  if (varChars[flags] === '' && flags === 3) flags = 2; // no shift-control variant, try control
  if (varChars[flags] === '' && flags === 2) flags = 0; // no control variant, try normal

  var c = varChars[flags];

  var tt = fromUnicode(c);
  if (tt == null) return null;

  if (ev.altKey) tt = -tt; // alt/option key inverts

  return tt;
}

module.exports = fromEvent;

},{"./utext":25,"vkey":23}],23:[function(require,module,exports){
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
  , isOSX = /OS X/.test(ua)
  , isOpera = /Opera/.test(ua)
  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera

var i, output = module.exports = {
  0:  isOSX ? '<menu>' : '<UNK>'
, 1:  '<mouse 1>'
, 2:  '<mouse 2>'
, 3:  '<break>'
, 4:  '<mouse 3>'
, 5:  '<mouse 4>'
, 6:  '<mouse 5>'
, 8:  '<backspace>'
, 9:  '<tab>'
, 12: '<clear>'
, 13: '<enter>'
, 16: '<shift>'
, 17: '<control>'
, 18: '<alt>'
, 19: '<pause>'
, 20: '<caps-lock>'
, 21: '<ime-hangul>'
, 23: '<ime-junja>'
, 24: '<ime-final>'
, 25: '<ime-kanji>'
, 27: '<escape>'
, 28: '<ime-convert>'
, 29: '<ime-nonconvert>'
, 30: '<ime-accept>'
, 31: '<ime-mode-change>'
, 27: '<escape>'
, 32: '<space>'
, 33: '<page-up>'
, 34: '<page-down>'
, 35: '<end>'
, 36: '<home>'
, 37: '<left>'
, 38: '<up>'
, 39: '<right>'
, 40: '<down>'
, 41: '<select>'
, 42: '<print>'
, 43: '<execute>'
, 44: '<snapshot>'
, 45: '<insert>'
, 46: '<delete>'
, 47: '<help>'
, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.
, 92: '<meta>'  // meta-right
, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).
, 95: '<sleep>'
, 106: '<num-*>'
, 107: '<num-+>'
, 108: '<num-enter>'
, 109: '<num-->'
, 110: '<num-.>'
, 111: '<num-/>'
, 144: '<num-lock>'
, 145: '<scroll-lock>'
, 160: '<shift-left>'
, 161: '<shift-right>'
, 162: '<control-left>'
, 163: '<control-right>'
, 164: '<alt-left>'
, 165: '<alt-right>'
, 166: '<browser-back>'
, 167: '<browser-forward>'
, 168: '<browser-refresh>'
, 169: '<browser-stop>'
, 170: '<browser-search>'
, 171: '<browser-favorites>'
, 172: '<browser-home>'

  // ff/osx reports '<volume-mute>' for '-'
, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'
, 174: '<volume-down>'
, 175: '<volume-up>'
, 176: '<next-track>'
, 177: '<prev-track>'
, 178: '<stop>'
, 179: '<play-pause>'
, 180: '<launch-mail>'
, 181: '<launch-media-select>'
, 182: '<launch-app 1>'
, 183: '<launch-app 2>'
, 186: ';'
, 187: '='
, 188: ','
, 189: '-'
, 190: '.'
, 191: '/'
, 192: '`'
, 219: '['
, 220: '\\'
, 221: ']'
, 222: "'"
, 223: '<meta>'
, 224: '<meta>'       // firefox reports meta here.
, 226: '<alt-gr>'
, 229: '<ime-process>'
, 231: isOpera ? '`' : '<unicode>'
, 246: '<attention>'
, 247: '<crsel>'
, 248: '<exsel>'
, 249: '<erase-eof>'
, 250: '<play>'
, 251: '<zoom>'
, 252: '<no-name>'
, 253: '<pa-1>'
, 254: '<clear>'
}

for(i = 58; i < 65; ++i) {
  output[i] = String.fromCharCode(i)
}

// 0-9
for(i = 48; i < 58; ++i) {
  output[i] = (i - 48)+''
}

// A-Z
for(i = 65; i < 91; ++i) {
  output[i] = String.fromCharCode(i)
}

// num0-9
for(i = 96; i < 106; ++i) {
  output[i] = '<num-'+(i - 96)+'>'
}

// F1-F24
for(i = 112; i < 136; ++i) {
  output[i] = 'F'+(i-111)
}

},{}],24:[function(require,module,exports){
'use strict';

var _vtext = require('./vtext');
var toUnicode = require('./utext').toUnicode;
var fromUnicode = require('./utext').fromUnicode;
var isInverted = require('./utext').isInverted;
var allUnicode = require('./utext').allUnicode;
var fromEvent = require('./etext');

function toTritmap(n) {
  var inverted = isInverted(n);
  var unicode = toUnicode(n);
  if (unicode === undefined) throw new Error('no character for trit-text codepoint:'+n);
  var vtext = _vtext[unicode];
  if (!vtext) throw new Error('no tritmap for character: '+n);

  var tritmap = '';

  for (var i = 0; i < vtext.length; ++i) {
    // for source code readability, the tritmap is stored encoded TODO: store converted if too slow
    switch(vtext.charAt(i)) {
      case '\n':
        break;
      case '.':
        tritmap += '0';
        break;
      case '*':
        tritmap += inverted ? 'i' : '1';
        break;
      default:
        throw new Error('invalid vtext data for tritmap character '+n+': '+vtext.charAt(i));
      }
  }

  return tritmap;
}

module.exports = {
  toUnicode: toUnicode,
  isInverted: isInverted,
  fromUnicode: fromUnicode,
  fromEvent: fromEvent,
  allUnicode: allUnicode,
  toTritmap9x14: toTritmap,
};

},{"./etext":22,"./utext":25,"./vtext":26}],25:[function(require,module,exports){
'use strict';

/*
5-trit text format, analogous to 7-bit ASCII

+1 to +121 normal text, black on white
-1 to -121 inverted, reverse video white on black
*/

var _chars =  [
// control/digits
/* 00000 = 0 */  '\0', // NUL   null, string terminator, only unbalanced; in serial mode zero-width, matrix mode alternating flashing normal/inverted
/* 00001 = 1 */  '1',
/* 0001i = 2 */  '2',
/* 00010 = 3 */  '3',
/* 00011 = 4 */  '4',
/* 001ii = 5 */  '5',
/* 001i0 = 6 */  '6',
/* 001i1 = 7 */  '7',
/* 0010i = 8 */  '8',
/* 00100 = 9 */  '9',
/* 00101 = 10 */ '0',
/* 0011i = 11 */ '⌂', // escape/reserved code, U+2302 house
/* 00110 = 12 */ '\n', // newline, \n, linefeed
/* 00111 = 13 */ ' ', // space

// left punctuation (01xxx=left, pairs with 10xxx=right, and control(1i)=01, shift-control(11)=10)
/* 01iii = 14 */ '@',
/* 01ii0 = 15 */ '☺', // U+263A smiley
/* 01ii1 = 16 */ '♥', // U+2665 hearts
/* 01i0i = 17 */ '♣', // U+2663 clubs
/* 01i00 = 18 */ '•', // U+2022 bullet
/* 01i01 = 19 */ '○', // U+25CB circle
/* 01i1i = 20 */ '♂', // U+2642 male
/* 01i10 = 21 */ '☼', // U+263C solar
/* 01i11 = 22 */ '←', // U+2190 left arrow
/* 010ii = 23 */ '↑', // U+2191 up arrow
/* 010i0 = 24 */ '«', // U+00AB left-pointing double angle quot
/* 010i1 = 25 */ '±', // U+00B1 plus-minus sign
/* 0100i = 26 */ '(',
/* 01000 = 27 */ '[',
/* 01001 = 28 */ '<',
/* 0101i = 29 */ '{',
/* 01010 = 30 */ '\\',
/* 01011 = 31 */ '.',
/* 011ii = 32 */ ';',
/* 011i0 = 33 */ '\'',
/* 011i1 = 34 */ '!',
/* 0110i = 35 */ '#',
/* 01100 = 36 */ '%',
/* 01101 = 37 */ '-',
/* 0111i = 38 */ '*',
/* 01110 = 39 */ '=',
/* 01111 = 40 */ '^',

// lowercase letters (1cxxxx = letters, where c=case, i=lower, 1=upper)
/* 1iiii = 41 */ '‾', // U+203E overline (standalone)
/* 1iii0 = 42 */ 'a',
/* 1iii1 = 43 */ 'b',
/* 1ii0i = 44 */ 'c',
/* 1ii00 = 45 */ 'd',
/* 1ii01 = 46 */ 'e',
/* 1ii1i = 47 */ 'f',
/* 1ii10 = 48 */ 'g',
/* 1ii11 = 49 */ 'h',
/* 1i0ii = 50 */ 'i',
/* 1i0i0 = 51 */ 'j',
/* 1i0i1 = 52 */ 'k',
/* 1i00i = 53 */ 'l',
/* 1i000 = 54 */ 'm',
/* 1i001 = 55 */ 'n',
/* 1i01i = 56 */ 'o',
/* 1i010 = 57 */ 'p',
/* 1i011 = 58 */ 'q',
/* 1i1ii = 59 */ 'r',
/* 1i1i0 = 60 */ 's',
/* 1i1i1 = 61 */ 't',
/* 1i10i = 62 */ 'u',
/* 1i100 = 63 */ 'v',
/* 1i101 = 64 */ 'w',
/* 1i11i = 65 */ 'x',
/* 1i110 = 66 */ 'y',
/* 1i111 = 67 */ 'z',

// right punctuation
/* 10iii = 68 */ '`',
/* 10ii0 = 69 */ '☻', // U+263B inverted smiley
/* 10ii1 = 70 */ '♦', // U+2666 diamonds
/* 10i0i = 71 */ '♠', // U+2660 spades
/* 10i00 = 72 */ '◘', // U+25D8 inverted bullet
/* 10i01 = 73 */ '◙', // U+25D9 inverted circle
/* 10i1i = 74 */ '♀', // U+2640 female
/* 10i10 = 75 */ '▒', // U+2592 medium shade
/* 10i11 = 76 */ '→', // U+2192 right arrow
/* 100ii = 77 */ '↓', // U+2193 down arrow
/* 100i0 = 78 */ '»', // U+00BB
/* 100i1 = 79 */ '∓', // U+2213 minus-or-plus sign
/* 1000i = 80 */ ')',
/* 10000 = 81 */ ']',
/* 10001 = 82 */ '>',
/* 1001i = 83 */ '}',
/* 10010 = 84 */ '/',
/* 10011 = 85 */ ',',
/* 101ii = 86 */ ':',
/* 101i0 = 87 */ '"',
/* 101i1 = 88 */ '?',
/* 1010i = 89 */ '$',
/* 10100 = 90 */ '&',
/* 10101 = 91 */ '+',
/* 1011i = 92 */ '|',
/* 10110 = 93 */ '≈', // U+2248 approximately equal
/* 10111 = 94 */ '~',

// uppercase letters - toggle 2nd mst i=lowercase,1=uppercase (includes _ and ‾, allow in program identifiers)
/* 11iii = 95 */ '_', // underline
/* 11ii0 = 96 */ 'A',
/* 11ii1 = 97 */ 'B',
/* 11i0i = 98 */ 'C',
/* 11i00 = 99 */ 'D',
/* 11i01 = 100 */ 'E',
/* 11i1i = 101 */ 'F',
/* 11i10 = 102 */ 'G',
/* 11i11 = 103 */ 'H',
/* 110ii = 104 */ 'I',
/* 110i0 = 105 */ 'J',
/* 110i1 = 106 */ 'K',
/* 1100i = 107 */ 'L',
/* 11000 = 108 */ 'M',
/* 11001 = 109 */ 'N',
/* 1101i = 110 */ 'O',
/* 11010 = 111 */ 'P',
/* 11011 = 112 */ 'Q',
/* 111ii = 113 */ 'R',
/* 111i0 = 114 */ 'S',
/* 111i1 = 115 */ 'T',
/* 1110i = 116 */ 'U',
/* 11100 = 117 */ 'V',
/* 11101 = 118 */ 'W',
/* 1111i = 119 */ 'X',
/* 11110 = 120 */ 'Y',
/* 11111 = 121 */ 'Z',
];

function toUnicode(n) {
  return _chars[Math.abs(n)];
}

function isInverted(n) {
  return n < 0;
}

function fromUnicode(c, inverted) {
  var n = _chars.indexOf(c);
  if (n === -1) return null; // TODO: extended escape for full Unicode support?
  if (inverted) n = -n;

  return n;
}

module.exports = {
  toUnicode: toUnicode,
  isInverted: isInverted,
  fromUnicode: fromUnicode,
  allUnicode: _chars,
};

},{}],26:[function(require,module,exports){
module.exports={
'\u0000':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'1':
'.........\n'+
'.........\n'+
'...**....\n'+
'..***....\n'+
'.****....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.******..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'2':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'.....**..\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'.**......\n'+
'**...**..\n'+
'*******..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'3':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'.....**..\n'+
'.....**..\n'+
'..****...\n'+
'.....**..\n'+
'.....**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'4':
'.........\n'+
'.........\n'+
'....**...\n'+
'...***...\n'+
'..****...\n'+
'.**.**...\n'+
'**..**...\n'+
'*******..\n'+
'....**...\n'+
'....**...\n'+
'...****..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'5':
'.........\n'+
'.........\n'+
'*******..\n'+
'**.......\n'+
'**.......\n'+
'**.......\n'+
'******...\n'+
'.....**..\n'+
'.....**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'6':
'.........\n'+
'.........\n'+
'..***....\n'+
'.**......\n'+
'**.......\n'+
'**.......\n'+
'******...\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'7':
'.........\n'+
'.........\n'+
'*******..\n'+
'**...**..\n'+
'.....**..\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'8':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'9':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.******..\n'+
'.....**..\n'+
'.....**..\n'+
'....**...\n'+
'.****....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'0':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**..***..\n'+
'**.****..\n'+
'****.**..\n'+
'***..**..\n'+
'**...**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'⌂':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'...*.....\n'+
'..***....\n'+
'.**.**...\n'+
'**...**..\n'+
'**...**..\n'+
'*******..\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'\n':
'.........\n'+
'.........\n'+
'..******.\n'+
'..**..**.\n'+
'..******.\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'.***.....\n'+
'****.....\n'+
'***......\n'+
'.........\n'+
'.........\n'+
'.........\n',

' ':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'@':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'**.****..\n'+
'**.****..\n'+
'**.****..\n'+
'**.***...\n'+
'**.......\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'☺':
'.........\n'+
'.........\n'+
'.******..\n'+
'*......*.\n'+
'*.*..*.*.\n'+
'*......*.\n'+
'*......*.\n'+
'*.****.*.\n'+
'*..**..*.\n'+
'*......*.\n'+
'.******..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'♥':
'.........\n'+
'.........\n'+
'.........\n'+
'.**.**...\n'+
'*******..\n'+
'*******..\n'+
'*******..\n'+
'*******..\n'+
'.*****...\n'+
'..***....\n'+
'...*.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'♣':
'.........\n'+
'.........\n'+
'...**....\n'+
'..****...\n'+
'..****...\n'+
'***..***.\n'+
'***..***.\n'+
'***..***.\n'+
'...**....\n'+
'...**....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'•':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'..****...\n'+
'..****...\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'○':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'..****...\n'+
'.**..**..\n'+
'.*....*..\n'+
'.*....*..\n'+
'.**..**..\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'♂':
'.........\n'+
'.........\n'+
'...****..\n'+
'....***..\n'+
'...**.*..\n'+
'..**..*..\n'+
'.****....\n'+
'**..**...\n'+
'**..**...\n'+
'**..**...\n'+
'.****....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'☼':
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'**.**.**.\n'+
'..****...\n'+
'***..***.\n'+
'..****...\n'+
'**.**.**.\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'←':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'..**.....\n'+
'.**......\n'+
'*******..\n'+
'.**......\n'+
'..**.....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'↑':
'.........\n'+
'.........\n'+
'...**....\n'+
'..****...\n'+
'.******..\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'«':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'..**.**..\n'+
'.**.**...\n'+
'**.**....\n'+
'.**.**...\n'+
'..**.**..\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'±':
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'********.\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'********.\n'+
'.........\n'+
'.........\n'+
'.........\n',

'(':
'.........\n'+
'.........\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'...**....\n'+
'....**...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'[':
'.........\n'+
'.........\n'+
'..****...\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'<':
'.........\n'+
'.........\n'+
'.....**..\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'.**......\n'+
'..**.....\n'+
'...**....\n'+
'....**...\n'+
'.....**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'{':
'.........\n'+
'.........\n'+
'....***..\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.***.....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'....***..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'\\':
'.........\n'+
'.........\n'+
'*........\n'+
'**.......\n'+
'***......\n'+
'.***.....\n'+
'..***....\n'+
'...***...\n'+
'....***..\n'+
'.....**..\n'+
'......*..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'.':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

';':
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'..**.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'\'':
'.........\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'.**......\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'!':
'.........\n'+
'.........\n'+
'...**....\n'+
'..****...\n'+
'..****...\n'+
'..****...\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'#':
'.........\n'+
'.........\n'+
'.**.**...\n'+
'.**.**...\n'+
'*******..\n'+
'.**.**...\n'+
'.**.**...\n'+
'.**.**...\n'+
'*******..\n'+
'.**.**...\n'+
'.**.**...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'%':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**....*..\n'+
'**...**..\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'.**..**..\n'+
'**...**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'-':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'********.\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'*':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.**..**..\n'+
'..****...\n'+
'********.\n'+
'..****...\n'+
'.**..**..\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'=':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.******..\n'+
'.........\n'+
'.........\n'+
'.******..\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'^':
'...*.....\n'+
'..***....\n'+
'.**.**...\n'+
'**...**..\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'‾':
'.........\n'+
'********.\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'a':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.****....\n'+
'....**...\n'+
'.*****...\n'+
'**..**...\n'+
'**..**...\n'+
'.***.**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'b':
'.........\n'+
'.........\n'+
'***......\n'+
'.**......\n'+
'.**......\n'+
'.****....\n'+
'.**.**...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'c':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**.......\n'+
'**.......\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'd':
'.........\n'+
'.........\n'+
'...***...\n'+
'....**...\n'+
'....**...\n'+
'..****...\n'+
'.**.**...\n'+
'**..**...\n'+
'**..**...\n'+
'**..**...\n'+
'.***.**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'e':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'*******..\n'+
'**.......\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'f':
'.........\n'+
'.........\n'+
'..***....\n'+
'.**.**...\n'+
'.**..*...\n'+
'.**......\n'+
'****.....\n'+
'.**......\n'+
'.**......\n'+
'.**......\n'+
'****.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'g':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.***.**..\n'+
'**..**...\n'+
'**..**...\n'+
'**..**...\n'+
'.*****...\n'+
'....**...\n'+
'**..**...\n'+
'.****....\n'+
'.........\n',

'h':
'.........\n'+
'.........\n'+
'***......\n'+
'.**......\n'+
'.**......\n'+
'.**.**...\n'+
'.***.**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'***..**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'i':
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'..***....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'j':
'.........\n'+
'.........\n'+
'.....**..\n'+
'.....**..\n'+
'.........\n'+
'....***..\n'+
'.....**..\n'+
'.....**..\n'+
'.....**..\n'+
'.....**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'..****...\n'+
'.........\n',

'k':
'.........\n'+
'.........\n'+
'***......\n'+
'.**......\n'+
'.**......\n'+
'.**..**..\n'+
'.**.**...\n'+
'.****....\n'+
'.**.**...\n'+
'.**..**..\n'+
'***..**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'l':
'.........\n'+
'.........\n'+
'..***....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'm':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'***..**..\n'+
'********.\n'+
'**.**.**.\n'+
'**.**.**.\n'+
'**.**.**.\n'+
'**.**.**.\n'+
'.........\n'+
'.........\n'+
'.........\n',

'n':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**.***...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'o':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'p':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**.***...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.*****...\n'+
'.**......\n'+
'.**......\n'+
'****.....\n'+
'.........\n',

'q':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.***.**..\n'+
'**..**...\n'+
'**..**...\n'+
'**..**...\n'+
'.*****...\n'+
'....**...\n'+
'....**...\n'+
'...****..\n'+
'.........\n',

'r':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**.***...\n'+
'.***.**..\n'+
'.**..**..\n'+
'.**......\n'+
'.**......\n'+
'****.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

's':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'.***.....\n'+
'...***...\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

't':
'.........\n'+
'.........\n'+
'...*.....\n'+
'..**.....\n'+
'..**.....\n'+
'******...\n'+
'..**.....\n'+
'..**.....\n'+
'..**.....\n'+
'..**.**..\n'+
'...***...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'u':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**..**...\n'+
'**..**...\n'+
'**..**...\n'+
'**..**...\n'+
'**..**...\n'+
'.***.**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'v':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'.**..**..\n'+
'..****...\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'w':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**....**.\n'+
'**....**.\n'+
'**.**.**.\n'+
'**.**.**.\n'+
'********.\n'+
'.**..**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'x':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**...**..\n'+
'.**.**...\n'+
'..***....\n'+
'..***....\n'+
'.**.**...\n'+
'**...**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'y':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.******..\n'+
'.....**..\n'+
'....**...\n'+
'*****....\n'+
'.........\n',

'z':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'*******..\n'+
'**..**...\n'+
'...**....\n'+
'..**.....\n'+
'.**..**..\n'+
'*******..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'`':
'..**.....\n'+
'..**.....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'☻':
'.........\n'+
'.........\n'+
'.******..\n'+
'********.\n'+
'**.**.**.\n'+
'********.\n'+
'********.\n'+
'**....**.\n'+
'***..***.\n'+
'********.\n'+
'.******..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'♦':
'.........\n'+
'.........\n'+
'.........\n'+
'...*.....\n'+
'..***....\n'+
'.*****...\n'+
'*******..\n'+
'.*****...\n'+
'..***....\n'+
'...*.....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'♠':
'.........\n'+
'.........\n'+
'...**....\n'+
'..****...\n'+
'.******..\n'+
'********.\n'+
'********.\n'+
'.******..\n'+
'...**....\n'+
'...**....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'◘':
'********.\n'+
'********.\n'+
'********.\n'+
'********.\n'+
'********.\n'+
'***..***.\n'+
'**....**.\n'+
'**....**.\n'+
'***..***.\n'+
'********.\n'+
'********.\n'+
'********.\n'+
'********.\n'+
'********.\n',

'◙':
'********.\n'+
'********.\n'+
'********.\n'+
'********.\n'+
'**....**.\n'+
'*..**..*.\n'+
'*.****.*.\n'+
'*.****.*.\n'+
'*..**..*.\n'+
'**....**.\n'+
'********.\n'+
'********.\n'+
'********.\n'+
'********.\n',

'♀':
'.........\n'+
'.........\n'+
'..****...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'..****...\n'+
'...**....\n'+
'.******..\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'▒':
'.*.*.*.*.\n'+
'*.*.*.*..\n'+
'.*.*.*.*.\n'+
'*.*.*.*..\n'+
'.*.*.*.*.\n'+
'*.*.*.*..\n'+
'.*.*.*.*.\n'+
'*.*.*.*..\n'+
'.*.*.*.*.\n'+
'*.*.*.*..\n'+
'.*.*.*.*.\n'+
'*.*.*.*..\n'+
'.*.*.*.*.\n'+
'*.*.*.*..\n',

'→':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'....**...\n'+
'*******..\n'+
'....**...\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'↓':
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.******..\n'+
'..****...\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'»':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'**.**....\n'+
'.**.**...\n'+
'..**.**..\n'+
'.**.**...\n'+
'**.**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'∓':
'.........\n'+
'.........\n'+
'********.\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'********.\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

')':
'.........\n'+
'.........\n'+
'..**.....\n'+
'...**....\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

']':
'.........\n'+
'.........\n'+
'..****...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'>':
'.........\n'+
'.........\n'+
'.**......\n'+
'..**.....\n'+
'...**....\n'+
'....**...\n'+
'.....**..\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'.**......\n'+
'.........\n'+
'.........\n'+
'.........\n',

'}':
'.........\n'+
'.........\n'+
'.***.....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'....***..\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.***.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'/':
'.........\n'+
'.........\n'+
'......*..\n'+
'.....**..\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'.**......\n'+
'**.......\n'+
'*........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

',':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'..**.....\n'+
'.........\n'+
'.........\n',

':':
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'"':
'.........\n'+
'.**...**.\n'+
'.**...**.\n'+
'.**...**.\n'+
'..*...*..\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'?':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'....**...\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'$':
'...**....\n'+
'...**....\n'+
'.*****...\n'+
'**...**..\n'+
'**....*..\n'+
'**.......\n'+
'.*****...\n'+
'.....**..\n'+
'*....**..\n'+
'**...**..\n'+
'.*****...\n'+
'...**....\n'+
'...**....\n'+
'.........\n',

'&':
'.........\n'+
'.........\n'+
'..***....\n'+
'.**.**...\n'+
'.**.**...\n'+
'..***....\n'+
'.***.**..\n'+
'**.***...\n'+
'**..**...\n'+
'**..**...\n'+
'.***.**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'+':
'.........\n'+
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'********.\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'|':
'.........\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'≈':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.***.**..\n'+
'**.***...\n'+
'.........\n'+
'.***.**..\n'+
'**.***...\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'~':
'.........\n'+
'.........\n'+
'.***.**..\n'+
'**.***...\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n',

'_':
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'.........\n'+
'********.\n'+
'.........\n',

'A':
'.........\n'+
'.........\n'+
'...*.....\n'+
'..***....\n'+
'.**.**...\n'+
'**...**..\n'+
'**...**..\n'+
'*******..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'B':
'.........\n'+
'.........\n'+
'******...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.*****...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'******...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'C':
'.........\n'+
'.........\n'+
'..****...\n'+
'.**..**..\n'+
'**....*..\n'+
'**.......\n'+
'**.......\n'+
'**.......\n'+
'**....*..\n'+
'.**..**..\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'D':
'.........\n'+
'.........\n'+
'*****....\n'+
'.**.**...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**.**...\n'+
'*****....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'E':
'.........\n'+
'.........\n'+
'*******..\n'+
'.**..**..\n'+
'.**...*..\n'+
'.**.*....\n'+
'.****....\n'+
'.**.*....\n'+
'.**...*..\n'+
'.**..**..\n'+
'*******..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'F':
'.........\n'+
'.........\n'+
'*******..\n'+
'.**..**..\n'+
'.**...*..\n'+
'.**.*....\n'+
'.****....\n'+
'.**.*....\n'+
'.**......\n'+
'.**......\n'+
'****.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'G':
'.........\n'+
'.........\n'+
'..****...\n'+
'.**..**..\n'+
'**....*..\n'+
'**.......\n'+
'**.......\n'+
'**.****..\n'+
'**...**..\n'+
'.**..**..\n'+
'..***.*..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'H':
'.........\n'+
'.........\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'*******..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'I':
'.........\n'+
'.........\n'+
'..****...\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'J':
'.........\n'+
'.........\n'+
'...****..\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'....**...\n'+
'**..**...\n'+
'**..**...\n'+
'.****....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'K':
'.........\n'+
'.........\n'+
'***..**..\n'+
'.**..**..\n'+
'.**.**...\n'+
'.**.**...\n'+
'.****....\n'+
'.**.**...\n'+
'.**.**...\n'+
'.**..**..\n'+
'***..**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'L':
'.........\n'+
'.........\n'+
'****.....\n'+
'.**......\n'+
'.**......\n'+
'.**......\n'+
'.**......\n'+
'.**......\n'+
'.**...*..\n'+
'.**..**..\n'+
'*******..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'M':
'.........\n'+
'.........\n'+
'**....**.\n'+
'***..***.\n'+
'********.\n'+
'**.**.**.\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'.........\n'+
'.........\n'+
'.........\n',

'N':
'.........\n'+
'.........\n'+
'**...**..\n'+
'***..**..\n'+
'****.**..\n'+
'*******..\n'+
'**.****..\n'+
'**..***..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'O':
'.........\n'+
'.........\n'+
'..***....\n'+
'.**.**...\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.**.**...\n'+
'..***....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'P':
'.........\n'+
'.........\n'+
'******...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.*****...\n'+
'.**......\n'+
'.**......\n'+
'.**......\n'+
'****.....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'Q':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**.*.**..\n'+
'**.****..\n'+
'.*****...\n'+
'....**...\n'+
'....***..\n'+
'.........\n'+
'.........\n',

'R':
'.........\n'+
'.........\n'+
'******...\n'+
'.**..**..\n'+
'.**..**..\n'+
'.**..**..\n'+
'.*****...\n'+
'.**.**...\n'+
'.**..**..\n'+
'.**..**..\n'+
'***..**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'S':
'.........\n'+
'.........\n'+
'.*****...\n'+
'**...**..\n'+
'**...**..\n'+
'.**......\n'+
'..***....\n'+
'....**...\n'+
'**...**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'T':
'.........\n'+
'.........\n'+
'********.\n'+
'**.**.**.\n'+
'*..**..*.\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'U':
'.........\n'+
'.........\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'**...**..\n'+
'.*****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'V':
'.........\n'+
'.........\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'.**..**..\n'+
'..****...\n'+
'...**....\n'+
'.........\n'+
'.........\n'+
'.........\n',

'W':
'.........\n'+
'.........\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'**.**.**.\n'+
'**.**.**.\n'+
'********.\n'+
'.**..**..\n'+
'.**..**..\n'+
'.........\n'+
'.........\n'+
'.........\n',

'X':
'.........\n'+
'.........\n'+
'**....**.\n'+
'**....**.\n'+
'.**..**..\n'+
'..****...\n'+
'...**....\n'+
'..****...\n'+
'.**..**..\n'+
'**....**.\n'+
'**....**.\n'+
'.........\n'+
'.........\n'+
'.........\n',

'Y':
'.........\n'+
'.........\n'+
'**....**.\n'+
'**....**.\n'+
'**....**.\n'+
'.**..**..\n'+
'..****...\n'+
'...**....\n'+
'...**....\n'+
'...**....\n'+
'..****...\n'+
'.........\n'+
'.........\n'+
'.........\n',

'Z':
'.........\n'+
'.........\n'+
'********.\n'+
'**....**.\n'+
'*....**..\n'+
'....**...\n'+
'...**....\n'+
'..**.....\n'+
'.**....*.\n'+
'**....**.\n'+
'********.\n'+
'.........\n'+
'.........\n'+
'.........\n',

};

},{}],27:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],28:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
module.exports = function(string, size, options) {
  var escapecolor, i, j, pad, prefix, ref, ref1;
  if (options == null) {
    options = {};
  }
  prefix = typeof string === 'number';
  if (prefix) {
    ref = [string, size], size = ref[0], string = ref[1];
  }
  if (typeof options === 'string') {
    options = {
      char: options
    };
  }
  if (options.char == null) {
    options.char = ' ';
  }
  string = string.toString();
  pad = '';
  if (options.colors) {
    escapecolor = /\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g;
    size += string.length - string.replace(escapecolor, '').length;
  }
  size = size - string.length;
  for (i = j = 0, ref1 = size; 0 <= ref1 ? j < ref1 : j > ref1; i = 0 <= ref1 ? ++j : --j) {
    pad += options.char;
  }
  if (prefix) {
    return pad + string;
  } else {
    return string + pad;
  }
};

},{}],29:[function(require,module,exports){
'use strict';

var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;
var BT_DIGIT_TO_N = require('balanced-ternary').BT_DIGIT_TO_N;
var pad = require('pad');

// Unary operations
function unary_tritwise_op(tt, input, input_width) {
  if (tt < -13 || tt > 13) throw new Error('unary_tritwise_op('+tt+'): out of range iii-111');
  var bt_tt = pad(3, n2bts(tt), '0');

  var input_bt = pad(input_width, n2bts(input), '0');

  var output_bt = '';

  for (var i = 0; i < input_bt.length; ++i) {
    var in_trit = BT_DIGIT_TO_N[input_bt.charAt(i)];
    var out = bt_tt.charAt(in_trit + 1);

    output_bt += out;
  }

  var output = bts2n(output_bt);

  return output;
}

var UNARY_TRUTH_TABLES = {
            // i01
  NTI: 5,   // 1ii negative ternary inverter
  STI: 8,   // 10i simple ternary inverter
  PTI: 11,  // 11i positive ternary inverter
  FD: 1,    // 001 forward diode
  RD: -9,   // i00 reverse diode
};

function NTI(x) { return unary_tritwise_op(UNARY_TRUTH_TABLES.NTI, x, get_tryte_size()); }
function STI(x) { return unary_tritwise_op(UNARY_TRUTH_TABLES.STI, x, get_tryte_size()); }
function PTI(x) { return unary_tritwise_op(UNARY_TRUTH_TABLES.PTI, x, get_tryte_size()); }
function FD(x)  { return unary_tritwise_op(UNARY_TRUTH_TABLES.FD,  x, get_tryte_size()); }
function RD(x)  { return unary_tritwise_op(UNARY_TRUTH_TABLES.RD,  x, get_tryte_size()); }


// Dyadic preference functions
function dyadic_pref_op(pref, input1, input2, input_width) {
  if (pref < -13 || pref > 13) throw new Error('dyadic_pref_op('+pref+'): out of range iii-111');
  var bt_pref = pad(3, n2bts(pref), '0');
  if (bt_pref.indexOf('i') === -1 || bt_pref.indexOf('0') === -1 || bt_pref.indexOf('1') === -1)
    throw new Error('dyadic_pref_op('+pref+'): preference must contain all digits i,0,1');

  var input1_bt = pad(input_width, n2bts(input1), '0');
  var input2_bt = pad(input_width, n2bts(input2), '0');

  var output_bt = '';

  for (var i = 0; i < input_width; ++i) {
    var a = input1_bt.charAt(i);
    var b = input2_bt.charAt(i);

    if (bt_pref.indexOf(a) < bt_pref.indexOf(b)) {
      // a has a higher preference than b (comes earlier in preference list), choose a
      output_bt += a;
    } else {
      // otherwise choose b (preference functions always choose one of the inputs)
      output_bt += b;
    }
  }

  var output = bts2n(output_bt);

  return output;
}

var DYADIC_PREFS = {
  TOR: 8,   // pref-10i, maximum
  TAND: -8, // pref-i01, minimum
  BUT: -2,  // pref-0i1
};

function TOR(a, b)  { return dyadic_pref_op(DYADIC_PREFS.TOR,  a, b, get_tryte_size()); }
function TAND(a, b) { return dyadic_pref_op(DYADIC_PREFS.TAND, a, b, get_tryte_size()); }
function BUT(a, b)  { return dyadic_pref_op(DYADIC_PREFS.BUT,  a, b, get_tryte_size()); }

module.exports = {
  tryte_size: 5,

  NTI: NTI,
  STI: STI,
  PTI: PTI,
  FD: FD,
  RD: RD,

  TOR: TOR,
  TAND: TAND,
  BUT: BUT,
};

function get_tryte_size() {
  return module.exports.tryte_size;
};


},{"balanced-ternary":27,"pad":28}],30:[function(require,module,exports){
'use strict';

var _JMP, _STZ, _LDA, _STA, _LDX, _STX, _CMP, _XOP_TO_ALU_OP;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OP = {
  // shifts
  SHL: -13, // iii shift left (like ASL, arithmetic shift left) = multiply by three + D
  uuA: -12, // ii0
  uuB: -11, // ii1
  SHR: -10, // i0i shift right = division by by power of three

  // indexing
  STX: -9, // i00 store X
  LDX: -8, // i01 load X

  // ternary dyadic functions
  BUT: -7, // i1i pref-0i1, BUT                                f i0i,000,i01
  ORA: -6, // i10 pref-10i, TOR,  maximum, ↑ U+2191, ∨ U+2228, f i01,001,111
  AND: -5, // i11 pref-i01, TAND, minimum, ↓ U+2193, ∧ U+2227, f iii,i00,i01
  EOR: -4, // 0ii exclusive max ⇑ U+2d1                        f i01,0i1,11i

  STY: -3, // 0i0 store Y
  LDY: -2, // 0i1 load Y

  // increment/no-op/decrement
  DEC: -1, // 00i decrement
  DNOP: 0, // 000 debug no operation
  INC: 1, // 001 increment

  CPX: 2, // 01i compare X

  // arithmetic
  ADC: 3, // 010 add with carry
  STA: 4, // 011 store accumulator
  LDA: 5, // 1ii load accumulator
  CMP: 6, // 1i0 compare A
  SBC: 7, // 1i1 subtract borrow carry

  // unary ternary functions (a.3.5) https://www.scribd.com/doc/78370674/Ternary-Computing-Testbed-3-Trit-Computer-Architecture
  NTI: 8, // 10i negative ternary inverter (tritwise i01 -> 1ii)
  STI: 9, // 100 simple ternary inverter   (tritwise i01 -> 10i) TODO: rename to NOT or NEG? confusing overloaded 'ST'..store
  PTI: 10, // 101 positive ternary inverter (tritwise i01 -> 11i)
  FD: 11, // 11i forward diode             (tritwise i01 -> 001)
  RD: 12, // 110 reverse diode             (tritwise i01 -> i00)

  CPY: 13 // 111 compare Y
};

var ADDR_MODE = {
  ABSOLUTE: -1,
  ACCUMULATOR: 0,
  IMMEDIATE: 1,

  // internal modes only used by assembler, not instruction coding format
  BRANCH_RELATIVE: 2,
  INDIRECT: 3,
  INDEXED_X_INDIRECT: 4,
  INDIRECT_INDEXED_Y: 5,
  ABSOLUTE_X: 6,
  ABSOLUTE_Y: 7
};

var FLAGS = {
  // flag (aa) 9 trits
  L: -4, // -4 ii L least significant trit of last value (if 0, divisible by 3)
  I: -3, // -3 i0 I interrupts masked
  C: -2, // -2 i1 C carry trit
  D: -1, // -1 0i D data trit, shift in
  S: 0, //  0 00 S sign, set to first nonzero trit of last value (i=negative, 1=positive, or 0 if 0)
  V: 1, // +1 01 V overflow/underflow
  U: 2, // +2 1i U unused for now
  H: 3, // +3 10 H halt code
  R: 4 };

var BRANCH_INSTRUCTION_SHORTHANDS = {
  // generic branch instruction format is BR<flag><operation><compare-trit>
  //  flag: code from FLAGS
  //  operation: L=less than, E=equal, N=not equal
  //  compare-trit: N=-1, Z=0, P=1
  BEQ: 'BRSEZ', // branch if equal = branch if sign equal to zero
  BNE: 'BRSNZ', // branch if not equal = branch if sign not equal to zero
  BMI: 'BRSEN', // branch if minus = branch if sign equal to negative
  BPL: 'BRSEP', // branch if positive = branch if sign equal to positive
  BVC: 'BRVEZ', // branch if overflow clear = branch if overflow equal to zero
  BVS: 'BRVNZ', // branch if overflow set = branch if overflow nonzero
  BRA: 'BRRNZ', // branch always = branch if running is not zero
  BCC: 'BRCEZ', // branch if carry clear = branch if carry equal zero
  BCS: 'BRCNZ' };

// xop family of opcodes, note this also includes embedded addressing mode (_addrmode),
// but in the assembler the opcode instructions are in OP_ADDR_MODE_TO_XOP, not here (but the CPU uses these)
var XOP = {
  NOP: 0, // 0000 no operation

  TAX: 1, // 0001 transfer accumulator to index
  TAY: 2, // 001i transfer accumulator to yindex
  TXA: 3, // 0010 transfer index to accumulator
  TYA: 4, // 0011 transfer yindex to accumulator

  INX: 5, // 01ii increment index
  INY: 6, // 01i0 increment yindex
  DEX: 7, // 01i1 decrement index
  DEY: 8, // 010i decrement yindex

  CLC: 9, // 0100 clear carry flag
  CLI: 10, // 0101 clear interrupt-disable flag
  CLV: 11, // 011i clear overflow flag
  SECP: 12, // 0110 set carry flag positive
  SECN: 13, // 0111 set carry flag negative
  SEIP: 14, // 1iii set interrupt flag positive
  SEIN: 15, // 1ii0 set interrupt flag negative

  INTN: 16, // 1ii1 interrupt negative
  INTZ: 17, // 1i0i interrupt zero
  INTP: 18, // 1i00 interrupt positive

  STZ_ABX: 19, // 1i01 store zero absolute,X indexed

  PHX: 20, // 1i1i push index
  PHY: 21, // 1i10 push yindex

  CLD: 22, // 1i11 clear data flag
  SEDP: 23, // 10ii set data flag positive
  SEDN: 24, // 10i0 set data flag negative

  PHA: 25, // 10i1 push accumulator to stack
  PHP: 26, // 100i push processor flags to stack
  PLA: 27, // 1000 pull accumulator from stack
  PLP: 28, // 1001 pull processor flags from stack
  RTI: 29, // 101i return from interrupt
  RTS: 30, // 1010 return from subroutine
  TSXY: 31, // 1011 transfer stack pointer to index and yindex
  TXYS: 32, // 11ii transfer index and yindex to stack pointer
  JSR_ABS: 33, // 11i0 jump to subroutine
  JMP_ABS: 34, // 11i1 jump absolute

  PLX: 35, // 110i pull index
  PLY: 36, // 1100 pull yindex

  STZ_ABY: 37, // 1101 store zero absolute,Y indexed
  STZ_IIY: 38, // 111i store zero (indirect),Y indexed
  STZ_ABS: 39, // 1110 store zero, absolute

  JMP_INDIR: 40, // 1111 jump indirect

  HALTN: -40, // iiii halt negative
  HALTZ: -39, // iii0 halt zero
  HALTP: -38, // iii1 halt positive

  LDA_IIY: -37, // ii0i load accumulator from (indirect),Y indexed
  LDA_ABX: -36, // ii00 load accumulator from absolute,X
  LDA_ABY: -35, // ii01 load accumulator from absolute,Y
  STA_IIY: -34, // ii1i store accumulator to (indirect),Y indexed
  STA_ABX: -33, // ii10 store accumulator to absolute,X
  STA_ABY: -32, // ii11 store accumulator to absolute,Y

  LDX_ABY: -31, // i0ii load index from absolute,Y
  LDY_ABX: -30, // i0i0 load yindex from absolute,X
  STX_ABY: -29, // i0i1 store index to absolute,Y
  STY_ABX: -28, // i00i store yindex to absolute,X

  CMP_IIY: -27, // i000 compare accumulator with (indirect),Y indexed
  CMP_ABX: -26, // i001 compare accumulator with absolute,X
  CMP_ABY: -25, // i01i compare accumulator with absolute,Y

  LDX_IIY: -24, // i010 load index from (indirect),Y indexed
  STX_IIY: -23 };

// raw xop key to addressing mode, for cpu instruction decoder
// note: not all listed here directly supported by assembler; see OP_ADDR_MODE_TO_XOP instead
var XOP_TO_ADDR_MODE = {
  JMP_ABS: ADDR_MODE.ABSOLUTE,
  JMP_INDIR: ADDR_MODE.INDIRECT,
  JSR_ABS: ADDR_MODE.ABSOLUTE,
  STZ_ABX: ADDR_MODE.ABSOLUTE_X,
  STZ_ABY: ADDR_MODE.ABSOLUTE_Y,
  STZ_IIY: ADDR_MODE.INDIRECT_INDEXED_Y,
  STZ_ABS: ADDR_MODE.ABSOLUTE,
  LDA_IIY: ADDR_MODE.INDIRECT_INDEXED_Y,
  LDA_ABX: ADDR_MODE.ABSOLUTE_X,
  LDA_ABY: ADDR_MODE.ABSOLUTE_Y,
  STA_IIY: ADDR_MODE.INDIRECT_INDEXED_Y,
  STA_ABX: ADDR_MODE.ABSOLUTE_X,
  STA_ABY: ADDR_MODE.ABSOLUTE_Y,
  LDX_ABY: ADDR_MODE.ABSOLUTE_Y,
  LDY_ABX: ADDR_MODE.ABSOLUTE_X,
  STX_ABY: ADDR_MODE.ABSOLUTE_Y,
  STY_ABX: ADDR_MODE.ABSOLUTE_X,
  CMP_IIY: ADDR_MODE.INDIRECT_INDEXED_Y,
  CMP_ABX: ADDR_MODE.ABSOLUTE_X,
  CMP_ABY: ADDR_MODE.ABSOLUTE_Y,
  LDX_IIY: ADDR_MODE.INDIRECT_INDEXED_Y,
  STX_IIY: ADDR_MODE.INDIRECT_INDEXED_Y
};

// most XOPs do not have operands, but some do (vs alu OP, which always does), irregular, listed here
// assembler opcode, addressing mode -> xop
// must be listed here if xop is supported by assembler and has non-implied addressing mode
var OP_ADDR_MODE_TO_XOP = {
  JMP: (_JMP = {}, _defineProperty(_JMP, ADDR_MODE.ABSOLUTE, XOP.JMP_ABS), _defineProperty(_JMP, ADDR_MODE.INDIRECT, XOP.JMP_INDIR), _JMP),
  JSR: _defineProperty({}, ADDR_MODE.ABSOLUTE, XOP.JSR_ABS),
  STZ: (_STZ = {}, _defineProperty(_STZ, ADDR_MODE.ABSOLUTE_X, XOP.STZ_ABX), _defineProperty(_STZ, ADDR_MODE.ABSOLUTE_Y, XOP.STZ_ABY), _defineProperty(_STZ, ADDR_MODE.INDIRECT_INDEXED_Y, XOP.STZ_IIY), _defineProperty(_STZ, ADDR_MODE.ABSOLUTE, XOP.STZ_ABS), _STZ),

  LDA: (_LDA = {}, _defineProperty(_LDA, ADDR_MODE.INDIRECT_INDEXED_Y, XOP.LDA_IIY), _defineProperty(_LDA, ADDR_MODE.ABSOLUTE_X, XOP.LDA_ABX), _defineProperty(_LDA, ADDR_MODE.ABSOLUTE_Y, XOP.LDA_ABY), _LDA),
  STA: (_STA = {}, _defineProperty(_STA, ADDR_MODE.INDIRECT_INDEXED_Y, XOP.STA_IIY), _defineProperty(_STA, ADDR_MODE.ABSOLUTE_X, XOP.STA_ABX), _defineProperty(_STA, ADDR_MODE.ABSOLUTE_Y, XOP.STA_ABY), _STA),
  LDX: (_LDX = {}, _defineProperty(_LDX, ADDR_MODE.ABSOLUTE_Y, XOP.LDX_ABY), _defineProperty(_LDX, ADDR_MODE.INDIRECT_INDEXED_Y, XOP.LDX_IIY), _LDX),
  LDY: _defineProperty({}, ADDR_MODE.ABSOLUTE_X, XOP.LDY_ABX),
  STX: (_STX = {}, _defineProperty(_STX, ADDR_MODE.ABSOLUTE_Y, XOP.STX_ABY), _defineProperty(_STX, ADDR_MODE.INDIRECT_INDEXED_Y, XOP.STX_IIY), _STX),
  STY: _defineProperty({}, ADDR_MODE.ABSOLUTE_X, XOP.STY_ABX),
  CMP: (_CMP = {}, _defineProperty(_CMP, ADDR_MODE.INDIRECT_INDEXED_Y, XOP.CMP_IIY), _defineProperty(_CMP, ADDR_MODE.ABSOLUTE_X, XOP.CMP_ABX), _defineProperty(_CMP, ADDR_MODE.ABSOLUTE_Y, XOP.CMP_ABY), _CMP)
};

// xop -> alu operation
// if listed here, xop not implemented directly in xop.js but executed in alu.js
var XOP_TO_ALU_OP = (_XOP_TO_ALU_OP = {}, _defineProperty(_XOP_TO_ALU_OP, XOP.LDA_IIY, OP.LDA), _defineProperty(_XOP_TO_ALU_OP, XOP.LDA_ABX, OP.LDA), _defineProperty(_XOP_TO_ALU_OP, XOP.LDA_ABY, OP.LDA), _defineProperty(_XOP_TO_ALU_OP, XOP.STA_IIY, OP.STA), _defineProperty(_XOP_TO_ALU_OP, XOP.STA_ABX, OP.STA), _defineProperty(_XOP_TO_ALU_OP, XOP.STA_ABY, OP.STA), _defineProperty(_XOP_TO_ALU_OP, XOP.LDX_ABY, OP.LDX), _defineProperty(_XOP_TO_ALU_OP, XOP.LDY_ABX, OP.LDY), _defineProperty(_XOP_TO_ALU_OP, XOP.STX_ABY, OP.STX), _defineProperty(_XOP_TO_ALU_OP, XOP.STY_ABX, OP.STY), _defineProperty(_XOP_TO_ALU_OP, XOP.CMP_IIY, OP.CMP), _defineProperty(_XOP_TO_ALU_OP, XOP.CMP_ABX, OP.CMP), _defineProperty(_XOP_TO_ALU_OP, XOP.CMP_ABY, OP.CMP), _defineProperty(_XOP_TO_ALU_OP, XOP.LDX_IIY, OP.LDX), _defineProperty(_XOP_TO_ALU_OP, XOP.STX_IIY, OP.STX), _XOP_TO_ALU_OP);

module.exports = {
  OP: OP,
  ADDR_MODE: ADDR_MODE,
  FLAGS: FLAGS,
  BRANCH_INSTRUCTION_SHORTHANDS: BRANCH_INSTRUCTION_SHORTHANDS,
  XOP: XOP,
  XOP_TO_ADDR_MODE: XOP_TO_ADDR_MODE,
  OP_ADDR_MODE_TO_XOP: OP_ADDR_MODE_TO_XOP,
  XOP_TO_ALU_OP: XOP_TO_ALU_OP
};
// +4 11 R running, 1 when executing forward, i backwards, 0 halted
// branch if carry set = branch if carry not equal zero
// i011 store index to (indirect),Y indexed

},{}],31:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _require = require('./word');

var high_tryte = _require.high_tryte;
var low_tryte = _require.low_tryte;
var trytes2word = _require.trytes2word;

var Stack = (function () {
  function Stack(memory) {
    _classCallCheck(this, Stack);

    this.memory = memory;
    this.stackptr = 0;
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(value) {
      this.memory.write(this.stackptr, value);
      ++this.stackptr;
      console.log('pushed to stack ' + value + ', stackptr=' + this.stackptr);
    }
  }, {
    key: 'pull',
    value: function pull() {
      --this.stackptr;
      var value = this.memory.read(this.stackptr);
      console.log('pulled from stack ' + value + ', stackptr=' + this.stackptr);
      return value;
    }
  }, {
    key: 'pushWord',
    value: function pushWord(word) {
      this.push(low_tryte(word));
      this.push(high_tryte(word));
    }
  }, {
    key: 'pullWord',
    value: function pullWord() {
      var high = this.pull();
      var low = this.pull();

      return trytes2word(high, low);
    }
  }]);

  return Stack;
})();

module.exports = function (memory) {
  return new Stack(memory);
};

},{"./word":32}],32:[function(require,module,exports){
'use strict';

var _require = require('trit-getset');

var slice_trits = _require.slice_trits;

var _require2 = require('./arch');

var TRITS_PER_TRYTE = _require2.TRITS_PER_TRYTE;
var T_TO_TRITS_PER_TRYTE = _require2.T_TO_TRITS_PER_TRYTE;
var TRITS_PER_WORD = _require2.TRITS_PER_WORD;

function low_tryte(n) {
  return slice_trits(n, 0, TRITS_PER_TRYTE);
}

function high_tryte(n) {
  return slice_trits(n, TRITS_PER_TRYTE, TRITS_PER_WORD);
}

function trytes2word(high, low) {
  return T_TO_TRITS_PER_TRYTE * high + low;
}

module.exports = {
  low_tryte: low_tryte,
  high_tryte: high_tryte,
  trytes2word: trytes2word
};

},{"./arch":6,"trit-getset":19}],33:[function(require,module,exports){
'use strict';

var _require = require('./opcodes');

var XOP = _require.XOP;

var _require2 = require('./arithmetic');

var add = _require2.add;
var inc = _require2.inc;
var dec = _require2.dec;

var _require3 = require('./arch');

var TRITS_PER_TRYTE = _require3.TRITS_PER_TRYTE;
var T_TO_TRITS_PER_TRYTE = _require3.T_TO_TRITS_PER_TRYTE;

var _require4 = require('./word');

var low_tryte = _require4.low_tryte;
var high_tryte = _require4.high_tryte;
var trytes2word = _require4.trytes2word;

function execute_xop_instruction(cpu, operation, read_arg, write_arg, address_of_arg) {
  console.log('misc', operation);

  switch (operation) {
    // transfers
    case XOP.TAX:
      // X = A
      cpu.index = cpu.accum;
      cpu.alu.update_flags_from(cpu.accum);
      console.log('TAX index=', cpu.index);
      break;

    case XOP.TAY:
      // Y = A
      cpu.yindex = cpu.accum;
      cpu.alu.update_flags_from(cpu.yindex);
      break;

    case XOP.TXA:
      // A = X
      cpu.accum = cpu.index;
      cpu.alu.update_flags_from(cpu.accum);
      break;

    case XOP.TYA:
      // A = Y
      cpu.accum = cpu.yindex;
      cpu.alu.update_flags_from(cpu.accum);
      break;

    case XOP.TSXY:
      // X,Y = S
      cpu.index = low_tryte(cpu.stack.stackptr);
      cpu.yindex = high_tryte(cpu.stack.stackptr);
      cpu.alu.update_flags_from(cpu.index);
      break;

    case XOP.TXYS:
      // S = X<<5 | Y
      cpu.stack.stackptr = trytes2word(cpu.yindex, cpu.index);
      // no flags affected
      break;

    // halts - set H to halt code, set R to 0 to stop running
    case XOP.HALTN:
      // H=i, R=0
      cpu.flags.H = -1;
      cpu.flags.R = 0;
      break;
    case XOP.HALTZ:
      // H=0, R=0
      cpu.flags.H = 0;
      cpu.flags.R = 0;
      break;
    case XOP.HALTP:
      // H=1, R=0
      cpu.flags.H = 1;
      cpu.flags.R = 0;
      break;

    // arithmetic
    case XOP.INX:
      // X = X+1
      cpu.index = inc(cpu.index);
      cpu.alu.update_flags_from(cpu.index);
      break;

    case XOP.INY:
      // Y = Y+1
      cpu.yindex = inc(cpu.yindex);
      cpu.alu.update_flags_from(cpu.yindex);
      break;

    case XOP.DEX:
      // X = X-1
      cpu.index = dec(cpu.index);
      cpu.alu.update_flags_from(cpu.index);
      break;

    case XOP.DEY:
      // Y = Y-1
      cpu.yindex = dec(cpu.yindex);
      cpu.alu.update_flags_from(cpu.yindex);
      break;

    // flags
    case XOP.CLC:
      // C = 0
      cpu.flags.C = 0;
      break;

    case XOP.CLI:
      // I = 0
      cpu.flags.I = 0;
      break;

    case XOP.CLV:
      // V = 0
      cpu.flags.V = 0;
      break;

    case XOP.SECP:
      // C = 1
      cpu.flags.C = 1;
      break;

    case XOP.SECN:
      // C = i
      cpu.flags.C = -1;
      break;

    case XOP.SEDN:
      // I = i
      cpu.flags.I = -1;
      break;

    case XOP.SEDP:
      // I = 1
      cpu.flags.I = 1;
      break;

    case XOP.CLD:
      // D = 0
      cpu.flags.D = 0;
      break;

    case XOP.SEIN:
      // D = i
      cpu.flags.D = -1;
      break;

    case XOP.SEIP:
      // D = 1
      cpu.flags.D = 1;
      break;

    // interrupts
    case XOP.INTN:
      // int i
      cpu.interrupt(-1);
      break;

    case XOP.INTZ:
      // int 0
      cpu.interrupt(0);
      break;

    case XOP.INTP:
      // int 1
      cpu.interrupt(1);
      break;

    case XOP.NOP:
      break;

    // stack
    case XOP.PHA:
      // push A
      cpu.stack.push(cpu.accum);
      break;

    case XOP.PHX:
      // push X
      cpu.stack.push(cpu.index);
      break;

    case XOP.PHY:
      // push Y
      cpu.stack.push(cpu.yindex);
      break;

    case XOP.PLA:
      // pull A
      cpu.accum = cpu.stack.pull();
      break;

    case XOP.PLX:
      // pull X
      cpu.index = cpu.stack.pull();
      break;

    case XOP.PLY:
      // pull Y
      cpu.yindex = cpu.stack.pull();
      break;

    case XOP.PHP:
      // push processor flags
      cpu.stack.pushWord(cpu.flags.value);
      break;

    case XOP.PLP:
      // pull processor flags
      cpu.flags.value = cpu.stack.pullWord();
      break;

    case XOP.STZ_ABX:
    case XOP.STZ_ABY:
    case XOP.STZ_ABS: // store zero
    case XOP.STZ_IIY:
      write_arg(0);
      break;

    // jump
    case XOP.JMP_ABS:
      // pc = absolute
      cpu.pc = address_of_arg();
      --cpu.pc; // undo next-instruction increment
      console.log('jumped to ' + cpu.pc);
      break;

    case XOP.JMP_INDIR:
      // pc = (indirect)
      cpu.pc = address_of_arg();
      --cpu.pc;
      console.log('jumped indirectly to ' + cpu.pc);
      break;

    case XOP.JSR_ABS:
      {
        // push pc; pc = absolute
        var callsite = cpu.pc;
        cpu.stack.pushWord(callsite);

        cpu.pc = address_of_arg();
        --cpu.pc;
        console.log('jumped to subroutine ' + cpu.pc + ', from callsite ' + callsite);
        break;
      }

    case XOP.RTS:
      {
        // pull pc
        var callsite = cpu.stack.pullWord();

        console.log('returning to subroutine callsite ' + callsite);

        cpu.pc = callsite;
        break;
      }

    case XOP.RTI:
      // return from interrupt
      cpu.flags.R = 0;
      // TODO: pull from stack, right now just halts, due to interrupt() calling cpu.run()
      break;

    default:
      throw new Error('unimplemented xop opcode: ' + operation);
  }
}

module.exports = execute_xop_instruction;

},{"./arch":6,"./arithmetic":7,"./opcodes":30,"./word":32}],34:[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(global, fn)
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":35}],35:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

}).call(this,require('_process'))
},{"_process":55}],36:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"./utext":39,"dup":22,"vkey":37}],37:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],38:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"./etext":36,"./utext":39,"./vtext":40,"dup":24}],39:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],40:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],41:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"./utext":44,"dup":22,"vkey":42}],42:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],43:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"./etext":41,"./utext":44,"./vtext":45,"dup":24}],44:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],45:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],46:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],47:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],48:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"balanced-ternary":46,"dup":19}],49:[function(require,module,exports){
'use strict';

var n2bts = require('balanced-ternary').n2bts;
var BT_DIGIT_TO_N = require('balanced-ternary').BT_DIGIT_TO_N;
var TRITS_PER_TRYTE = 5; // 5-trit trytes backed by 8-bit bytes Int8Array
var set_trit = require('trit-getset').set_trit;
var pad = require('pad');

function Tricanvas(opts) {
  opts = opts || {};
  this.addressTryteSize = opts.addressTryteSize || 4; // 4 trytes each coordinate (ex: aaaa bbbb)
  this.width = opts.width || Math.pow(3, this.addressTryteSize)*TRITS_PER_TRYTE;
  this.height = opts.height || this.width;
  this.scaleW = 1;
  this.scaleH = 1;
  this.canvas = opts.canvas;
  if (!this.canvas) {
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = this.width * this.scaleW + 'px';
    this.canvas.style.height = this.height * this.scaleH + 'px';
    this.canvas.style.border = this.border || '1px solid black';
    this.canvas.style.imageRendering = 'pixelated';
    document.body.appendChild(this.canvas);
  }

  this.context = this.canvas.getContext('2d');
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.imageData = this.context.createImageData(this.width, this.height);

  this.tritCount = this.width * this.height;
  this.tryteCount = this.tritCount / TRITS_PER_TRYTE;
  if ((this.tryteCount|0) !== this.tryteCount) throw new Error('non-integral tryte count: ' + tryteCount + ', trits='+this.tritCount);
  this.tritmap = opts.tritmap || new Int8Array(this.tryteCount);
  if (this.tritmap.length !== this.tryteCount) throw new Error('tritmap option unexpected length: '+this.tritmap.length+' !== '+this.tryteCount);

  this.negativeColor = opts.negativeColor || [255, 0, 0, 255];    // red
  this.zeroColor = opts.zeroColor || [0, 0, 0, 255];          // black
  this.positiveColor = opts.positiveColor || [0, 255, 0, 255];    // green
}

Tricanvas.prototype.refresh = function() {
  for (var i = 0; i < this.tryteCount; ++i) {
    var tryte = this.tritmap[i];
    var trits = pad(5, n2bts(tryte), '0');

    for (var j = 0; j < TRITS_PER_TRYTE; ++j) {
      var index = i * TRITS_PER_TRYTE + j;

      var trit = BT_DIGIT_TO_N[trits.charAt(j)];

      var color;

      if (trit === -1) {
        color = this.negativeColor;
      } else if (trit === 1) {
        color = this.positiveColor;
      } else {
        color = this.zeroColor;
      }

      this.imageData.data[index * 4 + 0] = color[0];
      this.imageData.data[index * 4 + 1] = color[1];
      this.imageData.data[index * 4 + 2] = color[2];
      this.imageData.data[index * 4 + 3] = color[3];
    }
  }
  //console.log(this.imageData);

  this.context.putImageData(this.imageData, 0, 0);
};

Tricanvas.prototype.writeTrit = function(trit, x, y) {
  var index = y * this.width + x;

  var tryteIndex = (index / TRITS_PER_TRYTE)|0;
  var tritIndex = TRITS_PER_TRYTE - (index % TRITS_PER_TRYTE) - 1;

  this.tritmap[tryteIndex] = set_trit(this.tritmap[tryteIndex], tritIndex, trit);
};

Tricanvas.prototype.writeTrits = function(bts, width, height, rowStart, colStart) {
  rowStart = rowStart || 0;
  colStart = colStart || 0;

  for (var i = 0; i < bts.length; ++i) {
    var trit = BT_DIGIT_TO_N[bts.charAt(i)];
    if (trit === undefined) throw new Error('writeTrits('+bts+'): invalid trit: '+trit);

    var row = ((i / width)|0) + height*rowStart;
    var col = i % width + width*colStart;
    //console.log(i,row,col,trit);
    this.writeTrit(trit, col, row);
  }
};

module.exports = function(opts) {
  return new Tricanvas(opts);
}

},{"balanced-ternary":46,"pad":47,"trit-getset":48}],50:[function(require,module,exports){
'use strict';

var Tricanvas = require('tritmapped-canvas');

var toTritmap  = require('trit-text').toTritmap9x14;
var CHAR_HEIGHT = 14;
var CHAR_WIDTH = 9;

var fromUnicode = require('trit-text').fromUnicode;
var fromEvent = require('trit-text').fromEvent;


function Triterm(opts) {
  this.tc = Tricanvas(opts);
  this.refresh();

  this.cursorX = 0;
  this.cursorY = 0;

  this.handleInput = opts.handleInput;
  this.cooked = opts.cooked !== undefined ? opts.cooked : true;

  this.colCount = this.tc.width / CHAR_WIDTH;
  this.rowCount = this.tc.height / CHAR_HEIGHT;

  window.addEventListener('keydown', this.onkeydown.bind(this));
};

Triterm.prototype.writeUChar = function(u) {
  return this.writeTTChar(fromUnicode(u));
};

Triterm.prototype.setTTChar = function(tt, x, y) {
  this.tc.writeTrits(toTritmap(tt), CHAR_WIDTH, CHAR_HEIGHT, y, x);
};

Triterm.prototype.refresh = function() {
  this.tc.refresh();
};

Triterm.prototype.writeTTChar = function(tt) {
  if (this.cooked) {
    if (tt == 12) { // trit-text newline
      this.cursorY++;
      this.cursorX = 0;
      return false; // not displayed visually
    }
  }

  this.setTTChar(tt, this.cursorX, this.cursorY);
  this.forward();
};

Triterm.prototype.forward = function() {
  ++this.cursorX;

  if (this.cursorX >= this.colCount) {
    this.cursorX = 0;
    ++this.cursorY;
  }
  if (this.cursorY >= this.rowCount) {
    this.cursorY = 0;
    this.cursorX = 0;
  }
}

Triterm.prototype.backspace = function() {
  --this.cursorX;

  if (this.cursorX < 0) {
    this.cursorX = 0;
    --this.cursorY;
  }

  if (this.cursorY < 0) {
    this.cursorY = 0; // TODO
  }

  this.setTTChar(0);
};

Triterm.prototype.onkeydown = function(ev) {
  //console.log(ev);

  if (ev.metaKey) {
    // don't intercept cmd-key, allow e.g. cmd-r to reload browser
    return;
  }

  ev.preventDefault(); // allow intercepting ctrl-key without executing browser default

  var tt = fromEvent(ev);

  if (this.handleInput) this.handleInput.call(this, tt, ev);
};

module.exports = function(opts) {
  return new Triterm(opts);
};


},{"trit-text":43,"tritmapped-canvas":49}],51:[function(require,module,exports){
var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];

var stringify = JSON.stringify;

module.exports = function (fn) {
    var keys = [];
    var wkey;
    var cacheKeys = Object.keys(cache);
    
    for (var i = 0, l = cacheKeys.length; i < l; i++) {
        var key = cacheKeys[i];
        if (cache[key].exports === fn) {
            wkey = key;
            break;
        }
    }
    
    if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};
        for (var i = 0, l = cacheKeys.length; i < l; i++) {
            var key = cacheKeys[i];
            wcache[key] = key;
        }
        sources[wkey] = [
            Function(['require','module','exports'], '(' + fn + ')(self)'),
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
    
    var scache = {}; scache[wkey] = wkey;
    sources[skey] = [
        Function(['require'],'require(' + stringify(wkey) + ')(self)'),
        scache
    ];
    
    var src = '(' + bundleFn + ')({'
        + Object.keys(sources).map(function (key) {
            return stringify(key) + ':['
                + sources[key][0]
                + ',' + stringify(sources[key][1]) + ']'
            ;
        }).join(',')
        + '},{},[' + stringify(skey) + '])'
    ;
    
    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    
    return new Worker(URL.createObjectURL(
        new Blob([src], { type: 'text/javascript' })
    ));
};

},{}],52:[function(require,module,exports){
'use strict';

var TIMER_FREQUENCY_ADDRESS = -3285;

var INT_PULSE = 1;

function createTimerHardware(worker) {}

function installTimerHardware(cpu) {
  var _timer = undefined;

  cpu.memory.addMemoryMap('timer', {
    start: TIMER_FREQUENCY_ADDRESS,
    end: TIMER_FREQUENCY_ADDRESS,
    write: function write(address, value) {
      function fire() {
        var ms = cpu.memory.read(TIMER_FREQUENCY_ADDRESS) * 100;
        if (ms < 100) ms = 100;

        console.log('TIMER FIRE, next=' + ms + ' ms');
        cpu.interrupt(INT_PULSE); // TODO: pass dt, time since previous fire?

        _timer = setTimeout(fire, ms);
      };

      if (_timer === undefined) fire();
    }
  });
}

module.exports = {
  create: createTimerHardware,
  install: installTimerHardware
};

// nothing needed on main thread; this is entirely in web worker

},{}],53:[function(require,module,exports){
'use strict';

var _require = require('cpu3502/arch');

var TRITS_PER_TRYTE = _require.TRITS_PER_TRYTE;
var T_TO_TRITS_PER_TRYTE = _require.T_TO_TRITS_PER_TRYTE;
var TRYTES_PER_WORD = _require.TRYTES_PER_WORD;
var MAX_ADDRESS = _require.MAX_ADDRESS;
var MIN_ADDRESS = _require.MIN_ADDRESS;

var Triterm = require('tritmapped-terminal');
var raf = require('raf');

// 4 trits in each dimension, xxxx and yyyy
var VIDEO_TRYTE_COUNT = 4;

// '00xxx xyyyy' address -> 'xxxxx' tritmap value
var T_TO_VIDEO_TRYTE_COUNT = Math.pow(3, VIDEO_TRYTE_COUNT);
var VIDEO_ADDRESS_SIZE = Math.pow(T_TO_VIDEO_TRYTE_COUNT * TRITS_PER_TRYTE, TRYTES_PER_WORD) / TRITS_PER_TRYTE;

var VIDEO_ADDRESS_OFFSET = MAX_ADDRESS - VIDEO_ADDRESS_SIZE; // -3281
if (VIDEO_ADDRESS_SIZE + VIDEO_ADDRESS_OFFSET !== MAX_ADDRESS) throw new Error('wrong video address size');

var CHARGEN_ADDRESS = -3282; // 0i111 11110
var CURSOR_ROW_ADDRESS = -3283;
var CURSOR_COL_ADDRESS = -3284;

var INT_INPUT = -1;

// Create the video terminal hardware display (on the main thread), listen for worker
function createVideoHardware(worker) {
  var term = Triterm({
    addressTryteSize: VIDEO_TRYTE_COUNT,
    //tritmap: cpu.memory.subarray(VIDEO_ADDRESS_OFFSET, VIDEO_ADDRESS_SIZE + VIDEO_ADDRESS_OFFSET), // no direct access
    handleInput: function handleInput(tt, ev) {
      if (Number.isInteger(tt)) {
        worker.postMessage({ cmd: 'keyboard input', value: tt });
      }
    }
  });

  worker.hardwareHandlers.video = function (ev) {
    if (ev.data.cmd === 'write') {
      term.tc.tritmap[ev.data.address] = ev.data.value;
    } else if (ev.data.cmd === 'term setTTChar') {
      var row = ev.data.row;
      var col = ev.data.col;

      // wrap-around if row/col out of terminal range
      row %= term.rowCount;if (row < 0) row += term.rowCount;
      col %= term.colCount;if (col < 0) col += term.colCount;

      console.log('COLROW', col, row);

      term.setTTChar(ev.data.value, col, row);
    }
  };

  raf(function tick() {
    term.refresh();
    raf(tick);
  });
};

// Install the video hardware on the CPU in the worker (send messages back to main, handle messages to cpu)
function installVideoHardware(cpu) {
  self.addEventListener('message', function (ev) {
    if (ev.data.cmd === 'keyboard input') {
      console.log('worker received interrupt');
      cpu.interrupt(INT_INPUT, ev.data.value);
    }
  });

  cpu.memory.addMemoryMap('video', {
    start: VIDEO_ADDRESS_OFFSET, // -3281      %0i111 11111   $wdddd
    end: VIDEO_ADDRESS_SIZE + VIDEO_ADDRESS_OFFSET, // 29524, end %11111 11111   $ddddd
    write: function write(address, value) {
      self.postMessage({ hardware: 'video', cmd: 'write', address: address - VIDEO_ADDRESS_OFFSET, value: value });
      //term.tc.tritmap[address - VIDEO_ADDRESS_OFFSET] = value;
      console.log('video write:', address, value);
    },
    read: function read(address) {
      console.log('video read:', address);
      throw new Error('video read unsupported'); // TODO?
      //return term.tc.tritmap[address - VIDEO_ADDDRESS_OFFSET];
    }
  });

  cpu.memory.addMemoryMap('chargen', {
    start: CHARGEN_ADDRESS,
    end: CHARGEN_ADDRESS,
    write: function write(address, value) {
      console.log('chargen', value);

      var row = cpu.memory.read(CURSOR_ROW_ADDRESS);
      var col = cpu.memory.read(CURSOR_COL_ADDRESS);

      //term.setTTChar(value, col, row);
      self.postMessage({ hardware: 'video', cmd: 'term setTTChar', value: value, col: col, row: row });
    }
  });
}

module.exports = {
  create: createVideoHardware,
  install: installVideoHardware
};

},{"cpu3502/arch":6,"raf":34,"tritmapped-terminal":50}],54:[function(require,module,exports){
(function (global){
'use strict';

var CPU = require('cpu3502');

module.exports = function (self) {

  self.addEventListener('message', function (ev) {
    console.log('worker got', ev.data);

    if (ev.data.cmd === 'boot') {
      var cpu = CPU();
      global.cpu = cpu;
      console.log('cpu=', cpu);

      require('./video.js').install(cpu);
      require('./audio.js').install(cpu);
      require('./timer.js').install(cpu);
      require('./floppy.js').install(cpu);

      cpu.assemble_bootcode('NOP\n\n; write to memory-mapped video\nLDA #%i1i1i\n.equ $wdddd video_start\n.equ $ddddd video_end\nSTA video_start\nSTA $wdddd\nSTA $0zzzz\nSTA $0zzzy\nSTA $0zzzx\nSTA $0zzzw\nSTA $0zzz0\nSTA $0zzza\n\n.equ -3282 chargen\n.equ -3283 row\n.equ -3284 col\n\n.equ -3286 beep\n\n; write to text character generator\nLDA #\'X\nLDX #0\nSTX row\nLDY #4\nSTY col\nLDX #1\nSTA chargen\n\nADC #2\nSTI A        ; simple ternary inverter\nSTA chargen  ; trit-text red \'Z\'\n\nLDX #4\nINX\nSTX col\nDEC chargen  ; trit-text \'Y\'\n\nTXA     ; X->A, 5\n\n; setup stack, since default 0 overlaps with memory-mapped screen output\n.equ -10000 stack\nLDY #>stack\nLDX #<stack\nTXYS\n\n; loop 6..19\nloop:\nINC A\nSTA col\nSTA chargen\nCMP #20\n;BNE #-11\nBNE loop\n\nLDA #1\nSTA row\nSTZ col\n\n; print greeting\nLDA #<greeting\nLDX #>greeting\nJSR print_string\n\nINC row\nSTZ col\n\nLDA #<prompt_string\nLDX #>prompt_string\nJSR print_string\n\n;STZ beep\n\n; set input interrupt handler\n.equ -29524 int_inputL\n.equ -29523 int_inputH\nLDA #<handle_input\nSTA int_inputL\nLDA #>handle_input\nSTA int_inputH\n\nSEIP     ; enable interrupt -1 (keyboard input) TODO: also handle int 1, then can unmask all with CLI\n\n; set pulse interrupt handler\n.equ -29520 int_pulseL\n.equ -29519 int_pulseH\nLDA #<handle_pulse\nSTA int_pulseL\nLDA #>handle_pulse\nSTA int_pulseH\n\nCLI      ;  enable all interrupts\n\nLDA #\'_               ; a suitable cursor character\n;LDA #\'▒            ; alternative block cursor TODO: use in \'insert\' mode?\nSTA cursor_char\n\n.equ -3285 timer_freq\nLDA #1     ; 100 ms\n; cursor blink - disable when want quiescence (noisy)\nSTA timer_freq   ; triggers interrupt immediately.. TODO: probably should delay! or never returns?\n;\n\nHALTZ\n\ncursor_char:\n.tryte 0\n\ngreeting:\n.data "Hello, world! ☺ 3502 CPU online: system ready---------------------------------------------"\n.tryte 0\n\nprompt_string:\n;TODO: support newlines in print_string \'.tryte 12\',  // trit-text newline TODO: support embedding in .data\n.data "$ "\n.tryte 0\n\nbad_command_string:\n.data "Bad command or file name: "\n.tryte 0\n\nhelp_command_string:\n.data "Available commands:                          "\n.data "Help:                                        "\n.data "beep - sound a beep through the speaker      "\n.data "clear - clear terminal screen display        "\n.data "help - show help on supported commands       "\n.data "read - read data from floppy disk            "\n.data "write - write data to floppy disk            "\n.data "echo - echo input to terminal                "\n.tryte 0\n\nhandle_pulse:\n; blinking cursor\nLDA cursor_char\nSTA chargen\nSTI cursor_char    ; simple ternary inverter, toggle red/green \'_\'\nRTI                ; return from interrupt\n\n; subroutine to advance terminal to next line\nnext_line:\nINC row\nSTZ col\nRTS\n\n\nhandle_prev_line:\nDEC row\nLDA #44        ; TODO: .equ\nSTA col\nJMP handled_input\n\nhandle_backspace:\nJSR truncate_line_buffer\nBCS handle_backspace_denied    ; if couldn\'t delete\nSTZ chargen                    ; clear cursor\nDEC col\nLDA col\nCMP #-1\nBEQ handle_prev_line\nSTZ chargen\nJMP handled_input\n\nhandle_backspace_denied:\nSTZ beep                       ;  user feedback that their backspacing was denied\nJMP handled_input\n\nhandle_enter:\nSTZ chargen                    ; clear cursor\nJSR next_line\n; check commands TODO: strcmp, check full string instead of only first character\nLDY #0\nLDA #\'\\0\nCMP line_buffer,Y\nBEQ command_null\nLDA #\'b\nCMP line_buffer,Y\nBEQ command_beep\nLDA #\'c\nCMP line_buffer,Y\nBEQ command_clear\nLDA #\'h\nCMP line_buffer,Y\nBEQ command_help\nLDA #\'r\nCMP line_buffer,Y\nBEQ command_read\nLDA #\'w\nCMP line_buffer,Y\nBEQ command_write\nLDA #\'e\nCMP line_buffer,Y\nBEQ command_echo\nJMP command_bad\n\nhandle_enter_done:\nJSR reset_line_buffer\nSTZ col\nLDA #<prompt_string\nLDX #>prompt_string\nJSR print_string\nJMP handled_input\n\n; interrupt handler:\nhandle_input:\nCMP #\'\\n\nBEQ handle_enter\nCMP #0\nBEQ handle_backspace\n\nJSR save_line_buffer_char\nJSR print_char\n\n\nhandled_input:\nRTI\n\ncommand_bad:\nLDA #<bad_command_string\nLDX #>bad_command_string\nJSR print_string\nLDA #<line_buffer\nLDX #>line_buffer\nJSR print_string\nINC row\nJMP handle_enter_done\n\ncommand_help:\nLDA #<help_command_string\nLDX #>help_command_string\nJSR print_string\nJMP handle_enter_done\n\ncommand_beep:\nSTA beep\nJMP handle_enter_done\n\ncommand_null:\nJMP handle_enter_done\n\ncommand_read:\nJMP command_read2       ; too far\ncommand_write:\nJMP command_write2\n\ncommand_echo:\nLDA #<line_buffer\nLDX #>line_buffer\nJSR print_string\nINC row\nJMP handle_enter_done\n\n.equ 45 col_count\n.equ 28 row_count\n\ncommand_clear:\nSTZ col\nSTZ row\n_command_clear_next_row:\n_command_clear_next_col:\nSTZ chargen     ; write empty character at each cursor position to clear terminal TODO: instead write to tritmapped memory?\nINC col\nLDA col\nCMP #col_count\nBNE _command_clear_next_col\nINC row\nLDA row\nCMP #row_count\nBNE _command_clear_next_row\nSTZ beep        ; beep when done\nSTZ col         ; reset cursor to beginning\nSTZ row\nJMP handle_enter_done\n\n\n; append character in A to line_buffer\nsave_line_buffer_char:\nLDY line_buffer_offset\nSTA line_buffer,Y\nINC line_buffer_offset\nINY\nLDX #0\nSTX line_buffer,Y      ; null terminate\nRTS\n\nline_buffer_offset:\n.tryte 0\n\n; reset line buffer to empty string\nreset_line_buffer:\nSTZ line_buffer_offset\nSTZ line_buffer\nRTS\n\n; delete last character of line buffer, sets carry flag if cannot be deleted\ntruncate_line_buffer:\nLDY line_buffer_offset\nDEY\nCPY #0\nBMI _truncate_line_buffer_skip     ; empty buffer, cannot truncate further\nSTZ line_buffer,Y\nSTY line_buffer_offset\nCLC\nRTS\n_truncate_line_buffer_skip:\nSECN\nRTS\n\n; print character in A to screen and advance cursor\nprint_char:\nSTA chargen\nINC col\n\nLDX col\nCPX #col_count\nBNE print_char_done\nJSR next_line          ; at last column, wrap cursor to next line\n\nprint_char_done:\nRTS\n\n\n; print a null-terminated string pointed to by A,X\nprint_string:\nSTA _print_string_param\nSTX _print_string_param+1\nLDY #0\n_print_string_loop:\nLDA (_print_string_param),Y\nCMP #0\nBEQ _print_string_done\nJSR print_char\nLDA #1\nADC _print_string_param\nSTA _print_string_param\nLDA #0\nADC _print_string_param+1\nSTA _print_string_param+1\nBRA _print_string_loop\n_print_string_done:\nRTS\n_print_string_param:\n.word 0\n\n\n\n\n.equ -3290 floppy_data_ptr\n.equ -3292 floppy_name_ptr\n.equ -3294 floppy_length_ptr\n.equ -3296 floppy_command_execute\n.equ -1 floppy_command_read\n.equ 0 floppy_command_write\n\n; write data to floppy (similar to echo text > filename TODO)\ncommand_write2:\nLDA #<line_buffer\nLDX #>line_buffer\nSTA floppy_data_ptr     ; TODO: increment pointer to remove command prefix\nSTX floppy_data_ptr+1\n\nLDA #<filename\nLDX #>filename\nSTA floppy_name_ptr\nSTX floppy_name_ptr+1\n\nLDA #floppy_command_write\nSTA floppy_command_execute  ; TODO: print out number of trytes written? to filename?\n\nJMP handle_enter_done\n\n\n; read data from floppy TODO: rename \'cat\'...? Unix\ncommand_read2:\nLDA #<line_buffer\nLDX #>line_buffer\nSTA floppy_data_ptr\nSTX floppy_data_ptr+1\n\nLDA #<filename\nLDX #>filename\nSTA floppy_name_ptr\nSTX floppy_name_ptr+1\n\nLDA #floppy_command_read\nSTA floppy_command_execute\n\nLDA #<line_buffer\nLDX #>line_buffer\nJSR print_string\nINC row\nSTZ col\n\nJMP handle_enter_done\n\n; floppy filename TODO: read from argument\nfilename:\n.data "hi"\n.tryte 0\n\n\n\nline_buffer:\n.tryte 0     ; may extend further\n');
      cpu.boot();
      self.postMessage('booted');
    }
  });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./audio.js":1,"./floppy.js":2,"./timer.js":52,"./video.js":53,"cpu3502":4}],55:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[3]);
