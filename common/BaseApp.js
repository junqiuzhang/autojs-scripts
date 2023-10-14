const {
  delay,
  waitForLaunch,
  waitForSelector,
  clickCenter,
  longClickCenter,
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
      return;
    }
    if (this.packageName) {
      app.launchPackage(this.packageName);
      yield waitForLaunch(this.packageName);
      return;
    }
  });
  // eslint-disable-next-line require-yield
  isCurrentApp = Promise.coroutine(function* () {
    return currentPackage() === this.packageName;
  });
  isExist = Promise.coroutine(function* (selector) {
    yield waitForSelector(selector);
    return selector.exists();
  });
  click = Promise.coroutine(function* (selector) {
    yield waitForSelector(selector);
    clickCenter(selector);
  });
  // eslint-disable-next-line require-yield
  clickBounds = Promise.coroutine(function* ([left, top, right, bottom]) {
    yield delay(2000);
    click((left + right) / 2, (top + bottom) / 2);
  });
  longClick = Promise.coroutine(function* (selector) {
    yield waitForSelector(selector);
    longClickCenter(selector);
  });
  // eslint-disable-next-line require-yield
  longClickBounds = Promise.coroutine(function* ([left, top, right, bottom]) {
    yield delay(2000);
    click(
      (left + device.width - right) / 2,
      (top + device.height - bottom) / 2
    );
  });
  scrollForward = Promise.coroutine(function* (selector) {
    yield waitForSelector(selector);
    selector.findOne().scrollForward();
  });
  scrollBackward = Promise.coroutine(function* (selector) {
    yield waitForSelector(selector);
    selector.findOne().scrollBackward();
  });
  close() {
    app.close();
  }
}

module.exports = BaseApp;
