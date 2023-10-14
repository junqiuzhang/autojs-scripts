const BaseApp = require('../../common/BaseApp.js');

class MusicApp extends BaseApp {
  constructor() {
    super({ name: '音乐', packageName: 'com.miui.player' });
  }
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
    return this.click(id('button1'));
  });
  clickJuJue = Promise.coroutine(function* () {
    return this.click(id('button2'));
  });
  clickFanHui = Promise.coroutine(function* () {
    return this.clickBounds([24, 137, 125, 259]);
  });
  clickTuiChu = Promise.coroutine(function* () {
    return this.click(id('tme_ad_skip_button'));
  });
  clickZaiKanYiGe = Promise.coroutine(function* () {
    return this.clickBounds([388, 1692, 1053, 1811]);
  });
}

module.exports = MusicApp;
