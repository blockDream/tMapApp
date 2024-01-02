<template>
	<view class="map-list">
		<view class="search-box">
			<u-input
					placeholder="查找地图"
					prefixIcon="search"
					class="input-style"
					prefixIconStyle="font-size: 22px;color: #909399"
					shape="circle"
					suffixIcon="mic"
					suffixIconStyle="font-size: 22px;color:#6CA7F8"
				>
			</u-input>
		</view>
		<view class="tabs-box">
			  <u-tabs :list="state.tabsList">
			        <template #right>
			            <view
			                style="padding-left: 4px;"
			                @tap="$u.toast('插槽被点击')"
			            >
			
			                <u-icon
			                        name="list"
			                        size="21"
			                        bold
			                ></u-icon>
			            </view>
			        </template>
			    </u-tabs>
		</view>
		<view class="leftlet-map-box">
			<web-view src="./cpns/map/map.html"></web-view>
			<!-- <leftlet-map /> -->
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import LeftletMap from './cpns/leftletMap/leftletMap.vue'
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
	.map-list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.search-box{
			width: 85%;
			margin: 0 auto;
			.input-style{
				margin-top: 10px;
				background: #F7F8FB;
			}
		}
		.leftlet-map-box{
			height: calc(100% - 50px );
			flex: 1;
			map{
				width: 100%;
				height: 100%;
			}
		}
	
	
	}
	
</style>
