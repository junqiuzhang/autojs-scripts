const {
  delay,
  waitForLaunch,
  waitForExist,
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
  isLaunchedApp = Promise.coroutine(function* () {
    console.log('currentPackage', currentPackage());
    return currentPackage() === this.packageName;
  });
  launchApp = Promise.coroutine(function* () {
    if (this.name) {
      app.launchApp(this.name);
      return waitForLaunch(this.packageName);
    }
    if (this.packageName) {
      app.launchPackage(this.packageName);
      return waitForLaunch(this.packageName);
    }
    return false;
  });
  waitForLaunch = Promise.coroutine(function* () {
    return waitForLaunch(this.packageName);
  });
  waitForExist = Promise.coroutine(function* (selector) {
    return waitForExist(selector);
  });
  fastClick = Promise.coroutine(function* (selector) {
    selector.waitFor();
    selector.findOne().click();
  });
  clickSelector = Promise.coroutine(function* (selector) {
    if (yield waitForExist(selector)) {
      return clickSelector(selector);
    }
    return false;
  });
  clickBounds = Promise.coroutine(function* (bounds) {
    yield delay(2000);
    return clickBounds(bounds);
  });
  fastLongClick = Promise.coroutine(function* (selector) {
    selector.waitFor();
    selector.findOne().longClick();
  });
  longClick = Promise.coroutine(function* (selector) {
    if (yield waitForExist(selector)) {
      return longClickSelector(selector);
    }
    return false;
  });
  longClickBounds = Promise.coroutine(function* (bounds) {
    yield delay(2000);
    return longClickBounds(bounds);
  });
  scrollForward = Promise.coroutine(function* (selector) {
    if (yield waitForExist(selector)) {
      selector.findOne().scrollForward();
      return true;
    }
    return false;
  });
  scrollBackward = Promise.coroutine(function* (selector) {
    if (yield waitForExist(selector)) {
      selector.findOne().scrollBackward();
      return true;
    }
    return false;
  });
  close = Promise.coroutine(function* () {
    exit();
  });
}

module.exports = BaseApp;
