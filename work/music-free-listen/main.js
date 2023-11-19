const { setUp } = require('../../common/utils.js');
const App = require('../../common/app.js');
const MusicAppOptions = require('./MusicApp.js');

const main = Promise.coroutine(function* () {
  const MusicApp = new App(MusicAppOptions);

  yield MusicApp.waitForLaunch();

  if (MusicApp.guanBiLvZuanTanChuangAnNiu.exists()) {
    MusicApp.guanBiLvZuanTanChuangAnNiu.click();
  }

  yield MusicApp.mianFeiTing.waitForClick();
  yield MusicApp.kanShiPin.waitForClick();

  sleep(5000);

  yield MusicApp.dianJiGuangGao.waitForClick();

  sleep(2000);

  yield MusicApp.waitForLaunch();
  yield MusicApp.guanBiGuangGao.waitForClick();
  yield MusicApp.guanBiYiHuoDeJiangLiTanChuangAnNiu.waitForClick();

  console.log('done');
});

setUp();
main().catch(console.log);
