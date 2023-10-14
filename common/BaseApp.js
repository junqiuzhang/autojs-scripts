const { waitForSelector, clickCenter, longClickCenter } = require('./utils.js');
class BaseApp {
  constructor(name) {
    auto.waitFor();
    app.launchApp(name);
  }
  click = Promise.coroutine(function* (selector) {
    yield waitForSelector(selector);
    clickCenter(selector);
  });
  longClick = Promise.coroutine(function* (selector) {
    yield waitForSelector(selector);
    longClickCenter(selector);
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
