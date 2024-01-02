"use strict";
const common_vendor = require("../../../../../../../../common/vendor.js");
if (!Array) {
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u__input2 + _easycom_u_form_item2 + _easycom_u_upload2 + _easycom_u__form2 + _easycom_u_button2)();
}
const _easycom_u__input = () => "../../../../../../../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../../../../../../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_upload = () => "../../../../../../../../uni_modules/uview-plus/components/u-upload/u-upload.js";
const _easycom_u__form = () => "../../../../../../../../uni_modules/uview-plus/components/u--form/u--form.js";
const _easycom_u_button = () => "../../../../../../../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u__input + _easycom_u_form_item + _easycom_u_upload + _easycom_u__form + _easycom_u_button)();
}
const _sfc_main = {
  __name: "address",
  setup(__props) {
    const state = common_vendor.reactive({
      showSex: false,
      model1: {
        userInfo: {
          name: "",
          sex: ""
        }
      },
      actions: [
        {
          name: "男"
        },
        {
          name: "女"
        },
        {
          name: "保密"
        }
      ],
      rules: {
        "userInfo.name": {
          type: "string",
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        },
        "userInfo.sex": {
          type: "string",
          max: 1,
          required: true,
          message: "请选择男或女",
          trigger: ["blur", "change"]
        }
      },
      radio: "",
      switchVal: false
    });
    const form1 = common_vendor.ref(null);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => state.model1.userInfo.name = $event),
        b: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.name
        }),
        c: common_vendor.sr("item1", "5469f418-1,5469f418-0"),
        d: common_vendor.p({
          label: "行政区域",
          prop: "userInfo.name",
          borderBottom: true
        }),
        e: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        f: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        g: common_vendor.sr("item1", "5469f418-3,5469f418-0"),
        h: common_vendor.p({
          label: "综合区域",
          prop: "userInfo.area",
          borderBottom: true
        }),
        i: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        j: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        k: common_vendor.sr("item1", "5469f418-5,5469f418-0"),
        l: common_vendor.p({
          label: "街路巷",
          prop: "userInfo.area",
          borderBottom: true
        }),
        m: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        n: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        o: common_vendor.sr("item1", "5469f418-7,5469f418-0"),
        p: common_vendor.p({
          label: "自然村",
          prop: "userInfo.area",
          borderBottom: true
        }),
        q: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        r: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        s: common_vendor.sr("item1", "5469f418-9,5469f418-0"),
        t: common_vendor.p({
          label: "小区",
          prop: "userInfo.area",
          borderBottom: true
        }),
        v: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        w: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        x: common_vendor.sr("item1", "5469f418-11,5469f418-0"),
        y: common_vendor.p({
          label: "建筑物",
          prop: "userInfo.area",
          borderBottom: true
        }),
        z: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        A: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        B: common_vendor.sr("item1", "5469f418-13,5469f418-0"),
        C: common_vendor.p({
          label: "单元",
          prop: "userInfo.area",
          borderBottom: true
        }),
        D: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        E: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        F: common_vendor.sr("item1", "5469f418-15,5469f418-0"),
        G: common_vendor.p({
          label: "楼层",
          prop: "userInfo.area",
          borderBottom: true
        }),
        H: common_vendor.o(($event) => state.model1.userInfo.area = $event),
        I: common_vendor.p({
          border: "none",
          modelValue: state.model1.userInfo.area
        }),
        J: common_vendor.sr("item1", "5469f418-17,5469f418-0"),
        K: common_vendor.p({
          label: "户室",
          prop: "userInfo.area",
          borderBottom: true
        }),
        L: common_vendor.o(_ctx.afterRead),
        M: common_vendor.o(_ctx.deletePic),
        N: common_vendor.p({
          fileList: _ctx.fileList1,
          name: "1",
          multiple: true,
          maxCount: 10
        }),
        O: common_vendor.sr("item1", "5469f418-19,5469f418-0"),
        P: common_vendor.p({
          label: "现场拍照(提供照片,截图审核更快)",
          prop: "userInfo.area",
          borderBottom: true
        }),
        Q: common_vendor.sr(form1, "5469f418-0", {
          "k": "form1"
        }),
        R: common_vendor.p({
          labelPosition: "left",
          model: state.model1,
          labelWidth: "auto",
          rules: state.rules
        }),
        S: common_vendor.o(_ctx.submit),
        T: common_vendor.p({
          type: "primary"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5469f418"], ["__file", "D:/map/map/pages/index/cpns/layer-panel/cpns/surveyor/cpns/address/address.vue"]]);
wx.createPage(MiniProgramPage);
