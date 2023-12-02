const MusicAppOptions = {
  appName: '音乐',
  packageName: 'com.miui.player',
  elements: [
    {
      name: 'shouYe',
      text: '首页',
      bounds: [0, 2247, 360, 2394],
    },
    {
      name: 'mianFeiTing',
      text: '免费听',
      bounds: [360, 2247, 720, 2394],
    },
    {
      name: 'woDe',
      text: '我的',
      bounds: [720, 2247, 1080, 2394],
    },
    {
      name: 'kanShiPin',
      bounds: [39, 940, 1041, 1046],
    },
    {
      name: 'guangGaoTiShi',
      id: 'tme_ad_tv_top_tips',
      textContains: '退出',
      bounds: [104, 152, 631, 214],
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
      name: 'guanBiGuangGaoWangYe',
      bounds: [94, 96, 199, 201],
    },
    {
      name: 'guanBiLvZuanTanChuangAnNiu',
      desc: '关闭弹窗按钮',
      id: 'iv_close_dialog_button',
      bounds: [482, 1744, 598, 1860],
    },
    {
      name: 'guanBiYiHuoDeJiangLiTanChuangAnNiu',
      desc: '关闭弹窗按钮',
      bounds: [488, 1502, 593, 1607],
    },
  ],
};

module.exports = MusicAppOptions;
