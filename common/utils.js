const waitFor = (fn, timeout = 1000) =>
  new Promise((resolve, reject) => {
    fn(resolve, reject);
    setTimeout(reject, timeout);
  });

const waitForReTry = (fn, timeout = 1000, limit = 10) =>
  new Promise((resolve, reject) => {
    function attempt() {
      waitFor(fn, timeout)
        .then(resolve)
        .catch((error) => {
          if (limit === 0) {
            reject(error);
          } else {
            limit--;
            setTimeout(attempt, timeout);
          }
        });
    }
    attempt();
  });

const setUp = () => {
  setScreenMetrics(1080, 2400);
};

module.exports = {
  waitFor,
  waitForReTry,
  setUp,
};
