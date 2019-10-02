<template lang="html">
	<Panel title="白条福利" :class="$style.panel">
		<section :class="$style.content">
			<ul>
				<li>
					<img src="//www.xcjr.com/public/images/wechat_vs1/image/myaccount-ico1.png" alt="">
					<span>充值</span>
				</li>
				<li>
					<img src="//www.xcjr.com/public/images/wechat_vs1/image/myaccount-ico2.png" alt="">
					<span>提现</span>
				</li>
			</ul>
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
			ul{
				@include flex(row);
				
				li{
					@include flex(row);
					justify-content: center;
					align-items: center;
					width: 50%;
					height: 50px;
					line-height: 50px;
					box-sizing: border-box;
				    border-right: 1px solid rgba(218, 226, 242, 0.8);
				    text-align: center;
				    span{
				    	margin-left: 25px;
				    	display: inline-block;
				    	font-size: 30px;
				    	text-align: center;

				    }
				}
			}
		}
	}
</style>
