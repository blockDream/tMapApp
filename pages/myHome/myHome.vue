<template>
	<view class="content">
		<!-- 上半部分 -->
		<view class="top-panel">
			<view class="header-img">
				<u-image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" width="60" height="60"></u-image>
			</view>
			<view class="header-name">Advens</view>
			<view class="btn-box">
				<view class="btn-item">
					<u-button color="#74A8F5" icon="level" iconSize="25" iconColor="#fff" size="mini" shape="circle" text="高级认证"></u-button>
				</view>
				<view class="btn-item">
					<u-button color="#74A8F5" icon="attach" iconSize="25" iconColor="#fff" size="mini" shape="circle" text="编辑资料"></u-button>
				</view>
			</view>
		</view>
		<!-- 下半部分 -->
		<view class="bottom-panel">
			<view class="list">
				<u-cell-group>
					<u-cell
						    title="我的上报"
						    isLink
						    url="/"
						>
						<template #icon>
								<u-icon name="order" color="#4A4A4A" size="28"></u-icon>
						</template>
					</u-cell>
					<u-cell
						    title="关于我们"
						    isLink
						    url="/"
						>
						<template #icon>
								<u-icon name="list-dot" color="#4A4A4A" size="28"></u-icon>
						</template>
					</u-cell>
				</u-cell-group>
			</view>
			
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.top-panel{
			height: 200px;
			background: linear-gradient(to right, #434DE8, #1895FA);
			display: flex;
			flex-direction: column;
			align-items: center;
			.header-img{
				margin-top: 20px;
			}
			.header-name{
				margin-top: 10px;
				font-size: 20px;
				color: #fff;
				font-weight: 450;
			}
			.btn-box{
				margin-top: 10px;
				display: flex;
				justify-content: center;
				.btn-item{
					margin-right: 10px;
				}
				.u-button{
					margin: 0  10px;
				}
			}
		}
		.bottom-panel{
			flex: 1;
			width: 100%;
			height: calc(100% - 400px);
			background: rgb(250, 250, 250);
			.list{
				width: 95% !important;
				height: 150px;
				margin: 0 auto;
				margin-top: 10px;
				border-radius: 15px;
				background: #fff;
				border: 1px solid #FEFEFF ;
			}
		}
	}
</style>
