"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  _easycom_u_image2();
}
const _easycom_u_image = () => "../../../../../../uni_modules/uview-plus/components/u-image/u-image.js";
if (!Math) {
  _easycom_u_image();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      themeList: [
        {
          url: "https://gd-hbimg.huaban.com/cea4cda820fe5eb7ee4bb875e35d90ee04976249cc2d-x7IraO_fw1200webp",
          title: "北京大运河休闲主题游",
          address: "北京测绘院",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/0a522bc9c884f87e0a013668fa839099a680c43b16318-L3euJI_fw1200webp",
          title: "北京大运河休闲主题游",
          address: "北京测绘院",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/83eab3d801c857de1fdadcfc858e9beb954c9c1040e42-lVYgxX_fw1200webp",
          title: "北京大运河休闲主题游",
          address: "北京测绘院",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/d4cecd654ce7dc0e67cbfda0d9a2ccbbab2c81ca902d-bAskbg_fw480webp",
          title: "北京大运河休闲主题游",
          address: "北京测绘院",
          date: "2023-08-22"
        },
        {
          url: "https://gd-hbimg.huaban.com/d29db04cfb2552ed8e9e9092514a500c8723d56535063f-9OgAyH_fw480g",
          title: "北京大运河休闲主题游",
          address: "北京测绘院",
          date: "2023-08-22"
        }
      ]
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(state.themeList, (item, index, i0) => {
          return {
            a: "2caabdc4-0-" + i0,
            b: common_vendor.p({
              src: item.url,
              width: "90",
              height: "62.5",
              radius: "10"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.address),
            e: common_vendor.t(item.date),
            f: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/map/map/pages/index/cpns/layer-panel/cpns/theme-layer/index.vue"]]);
wx.createPage(MiniProgramPage);
