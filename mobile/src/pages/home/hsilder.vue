<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <Panel title="金融头条" :class="$style.panel">
            <section :class="$style.content">
                <swiper :options="options">
                    <swiper-slide>2019年新城金融劳动节假期运营公告<em>更多></em> </swiper-slide>
                    <swiper-slide>签到领流量，1元500M！<em>更多></em> </swiper-slide>
                </swiper>
            </section>
        </Panel>   
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
import Panel from '../core/panel.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        Slider,
        Panel,
        swiper,
        swiperSlide
    },
    data() {
        return {
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320",
            }],
            options:{
                autoplay:true,
                loop:true,
                direction:'vertical',
            }
        }
    },
}
</script>

<style lang="scss" module>
    @import "../../assets/css/element.scss";
    .panel{
        @include panel;
        margin-top: 0px !important;
        >h4{
            display: none;
        }
    } 
    .slider{
        img{
          width: 100%;
    }
  }
</style>

<style lang="scss">
    .swiper-container-vertical{
        height: 72px;
        .swiper-slide{
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #FF9500;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 5px;
            margin-left: 20px;
            em{
                color: #ddd;
                float: right;
                margin-right: 40px;
            }
        }
    }
</style>

