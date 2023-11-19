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
  selectorExists() {
    for (const [type, value] of Object.entries(global)) {
      if (this[type] && value(this[type]).exists()) {
        return true;
      }
    }
    return false;
  }
  boundsExists() {
    if (this.bounds) {
      const [left, top, right, bottom] = this.bounds;
      return bounds(left, top, right, bottom).exists();
    }
    return false;
  }
  exists() {
    if (this.selectorExists()) {
      return true;
    }
    if (this.boundsExists()) {
      return true;
    }
    return false;
  }
  waitForExists = Promise.coroutine(function* () {
    return waitForReTry(
      (resolve, reject) => (this.exists() ? resolve(true) : reject(false)),
      100
    )
      .then(() => {
        console.log(`${this.name} exists`);
        return true;
      })
      .catch(() => false);
  });
  clickSelector() {
    for (const [type, value] of Object.entries(global)) {
      if (
        this[type] &&
        value(this[type]).clickable().findOnce() &&
        value(this[type]).findOnce().click()
      ) {
        return true;
      }
    }
    return false;
  }
  clickBounds() {
    if (this.bounds) {
      const [left, top, right, bottom] = this.bounds;
      return click((left + right) / 2, (top + bottom) / 2);
    }
    return false;
  }
  click() {
    if (this.clickSelector()) {
      return true;
    }
    if (this.clickBounds()) {
      return true;
    }
    return false;
  }
  waitForClick = Promise.coroutine(function* () {
    if (yield this.waitForExists()) {
      this.click();
      console.log(`${this.name} clicked`);
      return true;
    }
    return false;
  });
}

module.exports = Element;
