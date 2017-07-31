<template>
	<div id="app">
		<bg></bg>
		<number :to-data='allDatas.index'></number>
		<countdown></countdown>
		<funmap></funmap>
		<questions :to-data='allDatas.question'></questions>
		<anwser :to-data='allDatas'></anwser>
	</div>
</template>

<script>
	/*
	 分为5个组件 分别是
	 	序号Number.vue
	 	倒计时Countdown.vue
	 	趣味图 Funmap.vue
	 	趣味问题 Questions.vue
	 	答案 Anwser.vue
	 * */
	import Bg from 'components/Bg/Bg'
	import Number from 'components/Play/Number'
	import Countdown from 'components/Play/Countdown'
	import Funmap from 'components/Play/Funmap'
	import Questions from 'components/Play/Questions'
	import Anwser from 'components/Play/Anwser'
	
	var allData = {
		question:'第7个问题',
		anwser:[
			{
				ans:'第7个问题的答案1',
				state:false
			},
			{
				ans:'第7个问题的答案2',
				state:true
			},
			{
				ans:'第7个问题的答案3',
				state:false
			},
			{
				ans:'第7个问题的答案4',
				state:false
			},
		],
		index:6
	}
	
	export default{
		name:'app',
		data(){
			return{
				allDatas:allData
			}
		},
		components:{
			Number,
			Countdown,
			Funmap,
			Questions,
			Anwser,
			Bg
		}
	}
</script>

<style>
	#app {
	    font-family: 'Avenir', Helvetica, Arial, sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	  	color: #000;
	  	padding: 0.15rem 0.3rem;
	}
</style>