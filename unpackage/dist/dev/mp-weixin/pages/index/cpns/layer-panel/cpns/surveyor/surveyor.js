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
  __name: "surveyor",
  setup(__props) {
    const state = common_vendor.reactive({
      surveyorList: [
        {
          id: 1,
          url: "https://gd-hbimg.huaban.com/f3b623e0b4c4537979efaf054dd7bf6ffb3d32d4b28f-6mCNAj_fw480webp",
          title: "地名登记"
        },
        {
          id: 2,
          url: "https://gd-hbimg.huaban.com/9217f66ccf6e2dc8fc14b3604a79db6e00f3092c8289-fpvXIW_fw480webp",
          title: "地址"
        }
      ],
      surveyorListTwo: [
        {
          id: 3,
          url: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          title: "文旅"
        },
        {
          id: 4,
          url: "https://gd-hbimg.huaban.com/2c31cc465b78f8f9efe4c3911448f4e0f6cb547b661d-OKX9Jw_fw480webp",
          title: "文物"
        }
      ]
    });
    const handleClickItem = (item) => {
      if (item.id == 1) {
        common_vendor.index.navigateTo({
          url: "/pages/index/cpns/layer-panel/cpns/surveyor/cpns/place/place"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/index/cpns/layer-panel/cpns/surveyor/cpns/address/address"
        });
      }
    };
    const handleClickItemTwo = (item) => {
      if (item.id == 3) {
        common_vendor.index.navigateTo({
          url: "/pages/index/cpns/layer-panel/cpns/surveyor/cpns/tourism/tourism"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/index/cpns/layer-panel/cpns/surveyor/cpns/antique/antique"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(state.surveyorList, (item, index, i0) => {
          return {
            a: "6f97aadd-0-" + i0,
            b: common_vendor.p({
              width: "50",
              height: "50",
              radius: "10",
              src: item.url
            }),
            c: common_vendor.t(item.title),
            d: index,
            e: common_vendor.o(($event) => handleClickItem(item), index)
          };
        }),
        b: common_vendor.f(state.surveyorListTwo, (item, index, i0) => {
          return {
            a: "6f97aadd-1-" + i0,
            b: common_vendor.p({
              width: "50",
              height: "50",
              radius: "10",
              src: item.url
            }),
            c: common_vendor.t(item.title),
            d: index,
            e: common_vendor.o(($event) => handleClickItemTwo(item), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/map/map/pages/index/cpns/layer-panel/cpns/surveyor/surveyor.vue"]]);
wx.createPage(MiniProgramPage);
