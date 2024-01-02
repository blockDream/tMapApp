"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const _sfc_main = {
  __name: "spacetimePhoto",
  setup(__props) {
    const state = common_vendor.reactive({
      photoList: [
        {
          name: "五河交汇处",
          url: "https://gd-hbimg.huaban.com/bc7475bc8d0adc6c21dac54596f3577e203d308b64057-2NahbP_fw480webp"
        },
        {
          name: "城市绿心森林公园",
          url: "https://gd-hbimg.huaban.com/581978bb91850d4149dc99abd330477daa318c631e4dc-Kve0Jf_fw480webp"
        }
      ],
      photoTwoList: [
        {
          name: "全国连锁",
          url: "https://gd-hbimg.huaban.com/aab4eb57e02a4b7759307cfc9df958660ea476524d1bf-KUQaNj_fw480webp"
        },
        {
          name: "森林风筝节",
          url: "https://gd-hbimg.huaban.com/abe92c33fb66e2cf5f6467204903cef16e9b96b42d405-Dh5VDV_fw480webp"
        }
      ]
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(state.photoList, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.name),
            c: index
          };
        }),
        b: common_vendor.f(state.photoTwoList, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.name),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/map/map/pages/index/cpns/layer-panel/cpns/spacetimePhoto/spacetimePhoto.vue"]]);
wx.createPage(MiniProgramPage);
