const AlipayApp = require('./AlipayApp.js');

const main = Promise.coroutine(function* () {
  const alipayApp = new AlipayApp();
  yield alipayApp.clickWoDe();
  yield alipayApp.clickZhiFuBaoHuiYuan();
  yield alipayApp.clickMeiRiQianDao();
});

main();
