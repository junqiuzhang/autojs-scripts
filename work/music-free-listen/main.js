setScreenMetrics(1080, 2400);

const MusicApp = require('./MusicApp.js');

const main = Promise.coroutine(function* () {
  yield MusicApp.launch();
  console.log('launch app success');
  yield MusicApp.mianFeiTing.asyncClick();
  console.log('click 免费听 success');
  yield MusicApp.huoDeShiChang.asyncClick();
  console.log('click 获得时长 success');
  sleep(5000);
  yield MusicApp.dianJiGuangGao.asyncClick();
  console.log('click 点击一下，获得奖励 success');
  sleep(2000);
  yield MusicApp.launch();
  console.log('launch app success');
  yield MusicApp.guanBiGuangGao.asyncClick();
  console.log('click 关闭广告 success');
  yield MusicApp.guanBiTanChuangAnNiu.asyncClick();
  console.log('click 关闭弹窗按钮 success');
  console.log('done');
});

main().catch(console.log);
