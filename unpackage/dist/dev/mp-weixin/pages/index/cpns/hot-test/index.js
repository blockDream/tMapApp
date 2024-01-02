"use strict";
const common_vendor = require("../../../../common/vendor.js");
const utils_loadAssets = require("../../../../utils/loadAssets.js");
require("../../../../common/assets.js");
if (!Array) {
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_sticky2 = common_vendor.resolveComponent("u-sticky");
  (_easycom_u_tabs2 + _easycom_u_sticky2)();
}
const _easycom_u_tabs = () => "../../../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_sticky = () => "../../../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
if (!Math) {
  (_easycom_u_tabs + _easycom_u_sticky)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const icon = common_vendor.ref("eye.png");
    let state = common_vendor.reactive({
      tabsList: [{
        name: "最新"
      }, {
        name: "最热"
      }],
      tabsNum: 0
    });
    common_vendor.ref(true);
    const handleClickTabs = (item) => {
      handleChangeSwipe({ detail: {
        current: item.index
      } });
    };
    const transition = (item) => {
    };
    const animationfinish = (item) => {
    };
    const reachBottom = (item) => {
    };
    const handleChangeSwipe = (e) => {
      state.tabsNum = e.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleClickTabs),
        b: common_vendor.p({
          list: common_vendor.unref(state).tabsList,
          lineHeight: "2",
          lineWidth: "40",
          lineColor: "rgba(21,11,71,1)",
          current: common_vendor.unref(state).tabsNum,
          activeStyle: {
            color: "rgba(21, 11, 71, 1);",
            fontWeight: "bold",
            transform: "scale(1.05)"
          },
          inactiveStyle: {
            color: "rgba(128, 128, 128, 1)",
            transform: "scale(1)"
          },
          itemStyle: " height: 34px;"
        }),
        c: common_vendor.unref(utils_loadAssets.getIconAssetURL)(icon.value),
        d: common_vendor.unref(utils_loadAssets.getIconAssetURL)(icon.value),
        e: common_vendor.o(reachBottom),
        f: common_vendor.unref(utils_loadAssets.getIconAssetURL)(icon.value),
        g: common_vendor.unref(utils_loadAssets.getIconAssetURL)(icon.value),
        h: common_vendor.o(reachBottom),
        i: common_vendor.unref(state).tabsNum,
        j: common_vendor.o(transition),
        k: common_vendor.o(animationfinish),
        l: common_vendor.o(handleChangeSwipe)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3c9aecc7"], ["__file", "D:/map/map/pages/index/cpns/hot-test/index.vue"]]);
wx.createComponent(Component);
