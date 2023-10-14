const AlipayApp = require('./AlipayApp.js');

const alipayApp = new AlipayApp();
const main = Promise.coroutine(function* () {
  yield alipayApp.launchApp();
  yield alipayApp.clickWoDe();
  yield alipayApp.clickZhiFuBaoHuiYuan();
  yield alipayApp.clickMeiRiQianDao();
});

main().catch(console.log);
