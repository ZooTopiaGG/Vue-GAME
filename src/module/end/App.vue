<template>
	<div id="app">
		<bg></bg>
		<end></end>
	</div>
</template>

<script>
	import Bg from 'components/Bg/Bg'
	import End from 'components/End/End'
	export default{
		name:'app',
		data(){
			return{
				
			}
		},
		components:{
			End,
			Bg
		}
	}
</script>

<style>
	#app {
	    font-family: 'Avenir', Helvetica, Arial, sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    text-align: center;
	  	color: #000;
	}
</style>