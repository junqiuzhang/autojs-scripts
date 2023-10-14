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
  return waitFor((resolve) => {
    selector.waitFor();
    resolve();
  }, timeout);
};
/**
 * @param {UiSelector} selector
 * @returns {boolean}
 */
const clickCenter = (selector) => {
  const rect = selector.findOne().bounds();
  return click(rect.centerX(), rect.centerY());
};
/**
 * @param {UiSelector} selector
 * @returns {boolean}
 */
const longClickCenter = (selector) => {
  const rect = selector.findOne().bounds();
  return longClick(rect.centerX(), rect.centerY());
};
module.exports = {
  delay,
  waitForSelector,
  waitForLaunch,
  clickCenter,
  longClickCenter,
};
