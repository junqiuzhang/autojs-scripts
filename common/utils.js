const waitForSelector = (selector, timeout = 2000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
    selector.waitFor();
    resolve();
  });
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
  waitForSelector,
  clickCenter,
  longClickCenter,
};
