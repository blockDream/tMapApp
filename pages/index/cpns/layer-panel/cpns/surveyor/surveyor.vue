<template>
	<view class="surveyor-box">
		<view class="content-box-one">
			<view class="content-item" :key="index" v-for="(item,index) in state.surveyorList" @click="handleClickItem(item)">
				<u-image width="50" height="50" radius="10" :src="item.url"></u-image>
				<text class="title">{{item.title}}</text>
			</view>
		</view>
		<view class="content-box-two">	
			<view class="content-item"  :key="index" v-for="(item,index) in state.surveyorListTwo" @click="handleClickItemTwo(item)">
				<u-image width="50" height="50" radius="10" :src="item.url"></u-image>
				<text class="title">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	const state = reactive({
		surveyorList:[
			{	
				id:1,
				url:'https://gd-hbimg.huaban.com/f3b623e0b4c4537979efaf054dd7bf6ffb3d32d4b28f-6mCNAj_fw480webp',
				title:'地名登记'
			},
			{
				id:2,
				url:'https://gd-hbimg.huaban.com/9217f66ccf6e2dc8fc14b3604a79db6e00f3092c8289-fpvXIW_fw480webp',
				title:'地址'
			},
			
		],
		surveyorListTwo:[
			{
				id:3,
				url:'https://cdn.uviewui.com/uview/swiper/3.jpg',
				title:'文旅'
			},
			{
				id:4,
				url:'https://gd-hbimg.huaban.com/2c31cc465b78f8f9efe4c3911448f4e0f6cb547b661d-OKX9Jw_fw480webp',
				title:'文物'
			}
		]
	})
	/**
	 * 点击地名地址
	 */
	const handleClickItem = (item)=>{
		if(item.id ==1){
			uni.navigateTo({
				url: '/pages/index/cpns/layer-panel/cpns/surveyor/cpns/place/place'
			})
		}else{
			uni.navigateTo({
				url: '/pages/index/cpns/layer-panel/cpns/surveyor/cpns/address/address'
			})
		}
	}
	/**
	 * 点击文旅文物
	 */
	const handleClickItemTwo = (item)=>{
		if(item.id ==3){
			uni.navigateTo({
				url: '/pages/index/cpns/layer-panel/cpns/surveyor/cpns/tourism/tourism'
			})
		}else{
			uni.navigateTo({
				url: '/pages/index/cpns/layer-panel/cpns/surveyor/cpns/antique/antique'
			})
		}
	}
	
</script>

<style lang="scss">
	.surveyor-box{
		width: 100%;
		height: 100%;
			padding: 10px;
		box-sizing: border-box;
		background: #f5f9fc ;
		.content-box-one{
			width: 100%;
			height: 110px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.content-item{
				width: 45%;
				height: 110px;
				box-sizing: border-box;
				border-radius: 15px;
				background: #fff;
				display: flex;
				align-items: center;
				
				padding: 15px;
					.title{
					margin-left: 10px;
				}
			}
		}
		.content-box-two{
			width: 100%;
			height: 110px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin-top: 15px;
			.content-item{
				width: 45%;
				height: 110px;
				box-sizing: border-box;
				border-radius: 15px;
				background: #fff;
				display: flex;
				align-items: center;
			
				padding: 15px;
					.title{
					margin-left: 10px;
				}
			}
		}
		
	}
</style>
