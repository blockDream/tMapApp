"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_input2 + _easycom_u_image2 + _easycom_u_button2)();
}
const _easycom_u_input = () => "../../../../../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_image = () => "../../../../../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_button = () => "../../../../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_image + _easycom_u_button)();
}
const _sfc_main = {
  __name: "atlas",
  setup(__props) {
    const state = common_vendor.reactive({
      themeList: [
        {
          url: "https://gd-hbimg.huaban.com/cea4cda820fe5eb7ee4bb875e35d90ee04976249cc2d-x7IraO_fw1200webp",
          title: "2022年北京影像图集",
          address: "包含全市域及各城区",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/0a522bc9c884f87e0a013668fa839099a680c43b16318-L3euJI_fw1200webp",
          title: "2022年北京影像图集",
          address: "包含全市域及各城区",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/83eab3d801c857de1fdadcfc858e9beb954c9c1040e42-lVYgxX_fw1200webp",
          title: "2022年北京影像图集",
          address: "包含全市域及各城区",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/d4cecd654ce7dc0e67cbfda0d9a2ccbbab2c81ca902d-bAskbg_fw480webp",
          title: "2022年北京影像图集",
          address: "包含全市域及各城区",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/d29db04cfb2552ed8e9e9092514a500c8723d56535063f-9OgAyH_fw480g",
          title: "2022年北京影像图集",
          address: "包含全市域及各城区",
          date: "2023-08-22"
        }
      ]
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "输入关键字查询",
          prefixIcon: "search",
          prefixIconStyle: "font-size: 22px;color: #909399",
          shape: "circle",
          suffixIcon: "mic",
          suffixIconStyle: "font-size: 22px;color:#6CA7F8"
        }),
        b: common_vendor.f(state.themeList, (item, index, i0) => {
          return {
            a: "17770432-1-" + i0,
            b: common_vendor.p({
              src: item.url,
              width: "90",
              height: "62.5",
              radius: "10"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.address),
            e: common_vendor.t(item.date),
            f: "17770432-2-" + i0,
            g: index
          };
        }),
        c: common_vendor.p({
          shape: "square",
          size: "mini",
          type: "primary",
          plain: true,
          ripple: true,
          ["ripple-bg-color"]: "#909399"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17770432"], ["__file", "D:/map/map/pages/index/cpns/layer-panel/cpns/atlas/atlas.vue"]]);
wx.createPage(MiniProgramPage);
