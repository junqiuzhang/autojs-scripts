const App = require('../../common/app.js');

const MusicApp = new App({
  appName: '音乐',
  packageName: 'com.miui.player',
  elements: [
    {
      name: 'shouYe',
      text: '首页',
      bounds: [140, 2268, 219, 2347],
    },
    {
      name: 'mianFeiTing',
      text: '免费听',
      bounds: [500, 2268, 579, 2347],
    },
    {
      name: 'woDe',
      text: '我的',
      bounds: [860, 2268, 939, 2347],
    },
    {
      name: 'huoDeShiChang',
      bounds: [336, 587, 743, 671],
    },
    {
      name: 'huoDeJiangLi',
      textContains: '免费听歌20分钟',
    },
    {
      name: 'yiHuoDeJiangLi',
      textContains: '已获得免费听歌20分钟',
      bounds: [336, 587, 743, 671],
    },
    {
      name: 'dianJiGuangGao',
      bounds: [59, 2135, 1021, 2266],
    },
    {
      name: 'guanBiGuangGao',
      desc: '关闭广告',
      bounds: [513, 152, 644, 214],
    },
    {
      name: 'guanBiTanChuangAnNiu',
      desc: '关闭弹窗按钮',
      bounds: [488, 1502, 593, 1607],
    },
  ],
});

module.exports = MusicApp;
