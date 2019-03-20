// if ad-blocker plugin is on the file will not execute. [reason: file name adframe is blocked by ad blockers]
initVdo({
  desktop : {
    show : true,
    width: 419,
    height: 236,
    leftOrRight: {
      position : "left",
      margin : 15
    },
  },
  mobile : {
    show : true,
    width: 352,
    height: 198,
    leftOrRight: {
      position : "left",
      margin : 15
    },
},
  cancelTimeout : 60 * 1000,
  id: 'vdo_ai_' + Math.ceil(Math.random() * 9999999),
  muted: true,
  bottomMargin : 15,
  playsinline: true,
  autoplay: true,
  preload: true,
  sources: [{
    src: window.location.protocol + "//s.vdo.ai/sample/" + Math.ceil(Math.random() * 40) + ".mp4",
    type: "video/mp4"
  }],
  show_on: 'ads-ad-started', // 'ready', 'ads-ad-started'     -->     [to show player on certain event]
  adTagUrl: window.location.protocol + "//vdo.ai/core/w3layouts/ads_vmap.php",
  path: window.location.protocol + "//vdo.ai/core/w3layouts/adframe.js?k=4er"
});
