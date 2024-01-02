"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (SwiperNav + LayerPanel + HotTest)();
}
const SwiperNav = () => "./cpns/swiper-nav/index.js";
const LayerPanel = () => "./cpns/layer-panel/index.js";
const HotTest = () => "./cpns/hot-test/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/map/map/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
