<template lang="html">
    <div>
       <Heador cname='homeHeader'/>
       <Slider />
       <Borrow />
       <Money />
       <Footor />
       <Nvabar />
    </div>
</template>

<script>
	import Heador from '../public/header.vue'
	import Footor from '../public/footer.vue'
	import Nvabar from '../public/navbar.vue'
	import Slider from './hsilder.vue'
	import Borrow from './borrow.vue'
	import Money from './money.vue'
	
	export default {
		components:{
			Heador,
			Slider,
			Borrow,
			Money,
			Footor,
			Nvabar
		}
	}
</script>

<style lang="css">
	.homeHeader{
		display: none;
	}
</style>
