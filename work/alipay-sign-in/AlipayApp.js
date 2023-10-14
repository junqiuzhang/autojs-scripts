const BaseApp = require('../../common/BaseApp.js');

class AlipayApp extends BaseApp {
  constructor() {
    super('支付宝');
  }
  clickWoDe() {
    return this.click(text('我的'));
  }
  clickZhiFuBaoHuiYuan() {
    return this.click(className('android.view.ViewGroup'));
  }
  clickMeiRiQianDao() {
    return this.click(text('每日签到'));
  }
}

module.exports = AlipayApp;
