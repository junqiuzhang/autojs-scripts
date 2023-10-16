const { delay } = require('../../common/utils.js');
const MusicApp = require('./MusicApp.js');

const musicApp = new MusicApp();
const watchAd = Promise.coroutine(function* () {
  // Ad can click after 5s
  yield delay(5000);
  yield musicApp.clickAd();
  const clickYunXuResult = yield musicApp.clickYunXu();
  const isCurrentApp = yield musicApp.isLaunchedApp();
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
  yield musicApp.clickGuanBiTanChuangAnNiu();
});

main().catch(console.log);
