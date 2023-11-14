const {
  delay,
  waitForLaunch,
  waitForExist,
} = require('./utils.js');

class Robot {
  constructor({
    timeout = 2000,
  }) {
    this.timeout = timeout;
  }
  isLaunchApp = (appData) => {
    return currentPackage() === appData.packageName;
  };
  waitForLaunchApp = Promise.coroutine(function* (appData) {
    app.launchPackage(appData.packageName);
    return waitForLaunch(appData.packageName);
  });
  isExist = (selector) => {
    return selector.exists();
  };
  waitForExist = Promise.coroutine(function* (selector) {
    return waitForExist(selector);
  });
  clickSelector = (selector) => {
    const rect = selector.findOne().bounds();
    click(rect.centerX(), rect.centerY());
    return true;
  };
  clickSelectorAsync = Promise.coroutine(function* (selector) {
    if (yield waitForExist(selector)) {
      return this.clickSelector(selector);
    }
    return false;
  });
  clickBounds = ([left, top, right, bottom]) => {
    click((left + right) / 2, (top + bottom) / 2);
    return true;
  };
  clickBoundsAsync = Promise.coroutine(function* (bounds) {
    yield delay(2000);
    return this.clickBounds(bounds);
  });
  closeApp = Promise.coroutine(function* () {
    exit();
  });
}

module.exports = Robot;
