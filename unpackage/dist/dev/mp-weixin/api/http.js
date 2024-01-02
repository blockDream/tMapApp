"use strict";
const common_vendor = require("../common/vendor.js");
function https(opts, data) {
  let httpDefaultOpts = {
    url: opts.url,
    data,
    method: opts.method,
    header: opts.method == "get" ? {
      "X-Requested-With": "XMLHttpRequest",
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    dataType: "json"
  };
  let token = common_vendor.index.getStorageSync("token");
  if (token != void 0 && token != null && token != "") {
    httpDefaultOpts.header.Authorization = "Bearer " + token;
  }
  let promise = new Promise(function(resolve, reject) {
    common_vendor.index.request(httpDefaultOpts).then(
      (res) => {
        if (res.statusCode == 401) {
          common_vendor.index.clearStorageSync();
        }
        resolve(res);
      }
    ).catch(
      (response) => {
        reject(response);
      }
    );
  });
  return promise;
}
exports.https = https;
