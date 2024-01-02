"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  (_easycom_u_input2 + _easycom_u_icon2 + _easycom_u_tabs2)();
}
const _easycom_u_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_icon + _easycom_u_tabs)();
}
const _sfc_main = {
  __name: "mapList",
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
          name: "list",
          size: "21",
          bold: true
        }),
        c: common_vendor.o(($event) => _ctx.$u.toast("插槽被点击")),
        d: common_vendor.p({
          list: state.tabsList
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/map/map/pages/mapList/mapList.vue"]]);
wx.createPage(MiniProgramPage);
