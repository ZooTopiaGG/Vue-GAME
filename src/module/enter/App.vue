<template>
	<div id="app">
		<bg></bg>
		<begin></begin>
	</div>
</template>

<script>
	import Bg from 'components/Bg/Bg'
	import Begin from 'components/Begin/Begin'
	export default{
		name:'app',
		data(){
			return{
				
			}
		},
		components:{
			Begin,
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
	body{
		width: 100%;
		height: 100%;
		
	}
</style>