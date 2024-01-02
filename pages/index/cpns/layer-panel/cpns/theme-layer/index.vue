<template>
	<view class="theme-layer">
		<view class="content-box">
			<view class="content-item" :key="index" v-for="(item,index) in state.themeList">
				<view class="item-left">
					<u-image :src="item.url" width="90" height="62.5" radius="10"/>
				</view>
				<view class="item-right">
					<view class="title">{{item.title}}</view>
					<view class="address">数据来源:{{item.address}}</view>
					<view class="time">发布时间:{{item.date}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	const state = reactive({
		themeList:[
			{
				url:'https://gd-hbimg.huaban.com/cea4cda820fe5eb7ee4bb875e35d90ee04976249cc2d-x7IraO_fw1200webp',
				title:'北京大运河休闲主题游',
				address:'北京测绘院',
				date:'2023-08-22',
			},
			{
				url:'https://gd-hbimg.huaban.com/0a522bc9c884f87e0a013668fa839099a680c43b16318-L3euJI_fw1200webp',
				title:'北京大运河休闲主题游',
				address:'北京测绘院',
				date:'2023-08-22',
			},
			{
				url:'https://gd-hbimg.huaban.com/83eab3d801c857de1fdadcfc858e9beb954c9c1040e42-lVYgxX_fw1200webp',
				title:'北京大运河休闲主题游',
				address:'北京测绘院',
				date:'2023-08-22',
			},
			{
				url:'https://gd-hbimg.huaban.com/d4cecd654ce7dc0e67cbfda0d9a2ccbbab2c81ca902d-bAskbg_fw480webp',
				title:'北京大运河休闲主题游',
				address:'北京测绘院',
				date:'2023-08-22',
			},
			{
				url:'https://gd-hbimg.huaban.com/d29db04cfb2552ed8e9e9092514a500c8723d56535063f-9OgAyH_fw480g',
				title:'北京大运河休闲主题游',
				address:'北京测绘院',
				date:'2023-08-22',
			}
		]
	})
</script>

<style lang="scss">
	.theme-layer{
		width: 100%;
		height: 100%;
		background: #f5f9fc ;
		.content-box{
			width: 100%;
			height: 100%;
			overflow-y: auto;
			.content-item{
				width: 90%;
				height: 60px;
				padding: 10px;
				border-radius: 10px;
				background: #fff;
				margin: 0 auto;
				margin-top: 15px;
				display: flex;
				
				.item-left{
					height: 100%;
					margin-right: 20px;
					.u-image{
						height: 100%;
					}
				}
				.item-right{
					height: 100%;
					// display: flex;
					// flex-direction: column;
					.title{
						font-size: 16px;
						color: black;
						margin-bottom: 2px;
					}
					.address{
						font-size: 14px;
						margin-bottom: 2px;
						color: darkgray;
					}
					.time{
						font-size: 14px;
						color: dimgray;
					}
				}
			}
		}
	}
</style>
