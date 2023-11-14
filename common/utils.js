const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const waitFor = (func, timeout = 2000) => {
  return new Promise((resolve, reject) => {
    func(resolve);
    setTimeout(reject, timeout);
  });
};
const waitForExist = (selector, timeout = 2000, interval = 100) => {
  return waitFor(function* (resolve) {
    while (!selector.exists()) {
      yield delay(interval);
    }
    resolve();
  }, timeout);
};

module.exports = {
  delay,
  waitForExist,
};
