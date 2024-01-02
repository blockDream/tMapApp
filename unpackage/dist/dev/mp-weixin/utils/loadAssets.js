"use strict";
const common_assets = require("../common/assets.js");
const getIconAssetURL = (image) => {
  var _a;
  const path = `../static/images/index/layerPanel/${image}`;
  const modules = /* @__PURE__ */ Object.assign({ "../static/images/index/layerPanel/album.png": common_assets.__vite_glob_0_0, "../static/images/index/layerPanel/eye.png": common_assets.__vite_glob_0_1, "../static/images/index/layerPanel/photo.png": common_assets.__vite_glob_0_2, "../static/images/index/layerPanel/standard.png": common_assets.__vite_glob_0_3, "../static/images/index/layerPanel/subject.png": common_assets.__vite_glob_0_4, "../static/images/index/layerPanel/user.png": common_assets.__vite_glob_0_5 });
  return (_a = modules[path]) == null ? void 0 : _a.default;
};
exports.getIconAssetURL = getIconAssetURL;
