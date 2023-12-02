const global = require('./global.js');
const { waitFor, waitForReTry } = require('./utils.js');

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
    console.log(`try to find ${this.name} with selector`);
    for (const [type, value] of Object.entries(global)) {
      if (this[type] && value(this[type]).exists()) {
        return true;
      }
    }
    return false;
  }
  boundsExists() {
    console.log(`try to find ${this.name} with bounds`);
    if (this.bounds) {
      const [left, top, right, bottom] = this.bounds;
      if (bounds(left, top, right, bottom).exists()) {
        return true;
      }
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
      .catch(() => {
        console.log(`${this.name} not exists`);
        return false;
      });
  });
  clickSelector() {
    console.log(`try to click ${this.name} with selector`);
    for (const [type, value] of Object.entries(global)) {
      if (
        this[type] &&
        value(this[type]) &&
        value(this[type]).clickable() &&
        value(this[type]).clickable().findOne(this.timeout) &&
        value(this[type]).clickable().findOne(this.timeout).click()
      ) {
        return true;
      }
    }
    return false;
  }
  clickBounds() {
    console.log(`try to click ${this.name} with bounds`);
    if (this.bounds) {
      const [left, top, right, bottom] = this.bounds;
      if (
        bounds(left, top, right, bottom).clickable() &&
        bounds(left, top, right, bottom).clickable().findOne(this.timeout) &&
        bounds(left, top, right, bottom)
          .clickable()
          .findOne(this.timeout)
          .click()
      ) {
        return true;
      }
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
  waitForClick() {
    return waitFor((resolve) => {
      console.log(`clicking ${this.name}`);
      if (this.click()) {
        console.log(`${this.name} clicked`);
        resolve(true);
      }
    }, this.timeout);
  }
  selectorText() {
    console.log(`try to get text of ${this.name} with selector`);
    for (const [type, value] of Object.entries(global)) {
      if (
        this[type] &&
        value(this[type]) &&
        value(this[type]).findOne(this.timeout) &&
        value(this[type]).findOne(this.timeout).text()
      ) {
        return value(this[type]).findOne(this.timeout).text();
      }
    }
  }
  boundsText() {
    console.log(`try to get text of ${this.name} with bounds`);
    if (this.bounds) {
      const [left, top, right, bottom] = this.bounds;
      if (
        bounds(left, top, right, bottom).findOne(this.timeout) &&
        bounds(left, top, right, bottom).findOne(this.timeout).text()
      ) {
        return bounds(left, top, right, bottom).findOne(this.timeout).text();
      }
    }
  }
  text() {
    return this.selectorText() || this.boundsText();
  }
}

module.exports = Element;
