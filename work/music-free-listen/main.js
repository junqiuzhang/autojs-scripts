const { delay } = require('../../common/utils.js');
const MusicApp = require('./MusicApp.js');
const MAX_WATCH_AD_COUNT = 3;

const musicApp = new MusicApp();
const watchAd = Promise.coroutine(function* () {
  // Click ad after 5s
  yield delay(5000);
  yield musicApp.clickAd();
  yield musicApp.clickJiXuGuanKan();
  const clickYunXuResult = yield musicApp.clickYunXu();
  const isCurrentApp = yield musicApp.isCurrentApp();
  if (clickYunXuResult || !isCurrentApp) {
    yield musicApp.launchApp();
  }
  back();
});
const main = Promise.coroutine(function* () {
  yield musicApp.launchApp();
  yield musicApp.clickMianFeiTing();
  yield musicApp.clickHuoDeShiChang();
  yield watchAd();
  let count = 1;
  while (count < MAX_WATCH_AD_COUNT && (yield musicApp.clickZaiKanYiGe())) {
    yield watchAd();
    count++;
  }
});

main().catch(console.log);
