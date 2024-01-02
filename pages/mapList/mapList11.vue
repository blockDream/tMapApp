<template>
	<view style="width: 100%;height: 100vh;">
		<view id="mapDiv"></view>
	</view>
</template>
<script>
	import T from '/static/tapi/map.js'
	export default {
		data() {
			return {
				map: ''
			}
		},
		mounted() {
 
			// var T = T;
			var imageURL = 'http://t0.tianditu.gov.cn/img_w/wmts?' +
				'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
				'&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=f5c6e3cb59fa2c5c10a4279fa232d65c';
			var lay = new T.TileLayer(imageURL, {
				minZoom: 1,
				maxZoom: 16
			});
			var config = {
				layers: [lay]
			};
 
			this.map = new T.Map('mapDiv', config); // 地图实例
			this.map.centerAndZoom(new T.LngLat(116.40769, 39.89945), 16);
		
			// //允许鼠标双击放大地图
			this.map.enableScrollWheelZoom();
 
			//创建地图图层对象
			let mapTypeSelect = [{
					'title': '地图', //地图控件上所要显示的图层名称
					'icon': 'http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png', //地图控件上所要显示的图层图标（默认图标大小80x80）
					'layer': window.TMAP_NORMAL_MAP //地图类型对象，即MapType。
				},
				{
					'title': '卫星',
					'icon': ' http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png',
					'layer': window.TMAP_SATELLITE_MAP
				}, {
					'title': '卫星混合',
					'http': 'api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png',
					'layer': 'TMAP_HYBRID_MAP'
				}, {
					'title': '地形',
					'icon': ' http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png',
					'layer': window.TMAP_TERRAIN_MAP
				},
				{
					'title': '地形混合',
					'icon': ' http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png',
					'layer': window.TMAP_TERRAIN_HYBRID_MAP
				}
			];
			var ctrl = new T.Control.MapType({
				mapTypes: mapTypeSelect
			}); // 初始化地图类型选择控件
 
			this.map.addControl(ctrl); //添加地图选择控件
 
			this.map.setMapType(window.TMAP_HYBRID_MAP); // 设置地图位地星混合图层
 
		},
		methods: {
		}
	}
</script>
<style lang="scss">
	#mapDiv{
			width: 100%;
			height: 100%;
	}
</style>