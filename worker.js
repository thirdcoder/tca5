'use strict';

module.exports = (self) => {
  self.addEventListener('message', (ev) => {
    console.log('worker got',ev.data);
    self.postMessage('reply2');
  });
};
