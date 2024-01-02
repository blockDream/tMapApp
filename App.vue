<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
		
		},
		onHide: function() {
			console.log('App Hide')
		}
	
	}
		
</script>

<style lang="scss">
	@import '@/uni_modules/uview-plus/index.scss';
	
	/**
	 * 图标
	 */
	@import '@/static/iconfont/iconfont.css';
	/**
	 * 字体
	 */
	@import '@/static/fonts/font.scss';
	page {
	  height: 100%;
	}
	/*每个页面公共css */
</style>
