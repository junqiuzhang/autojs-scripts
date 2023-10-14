const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const waitFor = (func, timeout = 2000) => {
  return new Promise((resolve) => {
    func(() => resolve(true));
    setTimeout(() => resolve(false), timeout);
  });
};
const waitForLaunch = (packageName, timeout = 2000) => {
  return waitFor(function* (resolve) {
    while (currentPackage() !== packageName) {
      yield delay(1000);
    }
    resolve();
  }, timeout);
};
const waitForSelector = (selector, timeout = 2000) => {
  return waitFor(function* (resolve) {
    while (!selector.exists()) {
      yield delay(100);
    }
    resolve();
  }, timeout);
};
/**
 * @param {UiSelector} selector
 * @returns {boolean}
 */
const clickSelector = (selector) => {
  const rect = selector.findOne().bounds();
  click(rect.centerX(), rect.centerY());
  return true;
};
/**
 * @param {[number, number, number, number]} selector
 * @returns {boolean}
 */
const clickBounds = ([left, top, right, bottom]) => {
  click((left + right) / 2, (top + bottom) / 2);
  return true;
};
/**
 * @param {UiSelector} selector
 * @returns {boolean}
 */
const longClickSelector = (selector) => {
  const rect = selector.findOne().bounds();
  longClick(rect.centerX(), rect.centerY());
  return true;
};
/**
 * @param {[number, number, number, number]} selector
 * @returns {boolean}
 */
const longClickBounds = ([left, top, right, bottom]) => {
  longClick((left + right) / 2, (top + bottom) / 2);
  return true;
};
module.exports = {
  delay,
  waitForSelector,
  waitForLaunch,
  clickSelector,
  clickBounds,
  longClickSelector,
  longClickBounds,
};
