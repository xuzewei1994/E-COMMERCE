<template lang="html">
	<Panel title="导航条" :class="$style.panel">
		<ul :class="$style.content">
			<li>
                <router-link :to="{ name: 'home'}">
                    <i class="iconfont icon-huiyuan1"></i>
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'money'}">
                    <i class="iconfont icon-zijinguanli"></i>
                    <p>我要出借</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'raise'}">
                   <i class="iconfont icon-fuli"></i>
                    <p>会员福利</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'ious'}">
                    <i class="iconfont icon-gerenzhongxin"></i>
                    <p>我的</p>
                </router-link>
            </li>
		</ul>
	</Panel>
</template>

<script>
	import Panel from '../core/panel.vue';
	export default {
		components:{
			Panel,
		},
	}
</script>

<style lang="scss" module>
	// @import "~font-awesome/css/font-awesome.min.css";
	@import "../../assets/css/element.scss";
	.panel{
		@include panel;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100px;
		margin: 0;
		z-index: 999;
		>h4{
			display: none;
		}
		.content{
			@include flex(row);
			justify-content: space-around;
			li{
				text-align: center;
				a{
					text-decoration: none;
					color: #666;
				}
				i{
					font-size: 50px;
				}
				p{
					font-size: 22px;
					margin: 10px auto 10px;
				}
			}
		}
	}
</style>
