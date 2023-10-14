const {
  delay,
  waitForLaunch,
  waitForSelector,
  clickSelector,
  clickBounds,
  longClickSelector,
  longClickBounds,
} = require('./utils.js');
class BaseApp {
  constructor({ name, packageName }) {
    auto.waitFor();
    this.name = name;
    this.packageName = packageName;
  }
  // eslint-disable-next-line require-yield
  launchApp = Promise.coroutine(function* () {
    if (this.name) {
      app.launchApp(this.name);
      yield waitForLaunch(this.packageName);
      return true;
    }
    if (this.packageName) {
      app.launchPackage(this.packageName);
      yield waitForLaunch(this.packageName);
      return true;
    }
    return false;
  });
  // eslint-disable-next-line require-yield
  isCurrentApp = Promise.coroutine(function* () {
    return currentPackage() === this.packageName;
  });
  click = Promise.coroutine(function* (selector) {
    if (yield waitForSelector(selector)) {
      return clickSelector(selector);
    }
    return false;
  });
  // eslint-disable-next-line require-yield
  clickBounds = Promise.coroutine(function* (bounds) {
    yield delay(2000);
    return clickBounds(bounds);
  });
  longClick = Promise.coroutine(function* (selector) {
    if (yield waitForSelector(selector)) {
      return longClickSelector(selector);
    }
    return false;
  });
  // eslint-disable-next-line require-yield
  longClickBounds = Promise.coroutine(function* (bounds) {
    yield delay(2000);
    return longClickBounds(bounds);
  });
  scrollForward = Promise.coroutine(function* (selector) {
    if (yield waitForSelector(selector)) {
      selector.findOne().scrollForward();
      return true;
    }
    return false;
  });
  scrollBackward = Promise.coroutine(function* (selector) {
    if (yield waitForSelector(selector)) {
      selector.findOne().scrollBackward();
      return true;
    }
    return false;
  });
  // eslint-disable-next-line require-yield
  close = Promise.coroutine(function* () {
    app.close();
  });
}

module.exports = BaseApp;
