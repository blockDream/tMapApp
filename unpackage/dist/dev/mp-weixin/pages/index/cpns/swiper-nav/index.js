"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
if (!Math) {
  _easycom_u_swiper();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      imgList: [
        "https://gd-hbimg.huaban.com/706f0059812fb1f0ef5213557f59feab9593e71c12093a-LEWZKa_fw1200webp",
        "https://gd-hbimg.huaban.com/fc4a7a7762125f66b5c439782edcc1396d3d41821a8e4-lAlqfv_fw1200webp",
        "https://gd-hbimg.huaban.com/f8e614f34297198176b7649cfd9ebc9e5a2170bb25f42-9axQTg_fw1200webp"
      ]
      // imgList:[
      // 	'@/static/images/index/swiperNav/swiper1.jpg',
      // 	'@/static/images/index/swiperNav/swiper2.jpg',
      // 	'@/static/images/index/swiperNav/swiper3.jpg'
      // ]
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: state.imgList,
          indicator: true,
          indicatorMode: "line",
          circular: true,
          autoplay: true,
          radius: "8",
          bgColor: "#ffffff",
          height: "170"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-26e97d89"], ["__file", "D:/map/map/pages/index/cpns/swiper-nav/index.vue"]]);
wx.createComponent(Component);
