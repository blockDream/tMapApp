"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_sticky2 = common_vendor.resolveComponent("u-sticky");
  (_easycom_u_input2 + _easycom_u_tabs2 + _easycom_u_sticky2)();
}
const _easycom_u_input = () => "../../../../../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_tabs = () => "../../../../../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_sticky = () => "../../../../../../uni_modules/uview-plus/components/u-sticky/u-sticky.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_tabs + _easycom_u_sticky)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      tabsList: [{
        name: "全市区"
      }, {
        name: "朝阳"
      }, {
        name: "海淀"
      }, {
        name: "东城"
      }, {
        name: "西城"
      }, {
        name: "昌平"
      }]
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "查找地图",
          prefixIcon: "search",
          prefixIconStyle: "font-size: 22px;color: #909399",
          shape: "circle",
          suffixIcon: "mic",
          suffixIconStyle: "font-size: 22px;color:#6CA7F8"
        }),
        b: common_vendor.p({
          lineWidth: "20",
          lineHeight: "0",
          list: state.tabsList,
          activeStyle: {
            color: "white",
            background: " rgba(81, 151, 247, 1);",
            padding: "5px 15px",
            borderRadius: "20px",
            transform: "scale(1.05)"
          },
          inactiveStyle: {
            color: "#606266",
            transform: "scale(1)"
          },
          itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
        }),
        c: common_vendor.p({
          bgColor: "#fff"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/map/map/pages/index/cpns/layer-panel/cpns/standard-map/index.vue"]]);
wx.createPage(MiniProgramPage);
