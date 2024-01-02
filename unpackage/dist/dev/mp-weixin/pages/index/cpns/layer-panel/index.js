"use strict";
const common_vendor = require("../../../../common/vendor.js");
const utils_loadAssets = require("../../../../utils/loadAssets.js");
require("../../../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      layerList: [
        {
          id: 1,
          name: "标准地图",
          icon: "standard.png"
        },
        {
          id: 2,
          name: "专题图层",
          icon: "subject.png"
        },
        {
          id: 3,
          name: "图集图册",
          icon: "album.png"
        },
        {
          id: 4,
          name: "时空照相馆",
          icon: "photo.png"
        }
      ],
      layertwoList: [
        {
          id: 5,
          name: "我是测绘师",
          icon: "user.png"
        },
        {
          id: 6,
          name: "我是测绘师",
          icon: ""
        },
        {
          id: 7,
          name: "我是测绘师",
          icon: ""
        },
        {
          id: 8,
          name: "我是测绘师",
          icon: ""
        }
      ]
    });
    const handleClickItem = (item) => {
      switch (item.id) {
        case 1:
          common_vendor.index.navigateTo({
            url: "/pages/index/cpns/layer-panel/cpns/standard-map/index"
          });
          break;
        case 2:
          common_vendor.index.navigateTo({
            url: "/pages/index/cpns/layer-panel/cpns/theme-layer/index"
          });
          break;
        case 3:
          common_vendor.index.navigateTo({
            url: "/pages/index/cpns/layer-panel/cpns/atlas/atlas"
          });
          break;
        case 4:
          common_vendor.index.navigateTo({
            url: "/pages/index/cpns/layer-panel/cpns/spacetimePhoto/spacetimePhoto"
          });
          break;
      }
    };
    const handleClicktwoItem = (item) => {
      switch (item.id) {
        case 5:
          common_vendor.index.navigateTo({
            url: "/pages/index/cpns/layer-panel/cpns/surveyor/surveyor"
          });
          break;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(state.layerList, (item, index, i0) => {
          return {
            a: common_vendor.unref(utils_loadAssets.getIconAssetURL)(item.icon),
            b: common_vendor.t(item.name),
            c: index,
            d: common_vendor.o(($event) => handleClickItem(item), index)
          };
        }),
        b: common_vendor.f(state.layertwoList, (item, index, i0) => {
          return {
            a: common_vendor.unref(utils_loadAssets.getIconAssetURL)(item.icon),
            b: common_vendor.t(item.name),
            c: index,
            d: common_vendor.o(($event) => handleClicktwoItem(item), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2def5a8e"], ["__file", "D:/map/map/pages/index/cpns/layer-panel/index.vue"]]);
wx.createComponent(Component);
