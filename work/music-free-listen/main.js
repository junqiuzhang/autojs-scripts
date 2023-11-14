const { delay } = require('../../common/utils.js');
const Robot = require('../../common/Robot.js');
const MusicApp = require('./MusicApp.js');

const robot = new Robot({});
const main = Promise.coroutine(function* () {
  app.launchPackage(MusicApp.packageName);
  console.log('launch app success');
  yield robot.clickBoundsAsync(MusicApp.bounds.mianFeiTing);
  console.log('click 免费听 success');
  yield robot.clickBoundsAsync(MusicApp.bounds.huoDeShiChang);
  console.log('click 获得时长 success');
  yield delay(7000);
  if (robot.isExist(MusicApp.selectors.dianJiYiXia)) {
    robot.clickSelector(MusicApp.selectors.dianJiYiXia);
    console.log('click 点击一下，获得奖励 success');
    yield delay(2000);
    app.launchPackage(MusicApp.packageName);
    console.log('launch app success');
    yield delay(2000);
    back();
    console.log('back success');
    yield robot.clickBoundsAsync(MusicApp.bounds.guanBiTanChuangAnNiu);
    console.log('click 关闭弹窗按钮 success');
  }
  console.log('done');
});

main().catch(console.log);
