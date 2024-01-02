<template>
	<view class="standard-map">
		<view class="search-box">
			<u-input
					placeholder="查找地图"
					prefixIcon="search"
					prefixIconStyle="font-size: 22px;color: #909399"
					shape="circle"
					suffixIcon="mic"
					suffixIconStyle="font-size: 22px;color:#6CA7F8"
				>
			</u-input>
		</view>
		<view class="tabs-box">
			<u-sticky bgColor="#fff">
				<u-tabs lineWidth="20"
						lineHeight="0" 
						:list="state.tabsList"
						:activeStyle="{
						color: 'white',
						background:' rgba(81, 151, 247, 1);',
						padding:'5px 15px',
						borderRadius:'20px',
						transform: 'scale(1.05)'
							}"
						:inactiveStyle="{
							color: '#606266',
							transform: 'scale(1)'
						}"
						itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
						
				</u-tabs>
			</u-sticky>
		</view>
		
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	const state = reactive({
		tabsList:[{
                    name: '全市区',
                }, {
                    name: '朝阳',
                }, {
                    name: '海淀'
                }, {
                    name: '东城'
                }, {
                    name: '西城'
                }, {
                    name: '昌平'
                }]
	})
	
</script>

<style lang="scss">
	.tabs__wrapper__nav__line{
		display: none;
	}
	.standard-map{
		width: 100%;
		.search-box{
			width: 90%;
			margin: 0 auto;
			:deep(.u-input){
					width: 90%;
				margin: 0 auto;
				border: none;
				background: #F7F8FB;
				margin-top: 10px;
			}
		}
		.tabs-box{
			:deep(.u-tabs){
				margin-top: 10px;
			}
		}
	
	
	}
	
</style>
