<template lang="html">
	<div :class="[$style.header,cname]">
		<span :class="$style.left">
			<em>注册</em>&nbsp;|&nbsp;<em>登录</em>
		</span>
		<btn :class="$style.btnDownload">APP下载</btn>
	</div>
</template>

<script>
import btn from "../core/btn.vue"
export default {
	components: {
		btn,
	},
	props:{
		cname:{
			type:String,
			default:''
		},
	},
}
</script>

<style lang="scss" module>
  .header{
  	position:relative;
  	top: 0px;
	left: 0px;
	color: #666;
	height: 100px;
	line-height: 100px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	font-size: 32px;
	background: #fff url(https://www.xcjr.com/public/images/wechat_vs1/img/logo-big.jpg) center center no-repeat;
	background-size: auto 50%;
	z-index: 100;
	.left{
	  font-size: 28px;
	  height: 30px;
	  line-height: 30px;
	  margin: 17px 0 0 18px;
	}
	img{
		position: absolute;
		top: 15px;
		left: 250px;
		width: 150px;
		height: 70px;
	}
	.btnDownload{
	  float: right;
	  font-size: 24px;
	  border-width: 0;
	  height: 56px;
	  line-height: 56px;
	  min-width: 120px;
	  padding: 0;
	  border-radius: 4px;
	  margin: 28px 24px 0 0;
	}
  }
</style>
