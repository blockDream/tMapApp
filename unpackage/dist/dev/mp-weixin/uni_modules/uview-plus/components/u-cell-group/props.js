"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 分组标题
    title: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.cellGroup.title
    },
    // 是否显示外边框
    border: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.cellGroup.border
    }
  }
};
exports.props = props;
