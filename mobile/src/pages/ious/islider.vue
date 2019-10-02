<template lang="html">
	<Panel title="轮播图" :class="$style.panel">
		<section :class="$style.content">
			<div :class="$style.basics">
				<ul :class="$style.item">
					<li>
						<img src="//www.xcjr.com/public/images/userImg.png" alt="">
					</li>
					<li>贝壳会员</li>
					<li>1****2</li>
					<li>保守型</li>
				</ul>
			</div>
			<div :class="$style.money">
				<span>总资产(元)</span>
				<span>0.00</span>
			</div>
			<div :class="$style.show">
				<ul>
					<li>
						<span>账户余额(元)</span>
						<span>0.00</span>
					</li>
					<li>
						<span>出借资产(元)</span>
						<span>0.00</span>
					</li>
					<li>
						<span>累计收益(元)</span>
						<span>0.00</span>
					</li>
				</ul>
			</div>
		</section>
	</Panel>   
</template>

<script>
	import Panel from '../core/panel.vue'
	import Slider from '../core/slider.vue'
	export default {
		components: {
			Panel,
			Slider,
		},
	}
</script>

<style lang="scss" module>
	@import "../../assets/css/element.scss";
	.panel{
		@include panel;
		margin-top: -10px;
		>h4{
			display: none;
		}
		.content{
			height: 400px;
			background-color: #1469bd;
			.basics{
				.item{
					@include flex(row);
					width: 100%;
				    line-height: 50px;
				    font-size: 40px;
				    color: #FFFFFF;
				    text-align: center;
				    padding-top: 30px;
				    li:nth-child(1){
						img{
							margin-left: 40px;
							width: 60px;
							height: 50px;
							border-radius: 55px;
						}
					}
					li:nth-child(2){
						font-size: 24px;
						width: 140px;
						height: 50px;
						margin-left: 10px;
						background-color: #ff9500;
						border-radius: 55px;
						display: inline-block;
					}
					li:nth-child(3){
						margin-left: 25px;
					}
					li:nth-child(4){
						font-size: 24px;
						width: 140px;
						height: 50px;
						margin-left: 30px;
						background-color: #ff9500;
						border-radius: 55px;
						display: inline-block;
					};
				}
			}
			.money{
				@include flex(column);
				justify-content: center;
				align-items: center;
				width: 100%;
			    line-height: 25px;
			    font-size: 20px;
			    color: #FFFFFF;
			    text-align: center;
			    padding-top: 15px;
				span:nth-child(1){
					font-size: 28px;
    				padding-top: 40px;
				}
				span:nth-child(2){
					color: #ff9500;
				    font-size: 56px;
				    padding-top: 50px;
				}
			}
			.show{
				ul{
					@include flex(row);
					margin-top: 40px;
					li{
						@include flex(column);
						width: 32.5%;
						color: #fff;
    					text-align: center;
	    				border-right: 1px solid rgba(255, 255, 255, 0.8);
	    				span{
    					    line-height: 32px;
							font-size: 28px;
	    				}
	    				span:last-child{
	    					padding-top: 10px;
	    				}
					}
					li:last-child{
						border-right: 1px solid #1469bd;
					};
				}
				
			}
		}
	}
</style>
