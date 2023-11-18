const global = require('./global.js');
const { waitForReTry } = require('./utils.js');

class Element {
  constructor(options) {
    this.timeout = 1000;
    for (const [prop, value] of Object.entries(options)) {
      if (value) {
        this[prop] = value;
      }
    }
  }
  exists = Promise.coroutine(function* () {
    for (const [type, value] of Object.entries(global)) {
      if (this[type] && value(this[type]).exists()) {
        return true;
      }
    }
    return false;
  });
  fallbackClick = Promise.coroutine(function* (bounds) {
    if (!Array.isArray(bounds)) {
      return false;
    }
    const [left, top, right, bottom] = bounds;
    return click((left + right) / 2, (top + bottom) / 2);
  });
  click = Promise.coroutine(function* () {
    for (const [type, value] of Object.entries(global)) {
      if (
        this[type] &&
        value(this[type]).clickable() &&
        value(this[type]).findOnce().click()
      ) {
        return true;
      }
    }
  });
  asyncClick = Promise.coroutine(function* () {
    yield waitForReTry((resolve, reject) =>
      this.click() ? resolve() : reject()
    );
    sleep(1000);
    return this.fallbackClick(this.bounds);
  });
}

module.exports = Element;
