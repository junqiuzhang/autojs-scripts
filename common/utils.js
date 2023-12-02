const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(true), ms));

const waitFor = (fn, timeout = 1000) =>
  new Promise((resolve) => {
    fn(resolve);
    setTimeout(() => resolve(false), timeout);
  });

const waitForReTry = Promise.coroutine(function* (
  fn,
  timeout = 1000,
  limit = 10
) {
  while (limit > 0) {
    const result = yield waitFor(fn, timeout);
    if (result) {
      return true;
    }
    limit--;
  }
  return false;
});

const setUp = () => {
  setScreenMetrics(1080, 2400);
};

module.exports = {
  delay,
  waitFor,
  waitForReTry,
  setUp,
};
