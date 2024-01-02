<template>
	<view class="leftlet-map">
		<!-- <v-leaflet class="content" ref="tdleafletwx"></v-leaflet> -->
	</view>
</template>

<script setup>
import { onMounted,ref } from "vue";
	var L = require('/wxcomponents/zhgeo/leafletwx.js')
	// import {createMap} from '/wxcomponents/zhgeo/base.map'
	// import {defaultIcons} from '/wxcomponents/zhgeo/config.js';
	// require('/wxcomponents/zhgeo/zhgeo.dom')
	const tdleafletwx = ref(null)
		onMounted(()=> {	
			// const container = tdleafletwx.value
			// let min_zoom = 0
			// let max_zoom = 30
			// let imageURL =
			//         "http://t4.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=f5c6e3cb59fa2c5c10a4279fa232d65c";
			// createMap(container,  {
			// 	minZoom: min_zoom,
			// 	maxZoom: max_zoom,
			//   }, function(map) {
			//   L.tileLayer(imageURL, { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }).addTo(map)
			//   map.setView([31.2969292,120.6212541], 0);
			// })
			// 天地图影像底图url
		// 	        const imageURL = "http://t0.tianditu.gov.cn/img_w/wmts?" +
		// 	              "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
		// 	              "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}" +
		// 	              "&tk=f5c6e3cb59fa2c5c10a4279fa232d65c";
		// 	        var tiandituyinxian = L.tileLayer(imageURL,{
		// 	              attribution: "stamen"
		// 	        });
		
		// 	tiandituyinxian.addTo(map)
		})
</script>

<style lang="scss" scoped>
	.leftlet-map{
		width: 100%;
		height: 100%;
		.content{
			width: 100%;
			height: 100%;
		}
	}
</style>

