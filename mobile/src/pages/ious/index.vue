<template lang="html">
    <div>
        <Heador cname='iousHeader'/>
        <Slider/>
        <Welfare />
        <Service />
        <Login />
        <!-- <Footor /> -->
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./islider.vue"
import Welfare from './welfare.vue'
import Service from "./service.vue"
import Login from "./login.vue"
export default {
    components: {
        Heador,
        Slider,
        Footor,
        Navbar,
        Welfare,
        Service,
        Login
    },
}
</script>

<style>
    .iousHeader{
        display: none;
    }
</style>
