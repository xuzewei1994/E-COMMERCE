<template lang="html">
	<Panel title="神卷满" :class="$style.panel">
		<section :class="$style.content">
			<img src="//www.xcjr.com/oss/image/bb48426a113f4f05821c2257ff5fe453.png" alt="">
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
		}
	}
</style>
