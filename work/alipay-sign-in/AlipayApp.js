const BaseApp = require('../../common/BaseApp.js');

class AlipayApp extends BaseApp {
  constructor() {
    super({ name: '支付宝' });
  }
  clickWoDe() {
    return this.click(text('我的'));
  }
  clickZhiFuBaoHuiYuan() {
    return this.clickBounds([0, 580, 1440, 789]);
  }
  clickMeiRiQianDao() {
    return this.click(text('每日签到'));
  }
}

module.exports = AlipayApp;
