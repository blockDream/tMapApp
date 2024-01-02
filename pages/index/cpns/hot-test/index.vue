<template>
	<view class="tabs-box">
		<view class="tab">
			<u-sticky>
				 <u-tabs :list="state.tabsList" 
							lineHeight="2"
							lineWidth="40"
							lineColor="rgba(21,11,71,1)"
							:current="state.tabsNum"
							:activeStyle="{
								color: 'rgba(21, 11, 71, 1);',
								fontWeight: 'bold',
								transform: 'scale(1.05)'
							}"
							:inactiveStyle="{
								color: 'rgba(128, 128, 128, 1)',
								transform: 'scale(1)'
							}"
							itemStyle=" height: 34px;"
							 @click="handleClickTabs">
				 </u-tabs>
			</u-sticky>
		</view>
		<swiper 
			class="swiper-box" 
			:current="state.tabsNum" 
			@transition="transition"
			@animationfinish="animationfinish"
			@change="handleChangeSwipe">
			<swiper-item class="swiper-item" item-id="0">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<view class="tabs-item">
							<view class="item-box">
								<view class="img">
									<view class="num">
										<img class="pic" :src="getIconAssetURL(icon)"/>
										962</view>
									<img class="image" src="https://gd-hbimg.huaban.com/54b1860b14994a3791938341952f3528a4dede65212b4-NyM9Gk_fw480webp"  />
								</view>
								<!-- <text class="title">故宫</text> -->
							</view>
							<view class="item-box">
							<view class="img">
									<view class="num">
										<img class="pic" :src="getIconAssetURL(icon)"/>
										852</view>
									<img class="image" src="https://gd-hbimg.huaban.com/9cb9b7fe163b2d001bbd1f158b11a04b9ce20d2827c8f-Lbm19L_fw480webp" />
								</view>
								<!-- <text class="title">香山</text> -->
							</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item" item-id="1">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						 <view class="tabs-two" >
							 <view class="item-box">
								<view class="img">
									<view class="num">	<img class="pic" :src="getIconAssetURL(icon)"/>652</view>
									<img class="image" src="https://gd-hbimg.huaban.com/dd6c5552bf2dc483cd6af1512b1153516739797111493-NPtcWA_fw480webp" />
								</view>
								<!-- <text class="title">颐和园</text> -->
							 </view>
							 <view class="item-box">
							 	<view class="img">
									<view class="num">	<img class="pic" :src="getIconAssetURL(icon)"/>352</view>
							 		<img class="image" src="https://gd-hbimg.huaban.com/63e0cd4b8d3d2480cfecee73f686e11978ea081a6472-nReKNd_fw480webp"  />
							 	</view>
							 	<!-- <text class="title">天坛</text> -->
							 </view>
							
						
						 </view>
					
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
		import {getIconAssetURL} from '/utils/loadAssets.js'
		const icon =ref('eye.png')
	let state = reactive({
		tabsList: [{
	                name: '最新',
	            }, {
	                name: '最热',
	            }],
		tabsNum:0
	
	})
	const show = ref(true);
	//切换最新最热
	const handleClickTabs = (item)=>{
		handleChangeSwipe({detail:{
			current:item.index
		}})
		
	}
	//
	const transition = (item)=>{
		// state.tabsNum = item.timeStamp
	}
	const animationfinish = (item)=>{
	}
	const reachBottom = (item)=>{
	}
	const handleChangeSwipe = (e)=>{
		state.tabsNum = e.detail.current
	}
</script>

<style lang="scss" scoped>
	:deep(.u-tabs__wrapper__nav__line) {
	    width: 35px !important;
	}
	.tabs-box{
		flex: 1;
		width: 100%;
		height: calc(100% - 10px);
		margin-top: 10px;
		border-radius: 15px;
		.tab{
			height: 35px;
			border-bottom: 1px solid #eee;
			.u-sticky{
				// border-bottom: 1px solid #eee;
			}	
		}
		.swiper-box{
			height:calc(100% - 30px	);
			
		}
		.tabs-item{	
			height:calc(100% - 30px	);
			margin-top: 10px;
			display: flex;
			justify-content: space-around;
			// overflow-y: auto;
				.item-box{
					width: 167px;
					height:190px ;
					margin-top: 10px;
					text-align: center;
					.img{
						width: 100%;
						height: 100%;
						position: relative;
						.image{
							width: 100%;
							height: 100%;
							border-radius: 4px;
						}
						.num{
							position: absolute;
							right: 10px;
							top: 10px;
							display: flex;
							justify-content: center;
							align-items: center;
							color: rgba(255, 255, 255, 0.95);
							font-size: 8px;
							font-family: 'HUN-din';
							width: 40.03px;
							height: 16.15px;
							opacity: 1;
							border-radius: 2px;
							background: rgba(27, 27, 33, 0.2);
							.pic{
								width: 8.76px;
								height: 5.77px;
							}
						}
						// border-radius: 10px;
						// padding-bottom: 5px;
						// background-image: url('https://gd-hbimg.huaban.com/bea19b2d2eecfcb0b59d58b5065705b08ce54a3bb484-jXo283_fw1200webp');
						// background-repeat: no-repeat;
						// background-size: cover;
					}	
					.title{
						margin-top: 15px;
						text-align: center;
						font-size: 12px;
						color: black;
					}
				}
		
		}
		.tabs-two{
			margin-top: 10px;
			display: flex;
			height:calc(100% - 30px	);
			justify-content: space-around;
			.item-box{
				width: 167px;
				height:190px ;
				text-align: center;
				margin-top: 10px;
				.img{
					width: 100%;
					height: 100%;
					position: relative;
					.image{
						width: 100%;
						height: 100%;
						border-radius: 4px;
					}
					.num{
						position: absolute;
						right: 10px;
						top: 10px;
						display: flex;
						justify-content: center;
						align-items: center;
						color: rgba(255, 255, 255, 0.95);
						font-size: 8px;
						font-family: 'HUN-din';
						width: 40.03px;
						height: 16.15px;
						opacity: 1;
						border-radius: 2px;
						background: rgba(27, 27, 33, 0.2);
						.pic{
							width: 8.76px;
							height: 5.77px;
						}
						
					}
				}	
				.title{
					margin-top: 15px;
					text-align: center;
					font-size: 12px;
					color: black;
				}
			}
		}
	}
</style>