<template>
	<view class="content">
		<!-- 轮播图 -->
			<swiper-nav/>
		<!-- 图层集合 -->
			<layer-panel/>
		<!-- 最新最热 -->
		<view class="hot-test">
			<hot-test/>
		</view>
	
	</view>
</template>

<script setup>	
	import SwiperNav from './cpns/swiper-nav/index.vue'
	import LayerPanel from './cpns/layer-panel/index.vue'
	import HotTest from './cpns/hot-test/index.vue'
</script>

<style lang="scss">
	.content {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background: #f5f9fc ;
		box-sizing: border-box;
		padding: 10px;
		.hot-test{
			height: calc(100% - 350px);
		}
	}
</style>
