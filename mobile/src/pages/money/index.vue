<template lang="html">
    <div>
        <Heador cname='moneyHeader'/>
        <Ada/>
        <Finance/>
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Ada from "./ada.vue"
import Finance from "./finance.vue"
export default {
    components: {
        Heador,
        Ada,
        Finance,
        Footor,
        Navbar,
    },
}
</script>

<style lang="css">
    .moneyHeader{
        display: none;
    }
</style>
