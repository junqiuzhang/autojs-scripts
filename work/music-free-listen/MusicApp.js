const MusicApp = {
  name: '音乐',
  packageName: 'com.miui.player',
  selectors: {
    shouYe: text('首页'),
    mianFeiTing: text('免费听'),
    huoDeJiangLi: text('点击广告，免费听歌20分钟 | 退出'),
    yiHuoDeJiangLi: text('已获得免费听歌20分钟 | 退出'),
    dianJiYiXia: id('tme_ad_min_card_layout'),
    guanBiTanChuangAnNiu: desc('关闭弹窗按钮'),
  },
  bounds: {
    shouYe: [140, 2268, 219, 2347],
    mianFeiTing: [500, 2268, 579, 2347],
    huoDeShiChang: [336, 587, 743, 671],
    guanBiTanChuangAnNiu: [488, 1502, 593, 1607]
  }
};

module.exports = MusicApp;