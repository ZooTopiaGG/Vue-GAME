<template>
	<div class="funMap">
		<div id="img">
			<img :src="src"/>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'funMap',
		data(){
			return {
				links:[
					'http://test2.lawyer-says.cn/images/09.png',
					'http://test2.lawyer-says.cn/images/10.png',
					'http://test2.lawyer-says.cn/images/11.png',
					'http://test2.lawyer-says.cn/images/12.png',
					'http://test2.lawyer-says.cn/images/13.png',
					'http://test2.lawyer-says.cn/images/14.png',
					'http://test2.lawyer-says.cn/images/15.png',
					'http://test2.lawyer-says.cn/images/16.png',
					'http://test2.lawyer-says.cn/images/17.png',
					'http://test2.lawyer-says.cn/images/18.png',
					'http://test2.lawyer-says.cn/images/19.png',
					'http://test2.lawyer-says.cn/images/20.png',
					'http://test2.lawyer-says.cn/images/21.png',
					'http://test2.lawyer-says.cn/images/22.png',
				],
				src:''
			}
		},
		mounted(){
			var i = (this.links.length-1)-Math.floor(Math.random()*10);
			this.src = this.links[i];
		}
	}
	
</script>

<style scoped>
	#img{
		text-align: center;
		margin-top: 0.19rem;
	}
	#img img{
		width: 3.2rem;
		height: 2.1rem;
	}
</style>