<template>
	<view class="spacetime-photo">
		<view class="spacetime-photo-one">
			<view class="content-item-one" :key="index" v-for="(item,index) in state.photoList">
				<view class="img-box">
						<img class="img" :src="item.url"/>
						<view class="title-box">
							<text class="title">{{item.name}}</text>
						</view>
				</view>
			
				
			</view>
		</view>
		<view class="spacetime-photo-two">
			<view class="content-item-two" :key="index" v-for="(item,index) in state.photoTwoList">
				<img class="img" :src="item.url"/>
				<view class="title-box">
					<text class="title">{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>	
import {ref,reactive} from 'vue'
 const state = reactive({
	 photoList:[
		 {
			 name:'五河交汇处',
			 url:'https://gd-hbimg.huaban.com/bc7475bc8d0adc6c21dac54596f3577e203d308b64057-2NahbP_fw480webp'
		 },
		 {
			 name:'城市绿心森林公园',
			 url:'https://gd-hbimg.huaban.com/581978bb91850d4149dc99abd330477daa318c631e4dc-Kve0Jf_fw480webp'
		 },
	 ],
	 photoTwoList:[
		 {
			 name:'全国连锁',
			 url:'https://gd-hbimg.huaban.com/aab4eb57e02a4b7759307cfc9df958660ea476524d1bf-KUQaNj_fw480webp'
		 },
		 {
			 name:'森林风筝节',
			url:'https://gd-hbimg.huaban.com/abe92c33fb66e2cf5f6467204903cef16e9b96b42d405-Dh5VDV_fw480webp'
		 },
	 ]
 })
</script>

<style lang="scss">
	.spacetime-photo{
		width: 100%;
		height: 100%;
		background: #f5f9fc ;
		.spacetime-photo-one{
			width: 100%;
			height: 280px;
			display: flex;
			justify-content: space-evenly;
			margin: 20px 0;
			.content-item-one{
				width: 42.5%;
				height: 280px;
				border-radius: 15px;
				position: relative;
				.img-box{
					width: 100%;
					height: 100%;
					.img{
						width: 100%;
						height: 100%;
						border-radius: 15px;
					}
					.title-box{
						position: absolute;
						bottom: 50px;
						left:20px;
						.title{
							font-size: 18px;
							font-weight: 500;
							letter-spacing: 0px;
							line-height: 28.8px;
							color: rgba(255, 255, 255, 1);
							text-align: left;
							vertical-align: top;
						}
					}
				}
				
				
			}
		}
		.spacetime-photo-two{
			width: 100%;
			height: 280px;
			display: flex;
			justify-content: space-evenly;
			.content-item-two{
				width: 42.5%;
				height: 280px;
				border-radius: 15px;
				position: relative;
				.img{
					width: 100%;
					height: 100%;
					border-radius: 15px;
				}
				.title-box{
					position: absolute;
					bottom: 50px;
					left:20px;
					.title{
						font-size: 18px;
						font-weight: 500;
						letter-spacing: 0px;
						line-height: 28.8px;
						color: rgba(255, 255, 255, 1);
						text-align: left;
						vertical-align: top;
					}
				}
			}
		}
		
	}
</style>
