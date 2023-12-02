const { delay, setUp } = require('../../common/utils.js');
const App = require('../../common/app.js');
const MusicAppOptions = require('./MusicApp.js');

const main = Promise.coroutine(function* () {
  const MusicApp = new App(MusicAppOptions);

  yield MusicApp.waitForLaunch();

  yield MusicApp.guanBiLvZuanTanChuangAnNiu.waitForClick();
  yield MusicApp.mianFeiTing.waitForClick();
  yield MusicApp.kanShiPin.waitForClick();

  let seconds = 5;
  yield MusicApp.guangGaoTiShi.waitForExists();
  const text = MusicApp.guangGaoTiShi.text();
  console.log(`text: ${text}`);
  if (text) {
    const match = text.match(/\d+/);
    if (match) {
      seconds = parseInt(match[0]);
    }
  }

  yield delay(seconds * 1000);
  yield MusicApp.dianJiGuangGao.waitForClick();

  if (!(yield MusicApp.guanBiGuangGaoWangYe.waitForClick())) {
    yield MusicApp.waitForLaunch();
    yield MusicApp.guanBiGuangGao.waitForClick();
  }

  yield MusicApp.guanBiYiHuoDeJiangLiTanChuangAnNiu.waitForClick();

  console.log('done');
});

setUp();
main().catch(console.log);
