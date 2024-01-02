<template>
	<view class="antique-box">
		<view class="content-box">
			<view class="content-main">
					<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
						<u--form
								labelPosition="left"
								:model="state.model1"
								labelWidth="auto"
								:rules="state.rules"
								ref="form1"
						>
							<u-form-item
									label="省名"
									prop="userInfo.name"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.name"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="标识"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="三普"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="市名"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="县"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="名称"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="文物编码"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="别名"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="类别"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u--input
										v-model="state.model1.userInfo.area"
										border="none"
								></u--input>
							</u-form-item>
							<u-form-item
									label="现场拍照(提供照片,截图审核更快)"
									prop="userInfo.area"
									borderBottom
									ref="item1"
							>
								<u-upload
									:fileList="fileList1"
									@afterRead="afterRead"
									@delete="deletePic"
									name="1"
									multiple
									:maxCount="10"
								></u-upload>
							</u-form-item>
						</u--form>
						<u-button type="primary" @click="submit">提交</u-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	const state = reactive({
		showSex: false,
		model1: {
			userInfo: {
				name: '',
				sex: '',
			},
		},
		actions: [{
			name: '男',
			},
			{
				name: '女',
			},
			{
				name: '保密',
			},
		],
		rules: {
			'userInfo.name': {
				type: 'string',
				required: true,
				message: '请填写姓名',
				trigger: ['blur', 'change']
			},
			'userInfo.sex': {
				type: 'string',
				max: 1,
				required: true,
				message: '请选择男或女',
				trigger: ['blur', 'change']
			},
		},
		radio: '',
		switchVal: false
	})
	const form1 =ref(null)
	const sexSelect = (e) =>{
				state.model1.userInfo.sex = e.name
				form1.value.validateField('userInfo.sex')
	}
</script>

<style lang="scss" scoped>
	.antique-box{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background: $uni-bg-color;
		padding: 0 15px;
		.content-box{	
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding-top: 10px;
			background: $uni-bg-color;
			.content-main{
				width: 100%;
				height: 95%;	
				background:#fff;
				border-radius: $uni-border-radius;
				:deep(.u-form)	{
					padding: 20px;
					
				}
			}
		}
	}
</style>
