<template lang="html">
	<Panel title="退出登录" :class="$style.panel">
		<section :class="$style.content">
			 <router-link :to="{ name: 'home'}">
                    <p>退出当前账号</p>
                </router-link>
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
		background-color: #ddd;
		@include panel;
		>h4{
			display: none;
		}
		.content{
			p{
				@include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:5px);
				height: 100px;
				font-size: 38px;
				margin-left: 60px;
				line-height: 100px;
				width: 500px;
				background-color: #ff9500;
			}
		}
	}
</style>
