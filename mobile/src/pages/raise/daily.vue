<template lang="html">
    <article class="">
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            enters: [{
                href: "download",
                img: "//www.xcjr.com/public/images/wechat_vs1/image/home-centerNav-new01.png",
                title: "兑换记录",
            }, {
                href: "download",
                img: "//www.xcjr.com/public/images/wechat_vs1/image/home-centerNav-new02.png",
                title: "积分抽奖",
            }, {
                href: "download",
                img: "//www.xcjr.com/public/images/wechat_vs1/image/home-centerNav-new03.png",
                title: "签到",
            }, {
                href: "download",
                img: "//www.xcjr.com/public/images/wechat_vs1/image/home-centerNav-new04.png",
                title: "积分规则",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../assets/css/element.scss";
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
