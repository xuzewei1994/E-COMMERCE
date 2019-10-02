<template lang="html">
	<Panel title="神卷满" :class="$style.panel">
		<section :class="$style.content">
			<p>立即登录</p>
			<img src="//www.xcjr.com/public/images/wechat_vs1/image/mallhome-banner-bg.png" alt="">
			<div :class='$style.integral'>
				<img src="//www.xcjr.com/public/images/wechat_vs1/image/home-centerNav-new05.png" alt="">
			</div>
		</section>
	</Panel>   
</template>

<script>
	import Panel from '../core/panel.vue'
	export default {
		components: {
			Panel,
		},
	}
</script>

<style lang="scss" module>
	@import "../../assets/css/element.scss";
	.panel{
		@include panel;
		>h4{
			display: none;
		}
		.content{
			img{
				width: 100%;
				height: 230px;
				display: block;
			}
			>p{
				position: absolute;
				@include btn($size:32px,$color:#fff,$bgcolor:#Ff9500,$padding:5px,$radius:35px);
				height: 64px;
				line-height: 64px;
				width: 260px;
			    left: 50%;
			    margin-left: -130px;
			    letter-spacing: 1px;
			    margin-top: 80px;
			    display: block;
			}
			.integral{
				z-index: 999;
				float: left;
				top: 0px;
				left: 0px;
				margin-top: -120px;
				width: 120px;
				height: 20px;
				border: 1px solid #000;
				top: 0px;
				left: 0px;
				img{
					z-index: 999;
					width: 200px;
					height: 200px;
					display: block;
				}
			}
		}

	}
</style>
