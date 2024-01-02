<template>
	<view class="layer-panel">
		<view class="text-area">
			<view class="content-box">
				<view class="layer-item-box">
					<view class="item-box" :key="index" v-for="(item,index) in state.layerList" @click="handleClickItem(item)">
						<view class="img">
							<img class="pic" :src="getIconAssetURL(item.icon)"/>
							<!-- <i class="iconfont">{{item.icon}}</i> -->
						</view>
						<text class="title">{{item.name}}</text>
					</view>
				
				</view>
				<view class="layer-item-box">
				<view class="item-box" :key="index" v-for="(item,index) in state.layertwoList" @click="handleClicktwoItem(item)">
						<view class="img">
								<img class="pic" :src="getIconAssetURL(item.icon)"/>
						</view>
						<text class="title">{{item.name}}</text>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import {getIconAssetURL} from '/utils/loadAssets.js'
	const state = reactive({
		layerList:[
			{
				id:1,
				name:'标准地图',
				icon:'standard.png'
			},
			{
				id:2,
				name:'专题图层',
				icon:'subject.png'
			},
			{
				id:3,
				name:'图集图册',
				icon:'album.png'
			},
			{
				id:4,
				name:'时空照相馆',
				icon:'photo.png'
			},
		],
		layertwoList:[
			{
				id:5,
				name:'我是测绘师',
				icon:'user.png'	
			},
			{
				id:6,
				name:'我是测绘师',
				icon:'\ue69e'
			},
			{
				id:7,
				name:'我是测绘师',
				icon:'\ue69e'
			},
			{
				id:8,
				name:'我是测绘师',
				icon:'\ue69e'
			},
		
		]
	})
	/**
	 * 
	 */
	const handleClickItem = (item)=>{
		switch (item.id) {
		
		    case 1:
		     uni.navigateTo({
		     	url: '/pages/index/cpns/layer-panel/cpns/standard-map/index'
		     });
			 break;
		    case 2:
				uni.navigateTo({
					url: '/pages/index/cpns/layer-panel/cpns/theme-layer/index'
				});
			 break;
		    case 3:
		     uni.navigateTo({
		     	url: '/pages/index/cpns/layer-panel/cpns/atlas/atlas'
		     });
		    break;
			case 4:
			 uni.navigateTo({
			 	url: '/pages/index/cpns/layer-panel/cpns/spacetimePhoto/spacetimePhoto'
			 });
			 break;
		    default:
		      break
		}
		
	}
	const handleClicktwoItem = (item)=>{
		switch (item.id) {
		    case 5:	
		    uni.navigateTo({
		    	url: '/pages/index/cpns/layer-panel/cpns/surveyor/surveyor'
		    });
			break;
		    default:
		      break
		}
	}
	
</script>
<style lang="scss" scoped>
	.layer-panel{
		width: 100%;
		height: 200px;
		box-sizing: border-box;
		.text-area {
			width: 100%;
			height: 200px;
			margin: 0 auto;
			
			.content-box{
				
				width: 100%;
				margin: 0 auto;
				margin-top: 10px;
				background: #fff;
				border-radius: 15px;
				.layer-item-box:nth-of-type(1){
					display: flex;
					justify-content: space-around;
					margin-bottom: 10px;
					padding-top: 10px;
					.item-box{
						width: 49px;
						text-align: center;
						&:nth-of-type(1){
							.img{
								background: linear-gradient(136.97deg, rgba(137, 103, 255, 1) 0%, rgba(186, 137, 255, 1) 100%);
							}
						}
						&:nth-of-type(2){
							.img{
								background: linear-gradient(137deg, rgba(249, 93, 81, 1) 0%, rgba(252, 179, 127, 1) 100%);
							}
						}
						&:nth-of-type(3){
							.img{
								background: linear-gradient(225deg, rgba(50, 88, 243, 1) 0%, rgba(86, 182, 253, 1) 100%);
							}
						}
						&:nth-of-type(4){
							.img{
								background: linear-gradient(210deg, rgba(254, 219, 117, 1) 0%, rgba(255, 199, 69, 1) 100%);
							}
						}
						.img{
							width: 49px;
							height: 49px;
							border-radius: 17.68px;
							display: flex;
							justify-content: center;
							align-items: center;
							.pic{
								width: 26px;
								height: 26px;
							}
							
						}
						.title{
							text-align: center;
							font-size: 9px;
							color: black;
						}
					}
				}
				.layer-item-box:nth-of-type(2){
					display: flex;
					justify-content:space-around;
					padding-bottom: 10px;
					.item-box{
						width: 49px;
						text-align: center;
						&:nth-of-type(1){
							.img{
							background: linear-gradient(136.97deg, rgba(20, 188, 209, 1) 0%, rgba(0, 186, 173, 1) 100%);
							}
						}
						&:nth-of-type(2){visibility: hidden;}
							&:nth-of-type(3){visibility: hidden;}
								&:nth-of-type(4){visibility: hidden;}
						.img{
							width: 49px;
							height: 49px;
							border-radius: 17.68px;
							display: flex;
							justify-content: center;
							align-items: center;
							.pic{
								width: 26px;
								height: 26px;
							}
							
						}
						.title{
							text-align: center;
							font-size: 9px;
							color: black;
						}
					}
				}
			}
		}
	}
</style>