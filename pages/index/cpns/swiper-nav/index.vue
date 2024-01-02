<template>
	<view class="swiper-nav-box">
		   <u-swiper
				:list="state.imgList"
				 indicator
				indicatorMode="line"
				circular
				:autoplay="true"
				radius="8"
				bgColor="#ffffff"
				height="170"
		    ></u-swiper>
	</view>
</template>

<script setup>
	import {reactive, ref} from 'vue'
	const state = reactive({
		imgList:[
			'https://gd-hbimg.huaban.com/706f0059812fb1f0ef5213557f59feab9593e71c12093a-LEWZKa_fw1200webp',
			'https://gd-hbimg.huaban.com/fc4a7a7762125f66b5c439782edcc1396d3d41821a8e4-lAlqfv_fw1200webp',
			'https://gd-hbimg.huaban.com/f8e614f34297198176b7649cfd9ebc9e5a2170bb25f42-9axQTg_fw1200webp',
		]
		// imgList:[
		// 	'@/static/images/index/swiperNav/swiper1.jpg',
		// 	'@/static/images/index/swiperNav/swiper2.jpg',
		// 	'@/static/images/index/swiperNav/swiper3.jpg'
		// ]
	})
</script>

<style lang="scss" scoped>
	.swiper-nav-box{
		width: 100%;
	}
</style>
