const BaseApp = require('../../common/BaseApp.js');

class MusicApp extends BaseApp {
  constructor() {
    super({ name: '音乐', packageName: 'com.miui.player' });
  }
  clickShouYe = Promise.coroutine(function* () {
    return this.clickBounds([187, 3025, 292, 3130]);
  });
  clickMianFeiTing = Promise.coroutine(function* () {
    return this.clickBounds([678, 3025, 762, 3109]);
  });
  clickHuoDeShiChang = Promise.coroutine(function* () {
    return this.clickBounds([449, 780, 992, 892]);
  });
  clickAd = Promise.coroutine(function* () {
    return this.clickBounds([79, 2846, 1361, 3021]);
  });
  clickYunXu = Promise.coroutine(function* () {
    return this.clickSelector(id('button1'));
  });
  clickJuJue = Promise.coroutine(function* () {
    return this.clickSelector(id('button2'));
  });
  clickZaiKanYiGe = Promise.coroutine(function* () {
    return this.clickBounds([388, 1692, 1053, 1811]);
  });
  clickGuanBiTanChuangAnNiu = Promise.coroutine(function* () {
    return this.clickBounds([650, 2003, 790, 2143]);
  });
}

module.exports = MusicApp;
