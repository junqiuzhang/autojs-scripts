const BaseApp = require('../../common/BaseApp.js');

class AlipayApp extends BaseApp {
  constructor() {
    super({ name: '支付宝' });
  }
  clickWoDe() {
    return this.clickBounds([1236, 3000, 1356, 3120]);
  }
  clickZhiFuBaoHuiYuan() {
    return this.clickBounds([0, 580, 1440, 789]);
  }
  clickMeiRiQianDao() {
    return this.clickBounds([832, 744, 1063, 831]);
  }
}

module.exports = AlipayApp;
