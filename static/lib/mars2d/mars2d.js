let leaflet = window.L //通过index.html的head引入
if (!leaflet && typeof exports === 'object') {
    leaflet = require("leaflet")//使用npm安装内置的leaflet
		require('leaflet/dist/leaflet.css')
}
if (!leaflet) {
  console.error('请引入leaflet库')
}
window['leaflet'] = leaflet

if (typeof exports === 'object') {
  module.exports = mars2d //node环境下导出
}
