"use strict";
const rootUrl = "https://ssss.test03.qcw800.com";
const api = {
  // 登录
  login: {
    url: rootUrl + "/api/user/login",
    method: "GET"
  }
};
exports.api = api;
exports.rootUrl = rootUrl;
