<template lang="html">
	<Panel title="金融头条" :class="$style.panel">
		<section :class="$style.content">
			<swiper :options="options">
				<swiper-slide>朱** 抽中了50积分<em>></em> </swiper-slide>
				<swiper-slide>1********** 抽中了20积分<em>></em> </swiper-slide>
				<swiper-slide>小** 抽中了20积分<em>></em> </swiper-slide>
			</swiper>
		</section>
	</Panel>   
</template>

<script>
	import Panel from '../core/panel.vue'
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	export default {
		components: {
			Panel,
			swiper,
			swiperSlide
		},
		data() {
			return {
				options:{
					autoplay:true,
					loop:true,
					direction:'vertical',
				}
			}
		}
	}
</script>

<style lang="scss">
    .swiper-container-vertical{
        height: 72px;
        .swiper-slide{
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            em{
                color: #ddd;
                float: right;
                margin-right: 20px;
            }
        }
    }
</style>

<style lang="scss" module>
	@import "../../assets/css/element.scss";
	.panel{
		border-top: 1px solid #ddd;
		@include panel;
		margin-top: -20px;
		>h4{
			display: none;
		}
		.content{
			text-align: center;
			height: 72px;
			line-height: 72px;
			overflow: hidden;
		}
	}
</style>
