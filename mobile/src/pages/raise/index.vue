<template lang="html">
    <div>
        <Heador cname='raiseHeader'/>
        <Ada />
        <Slider/>
        <Daily />
        <In />
        <!-- <More /> -->
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Ada from "./ada.vue"
import Slider from "./rslider.vue"
import Daily from "./daily.vue"
import In from "./in.vue"
import More from "./more.vue"
export default {
    components: {
        Heador,
        Ada,
        Slider,
        Daily,
        In,
        Footor,
        Navbar,
        More
        
    },
}
</script>

<style lang="scss">
  .raiseHeader{
    display: none;
  }
</style>
