<template lang="html">
   <Panel title="新链宝L19041518001" :class="$style.panel">
   		<section :class="$style.content">
   			<div :class='$style.list'>
   				<span>期限6个月</span>
   				<span>1,000起投</span>
   				<span>一次性还款</span>
   			</div>
   			<div :class='$style.Wroaio'>
   				<div :class="$style.radio">
   					<span>6.8%</span>
   					<span>协议利率</span>
   				</div>
   			</div>
   			<p>立即加入</p>
   			<canvas width="240" height="100"></canvas>
   		</section>
   </Panel>
</template>

<script>
	import Panel from '../core/panel.vue'
	export default {
		components:{
			Panel,
		}
	}
</script>

<style lang="scss" module>
	@import "../../assets/css/element.scss";
	.panel{
		@include panel;
		.content{
			@include flex;
			justify-content: center;
			align-items: center;
			.list{
				@include flex(row);
				padding-bottom: 60px;
				span{
					display: block;
					margin-left: 20px;
					padding: 10px 25px;
				    font-size: 29px;
				    border-radius: 15px;
				    color: #ffb31a !important;
				    border: 1px solid #ffb31a !important;
				}
			}
			.Wroaio{
				position: relative;
				width: 400px;
				height: 400px;
				border-radius: 50%;
				border: 5px solid #ff9500;
			}
			.radio{
				@include flex(column);
				justify-content: center;
				margin-left: 20px;
				margin-top: 20px;
				width: 360px;
				height: 360px;
				border-radius: 50%;
				background-color: #ff9500;
				text-align: center;
				span{
					font-size: 40px;
					color: #fff;
				}
				span:nth-child(1){
					font-size: 84px;
					padding-bottom: 20px;
				}
			}
			>p{
				@include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:5px);
				height: 90px;
				line-height: 90px;
				width: 590px;
				background-color: #ff9500;
				border: 1px solid #ff9500;
				font-size: 36px;
				margin: 40px auto 10px auto;
				color: #fff;
    			text-align: center;
        		box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
			}
		}
	}
</style>
