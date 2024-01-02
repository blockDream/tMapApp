"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_image2 + _easycom_u_button2 + _easycom_u_icon2 + _easycom_u_cell2 + _easycom_u_cell_group2)();
}
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_cell = () => "../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_image + _easycom_u_button + _easycom_u_icon + _easycom_u_cell + _easycom_u_cell_group)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      src: "https://cdn.uviewui.com/uview/album/1.jpg",
      shape: "circle",
      width: "60",
      height: "60"
    }),
    b: common_vendor.p({
      color: "#74A8F5",
      icon: "level",
      iconSize: "25",
      iconColor: "#fff",
      size: "mini",
      shape: "circle",
      text: "高级认证"
    }),
    c: common_vendor.p({
      color: "#74A8F5",
      icon: "attach",
      iconSize: "25",
      iconColor: "#fff",
      size: "mini",
      shape: "circle",
      text: "编辑资料"
    }),
    d: common_vendor.p({
      name: "order",
      color: "#4A4A4A",
      size: "28"
    }),
    e: common_vendor.p({
      title: "我的上报",
      isLink: true,
      url: "/"
    }),
    f: common_vendor.p({
      name: "list-dot",
      color: "#4A4A4A",
      size: "28"
    }),
    g: common_vendor.p({
      title: "关于我们",
      isLink: true,
      url: "/"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-82927f4c"], ["__file", "D:/map/map/pages/myHome/myHome.vue"]]);
wx.createPage(MiniProgramPage);
