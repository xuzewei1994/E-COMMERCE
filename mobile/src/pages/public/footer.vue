<template lang="html">
	 <Panel title="公司信息" :class="[$style.panel,cname]">
		<ul :class="$style.content">
			<li>
				<div>
					<img src="https://www.xcjr.com/public/images/wechat_vs1/img/aboutUs/sub1-3.png" alt="">
				</div>
			</li>
			<li>市场有风险，出借须谨慎</li>
			<li>客服电话：4008-210-237</li>
			<li>客服邮箱：customer@xcjr.com</li>
			<li>客服时间：工作日 8:30~17:30</li>
			<li>上海新城金融信息服务有限公司 沪ICP备15036017号</li>
		</ul>
	 </Panel>
</template>

<script>
	import Panel from "../core/panel.vue"
	export default {
		components: {
				Panel,
			},
			props: {
				cname: {
					type: String,
					default: "",
				},
			},
	}
</script>

<style lang="scss" module>
	@import "../../assets/css/element.scss";
	.panel{
		@include panel;
		margin-bottom: 100px;
		.content{
				background: #F5F5F5;
				li{
					width: 100%;
					text-align: center;
					color: #999;
						font-size: 24px;
						img{
							width: 100%;
							height: 175px;
						}
						&:nth-child(n+2){
							padding: 25px 0;
							height: 38px;
							line-height: 38px;
							border-top: 1px solid #ddd;
						}
				}
		}
	}
</style>
